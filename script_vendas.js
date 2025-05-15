
const areas = [
  {
    nome: 'Vendas',
    perguntas: [
      {
        texto: 'Você tem um processo claro e estruturado de vendas?',
        opcoes: [
          'Não tenho processo definido',
          'Tenho algo informal, mas sem padrão',
          'Sim, é documentado e monitorado'
        ]
      },
      {
        texto: 'Como está sua taxa de conversão de leads em clientes?',
        opcoes: [
          'Muito baixa ou nem sei medir',
          'Média, mas poderia ser melhor',
          'Alta, com bons resultados'
        ]
      },
      {
        texto: 'Quem faz as vendas na sua empresa?',
        opcoes: [
          'Só eu ou ninguém faz ativamente',
          'Tenho alguém, mas não está treinado',
          'Equipe dedicada e capacitada'
        ]
      },
      {
        texto: 'De onde vêm seus clientes atualmente?',
        opcoes: [
          'Só por indicação ou boca a boca',
          'Um pouco de indicação, um pouco de marketing',
          'Marketing, redes sociais e equipe ativa'
        ]
      },
      {
        texto: 'Você usa CRM ou ferramentas para controlar o funil?',
        opcoes: [
          'Não uso nada',
          'Anoto em planilhas ou papel',
          'Sim, com ferramentas específicas'
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
  localStorage.setItem('pontuacao_Vendas', total);
  window.location.href = 'financas.html';
}

document.getElementById('quizForm').addEventListener('submit', proximaEtapa);
createQuiz();
