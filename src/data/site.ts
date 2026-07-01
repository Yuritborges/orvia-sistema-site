/** Constantes e conteúdo da landing page comercial ORVIA */

/** Prefixo de base (respeita o `base` do astro.config para GitHub Pages). */
const BASE = import.meta.env.BASE_URL; // ex.: "/orvia-sistema-site" ou ".../"
const asset = (path: string) =>
  `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const SITE = {
  title: 'ORVIA — Sistema de Gestão de Compras para Construção Civil',
  description:
    'Centralize pedidos, cotações, ferramentas e locações das suas obras em um único sistema. Padronize processos, ganhe visibilidade e reduza custos de compra.',
  keywords:
    'sistema de compras construção civil, gestão de obras, cotação de fornecedores, controle de pedidos, software para construtora, pedido de compra',
  author: 'Marlyson Iury Taveira Borges',
  tagline: 'Ordem na compra. Gestão na Obra.',
  brandMeaning: 'Ordem · Visão · Inteligência · Ação',
  year: 2026,
} as const;

/** Número de WhatsApp comercial (formato internacional, só dígitos). */
export const WHATSAPP_NUMBER = '5511910386339';

/**
 * Endpoint do formulário de contato (serviço estático, ex.: Formspree / Web3Forms).
 * Substitua pelo seu endpoint real. Enquanto estiver vazio, o formulário
 * envia a mensagem direto pelo WhatsApp como alternativa.
 */
export const FORM_ENDPOINT = '';

export const LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  linkedin: 'https://www.linkedin.com/in/marlyson-iury-taveira-borges-6311aa331',
} as const;

/** Monta um link de WhatsApp com mensagem pré-preenchida. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
  /** Vídeo do mascote no hero — WebM com transparência (preferencial) + fallback MP4 */
  heroVideoWebm: asset('demo-video/mascote.webm'),
  heroVideoMp4: asset('demo-video/mascote.mp4'),
} as const;

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Telas', href: '#telas' },
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
      'Formulário completo com autocomplete, PDF oficial com a logo da sua empresa e pagamento em etapas.',
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
    description: 'Fornecedores, obras e funcionários com base de dados centralizada.',
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
    caption: 'Cadastros — base de dados centralizada',
  },
] as const;

/** Etapas de implantação — como a ORVIA entra na operação do cliente. */
export const ONBOARDING = [
  {
    title: 'Apresentação',
    description:
      'Mostramos o sistema funcionando e entendemos a realidade das suas obras e do seu time de compras.',
  },
  {
    title: 'Implantação',
    description:
      'Instalamos, configuramos a sua marca nos documentos e cadastramos os dados iniciais da operação.',
  },
  {
    title: 'Treinamento',
    description:
      'Capacitamos a equipe para usar o sistema no dia a dia, do pedido à confirmação na obra.',
  },
  {
    title: 'Suporte contínuo',
    description:
      'Acompanhamento próximo e suporte para manter a operação rodando sem travas, mês a mês.',
  },
] as const;

export const DIFFERENTIALS = [
  {
    title: 'Feito para construção civil',
    description:
      'Não é um ERP genérico: cada módulo nasceu da rotina real de compras em obras.',
    icon: 'tool',
  },
  {
    title: 'Documentos com a sua marca',
    description:
      'PDFs de pedido profissionais, com a logo da sua empresa e das suas faturadoras.',
    icon: 'clipboard',
  },
  {
    title: 'Implantação e suporte',
    description:
      'Você não fica sozinho: instalação, treinamento e suporte fazem parte do serviço.',
    icon: 'chart',
  },
] as const;

/**
 * Planos comerciais — escopo de produto e serviço por porte de operação.
 * Valores sob consulta; cada implantação é dimensionada com o cliente.
 */
export const PLANS = [
  {
    name: 'Standard',
    tagline: 'Para organizar as compras de uma obra com profissionalismo.',
    featured: false,
    cta: 'Quero o Standard',
    whatsapp:
      'Olá! Tenho interesse no plano Standard do ORVIA. Pode me passar mais informações?',
    features: [
      'Os 6 módulos do sistema',
      'Pedidos com PDF na sua marca',
      'Cotação comparativa de fornecedores',
      'Instalação e configuração inicial',
      'Suporte por WhatsApp',
    ],
  },
  {
    name: 'Professional',
    tagline: 'Para construtoras que tocam várias obras ao mesmo tempo.',
    featured: true,
    cta: 'Quero o Professional',
    whatsapp:
      'Olá! Tenho interesse no plano Professional do ORVIA. Pode me passar mais informações?',
    features: [
      'Tudo do Standard',
      'Várias obras simultâneas',
      'Importação de locações via Excel',
      'Personalização de campos e fluxos',
      'Treinamento da equipe',
    ],
  },
  {
    name: 'Premium',
    tagline: 'Operação multi-empresa, sob medida para o seu processo.',
    featured: false,
    cta: 'Quero o Premium',
    whatsapp:
      'Olá! Tenho interesse no plano Premium do ORVIA. Pode me passar mais informações?',
    features: [
      'Tudo do Professional',
      'Multi-empresa / multi-obra',
      'Empresas faturadoras e marca por cliente',
      'Integrações sob medida',
      'Suporte prioritário',
    ],
  },
] as const;
