
const areas = [
  {
    nome: 'Finanças',
    perguntas: [
      {
        texto: 'Você sabe qual o lucro real do seu negócio?',
        opcoes: [
          'Não faço ideia',
          'Tenho uma noção por estimativa',
          'Sim, com relatórios precisos'
        ]
      },
      {
        texto: 'Como você controla o fluxo de caixa?',
        opcoes: [
          'Não controlo ou vejo só no banco',
          'Faço em planilhas manuais',
          'Uso sistemas de gestão'
        ]
      },
      {
        texto: 'As finanças pessoais e da empresa estão separadas?',
        opcoes: [
          'Misturo tudo',
          'Tento separar, mas ainda junto',
          'São totalmente separadas'
        ]
      },
      {
        texto: 'Você tem inadimplência ou dificuldades para receber?',
        opcoes: [
          'Sim, com frequência',
          'Às vezes',
          'Raramente ou nunca'
        ]
      },
      {
        texto: 'Como está sua organização fiscal e contábil?',
        opcoes: [
          'Totalmente desorganizada ou informal',
          'Tenho um contador, mas sem controle interno',
          'Organizada, com relatórios e previsões'
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

function proximaEtapa(event) {
  event.preventDefault();
  const total = calcularPontuacao();
  localStorage.setItem('pontuacao_Financas', total);
  window.location.href = 'resultado.html';
}

document.getElementById('quizForm').addEventListener('submit', proximaEtapa);
createQuiz();
