/**
 * Simulado Acadêmico COM170 - Motor da Aplicação (app.js)
 * Implementação: Lógica Fisher-Yates, Sorteio Balanceado, Controle de Estado e Métricas
 */

// Estado da Aplicação
const appState = {
  modo: 'immediate', // 'immediate' | 'exam'
  filtroQuinzena: 'all',
  questoesSimulado: [],
  indiceAtual: 0,
  respostasUsuario: {}, // { [indice]: { opcaoIndexOriginal, correta } }
  emRevisaoFinal: false
};

// Elementos da UI
const dom = {
  // Telas
  configScreen: document.getElementById('configScreen'),
  quizScreen: document.getElementById('quizScreen'),
  resultScreen: document.getElementById('resultScreen'),

  // Configuração
  modeCards: document.querySelectorAll('.mode-card'),
  filterQuinzena: document.getElementById('filterQuinzena'),
  startSimuladoBtn: document.getElementById('startSimuladoBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),

  // Barra de Status
  currentQuestionIndicator: document.getElementById('currentQuestionIndicator'),
  currentQuinzenaIndicator: document.getElementById('currentQuinzenaIndicator'),
  currentDifficultyIndicator: document.getElementById('currentDifficultyIndicator'),
  liveScore: document.getElementById('liveScore'),
  progressBar: document.getElementById('progressBar'),

  // Card da Questão
  questionTopic: document.getElementById('questionTopic'),
  questionId: document.getElementById('questionId'),
  questionPrompt: document.getElementById('questionPrompt'),
  optionsList: document.getElementById('optionsList'),

  // Feedback Pedagógico
  feedbackContainer: document.getElementById('feedbackContainer'),
  feedbackIcon: document.getElementById('feedbackIcon'),
  feedbackTitle: document.getElementById('feedbackTitle'),
  feedbackText: document.getElementById('feedbackText'),
  feedbackReference: document.getElementById('feedbackReference'),

  // Controles
  prevBtn: document.getElementById('prevBtn'),
  confirmAnswerBtn: document.getElementById('confirmAnswerBtn'),
  nextBtn: document.getElementById('nextBtn'),
  finishBtn: document.getElementById('finishBtn'),
  questionGridNav: document.getElementById('questionGridNav'),

  // Resultados
  finalScorePercent: document.getElementById('finalScorePercent'),
  performanceGreeting: document.getElementById('performanceGreeting'),
  performanceMessage: document.getElementById('performanceMessage'),
  performanceBadge: document.getElementById('performanceBadge'),
  finalCorrectCount: document.getElementById('finalCorrectCount'),
  finalTotalCount: document.getElementById('finalTotalCount'),
  quinzenasBreakdown: document.getElementById('quinzenasBreakdown'),
  meterFacil: document.getElementById('meterFacil'),
  meterMedio: document.getElementById('meterMedio'),
  meterDificil: document.getElementById('meterDificil'),
  labelFacil: document.getElementById('labelFacil'),
  labelMedio: document.getElementById('labelMedio'),
  labelDificil: document.getElementById('labelDificil'),
  reviewQuestionsBtn: document.getElementById('reviewQuestionsBtn'),
  restartBtn: document.getElementById('restartBtn')
};

// Algoritmo de Embaralhamento Fisher-Yates
function fisherYatesShuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Inicialização e Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
});

function initTheme() {
  const savedTheme = localStorage.getItem('com170_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);
}

function updateThemeButton(theme) {
  if (theme === 'dark') {
    dom.themeToggleBtn.querySelector('.theme-icon').textContent = '☀️';
    dom.themeToggleBtn.querySelector('.theme-label').textContent = 'Tema Claro';
  } else {
    dom.themeToggleBtn.querySelector('.theme-icon').textContent = '🌙';
    dom.themeToggleBtn.querySelector('.theme-label').textContent = 'Tema Escuro';
  }
}

function setupEventListeners() {
  // Alternância de Tema
  dom.themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('com170_theme', newTheme);
    updateThemeButton(newTheme);
  });

  // Seleção de Modo
  dom.modeCards.forEach(card => {
    card.addEventListener('click', () => {
      dom.modeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      radio.checked = true;
      appState.modo = radio.value;
    });
  });

  // Iniciar Simulado
  dom.startSimuladoBtn.addEventListener('click', () => {
    appState.filtroQuinzena = dom.filterQuinzena.value;
    iniciarSimulado();
  });

  // Controles de Navegação
  dom.prevBtn.addEventListener('click', navegarAnterior);
  dom.nextBtn.addEventListener('click', navegarProximo);
  dom.finishBtn.addEventListener('click', finalizarSimulado);
  dom.confirmAnswerBtn.addEventListener('click', confirmarRespostaModoExam);

  // Ações de Finalização
  dom.reviewQuestionsBtn.addEventListener('click', iniciarRevisaoGabarito);
  dom.restartBtn.addEventListener('click', reiniciarSimulado);
}

// Geração e Sorteio Balanceado
function iniciarSimulado() {
  appState.respostasUsuario = {};
  appState.indiceAtual = 0;
  appState.emRevisaoFinal = false;

  let poolQuestoes = typeof BANCO_QUESTOES !== 'undefined' ? [...BANCO_QUESTOES] : [];

  if (poolQuestoes.length === 0) {
    alert('Erro: Banco de questões não carregado ou vazio.');
    return;
  }

  let selecionadas = [];

  if (appState.filtroQuinzena === 'all') {
    // 21 questões: 1 fácil, 1 média e 1 difícil de cada quinzena (1 a 7)
    for (let q = 1; q <= 7; q++) {
      const qPool = poolQuestoes.filter(item => item.quinzena === q);
      const faceis = qPool.filter(item => item.nivel === 'facil');
      const medias = qPool.filter(item => item.nivel === 'medio');
      const dificeis = qPool.filter(item => item.nivel === 'dificil');

      if (faceis.length > 0) selecionadas.push(fisherYatesShuffle(faceis)[0]);
      if (medias.length > 0) selecionadas.push(fisherYatesShuffle(medias)[0]);
      if (dificeis.length > 0) selecionadas.push(fisherYatesShuffle(dificeis)[0]);
    }
    // Embaralha a ordem geral das 21 questões sorteadas
    selecionadas = fisherYatesShuffle(selecionadas);
  } else {
    // Apenas a quinzena selecionada (todas as 15 da quinzena ou embaralhadas)
    const qNum = parseInt(appState.filtroQuinzena, 10);
    const qPool = poolQuestoes.filter(item => item.quinzena === qNum);
    selecionadas = fisherYatesShuffle(qPool);
  }

  // Prepara as questões embaralhando as 5 alternativas de cada uma
  appState.questoesSimulado = selecionadas.map(q => {
    return {
      ...q,
      alternativasEmbaralhadas: fisherYatesShuffle(q.alternativas)
    };
  });

  trocarTela('quiz');
  renderizarGradeNavegacao();
  exibirQuestaoAtual();
}

// Troca de Telas
function trocarTela(tela) {
  dom.configScreen.classList.remove('active');
  dom.quizScreen.classList.remove('active');
  dom.resultScreen.classList.remove('active');

  if (tela === 'config') dom.configScreen.classList.add('active');
  if (tela === 'quiz') dom.quizScreen.classList.add('active');
  if (tela === 'result') dom.resultScreen.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Renderização da Questão
function exibirQuestaoAtual() {
  const questao = appState.questoesSimulado[appState.indiceAtual];
  const total = appState.questoesSimulado.length;
  const respostaRegistrada = appState.respostasUsuario[appState.indiceAtual];

  // Atualiza indicadores de progresso
  dom.currentQuestionIndicator.textContent = `Questão ${appState.indiceAtual + 1} de ${total}`;
  dom.currentQuinzenaIndicator.textContent = `Quinzena ${questao.quinzena}`;
  
  dom.currentDifficultyIndicator.textContent = questao.nivel;
  dom.currentDifficultyIndicator.className = `diff-pill ${questao.nivel}`;

  const percentual = ((appState.indiceAtual + 1) / total) * 100;
  dom.progressBar.style.width = `${percentual}%`;

  atualizarPlacarAoVivo();

  // Dados da questão
  dom.questionTopic.textContent = questao.topico;
  dom.questionId.textContent = questao.id;
  dom.questionPrompt.textContent = questao.enunciado;

  // Renderiza Alternativas
  dom.optionsList.innerHTML = '';
  const letras = ['A', 'B', 'C', 'D', 'E'];

  questao.alternativasEmbaralhadas.forEach((alt, index) => {
    const optBtn = document.createElement('div');
    optBtn.className = 'option-item';
    optBtn.setAttribute('data-index', index);

    // Se já foi respondida
    if (respostaRegistrada) {
      if (appState.modo === 'immediate' || appState.emRevisaoFinal) {
        optBtn.classList.add('locked');
      }
      if (index === respostaRegistrada.opcaoIndex) {
        optBtn.classList.add('selected');
        if (appState.modo === 'immediate' || appState.emRevisaoFinal) {
          optBtn.classList.add(alt.correta ? 'correct' : 'incorrect');
        }
      }
      // Se estamos exibindo gabarito, destaca a correta
      if ((appState.modo === 'immediate' || appState.emRevisaoFinal) && alt.correta) {
        optBtn.classList.add('correct');
      }
    }

    optBtn.innerHTML = `
      <span class="option-letter">${letras[index]}</span>
      <span class="option-text">${alt.texto}</span>
    `;

    // No modo imediato ou em revisão, bloqueia clique se já respondida; no modo exame, permite alterar
    const podeClicar = !appState.emRevisaoFinal && (appState.modo === 'exam' || !respostaRegistrada);
    if (podeClicar) {
      optBtn.addEventListener('click', () => selecionarAlternativa(index));
    }

    dom.optionsList.appendChild(optBtn);
  });

  // Trata exibição do Feedback Pedagógico
  if (respostaRegistrada && (appState.modo === 'immediate' || appState.emRevisaoFinal)) {
    exibirFeedbackPedagogico(questao, respostaRegistrada);
  } else {
    dom.feedbackContainer.classList.add('hidden');
  }

  // Atualiza botões de navegação
  dom.prevBtn.disabled = appState.indiceAtual === 0;

  if (appState.indiceAtual === total - 1) {
    dom.nextBtn.classList.add('hidden');
    dom.finishBtn.classList.remove('hidden');
  } else {
    dom.nextBtn.classList.remove('hidden');
    dom.finishBtn.classList.add('hidden');
  }

  // No modo imediato, o botão Próximo só ativa se a questão já foi respondida
  if (appState.modo === 'immediate' && !respostaRegistrada && !appState.emRevisaoFinal) {
    dom.nextBtn.disabled = true;
    dom.finishBtn.disabled = true;
  } else {
    dom.nextBtn.disabled = false;
    dom.finishBtn.disabled = false;
  }

  atualizarGradeNavegacao();
}

function selecionarAlternativa(opcaoIndex) {
  const questao = appState.questoesSimulado[appState.indiceAtual];
  const alternativa = questao.alternativasEmbaralhadas[opcaoIndex];

  appState.respostasUsuario[appState.indiceAtual] = {
    opcaoIndex: opcaoIndex,
    correta: alternativa.correta,
    explicacao: alternativa.explicacao
  };

  exibirQuestaoAtual();
}

function exibirFeedbackPedagogico(questao, resposta) {
  const altSelecionada = questao.alternativasEmbaralhadas[resposta.opcaoIndex];
  const altCorreta = questao.alternativasEmbaralhadas.find(a => a.correta);

  dom.feedbackContainer.classList.remove('hidden');

  if (resposta.correta) {
    dom.feedbackContainer.className = 'feedback-box card correct';
    dom.feedbackIcon.textContent = '✓';
    dom.feedbackTitle.textContent = 'Resposta Correta!';
    dom.feedbackText.innerHTML = `<strong>Justificativa:</strong> ${altSelecionada.explicacao}`;
  } else {
    dom.feedbackContainer.className = 'feedback-box card incorrect';
    dom.feedbackIcon.textContent = '✗';
    dom.feedbackTitle.textContent = 'Resposta Incorreta!';
    dom.feedbackText.innerHTML = `
      <p><strong>Por que sua escolha está incorreta:</strong> ${altSelecionada.explicacao}</p>
      <p style="margin-top: 8px;"><strong>Alternativa Correta:</strong> ${altCorreta.texto}</p>
      <p style="margin-top: 4px;"><strong>Justificativa da Correta:</strong> ${altCorreta.explicacao}</p>
    `;
  }

  dom.feedbackReference.textContent = `${questao.referencia.arquivo} (${questao.referencia.localizacao}): "${questao.referencia.citacao}"`;
}

function atualizarPlacarAoVivo() {
  const respondidas = Object.keys(appState.respostasUsuario).length;
  if (appState.modo === 'exam' && !appState.emRevisaoFinal) {
    dom.liveScore.textContent = `${respondidas} respondida(s)`;
    return;
  }

  let acertos = 0;
  for (let idx in appState.respostasUsuario) {
    if (appState.respostasUsuario[idx].correta) acertos++;
  }

  const taxa = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;
  dom.liveScore.textContent = `${acertos} / ${respondidas} (${taxa}%)`;
}

function renderizarGradeNavegacao() {
  dom.questionGridNav.innerHTML = '';
  appState.questoesSimulado.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.textContent = idx + 1;
    btn.setAttribute('aria-label', `Ir para questão ${idx + 1}`);
    btn.addEventListener('click', () => {
      appState.indiceAtual = idx;
      exibirQuestaoAtual();
    });
    dom.questionGridNav.appendChild(btn);
  });
}

function atualizarGradeNavegacao() {
  const botoes = dom.questionGridNav.querySelectorAll('.nav-btn');
  botoes.forEach((btn, idx) => {
    btn.className = 'nav-btn';
    if (idx === appState.indiceAtual) {
      btn.classList.add('active');
    }

    const resposta = appState.respostasUsuario[idx];
    if (resposta) {
      if (appState.modo === 'immediate' || appState.emRevisaoFinal) {
        btn.classList.add(resposta.correta ? 'answered-correct' : 'answered-incorrect');
      } else {
        btn.classList.add('answered-pending');
      }
    }
  });
}

function navegarAnterior() {
  if (appState.indiceAtual > 0) {
    appState.indiceAtual--;
    exibirQuestaoAtual();
  }
}

function navegarProximo() {
  if (appState.indiceAtual < appState.questoesSimulado.length - 1) {
    appState.indiceAtual++;
    exibirQuestaoAtual();
  }
}

function confirmarRespostaModoExam() {
  // Reserva para submissão explícita caso aplicável
}

// Finalização e Diagnóstico
function finalizarSimulado() {
  const total = appState.questoesSimulado.length;
  const respondidas = Object.keys(appState.respostasUsuario).length;

  if (respondidas < total) {
    const pendentes = total - respondidas;
    const confirm = window.confirm(`Atenção: Você ainda possui ${pendentes} questão(ões) sem resposta. Deseja finalizar mesmo assim?`);
    if (!confirm) return;
  }

  calcularResultados();
  trocarTela('result');
}

function calcularResultados() {
  const total = appState.questoesSimulado.length;
  let totalAcertos = 0;

  // Estruturas por quinzena e nível
  const statsQuinzena = { 1: { t: 0, a: 0 }, 2: { t: 0, a: 0 }, 3: { t: 0, a: 0 }, 4: { t: 0, a: 0 }, 5: { t: 0, a: 0 }, 6: { t: 0, a: 0 }, 7: { t: 0, a: 0 } };
  const statsNivel = { facil: { t: 0, a: 0 }, medio: { t: 0, a: 0 }, dificil: { t: 0, a: 0 } };

  appState.questoesSimulado.forEach((q, idx) => {
    const qNum = q.quinzena;
    const nivel = q.nivel;
    const resp = appState.respostasUsuario[idx];
    const acertou = resp && resp.correta;

    if (statsQuinzena[qNum]) {
      statsQuinzena[qNum].t++;
      if (acertou) statsQuinzena[qNum].a++;
    }

    if (statsNivel[nivel]) {
      statsNivel[nivel].t++;
      if (acertou) statsNivel[nivel].a++;
    }

    if (acertou) totalAcertos++;
  });

  const percentualGeral = Math.round((totalAcertos / total) * 100);

  // Exibição Banner
  dom.finalScorePercent.textContent = `${percentualGeral}%`;
  dom.finalCorrectCount.textContent = totalAcertos;
  dom.finalTotalCount.textContent = total;

  if (percentualGeral >= 85) {
    dom.performanceGreeting.textContent = 'Excelente Domínio Conceitual!';
    dom.performanceBadge.textContent = 'Aprovado com Excelência';
    dom.performanceBadge.className = 'grade-badge excelente';
  } else if (percentualGeral >= 70) {
    dom.performanceGreeting.textContent = 'Bom Desempenho!';
    dom.performanceBadge.textContent = 'Aprovado (Padrão Vunesp)';
    dom.performanceBadge.className = 'grade-badge bom';
  } else if (percentualGeral >= 50) {
    dom.performanceGreeting.textContent = 'Desempenho Regular';
    dom.performanceBadge.textContent = 'Atenção aos Detalhes';
    dom.performanceBadge.className = 'grade-badge regular';
  } else {
    dom.performanceGreeting.textContent = 'Revisão Recomendada';
    dom.performanceBadge.textContent = 'Necessita Reforço';
    dom.performanceBadge.className = 'grade-badge revisao';
  }

  // Renderiza Desempenho por Quinzena
  dom.quinzenasBreakdown.innerHTML = '';
  const titulosQuinzenas = {
    1: 'Q1: O que é e o que não é IA',
    2: 'Q2: Como os LLMs Funcionam e Erram',
    3: 'Q3: Decidir Quando e Quanto Usar IA',
    4: 'Q4: Engenharia de Prompts e Iteração',
    5: 'Q5: IA no Trabalho Acadêmico e Fontes',
    6: 'Q6: Ética e Bússola Decisória',
    7: 'Q7: Autoria Intelectual e Transparência'
  };

  for (let q = 1; q <= 7; q++) {
    const data = statsQuinzena[q];
    if (data.t > 0) {
      const qTaxa = Math.round((data.a / data.t) * 100);
      const card = document.createElement('div');
      card.className = 'quinzena-metric-card';

      let corBarra = 'var(--diff-facil)';
      if (qTaxa < 50) corBarra = 'var(--diff-dificil)';
      else if (qTaxa < 75) corBarra = 'var(--diff-medio)';

      card.innerHTML = `
        <div class="quinzena-metric-header">
          <span>${titulosQuinzenas[q]}</span>
          <span>${data.a}/${data.t} (${qTaxa}%)</span>
        </div>
        <div class="metric-bar-bg">
          <div class="metric-bar-fill" style="width: ${qTaxa}%; background-color: ${corBarra};"></div>
        </div>
      `;
      dom.quinzenasBreakdown.appendChild(card);
    }
  }

  // Métricas por Dificuldade
  function atualizarMedidorNivel(nivel, elBar, elLabel) {
    const d = statsNivel[nivel];
    const pct = d.t > 0 ? Math.round((d.a / d.t) * 100) : 0;
    elBar.style.width = `${pct}%`;
    elLabel.textContent = `${pct}%`;
  }

  atualizarMedidorNivel('facil', dom.meterFacil, dom.labelFacil);
  atualizarMedidorNivel('medio', dom.meterMedio, dom.labelMedio);
  atualizarMedidorNivel('dificil', dom.meterDificil, dom.labelDificil);
}

function iniciarRevisaoGabarito() {
  appState.emRevisaoFinal = true;
  appState.indiceAtual = 0;
  trocarTela('quiz');
  exibirQuestaoAtual();
}

function reiniciarSimulado() {
  trocarTela('config');
}

