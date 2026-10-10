"""Utilitário genérico para geração e compilação de relatórios e portfólios institucionais da UNIVESP em HTML e PDF.

Este módulo localiza automaticamente o Google Chrome instalado no sistema operacional,
renderiza documentos acadêmicos respeitando o design system visual da UNIVESP e compila
páginas A4 em alta definição com suporte à autodeclaração dinâmica de ferramentas de IA.
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from pathlib import Path
from typing import Any


def encontrar_executavel_chrome() -> str:
    """Localiza o executável do Google Chrome no ambiente Windows ou no PATH do sistema.

    Retorna o caminho absoluto do executável ou levanta uma exceção caso não seja encontrado.
    """
    candidatos_windows = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"),
        os.path.expandvars(r"%PROGRAMFILES%\Google\Chrome\Application\chrome.exe"),
        os.path.expandvars(r"%PROGRAMFILES(X86)%\Google\Chrome\Application\chrome.exe"),
    ]

    for caminho in candidatos_windows:
        if os.path.isfile(caminho):
            return caminho

    # Tenta localizar no PATH caso esteja disponível globalmente
    import shutil

    caminho_no_path = shutil.which("chrome") or shutil.which("google-chrome")
    if caminho_no_path:
        return caminho_no_path

    raise FileNotFoundError(
        "Executável do Google Chrome não encontrado nos caminhos padrões do sistema. "
        "Verifique se o navegador está instalado em C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    )


def compilar_html_para_pdf(caminho_html: Path, caminho_pdf: Path) -> bool:
    """Executa o Google Chrome em modo headless para imprimir o documento HTML como PDF A4 milimétrico."""
    executavel_chrome = encontrar_executavel_chrome()
    uri_arquivo_html = caminho_html.resolve().as_uri()

    comando_compilacao = [
        executavel_chrome,
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        f"--print-to-pdf={caminho_pdf.resolve()}",
        uri_arquivo_html,
    ]

    print(f"Compilando documento via Headless Chrome...")
    print(f"Origem : {caminho_html}")
    print(f"Destino: {caminho_pdf}")

    resultado = subprocess.run(
        comando_compilacao, capture_output=True, text=True, check=False
    )

    if resultado.returncode != 0:
        print(
            f"Erro na execução do Chrome (código {resultado.returncode}): {resultado.stderr}",
            file=sys.stderr,
        )
        return False

    if not caminho_pdf.exists():
        print(
            "Erro: O arquivo PDF de saída não foi gerado pelo processo.",
            file=sys.stderr,
        )
        return False

    tamanho_bytes = caminho_pdf.stat().st_size
    tamanho_kilobytes = tamanho_bytes / 1024
    print(
        f"PDF compilado com sucesso! Tamanho final: {tamanho_bytes} bytes ({tamanho_kilobytes:.1f} KB)"
    )
    return True


def extrair_metadados_markdown(conteudo_markdown: str) -> dict[str, str]:
    """Extrai informações cadastrais do cabeçalho de um documento Markdown institucional."""
    metadados: dict[str, str] = {
        "curso": "Engenharia de Computação · Eixo de Computação",
        "disciplina": "COM170 · Inteligência Artificial na Prática Acadêmica e Profissional",
        "quinzena": "Quinzena 06",
        "modulo": "06",
        "titulo": "Portfólio Individual",
        "subtitulo": "Deliberação Ética e Decisão sobre Sistemas que Decidem sobre Pessoas",
        "caso": "O Caso em Três Cartas (A Prova em Casa e o ProvaSegura na Faculdade Horizonte)",
        "ia_ferramenta": "Gemini WebChat (Google)",
        "ia_modelo": "Gemini 3.8 Flash",
        "ia_esforco": "Máximo / Muito detalhado",
        "data_execucao": "10 de Outubro de 2026",
    }

    # Busca expressa por curso e eixo
    correspondencia_curso = re.search(
        r"-\s*\*\*Curso\s*/\s*Eixo:\*\*\s*(.+)",
        conteudo_markdown,
        re.IGNORECASE,
    )
    if correspondencia_curso:
        metadados["curso"] = correspondencia_curso.group(1).strip()

    # Busca por ferramenta de IA
    correspondencia_ferramenta = re.search(
        r"-\s*\*\*Ferramenta.*?Utilizada:\*\*\s*(.+)",
        conteudo_markdown,
        re.IGNORECASE,
    )
    if correspondencia_ferramenta:
        metadados["ia_ferramenta"] = correspondencia_ferramenta.group(1).strip()

    # Busca por modelo específico
    correspondencia_modelo = re.search(
        r"-\s*\*\*Modelo.*?Declarado:\*\*\s*(.+)",
        conteudo_markdown,
        re.IGNORECASE,
    )
    if correspondencia_modelo:
        metadados["ia_modelo"] = correspondencia_modelo.group(1).strip()

    # Busca por data
    correspondencia_data = re.search(
        r"-\s*\*\*Data.*?:\*\*\s*(.+)", conteudo_markdown, re.IGNORECASE
    )
    if correspondencia_data:
        metadados["data_execucao"] = correspondencia_data.group(1).strip()

    # Busca por número de Quinzena e Módulo no texto
    correspondencia_quinzena = re.search(
        r"Quinzena\s*0?(\d+)", conteudo_markdown, re.IGNORECASE
    )
    if correspondencia_quinzena:
        numero_quinzena = int(correspondencia_quinzena.group(1))
        metadados["quinzena"] = f"Quinzena {numero_quinzena:02d}"

    correspondencia_modulo = re.search(
        r"Módulo\s*0?(\d+)", conteudo_markdown, re.IGNORECASE
    )
    if correspondencia_modulo:
        numero_modulo = int(correspondencia_modulo.group(1))
        metadados["modulo"] = f"{numero_modulo:02d}"

    return metadados


def gerar_css_design_system_univesp() -> str:
    """Retorna a folha de estilos CSS oficial parametrizada para documentos acadêmicos da UNIVESP."""
    return """
    /* ================= RESET & CONFIGURAÇÃO A4 ================= */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    @page {
      size: A4 portrait;
      margin: 0;
    }

    body {
      background-color: #525659;
      font-family: 'Inter', Arial, sans-serif;
      color: #1e293b;
      letter-spacing: 0.1px;
      margin: 0;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .page {
      width: 210mm;
      height: 297mm;
      background-color: #ffffff;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-after: always;
      page-break-inside: avoid;
    }

    @media print {
      body {
        background: transparent !important;
        padding: 0 !important;
        gap: 0 !important;
      }
      .page {
        box-shadow: none !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        height: 297mm !important;
      }
      .no-print-toolbar {
        display: none !important;
      }
    }

    .no-print-toolbar {
      position: fixed;
      top: 15px;
      right: 20px;
      z-index: 1000;
      background: #13324d;
      color: #ffffff;
      padding: 9px 20px;
      border-radius: 30px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 13px;
      font-weight: bold;
      font-family: 'Inter', sans-serif;
    }

    .btn-print {
      background: #f2a900;
      color: #0f172a;
      border: none;
      padding: 7px 16px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 12px;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      transition: transform 0.15s ease, background-color 0.15s ease;
    }

    .btn-print:hover {
      background: #e59d00;
      transform: scale(1.04);
    }

    .header-banner {
      background-color: #13324d;
      color: #ffffff;
      padding: 18px 36px;
    }

    .banner-top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 500;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 6px;
    }

    .banner-content {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .badge-template-sq {
      background-color: #f2a900;
      color: #0f172a;
      width: 58px;
      height: 58px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      flex-shrink: 0;
    }

    .badge-template-sq .badge-label {
      font-family: 'Inter', sans-serif;
      font-size: 7.5px;
      font-weight: 800;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 2px;
    }

    .badge-template-sq .badge-num {
      font-family: 'Inter', sans-serif;
      font-size: 28px;
      font-weight: 800;
      line-height: 1;
    }

    .banner-text .quinzena-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #38bdf8;
      display: block;
      margin-bottom: 2px;
    }

    .banner-text h1 {
      font-family: 'Inter', sans-serif;
      font-size: 19px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.4px;
      line-height: 1.15;
    }

    .banner-text .subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 400;
      color: #cbd5e1;
      margin-top: 2px;
    }

    .inner-header {
      background-color: #13324d;
      color: #ffffff;
      padding: 9px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .inner-header .doc-title {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.3px;
      color: #f8fafc;
    }

    .inner-header .doc-meta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 500;
      color: #94a3b8;
      letter-spacing: 1px;
    }

    .page-body {
      padding: 12px 36px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      flex-grow: 1;
    }

    .box-intro {
      background-color: #f8fafc;
      border-left: 3.5px solid #13324d;
      padding: 7px 11px;
      font-size: 10px;
      line-height: 1.45;
      color: #334155;
      border-radius: 0 4px 4px 0;
    }

    .box-attention {
      background-color: #fef8e8;
      border-left: 3.5px solid #f2a900;
      padding: 7px 11px;
      border-radius: 0 4px 4px 0;
    }

    .box-attention h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #b45309;
      margin-bottom: 2px;
    }

    .box-attention p {
      font-size: 10px;
      line-height: 1.4;
      color: #78350f;
    }

    .card-block {
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      padding: 9px 12px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    }

    .card-block.border-blue { border-top: 3.5px solid #2563eb; }
    .card-block.border-teal { border-top: 3.5px solid #0d9488; }
    .card-block.border-amber { border-top: 3.5px solid #d97706; }
    .card-block.border-purple { border-top: 3.5px solid #7c3aed; }
    .card-block.border-navy { border-top: 3.5px solid #13324d; }
    .card-block.border-emerald { border-top: 3.5px solid #059669; }

    .card-title-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }

    .card-title {
      font-family: 'Inter', sans-serif;
      font-size: 11.5px;
      font-weight: 700;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .card-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      font-weight: 600;
      padding: 2px 5px;
      border-radius: 3px;
      text-transform: uppercase;
    }

    .badge-blue { background: #eff6ff; color: #1d4ed8; }
    .badge-teal { background: #f0fdfa; color: #0f766e; }
    .badge-amber { background: #fffbeb; color: #b45309; }
    .badge-purple { background: #f5f3ff; color: #6d28d9; }
    .badge-emerald { background: #ecfdf5; color: #047857; }

    .text-body {
      font-size: 10px;
      line-height: 1.45;
      color: #334155;
    }

    .quote-block {
      background-color: #f8fafc;
      border-left: 3px solid #cbd5e1;
      padding: 5px 9px;
      font-size: 9.5px;
      line-height: 1.4;
      color: #475569;
      margin-top: 4px;
      border-radius: 0 3px 3px 0;
    }

    .quote-anchor {
      background-color: #f1f5f9;
      border-left: 3px solid #64748b;
      padding: 4px 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      line-height: 1.35;
      color: #334155;
      margin-top: 4px;
      border-radius: 0 3px 3px 0;
    }

    .code-prompt {
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 3.5px solid #0284c7;
      border-radius: 4px;
      padding: 6px 9px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.8px;
      line-height: 1.28;
      color: #0f172a;
      white-space: pre-wrap;
    }

    .code-response {
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 3.5px solid #0d9488;
      border-radius: 4px;
      padding: 8px 10px;
      font-size: 9.5px;
      line-height: 1.42;
      color: #1e293b;
    }

    .ficha-box {
      background-color: #f8fafc;
      border: 1.5px solid #0f172a;
      border-radius: 5px;
      padding: 9px 12px;
    }

    .ficha-header {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      text-align: center;
      color: #0f172a;
      border-bottom: 1.5px solid #0f172a;
      padding-bottom: 5px;
      margin-bottom: 7px;
      letter-spacing: 1px;
    }

    .ficha-grid {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 9px;
      line-height: 1.35;
    }

    .ficha-item {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .ficha-item-title {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      color: #0f172a;
    }

    .ficha-item-desc {
      color: #334155;
    }

    .declaracao-box {
      background: linear-gradient(135deg, #091224 0%, #0f172a 100%);
      border: 1px solid #1e293b;
      border-left: 3.5px solid #38bdf8;
      border-radius: 5px;
      padding: 9px 12px;
      color: #f8fafc;
    }

    .declaracao-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #38bdf8;
      margin-bottom: 4px;
    }

    .declaracao-text {
      font-size: 9px;
      line-height: 1.4;
      color: #cbd5e1;
    }

    .footer-bar {
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      padding: 7px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #64748b;
    }

    .footer-bar .footer-univesp {
      font-weight: 600;
      color: #13324d;
      letter-spacing: 0.5px;
    }
    """


def processar_arquivo(
    caminho_entrada: Path,
    caminho_saida_pdf: Path | None = None,
    caminho_saida_html: Path | None = None,
) -> bool:
    """Processa um arquivo Markdown ou HTML de entrada e compila o PDF correspondente."""
    if not caminho_entrada.exists():
        print(f"Erro: O arquivo de entrada não existe: {caminho_entrada}", file=sys.stderr)
        return False

    extensao = caminho_entrada.suffix.lower()

    if extensao == ".html":
        caminho_html_final = caminho_entrada
        caminho_pdf_final = caminho_saida_pdf or caminho_entrada.with_suffix(".pdf")
        return compilar_html_para_pdf(caminho_html_final, caminho_pdf_final)

    elif extensao == ".md":
        # Se houver um arquivo HTML correspondente já existente ou configurado, usamos o HTML correspondente
        caminho_html_candidato = caminho_saida_html or caminho_entrada.with_name(
            caminho_entrada.stem + "_M6.html"
            if "Portfolio" in caminho_entrada.stem
            else caminho_entrada.stem + ".html"
        )
        caminho_pdf_final = caminho_saida_pdf or caminho_entrada.with_name(
            caminho_entrada.stem + "_M6.pdf"
            if "Portfolio" in caminho_entrada.stem
            else caminho_entrada.stem + ".pdf"
        )

        if caminho_html_candidato.exists():
            print(f"Detectado arquivo HTML base existente: {caminho_html_candidato}")
            return compilar_html_para_pdf(caminho_html_candidato, caminho_pdf_final)
        else:
            print(
                f"Arquivo HTML correspondente não encontrado ({caminho_html_candidato}). "
                "Para renderizações com diagramação fina A4, forneça o HTML correspondente ou compile via template."
            )
            return False
    else:
        print(f"Formato de arquivo não suportado: {extensao}. Use .html ou .md.", file=sys.stderr)
        return False


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Utilitário institucional UNIVESP para geração e compilação de PDFs via Headless Chrome."
    )
    parser.add_argument(
        "entrada",
        type=str,
        help="Caminho do arquivo de entrada (.html ou .md)",
    )
    parser.add_argument(
        "-o",
        "--output-pdf",
        type=str,
        default=None,
        help="Caminho de destino do arquivo .pdf compilado",
    )
    parser.add_argument(
        "--output-html",
        type=str,
        default=None,
        help="Caminho do arquivo .html gerado/utilizado",
    )

    args = parser.parse_args()
    caminho_entrada = Path(args.entrada)
    caminho_pdf = Path(args.output_pdf) if args.output_pdf else None
    caminho_html = Path(args.output_html) if args.output_html else None

    sucesso = processar_arquivo(caminho_entrada, caminho_pdf, caminho_html)
    sys.exit(0 if sucesso else 1)


if __name__ == "__main__":
    main()
