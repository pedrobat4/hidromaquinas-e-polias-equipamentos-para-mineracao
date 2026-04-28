// src/config/site.ts
// ÚNICO arquivo que você edita para customizar um site por cliente.
// Claude Code: preencha com dados do briefing. NÃO invente dados.

export type Servico = {
  titulo: string;
  descricao: string;
  icone: string; // nome de ícone Lucide (ex: "Scissors", "Wrench")
  imagem?: string;
};

export type Depoimento = {
  nome: string;
  cargo?: string;
  texto: string;
  foto?: string;
  estrelas?: number; // 1-5; omitir = sem estrelas
};

export type Diferencial = {
  titulo: string;
  descricao: string;
  icone: string;
};

export type Stat = {
  valor: string; // ex: "10+" ou "98%"
  label: string; // ex: "Anos de experiência"
};

export type FotoGaleria = {
  src: string;
  alt: string;
  legenda?: string;
};

export type PassoProcesso = {
  titulo: string;
  descricao: string;
  icone: string;
};

export type Pergunta = {
  pergunta: string;
  resposta: string;
};

export type Area = {
  nome: string;
  descricao?: string;
};

export type NavLink = {
  href: string; // ex: "#servicos"
  label: string;
};

export type SecaoConfig = {
  titulo: string;
  subtitulo?: string;
};

export const site = {
  empresa: {
    nome: "Hidromaquinas",
    slogan: "Equipamento para Mineração",
    descricao:
      "Fabricação de equipamentos robustos para mineração, garimpo e dragagem: bombas draga, amalgamadoras, concentradores centrífugos e recuperadores de mercúrio.",
    logo: "/images/logo.webp",
  },
  contato: {
    telefone: "(65) 98411-2105",
    whatsapp: "5565984112105",
    email: "contato@hidromaquinas.com.br",
    endereco: "Avenida da Feb, 900 - Ponte Nova - Várzea Grande/MT - CEP 78115-904",
    horario: "Seg a Sex: 8h às 18h",
    mapaEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.388325918683!2d-56.110707899999994!3d-15.624296399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dae01c57d7ccb%3A0x7cdc2567e8e4e930!2sHidromaquinas%20e%20Polias%20Equipamentos%20para%20Minera%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1777415576521!5m2!1spt-BR!2sbr",
    mostrarFormulario: true,
    formularioCampoTelefone: true,
  },
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
  nav: [
    { href: "#servicos", label: "Equipamentos" },
    { href: "#processo", label: "Aplicações" },
    { href: "#sobre", label: "A Empresa" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ] as NavLink[],
  hero: {
    titulo: "Equipamentos robustos para mineração e garimpo",
    subtitulo:
      "Bombas draga, amalgamadoras e concentradores com fabricação própria para operação pesada.",
    ctaTexto: "Solicitar orçamento",
    imagemBg: "/images/hero.webp",
    badges: [
      "Fabricação própria",
      "Atendimento em todo o Brasil",
    ],
  },
  secoes: {
    servicos: {
      titulo: "Equipamentos que fabricamos",
      subtitulo:
        "Linha completa para garimpo, dragagem e processamento de minério — projetada para operação contínua em ambientes severos.",
    },
    processo: {
      titulo: "Aplicações da bomba draga",
      subtitulo: "Onde nossos equipamentos atuam todos os dias no campo.",
    },
    galeria: {
      titulo: "Linha de produtos",
      subtitulo: "",
    },
    depoimentos: { titulo: "O que dizem sobre nós", subtitulo: "" },
    areas: {
      titulo: "Atendemos todo o Brasil",
      subtitulo: "Sede em Várzea Grande/MT — entregamos para qualquer estado.",
    },
    faq: {
      titulo: "Perguntas Frequentes",
      subtitulo: "Tire suas dúvidas técnicas antes de fechar pedido.",
    },
  } as Record<string, SecaoConfig>,
  stats: [
    { valor: "5+", label: "Linhas de equipamentos" },
    { valor: "100%", label: "Eficiência no recuperador" },
    { valor: "330 m³/h", label: "Vazão máxima da bomba draga" },
    { valor: "MT", label: "Fabricação em Várzea Grande" },
  ] as Stat[],
  servicos: [
    {
      titulo: "Bombas Draga",
      descricao:
        "Construção robusta em ligas especiais. Modelos DRAGA 3, 4, 5, 5.1/2, 6 e 8 — vazão de 34 até 330 m³/h e altura de alcance de 6 a 40 m.",
      icone: "Droplet",
    },
    {
      titulo: "Bombas Alta Pressão MCH",
      descricao:
        "Linha Mestre Chico nas medidas 4x3\", 5x4\" e 6x5\". Vazão de 60 a 300 m³/h com motores diesel ou elétricos para bombeamento crítico.",
      icone: "Wind",
    },
    {
      titulo: "Amalgamadora",
      descricao:
        "Equipamento por batelada para separação de ouro com mercúrio. Tromel de 110×40×40 cm, motor 3 CV / 1750 RPM, 240 kg.",
      icone: "Gem",
    },
    {
      titulo: "Concentrador Centrífugo A-15",
      descricao:
        "Capacidade de 10 a 15 m³/h de material sólido. Motor 5 CV / 1750 RPM, rotação 315 RPM e pressão nominal 7 a 10 PSI.",
      icone: "Target",
    },
    {
      titulo: "Recuperador de Mercúrio",
      descricao:
        "Destilador portátil com eficiência de ~100%. Comporta até 1,5 kg de amálgama, consumo médio de 200 g/h de gás. Acompanha estojo e acessórios.",
      icone: "Flame",
    },
    {
      titulo: "Polias, mancais e peças de reposição",
      descricao:
        "Eixos, gaxetas, rolamentos, tampas, parafusos, anéis de vedação e rotores para recomposição completa dos equipamentos.",
      icone: "Wrench",
    },
  ] as Servico[],
  processo: [
    {
      titulo: "Garimpo de ouro",
      descricao:
        "Bombeamento com alta proporção de areia, pedregulhos e cascalhos abrasivos.",
      icone: "Gem",
    },
    {
      titulo: "Dragagem e desassoreamento",
      descricao:
        "Represas, lagos, canais, açudes e tanques de lodo com fundos impermeabilizados.",
      icone: "Droplet",
    },
    {
      titulo: "Extração de areia",
      descricao:
        "Operação contínua em leitos com sólidos em suspensão de até 70 mm.",
      icone: "Package",
    },
    {
      titulo: "Bombeamento industrial",
      descricao:
        "Massa de papel até 3%, fluidos viscosos, chorume até 30% e esgotos brutos.",
      icone: "Building2",
    },
  ] as PassoProcesso[],
  sobre: {
    titulo: "Hidromaquinas — equipamento pesado para minério",
    texto:
      "Sediada em Várzea Grande/MT, a Hidromaquinas fabrica e fornece equipamentos para mineração, garimpo e dragagem. Nossa linha cobre todo o ciclo do garimpo do ouro: bombeamento, concentração, amalgamação e recuperação do mercúrio. Trabalhamos com construção robusta em ligas especiais, projetada para operações críticas e ambientes abrasivos.",
    imagem: "/images/sobre.webp",
    diferenciais: [
      {
        titulo: "Fabricação própria",
        descricao:
          "Linha de bombas, amalgamadoras e concentradores produzida em fábrica própria em MT.",
        icone: "Hammer",
      },
      {
        titulo: "Ligas especiais",
        descricao:
          "Construção robusta para resistir ao alto poder abrasivo de areia, cascalho e pedregulho.",
        icone: "Shield",
      },
      {
        titulo: "Peças e reposição",
        descricao:
          "Fornecemos polias, mancais, rotores, gaxetas e todo o conjunto para recomposição.",
        icone: "Wrench",
      },
      {
        titulo: "Atendimento direto",
        descricao:
          "Falamos com o operador, dimensionamos a bomba e enviamos para todo o Brasil.",
        icone: "Phone",
      },
    ] as Diferencial[],
  },
  galeria: [
    {
      src: "/images/bomba-industrial.webp",
      alt: "Bomba industrial sobre base metálica",
      legenda: "Bomba industrial — base metálica",
    },
    {
      src: "/images/motobomba.webp",
      alt: "Motobomba diesel amarela e cinza sobre suporte",
      legenda: "Motobomba diesel pronta para operação",
    },
    {
      src: "/images/motor-bomba.webp",
      alt: "Conjunto motor e bomba sobre base metálica",
      legenda: "Conjunto motor + bomba acoplados",
    },
    {
      src: "/images/equipamentos.webp",
      alt: "Equipamentos amarelos em exibição",
      legenda: "Linha de equipamentos em exibição",
    },
    {
      src: "/images/loja-pecas.webp",
      alt: "Prateleiras com peças e acessórios",
      legenda: "Estoque de peças e acessórios",
    },
    {
      src: "/images/sobre.webp",
      alt: "Caminhão transportando equipamentos Hidromaquinas",
      legenda: "Entregamos para todo o Brasil",
    },
  ] as FotoGaleria[],
  depoimentos: [] as Depoimento[],
  areas: [] as Area[],
  faq: [
    {
      pergunta: "As bombas draga são vendidas com motor?",
      resposta:
        "Não. As bombas são fornecidas sem motor, com opção de incluir a base de montagem da bomba e a base de fixação do motor. O acionamento pode ser elétrico, diesel, gasolina ou por cardan em caminhões e tratores.",
    },
    {
      pergunta: "Quais modelos de bomba draga existem?",
      resposta:
        "DRAGA 3, 4, 5, 5.1/2, 6 e 8. Vazão de 34 a 330 m³/h, altura de alcance de 6 a 40 m, e potência de motor de 7,5 a 75 CV (elétrico) ou diesel correspondente.",
    },
    {
      pergunta: "O que a amalgamadora processa por batelada?",
      resposta:
        "Até 60 litros de material sólido, mais 30 litros de água e a quantidade de mercúrio adequada ao minério (em média ½ kg). Funcionamento de 40 minutos por batelada, eliminando 90% do material sólido na bica vibratória.",
    },
    {
      pergunta: "Qual a eficiência do recuperador de mercúrio?",
      resposta:
        "Aproximadamente 100%. O destilador comporta até 1,5 kg de amálgama, consome em média 200 g/h de gás e o ciclo completo leva de 10 a 15 minutos.",
    },
    {
      pergunta: "Vocês também fornecem peças de reposição?",
      resposta:
        "Sim. Polias, mancais, eixos, gaxetas, rolamentos, tampas, parafusos, careta, anéis de vedação e rotores para todos os equipamentos da linha.",
    },
    {
      pergunta: "Vocês entregam fora de Mato Grosso?",
      resposta:
        "Sim. A fábrica fica em Várzea Grande/MT e despachamos os equipamentos para todo o Brasil. Fale com a gente para combinar frete e prazo.",
    },
  ] as Pergunta[],
  cta_final: {
    titulo: "Precisa dimensionar a bomba certa para sua operação?",
    texto:
      "Fale com a Hidromaquinas. Entendemos seu cenário (vazão, altura, abrasividade) e indicamos o equipamento ideal.",
    botao: "Falar com a Hidromaquinas",
  },
  seo: {
    title: "Hidromaquinas | Equipamentos para Mineração e Garimpo",
    description:
      "Fabricação de bombas draga, amalgamadoras, concentradores centrífugos e recuperadores de mercúrio para mineração e garimpo. Várzea Grande/MT — atendemos todo o Brasil.",
    keywords:
      "bomba draga, amalgamadora, concentrador centrífugo, recuperador de mercúrio, equipamento para mineração, garimpo de ouro, hidromaquinas",
  },
};

export type Site = typeof site;
