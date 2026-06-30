/** Constantes e conteúdo da landing page ORVIA */

/** Prefixo de base (respeita o `base` do astro.config para GitHub Pages). */
const BASE = import.meta.env.BASE_URL; // ex.: "/orvia-sistema-site" ou ".../"
const asset = (path: string) =>
  `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const SITE = {
  title: 'ORVIA — Pedidos de Compra | Sistema desktop para construção civil',
  description:
    'Sistema standalone para pedidos, cotações, ferramentas e locações. Demo portfólio com instalador Windows. Python · PySide6 · SQLite.',
  keywords:
    'pedidos de compra, construção civil, cotação comparativa, sistema desktop, Python, portfólio dev',
  author: 'Marlyson Iury Taveira Borges',
  tagline: 'Ordem na compra. Visão completa.',
  brandMeaning: 'Ordem · Visão · Inteligência · Ação',
  version: '2.1.2',
  year: 2026,
} as const;

export const LINKS = {
  github: 'https://github.com/Yuritborges/orvia-sistema',
  release: 'https://github.com/Yuritborges/orvia-sistema/releases/tag/v2.1.2',
  installer:
    'https://github.com/Yuritborges/orvia-sistema/releases/download/v2.1.2/ORVIA_Setup_2.1.2.exe',
  linkedin: 'https://www.linkedin.com/in/marlyson-iury-taveira-borges-6311aa331',
  whatsapp: 'https://wa.me/5519910386339',
} as const;

export const ASSETS = {
  /** Logo horizontal tratado (fundo transparente) — tema claro */
  logoLight: asset('logos/orvia-logo.png'),
  /** Variante dark gerada (wordmark off-white, laranja preservado) */
  logoDark: asset('logos/orvia-logo-dark.png'),
  /** Ícone hexagonal tratado (header) */
  icon: asset('logos/orvia-icon.png'),
  /** Favicons / PWA */
  favicon16: asset('logos/favicon-16.png'),
  favicon32: asset('logos/favicon-32.png'),
  appleTouchIcon: asset('logos/apple-touch-icon.png'),
  /** Imagem para Open Graph / Twitter (caminho; o Layout resolve a URL absoluta) */
  ogImage: asset('screenshots/pedido_compra.png'),
} as const;

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Telas', href: '#telas' },
  { label: 'Demo', href: '#demo' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;

export const PROBLEMS = [
  'Planilhas dispersas e pedidos sem padronização entre obras',
  'Cotações difíceis de comparar lado a lado',
  'Falta de rastreio de ferramentas, locações e confirmação na obra',
  'PDFs inconsistentes entre obras e fornecedores',
] as const;

export const FEATURES = [
  {
    id: 'pedido',
    title: 'Pedido de Compra',
    description:
      'Formulário completo com autocomplete, PDF oficial com logo da empresa faturadora e pagamento em etapas.',
    icon: 'clipboard',
  },
  {
    id: 'gerados',
    title: 'Pedidos Gerados',
    description:
      'Listagem com filtros, KPIs, reimpressão, confirmação na obra e alertas na sidebar.',
    icon: 'list',
  },
  {
    id: 'cotacao',
    title: 'Cotação Comparativa',
    description:
      'Compare até 3 fornecedores com análise automática de economia e pedido direto ao vencedor.',
    icon: 'chart',
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas',
    description: 'Controle de saída e devolução por obra e responsável.',
    icon: 'tool',
  },
  {
    id: 'locacoes',
    title: 'Locações',
    description: 'Alertas de vencimento e importação opcional via Excel.',
    icon: 'calendar',
  },
  {
    id: 'cadastros',
    title: 'Cadastros',
    description: 'Fornecedores, obras e funcionários com dados locais em JSON.',
    icon: 'database',
  },
] as const;

export const SCREENSHOTS = [
  {
    src: asset('screenshots/login.png'),
    alt: 'Tela de login do ORVIA com campos de usuário e senha',
    caption: 'Login — acesso seguro por usuário',
  },
  {
    src: asset('screenshots/pedido_compra.png'),
    alt: 'Formulário de pedido de compra com itens e fornecedor',
    caption: 'Pedido de Compra — formulário completo',
  },
  {
    src: asset('screenshots/pedidos_gerados.png'),
    alt: 'Listagem de pedidos gerados com filtros e KPIs',
    caption: 'Pedidos Gerados — visão operacional',
  },
  {
    src: asset('screenshots/cotacao_vazia.png'),
    alt: 'Tela de cotação comparativa vazia pronta para preenchimento',
    caption: 'Cotação — estrutura para 3 fornecedores',
  },
  {
    src: asset('screenshots/cotacao_preenchida.png'),
    alt: 'Cotação comparativa preenchida com análise de economia',
    caption: 'Cotação — comparação e economia automática',
  },
  {
    src: asset('screenshots/locacoes.png'),
    alt: 'Módulo de locações com alertas de vencimento',
    caption: 'Locações — controle e alertas',
  },
  {
    src: asset('screenshots/cadastros.png'),
    alt: 'Tela de cadastros de fornecedores, obras e funcionários',
    caption: 'Cadastros — base de dados local',
  },
] as const;

export const INSTALL_STEPS = [
  {
    title: 'Windows 10 ou 11',
    description: 'Compatível com as versões mais usadas em escritórios e canteiros de obras.',
  },
  {
    title: 'Instalador profissional',
    description: 'Gerado com Inno Setup — instalação guiada como qualquer software corporativo.',
  },
  {
    title: 'Programa em Arquivos de Programas',
    description: 'Atalho no menu Iniciar. Sem dependências externas para rodar no dia a dia.',
  },
  {
    title: 'Dados em %LOCALAPPDATA%\\ORVIA\\',
    description: 'Banco e configurações ficam no perfil do usuário — sem precisar de admin no uso diário.',
  },
  {
    title: 'Demo carrega automaticamente',
    description: 'Na primeira execução, dados fictícios de demonstração são carregados sozinhos.',
  },
  {
    title: 'Aviso SmartScreen',
    description:
      'O Windows pode exibir alerta de segurança — normal para executável demo não assinado digitalmente.',
  },
] as const;

export const TECH_STACK = [
  'Python 3.11+',
  'PySide6 (Qt)',
  'SQLite',
  'ReportLab (PDF)',
  'PyInstaller',
  'Inno Setup',
] as const;

/**
 * Planos white-label (ilustrativos) — escopo de customização por cliente.
 * Sem preços reais: "Sob consulta". Não é venda; é demonstração de portfólio.
 */
export const PLANS = [
  {
    name: 'Essencial',
    tagline: 'O produto base, pronto para rodar.',
    featured: false,
    features: [
      'Todos os 6 módulos do sistema',
      'Dados 100% locais (offline)',
      'PDF de pedidos com a sua marca',
      'Instalador Windows (Inno Setup)',
    ],
  },
  {
    name: 'Profissional',
    tagline: 'Personalização white-label completa.',
    featured: true,
    features: [
      'Tudo do Essencial',
      'Marca, cores e logos faturadoras',
      'Importação de locações via Excel',
      'Ajustes de campos e fluxos',
    ],
  },
  {
    name: 'Empresarial',
    tagline: 'Operação multi-obra sob medida.',
    featured: false,
    features: [
      'Tudo do Profissional',
      'Multi-empresa / multi-obra',
      'Integrações sob medida',
      'Treinamento da equipe',
    ],
  },
] as const;
