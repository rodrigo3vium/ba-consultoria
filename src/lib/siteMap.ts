export type SiteCategory = 'home' | 'pilares' | 'educacao' | 'servicos' | 'conteudo' | 'propostas' | 'outros';
export type RouteStatus = 'ativa' | 'stub' | 'quebrada';

export interface SiteRoute {
  path: string;
  label: string;
  category: SiteCategory;
  status: RouteStatus;
  isLandingPage?: boolean;
}

export const SITE_ROUTES: SiteRoute[] = [
  // Home
  { path: '/', label: 'Home', category: 'home', status: 'ativa' },
  { path: '/home-2', label: 'Home v2', category: 'home', status: 'ativa' },

  // Pilares
  { path: '/consultoria', label: 'Consultoria', category: 'pilares', status: 'ativa' },
  { path: '/servicos', label: 'Serviços', category: 'pilares', status: 'ativa' },
  { path: '/tecnologia', label: 'Tecnologia', category: 'pilares', status: 'ativa' },
  { path: '/educacao', label: 'Educação (hub)', category: 'pilares', status: 'ativa' },

  // Educação — Landing Pages
  { path: '/educacao/ia-para-negocios', label: 'IA para Negócios', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/ia-do-zero', label: 'IA do Zero', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/como-aplicar-ia', label: 'Como Aplicar IA', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/o-caminho', label: 'O Caminho', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/claude-code', label: 'Claude Code Masterclass', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/metodo-stark', label: 'Método Stark', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/a-revolucao', label: 'A Revolução (alias Stark)', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/a-revolucao-v2', label: 'A Revolução v2', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/imersao-claude', label: 'Imersão Claude', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/imersao-claude-v2', label: 'Imersão Claude v2', category: 'educacao', status: 'ativa', isLandingPage: true },
  { path: '/educacao/obrigado-imersao-claude', label: 'Obrigado Imersão Claude', category: 'educacao', status: 'ativa' },
  { path: '/educacao/20-skill-negocios', label: '20 Skills de IA para Negócios', category: 'educacao', status: 'ativa', isLandingPage: true },

  // Serviços
  { path: '/servicos/google-meu-negocio', label: 'Google Meu Negócio', category: 'servicos', status: 'ativa', isLandingPage: true },

  // Conteúdo
  { path: '/blog', label: 'Blog', category: 'conteudo', status: 'ativa' },
  { path: '/blog/:id', label: 'Post do Blog', category: 'conteudo', status: 'ativa' },
  { path: '/cases', label: 'Cases', category: 'conteudo', status: 'ativa' },
  { path: '/cases/:id', label: 'Detalhe de Case', category: 'conteudo', status: 'ativa' },
  { path: '/newsletter-ia', label: 'Newsletter IA', category: 'conteudo', status: 'ativa', isLandingPage: true },
  { path: '/newsletter', label: 'Newsletter Simples', category: 'conteudo', status: 'ativa', isLandingPage: true },
  { path: '/avaliacao-newsletter', label: 'Avaliação Newsletter', category: 'conteudo', status: 'ativa' },

  // Propostas
  { path: '/proposta', label: 'Proposta (hub)', category: 'propostas', status: 'ativa' },
  { path: '/proposta-padrao', label: 'Proposta Padrão', category: 'propostas', status: 'ativa' },
  { path: '/proposta/dsl-car-texas', label: 'Proposta DSL Car Texas', category: 'propostas', status: 'ativa' },
  { path: '/propostas/duda-bambil', label: 'Proposta Duda Bambil', category: 'propostas', status: 'ativa' },
  { path: '/propostas/monique-karasek', label: 'Proposta Monique Karasek', category: 'propostas', status: 'ativa' },
  { path: '/propostas/clinica-supreme', label: 'Proposta Clínica Supreme', category: 'propostas', status: 'ativa' },
  { path: '/propostas/giulia-salvatore', label: 'Proposta Giulia Salvatore', category: 'propostas', status: 'ativa' },
  { path: '/propostas/wesley-sardou', label: 'Proposta Wesley Sardou', category: 'propostas', status: 'ativa' },
  { path: '/propostas/danielle-sena', label: 'Proposta Danielle Sena', category: 'propostas', status: 'ativa' },
  { path: '/propostas/rose-miranda', label: 'Proposta Rose Miranda', category: 'propostas', status: 'ativa' },
  { path: '/propostas/revenue-based-financing', label: 'Proposta Revenue Based', category: 'propostas', status: 'ativa' },
  { path: '/follow-up/clinica-supreme', label: 'Follow-up Clínica Supreme', category: 'propostas', status: 'ativa' },
];

export const CATEGORY_LABELS: Record<SiteCategory, string> = {
  home: 'Home',
  pilares: 'Pilares',
  educacao: 'Educação',
  servicos: 'Serviços',
  conteudo: 'Conteúdo',
  propostas: 'Propostas',
  outros: 'Outros',
};

export const CATEGORY_ORDER: SiteCategory[] = ['home', 'pilares', 'educacao', 'servicos', 'conteudo', 'propostas', 'outros'];
