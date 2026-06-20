#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Peneira de Encoding — Corrige double-encoding UTF-8 em arquivos Markdown.

Problema:
    Quando um arquivo UTF-8 é lido como Latin-1/CP1252 e re-salvo como UTF-8,
    os caracteres acentuados e emojis ficam corrompidos (mojibake).
    Ex: "ç" vira "Ã§", "✏️" vira "âœï¸", "📊" vira "ðŸ"Š".

Solução (peneira):
    Se o texto decodificado contém chars que, re-encodados como Latin-1 e
    decodificados como UTF-8, produzem resultado válido e mais curto — corrige.
    Uma passada. Sem lista de padrões. Sem regex.

Uso:
    python tools/corrigir_encoding.py                    # apenas analisa (padrão seguro)
    python tools/corrigir_encoding.py --aplicar          # analisa E corrige
    python tools/corrigir_encoding.py --arquivo caminho  # analisa um arquivo específico
    python tools/corrigir_encoding.py --arquivo caminho --aplicar  # corrige um arquivo específico
"""

import argparse
import os
import sys


def peneirar(texto: str) -> tuple[str, int]:
    """
    Aplica a peneira de encoding no texto.

    Tenta reverter double-encoding em blocos contíguos de chars altos (> U+007F).
    Chars que não revertem ficam intactos.

    Retorna:
        (texto_corrigido, quantidade_de_substituicoes)
    """
    resultado = []
    indice = 0
    substituicoes = 0

    while indice < len(texto):
        caractere = texto[indice]

        if ord(caractere) <= 0x7F:
            resultado.append(caractere)
            indice += 1
            continue

        # Coletar bloco contíguo de chars altos
        inicio_bloco = indice
        while indice < len(texto) and ord(texto[indice]) > 0x7F:
            indice += 1
        bloco = texto[inicio_bloco:indice]

        # Tentar reverter o bloco inteiro: encode latin-1 → decode UTF-8
        bloco_corrigido = tentar_reverter(bloco)

        if bloco_corrigido is not None and bloco_corrigido != bloco:
            resultado.append(bloco_corrigido)
            substituicoes += 1
        else:
            # Bloco inteiro não reverte (mix de correto + corrompido).
            # Tentar char a char com janela deslizante.
            posicao = 0
            while posicao < len(bloco):
                converteu = False
                for fim in range(min(posicao + 10, len(bloco)), posicao, -1):
                    trecho = bloco[posicao:fim]
                    revertido = tentar_reverter(trecho)
                    if revertido is not None and len(revertido) < len(trecho):
                        resultado.append(revertido)
                        substituicoes += 1
                        posicao = fim
                        converteu = True
                        break
                if not converteu:
                    resultado.append(bloco[posicao])
                    posicao += 1

    return ''.join(resultado), substituicoes


def tentar_reverter(trecho: str) -> str | None:
    """Tenta encode CP1252 → decode UTF-8. Retorna None se falhar.
    
    Usa CP1252 em vez de Latin-1 porque CP1252 mapeia bytes 0x80-0x9F
    para chars acima de U+00FF (como œ, Ÿ, ", –) que aparecem em emojis
    double-encoded. Latin-1 não cobre esses chars e perde os emojis.
    """
    try:
        bytes_revertidos = _encode_cp1252(trecho)
        return bytes_revertidos.decode('utf-8')
    except (UnicodeEncodeError, UnicodeDecodeError, ValueError):
        return None


# Mapa reverso CP1252: chars especiais (U+0080-0x9F) → byte original
_CP1252_REVERSO = {
    '\u20ac': 0x80, '\u0081': 0x81, '\u201a': 0x82, '\u0192': 0x83,
    '\u201e': 0x84, '\u2026': 0x85, '\u2020': 0x86, '\u2021': 0x87,
    '\u02c6': 0x88, '\u2030': 0x89, '\u0160': 0x8a, '\u2039': 0x8b,
    '\u0152': 0x8c, '\u008d': 0x8d, '\u017d': 0x8e, '\u008f': 0x8f,
    '\u0090': 0x90, '\u2018': 0x91, '\u2019': 0x92, '\u201c': 0x93,
    '\u201d': 0x94, '\u2022': 0x95, '\u2013': 0x96, '\u2014': 0x97,
    '\u02dc': 0x98, '\u2122': 0x99, '\u0161': 0x9a, '\u203a': 0x9b,
    '\u0153': 0x9c, '\u009d': 0x9d, '\u017e': 0x9e, '\u0178': 0x9f,
}


def _encode_cp1252(texto: str) -> bytes:
    """Encode string para bytes usando mapeamento CP1252 completo."""
    resultado = bytearray()
    for caractere in texto:
        code = ord(caractere)
        if code <= 0xFF:
            resultado.append(code)
        elif caractere in _CP1252_REVERSO:
            resultado.append(_CP1252_REVERSO[caractere])
        else:
            raise ValueError(f'Char U+{code:04X} fora do range CP1252')
    return bytes(resultado)


def corrigir_arquivo(caminho: str, dry_run: bool = False) -> tuple[bool, str, int]:
    """
    Corrige encoding de um arquivo Markdown.

    Retorna:
        (alterado, status, substituicoes)
    """
    with open(caminho, 'rb') as arquivo:
        bytes_brutos = arquivo.read()

    tamanho_original = len(bytes_brutos)

    if tamanho_original == 0:
        return False, 'vazio', 0

    # Remover BOM se presente
    if bytes_brutos[:3] == b'\xef\xbb\xbf':
        bytes_brutos = bytes_brutos[3:]

    try:
        texto = bytes_brutos.decode('utf-8')
    except UnicodeDecodeError:
        return False, 'nao-utf8', 0

    texto_corrigido, substituicoes = peneirar(texto)

    if substituicoes == 0:
        return False, 'limpo', 0

    # Segurança: nunca escrever arquivo vazio
    if len(texto_corrigido.strip()) == 0:
        return False, 'resultado-vazio-ABORTADO', 0

    if not dry_run:
        with open(caminho, 'w', encoding='utf-8', newline='\n') as arquivo:
            arquivo.write(texto_corrigido)

    return True, 'corrigido', substituicoes


def varrer_repositorio(diretorio_base: str, dry_run: bool = False) -> None:
    """Varre todos os .md do repositório e aplica a peneira."""
    corrigidos = 0
    limpos = 0
    erros = 0
    total = 0

    for raiz, diretorios, arquivos in os.walk(diretorio_base):
        diretorios[:] = [diretorio for diretorio in diretorios if diretorio != '.git']

        for nome_arquivo in sorted(arquivos):
            if not nome_arquivo.endswith('.md'):
                continue

            caminho_completo = os.path.join(raiz, nome_arquivo)
            total += 1

            try:
                alterado, status, substituicoes = corrigir_arquivo(caminho_completo, dry_run)
                caminho_relativo = os.path.relpath(caminho_completo, diretorio_base)

                if alterado:
                    prefixo = 'CORRIGIDO' if not dry_run else 'PENDENTE'
                    print(f'  {prefixo} ({substituicoes} subs): {caminho_relativo}')
                    corrigidos += 1
                elif status == 'limpo':
                    limpos += 1
                elif status != 'vazio':
                    print(f'  AVISO [{status}]: {caminho_relativo}')
                    erros += 1
            except Exception as excecao:
                caminho_relativo = os.path.relpath(caminho_completo, diretorio_base)
                print(f'  ERRO: {caminho_relativo} → {excecao}')
                erros += 1

    print(f'\n{"=" * 40}')
    print(f'  Total de arquivos .md: {total}')
    print(f'  Corrigidos: {corrigidos}')
    print(f'  Já limpos: {limpos}')
    print(f'  Avisos/Erros: {erros}')
    if dry_run:
        print(f'  (modo leitura — nenhum arquivo foi alterado. Use --aplicar para corrigir)')
    print(f'{"=" * 40}')


def main():
    parser = argparse.ArgumentParser(
        description='Peneira de Encoding — corrige double-encoding UTF-8 em Markdown.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument(
        '--aplicar',
        action='store_true',
        help='Aplica as correções nos arquivos. Sem essa flag, apenas analisa (padrão seguro).'
    )
    parser.add_argument(
        '--arquivo',
        type=str,
        help='Analisa (ou corrige com --aplicar) um arquivo específico em vez de varrer o repositório.'
    )

    argumentos = parser.parse_args()
    somente_leitura = not argumentos.aplicar

    if argumentos.arquivo:
        if not os.path.isfile(argumentos.arquivo):
            print(f'Arquivo não encontrado: {argumentos.arquivo}')
            sys.exit(1)

        alterado, status, substituicoes = corrigir_arquivo(
            argumentos.arquivo, dry_run=somente_leitura
        )
        if alterado:
            prefixo = 'CORRIGIDO' if argumentos.aplicar else 'PENDENTE'
            print(f'{prefixo} ({substituicoes} substituições): {argumentos.arquivo}')
        else:
            print(f'Status: {status} — {argumentos.arquivo}')

        if somente_leitura and alterado:
            print('\n(modo leitura — nenhum arquivo foi alterado. Use --aplicar para corrigir)')
    else:
        diretorio_base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        print(f'Varrendo: {diretorio_base}\n')
        varrer_repositorio(diretorio_base, dry_run=somente_leitura)


if __name__ == '__main__':
    main()
