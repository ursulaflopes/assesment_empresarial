
const resultados = {
  Marketing: parseInt(localStorage.getItem('pontuacao_Marketing') || 0),
  Precificacao: parseInt(localStorage.getItem('pontuacao_Precificacao') || 0),
  Vendas: parseInt(localStorage.getItem('pontuacao_Vendas') || 0),
  Financas: parseInt(localStorage.getItem('pontuacao_Financas') || 0),
};

const niveis = [
  { min: 0, max: 3, nivel: 'Crítico' },
  { min: 4, max: 6, nivel: 'Intermediário' },
  { min: 7, max: 9, nivel: 'Avançado' },
  { min: 10, max: 10, nivel: 'Excelente' }
];

const conteudo = {
  Marketing: {
    Crítico: `Pontuação 0 a 3 - Crítico

Análises:
- Falta de identidade clara no mercado, clientes não sabem o que você vende ou para quem vende.
- Nenhuma ou mínima geração de leads qualificados.
- Investimentos em mídia social ou tráfego pago sem retorno mensurável.

Ações:
- Criar posicionamento de marca com especialista.
- Desenvolver funil completo de aquisição: lead magnet, email marketing, remarketing.
- Implantar plano de conteúdo com calendário editorial para 3 meses.
- Implementar campanha de awareness em multicanais (Instagram, Google, WhatsApp).
- Contratar freelancer ou consultor para gestão de tráfego e KPIs.`,

    Intermediário: `Pontuação 4 a 6 - Intermediário

Análises:
- A presença digital existe, mas é inconsistente e sem foco em conversão.
- Leads são gerados mas não qualificados.
- Ausência de mensuração de CAC, ROI ou LTV.

Ações:
- Revisar campanhas com base em dados dos últimos 90 dias.
- Criar árvore de campanhas: reconhecimento > consideração > decisão.
- Utilizar Google Analytics e Pixel Meta com eventos personalizados.
- Automatizar captação de leads e nurturing com ferramentas como RD Station ou ActiveCampaign.`,

    Avançado: `Pontuação 7 a 9 - Avançado

Análises:
- Marketing gera resultados, mas há gargalos na escala ou no tempo de resposta.
- Existe um planejamento, mas falta consistência nas execuções.
- Algumas métricas são acompanhadas, mas não tão frequentemente.

Ações:
- Criar rotinas quinzenais de otimização e testes A/B.
- Investir em growth hacking com objetivo de escalar leads com menor custo.
- Implementar dashboards em tempo real.
- Inserir novos canais como LinkedIn Ads ou parcerias com influenciadores.`,

    Excelente: `Pontuação 10 - Excelente

Análises:
- Todos os KPIs de marketing estão sob controle e com metas claras.
- Marca tem autoridade e comunicação coerente.
- ROI positivo com previsibilidade.

Ações:
- Expandir para novos mercados ou idiomas.
- Criar campanha institucional com visão de branding de longo prazo.
- Investir em ferramentas de BI para simulações e predições.`
  },

  Vendas: {
    Crítico: `Pontuação 0 a 3 - Crítico

Análises:
- Processo de vendas inexistente.
- Conversão esporádica e sem acompanhamento.
- Zero previsibilidade de faturamento.

Ações:
- Criar funil de vendas com etapas claras.
- Desenvolver roteiro de abordagem e contorno de objeções.
- Implementar CRM gratuito (como HubSpot).
- Estabelecer metas semanais por tipo de contato.`,

    Intermediário: `Pontuação 4 a 6 - Intermediário

Análises:
- Há tentativas de prospecção, mas sem organização.
- Falta sequência de follow-up.
- Equipe não treinada ou sem métricas.

Ações:
- Estruturar playbook de vendas com metas por funil.
- Integrar automações de WhatsApp e e-mail.
- Criar ranking de desempenho da equipe.
- Acompanhar KPIs: taxa de conversão, ciclo médio e ticket.`,

    Avançado: `Pontuação 7 a 9 - Avançado

Análises:
- Funil existe, mas não é otimizado.
- Equipe com resultado, mas sem previsão futura.
- Ausência de scripts dinâmicos por perfil de cliente.

Ações:
- Implantar SDRs ou clonar top performers.
- Utilizar método SPIN Selling ou BANT.
- Adotar CRM com automações, integrações e relatórios.`,

    Excelente: `Pontuação 10 - Excelente

Análises:
- Vendas previsíveis e consistentes.
- Equipe treinada, motivada e com cultura comercial.
- Pipeline com oportunidades bem classificadas.

Ações:
- Automatizar propostas, integração com financeiro e contratos.
- Criar base de clientes para upsell e cross-sell.
- Expandir modelo comercial (representantes, franquias, canais).`
  },

  Financas: {
    Crítico: `Pontuação 0 a 3 - Crítico

Análises:
- Controle inexistente de fluxo de caixa e margem de lucro.
- Mistura entre finanças pessoais e empresariais.
- Empresa opera no escuro, sem controle de inadimplência.

Ações:
- Separar contas bancárias da empresa e do sócio.
- Criar rotina semanal de controle de entradas e saídas.
- Implantar planilha de fluxo de caixa com visão mensal e anual.
- Estabelecer metas de lucratividade por produto/serviço.
- Negociar prazos com fornecedores e clientes.`,

    Intermediário: `Pontuação 4 a 6 - Intermediário

Análises:
- Registros em planilhas sem padrão.
- Há noção de lucro, mas sem apuração exata.
- Desorganização fiscal e pouca previsibilidade.

Ações:
- Padronizar planilhas com validações e categorias de despesa.
- Implementar sistema de controle financeiro (como Granatum ou Quickbooks).
- Criar relatórios mensais com DRE simplificado.
- Alinhar com contador uma rotina de fechamento mensal.
- Estabelecer indicadores de saúde financeira: margem líquida, inadimplência, ponto de equilíbrio.`,

    Avançado: `Pontuação 7 a 9 - Avançado

Análises:
- Boa separação e controle, mas falta análise preditiva.
- Existem relatórios, mas não são usados para decisão estratégica.
- Desalinhamento entre metas comerciais e financeiras.

Ações:
- Integrar ferramentas financeiras ao sistema de vendas.
- Projetar cenários futuros com base em sazonalidade e metas.
- Criar um comitê financeiro mensal (mesmo que individual).
- Estabelecer política de reservas e reinvestimento.
- Contratar consultoria contábil com foco em crescimento.`,

    Excelente: `Pontuação 10 - Excelente

Análises:
- Financeiro estruturado e previsível.
- Dados usados como base para todas as decisões.
- Negócio pronto para captação, expansão ou franquia.

Ações:
- Automatizar relatórios gerenciais com dashboards.
- Revisar indicadores a cada trimestre com visão estratégica.
- Investir em diversificação e blindagem fiscal.`
  },

  Precificacao: {
    Crítico: `Pontuação 0 a 3 - Crítico

Análises:
- Preços definidos com base no achismo ou concorrência.
- Não considera custos variáveis nem fixos.
- Operação gira sem lucro real ou com prejuízo disfarçado.

Ações:
- Levantar todos os custos diretos e indiretos do negócio.
- Criar planilha com cálculo automático de margem e markup.
- Aplicar margem mínima viável e ajustar os preços atuais.
- Revisar fornecedores e custos ocultos.
- Implementar política de reajuste semestral.`,

    Intermediário: `Pontuação 4 a 6 - Intermediário

Análises:
- Preço cobre custos, mas não gera escala nem margem ideal.
- Ausência de diferenciação por canal (ex: varejo x atacado).
- Medo de cobrar mais afeta crescimento.

Ações:
- Criar política de preço por tipo de cliente e canal.
- Aplicar simulações de margem por produto e por mix.
- Testar campanhas de valor percebido (ancoragem de preço).
- Estabelecer táticas de preço com base em comportamento (ex: frete grátis, combos, desconto progressivo).`,

    Avançado: `Pontuação 7 a 9 - Avançado

Análises:
- Preço bem definido, mas com margem apertada em alguns produtos.
- Sem elasticidade testada.
- Não explora estratégias de precificação dinâmica.

Ações:
- Automatizar monitoramento da concorrência e ajustar dinamicamente.
- Introduzir ferramentas de precificação como PricingHub ou Precifica.
- Realizar campanhas sazonais com análise de elasticidade.
- Criar esteiras de produto com variações de valor percebido.`,

    Excelente: `Pontuação 10 - Excelente

Análises:
- Preço calculado com base em valor, custo, canal e persona.
- Alta lucratividade e competitividade.
- Estratégia revisada continuamente conforme o mercado.

Ações:
- Lançar produtos premium e de entrada com estrutura escalável.
- Investir em inteligência de precificação com IA.
- Alinhar marketing e vendas ao storytelling do valor percebido.`
  }
};

const div = document.getElementById('analises');
const nome = localStorage.getItem('nomeUsuario') || 'Empreendedor';
document.getElementById('nomeUsuario').innerHTML = `<strong>Olá, ${nome}!</strong> Aqui está seu diagnóstico personalizado:`;

// monta o diagnóstico por área
Object.entries(resultados).forEach(([area, pontuacao]) => {
  const nivel = niveis.find(n => pontuacao >= n.min && pontuacao <= n.max).nivel;
  const bloco = document.createElement('div');
  bloco.className = 'bloco-area';
  bloco.innerHTML = `
    <h2>${area}: ${nivel} (${pontuacao} pts)</h2>
    <pre style="white-space: pre-wrap;">${conteudo[area][nivel]}</pre>
  `;
  div.appendChild(bloco);
});
