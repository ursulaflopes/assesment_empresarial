
const areas = [
  {
    nome: 'Precificação',
    perguntas: [
      {
        texto: 'Como você define o preço dos seus produtos/serviços?',
        opcoes: [
          'Copio o preço da concorrência',
          'Baseio nos custos, mas sem precisão',
          'Faço cálculo considerando custos, margem e mercado'
        ]
      },
      {
        texto: 'Você conhece todos os seus custos fixos e variáveis?',
        opcoes: [
          'Não tenho ideia',
          'Conheço parcialmente',
          'Tenho tudo mapeado'
        ]
      },
      {
        texto: 'Seus preços geram o lucro desejado?',
        opcoes: [
          'Não, está abaixo do que preciso',
          'Mais ou menos, depende do mês',
          'Sim, são bem calculados'
        ]
      },
      {
        texto: 'Você tem medo de cobrar mais e perder vendas?',
        opcoes: [
          'Sim, tenho medo de perder clientes',
          'Às vezes penso nisso',
          'Não, confio no valor do que ofereço'
        ]
      },
      {
        texto: 'Sua precificação muda por canal (ex: atacado x varejo)?',
        opcoes: [
          'Não, é o mesmo preço pra tudo',
          'Ajusto de forma intuitiva',
          'Tenho estratégias claras por canal'
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
  localStorage.setItem('pontuacao_Precificacao', total);
  window.location.href = 'vendas.html';
}

document.getElementById('quizForm').addEventListener('submit', proximaEtapa);
createQuiz();
