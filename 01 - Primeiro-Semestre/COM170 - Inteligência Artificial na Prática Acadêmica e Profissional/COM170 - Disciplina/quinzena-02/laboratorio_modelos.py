import time
from transformers import AutoTokenizer, AutoModelForCausalLM, GPT2Tokenizer, GPT2Model

def executar_laboratorio():
    print("==================================================")
    print("1. TESTANDO MODELO DIDÁTICO (GPT-2 Small - ~500MB)")
    print("==================================================")

    # Carrega o tokenizador e o modelo didático
    tok_didatico = GPT2Tokenizer.from_pretrained("gpt2")
    mod_didatico = GPT2Model.from_pretrained("gpt2")

    prompt = "Senior Software Engineering"
    tokens_ids = tok_didatico.encode(prompt, return_tensors="pt")
    embeddings = mod_didatico.wte(tokens_ids)

    print(f"Prompt: '{prompt}'")
    print(f"IDs dos Tokens: {tokens_ids.tolist()[0]}")
    print(f"Formato da Matriz de Embeddings: {list(embeddings.shape)} (3 tokens, 768 dimensões cada)")

    print("\n==================================================")
    print("2. TESTANDO MODELO ULTRACOMPACTADO (Qwen2.5-0.5B-Instruct - CPU)")
    print("==================================================")

    nome_modelo_ultra = "Qwen/Qwen2.5-0.5B-Instruct"
    tok_ultra = AutoTokenizer.from_pretrained(nome_modelo_ultra)
    mod_ultra = AutoModelForCausalLM.from_pretrained(nome_modelo_ultra)

    pergunta = "Explique em uma frase curta o que e um token em IA:"
    inputs = tok_ultra(pergunta, return_tensors="pt")

    inicio = time.time()
    outputs = mod_ultra.generate(**inputs, max_new_tokens=30)
    tempo_total = time.time() - inicio

    resposta = tok_ultra.decode(outputs[0], skip_special_tokens=True)
    print(f"Pergunta: '{pergunta}'")
    print(f"Tempo de execução em CPU: {tempo_total:.2f} segundos")
    print(f"Resposta Gerada:\n{resposta}")
    print("==================================================")

if __name__ == "__main__":
    executar_laboratorio()
