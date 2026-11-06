/* =========================================================================
   É AQUI que você edita o conteúdo. O site lê este arquivo e monta sozinho.
   Tudo entre [colchetes] ainda precisa ser preenchido por você.
   Quando terminar, mude  demo: true  para  demo: false  (some o aviso do topo).
   ========================================================================= */

const PORTFOLIO = {
  demo: false,

  name: "Heitor Costa Perdigão",
  role: "Analista de Suporte · Londrina",
  intro: "Formado em Análise e Desenvolvimento de Sistemas. Sou responsável pelo desenvolvimento do sistema interno de chamados e pendências da Pro System.",
  email: "heitorperdigao2311@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/heitorperdigao" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/heitorperdigao/" },
    // { label: "Currículo em PDF", url: "Curriculum_Heitor.pdf" }
  ],

  about: [
    "Sou formado em Análise e Desenvolvimento de Sistemas pela Anhanguera e busco desenvolver habilidades e conhecimentos na área de tecnologia, contribuindo com meu conhecimento e dedicação. Em breve vou iniciar uma pós-graduação em Engenharia de IA Aplicada.",
    "O que mais me atrai na tecnologia é a oportunidade de resolver problemas da maneira mais didática possível. O que mais gosto de construir são coisas que eliminam problemas e automatizam processos, ganhando velocidade no trabalho."
  ],

  // Projetos: cada um abre para mostrar como foi feito.
  projects: [
    {
      title: "Sistema interno de chamados e pendências",
      year: "2026",
      summary: "Sistema da Pro System para abrir e acompanhar chamados e pendências, tudo em um só lugar.",
      stack: "PHP e PostgreSQL",
      problem: "A empresa não tinha nenhum controle de pendências. Tudo ficava para trás e era difícil saber o que estava acontecendo.",
      steps: [
        "Percebi que o principal problema era a falta de um lugar único para registrar as pendências.",
        "Desenvolvi o sistema em PHP, com os dados guardados em um banco PostgreSQL.",
        "Passamos a criar um chamado para cada demanda e a acompanhar o andamento de todos.",
        "Com tudo registrado, ficou possível investigar e eliminar problemas mais complexos."
      ],
      result: "Menos reclamações de clientes, mais agilidade na resolução dos problemas e mais agilidade na entrega dos trabalhos.",
      learned: "A ir atrás da raiz do problema para construir a melhor solução. Isso facilita resolver problemas menores depois e abre um leque de oportunidades de desenvolvimento.",
      links: []
    }
  ],

  experience: [
    {
      role: "Analista de Suporte",
      place: "Pro System ERP · Londrina",
      period: "mai 2026 – atual",
      text: "Responsável pelo desenvolvimento do sistema interno de chamados e pendências da empresa, feito em PHP e PostgreSQL."
    },
    {
      role: "Técnico em Suporte",
      place: "Pro System ERP · Londrina",
      period: "out 2024 – mai 2026",
      text: "Atendimento e suporte a clientes, implantação de sistema e uso de banco de dados (PostgreSQL)."
    },
    {
      role: "Auxiliar Industrial",
      place: "J Macedo · Londrina",
      period: "mar 2024 – out 2024",
      text: "Manutenção de planilhas, organização de documentos e do ambiente, uso do sistema SAP ECC e envio de relatórios."
    }
  ],

  education: [
    { title: "Pós-graduação em Engenharia de IA Aplicada (a iniciar)", place: "UNIPDS", period: "em breve" },
    { title: "Análise e Desenvolvimento de Sistemas (concluído)", place: "Anhanguera / Unopar", period: "2026" },
    { title: "Curso de Java (em andamento)", place: "Java10x", period: "2026" },
    { title: "Curso de JavaScript, 40 horas (concluído)", place: "Curso em Vídeo", period: "2025" },
    { title: "Informática Completo: do Básico ao Avançado", place: "Udemy", period: "2024" },
    { title: "Algoritmos e Lógica de Programação", place: "Udemy", period: "2024" },
    { title: "Ensino médio completo", place: "Colégio Innovativo", period: "2023" }
  ],

  skills: [
    { group: "Sistemas e dados", items: "PostgreSQL, SAP ECC, planilhas" },
    { group: "Programação", items: "PHP, JavaScript, lógica de programação, Java (em estudo)" },
    { group: "Idiomas", items: "Português, Inglês (intermediário), Espanhol (intermediário)" }
  ]
};
