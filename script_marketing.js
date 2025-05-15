
const areas = [
  {
    nome: 'Marketing',
    perguntas: [
      {
        texto: 'Qual o maior desafio hoje na sua estratégia de marketing?',
        opcoes: [
          'Não sei como me posicionar ou o que comunicar',
          'Não consigo gerar resultados com anúncios',
          'Falta de consistência na geração de leads'
        ]
      },
      {
        texto: 'Seu marketing digital tem retorno claro sobre o investimento?',
        opcoes: [
          'Não sei medir ou não tenho dados',
          'Pouco retorno, mesmo investindo',
          'Sim, consigo controlar bem'
        ]
      },
      {
        texto: 'Como você atrai clientes hoje?',
        opcoes: [
          'Não tenho canal definido',
          'Uso redes sociais, mas sem constância',
          'Tenho campanhas rodando com estratégia'
        ]
      },
      {
        texto: 'Você acompanha métricas como CAC, ROI ou engajamento?',
        opcoes: [
          'Não acompanho nada',
          'Acompanho de forma parcial e manual',
          'Sim, com ferramentas e indicadores'
        ]
      },
      {
        texto: 'Sua marca gera autoridade no seu segmento?',
        opcoes: [
          'Não sou lembrado como referência',
          'Algumas pessoas reconhecem, mas é instável',
          'Sim, tenho reconhecimento e seguidores fiéis'
        ]
      }
    ]
  }
];

const questionsDiv = document.getElementById('questions');

function createQuiz() {
  areas.forEach((area, areaIndex) => {
    const areaTitle = document.createElement('h2');
    areaTitle.style.textAlign = 'left';
    areaTitle.textContent = area.nome;
    questionsDiv.appendChild(areaTitle);

    area.perguntas.forEach((pergunta, perguntaIndex) => {
      const questionBlock = document.createElement('div');
      questionBlock.className = 'question-block';
      questionBlock.innerHTML = `<p><strong>${pergunta.texto}</strong></p>`;

      pergunta.opcoes.forEach((opcao, opcaoIndex) => {
        const inputName = `area${areaIndex}_q${perguntaIndex}`;
        questionBlock.innerHTML += `
          <label>
            <input type="radio" name="${inputName}" value="${opcaoIndex}" required>
            ${opcao}
          </label>
        `;
      });

      questionsDiv.appendChild(questionBlock);
    });
  });
}

function proximaEtapa(event) {
  event.preventDefault();
  const total = calcularPontuacao();
  localStorage.setItem('pontuacao_Marketing', total);
  window.location.href = 'precificacao.html';
}

function calcularPontuacao() {
  let total = 0;
  areas.forEach((_, areaIndex) => {
    for (let i = 0; i < areas[areaIndex].perguntas.length; i++) {
      const inputName = `area${areaIndex}_q${i}`;
      const value = document.querySelector(`input[name="${inputName}"]:checked`).value;
      total += parseInt(value);
    }
  });
  return total;
}

document.getElementById('quizForm').addEventListener('submit', proximaEtapa);
createQuiz();
