
const areas = [
  {
    nome: 'Motivação',
    perguntas: [
      'Eu me sinto entusiasmado com novos desafios.',
      'Gosto de estabelecer metas ambiciosas.',
      'Sinto-me motivado a superar obstáculos.',
      'Tenho iniciativa para começar projetos.',
      'Persisto mesmo quando algo parece difícil.'
    ]
  },
  {
    nome: 'Organização',
    perguntas: [
      'Planejo bem minhas atividades.',
      'Mantenho meus compromissos em dia.',
      'Gosto de seguir uma rotina.',
      'Organizo minhas tarefas por prioridade.',
      'Sinto-me confortável com cronogramas.'
    ]
  },
  {
    nome: 'Sociabilidade',
    perguntas: [
      'Gosto de interagir com novas pessoas.',
      'Trabalho bem em equipe.',
      'Me comunico com facilidade.',
      'Tenho facilidade em fazer amizades.',
      'Sinto-me à vontade falando em público.'
    ]
  },
  {
    nome: 'Foco',
    perguntas: [
      'Mantenho a atenção por longos períodos.',
      'Evito distrações durante tarefas.',
      'Consigo me concentrar em um objetivo.',
      'Sigo um plano até o fim.',
      'Tenho disciplina para continuar mesmo sem supervisão.'
    ]
  }
];

const questionsDiv = document.getElementById('questions');
const outputDiv = document.getElementById('output');

function createQuiz() {
  areas.forEach((area, areaIndex) => {
    area.perguntas.forEach((texto, perguntaIndex) => {
      const questionBlock = document.createElement('div');
      questionBlock.className = 'question-block';
      questionBlock.innerHTML = `<p><strong>${area.nome} - Pergunta ${perguntaIndex + 1}</strong></p><p>${texto}</p>`;

      for (let score = 0; score <= 3; score++) {
        const inputName = `area${areaIndex}_q${perguntaIndex}`;
        questionBlock.innerHTML += `
          <label>
            <input type="radio" name="${inputName}" value="${score}" required>
            Opção ${score} (valor ${score})
          </label>
        `;
      }

      questionsDiv.appendChild(questionBlock);
    });
  });
}

function calcularResultado(event) {
  event.preventDefault();

  const totalPorArea = Array(areas.length).fill(0);

  areas.forEach((_, areaIndex) => {
    for (let i = 0; i < 5; i++) {
      const inputName = `area${areaIndex}_q${i}`;
      const value = document.querySelector(`input[name="${inputName}"]:checked`).value;
      totalPorArea[areaIndex] += parseInt(value);
    }
  });

  mostrarResultado(totalPorArea);
}

function mostrarResultado(totais) {
  document.getElementById('result').classList.remove('hidden');
  outputDiv.innerHTML = '';

  const maxPorArea = 5 * 3;

  areas.forEach((area, index) => {
    const percent = Math.round((totais[index] / maxPorArea) * 100);
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${percent}%`;
    bar.textContent = `${area.nome}: ${totais[index]} pontos (${percent}%)`;
    outputDiv.appendChild(bar);
  });

  window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById('quizForm').addEventListener('submit', calcularResultado);
createQuiz();
