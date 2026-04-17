# BA Consultoria - Site

## Sobre o Projeto

Site institucional + plataforma educacional da BA Consultoria. Combina site de marketing, landing pages especializadas (Método Stark), blog, sistema de cases, painel admin de conteúdo e geração de propostas comerciais.

**Público-alvo:** Empresários e profissionais que querem implementar IA nos negócios.

## Stack

- **Framework:** React 18 + TypeScript + Vite (SWC)
- **Estilo:** Tailwind CSS 3 + shadcn/ui (Radix UI) + CSS variables
- **Roteamento:** React Router DOM 6
- **Backend:** Supabase (auth, database, edge functions) — projeto `sebjvyvcjkxfonfosymq`, schema `ba_site`
- **Estado:** TanStack React Query (server state), React Router (navigation)
- **Forms:** React Hook Form + Zod
- **Ícones:** Lucide React
- **Deploy:** Vercel (auto-deploy via push em `main`)

## Estrutura do Projeto

```
src/
├── pages/              # Páginas
├── components/
│   ├── ui/             # shadcn/ui (Button, Card, Dialog, etc.)
│   ├── claudecode/     # Componentes da página Claude Code
│   └── metodostark/    # Componentes do Método Stark
├── hooks/              # useAuth, usePageViewTracking, use-mobile, use-toast
├── lib/                # tracking.ts, blogData.ts, utils.ts, siteMap.ts, hotmartUtils.ts
├── integrations/
│   └── supabase/       # Client config e types (schema ba_site)
├── assets/             # Imagens, logos, fotos
└── index.css           # Tokens globais (CSS variables)
public/
└── videos/             # Vídeos (mundo_dividindo.mp4)
supabase/
├── functions/          # Edge Functions (ver seção abaixo)
└── migrations/         # Migrations ativas do schema ba_site
```

## Aliases

- `@/` → `./src/` (configurado em vite.config.ts e tsconfig.json)

## Supabase — Schema `ba_site`

O site usa o mesmo projeto Supabase do **BA Hub** (`sebjvyvcjkxfonfosymq`), schema dedicado `ba_site`. O client está configurado com `db: { schema: 'ba_site' }`.

### Tabelas ativas

| Tabela | Uso |
|---|---|
| `blog_posts` | Posts do blog — CRUD em `/admin/blog` |
| `cases` | Cases/portfólio — CRUD em `/admin/cases` |
| `events` | Eventos de tracking anônimo (via edge function `track-event`) |
| `sessions` | Sessões de usuário (via `track-event` e `session-heartbeat`) |
| `newsletter_subscribers` | Inscritos na newsletter |
| `newsletter_ratings` | Avaliações de edições da newsletter |
| `hotmart_sales` | Vendas importadas da Hotmart (via `import-hotmart-leads`) |

**Não existe mais** a camada de CRM/leads neste schema — leads do site vão direto para `public.contacts` do BA Hub via edge function `submit-contact`.

### Edge Functions

| Função | O que faz |
|---|---|
| `submit-contact` | Recebe lead do site e faz upsert em `public.contacts` do BA Hub (tenant PB `8b53f762-e90a-4fde-9280-4522d88a2712`) |
| `track-event` | Registra evento anônimo em `events` + upsert de sessão via RPC |
| `session-heartbeat` | Atualiza duração de sessão em `sessions` |
| `track-newsletter-rating` | Registra avaliação de newsletter |
| `import-hotmart-leads` | Importa vendas CSV da Hotmart → `hotmart_sales` |
| `sync-activecampaign` | Sincroniza inscrito da newsletter com ActiveCampaign |

### Captura de leads (formulários públicos)

Todo formulário de captura (IAParaNegocios, IADoZero, OCaminho, EducacaoSkillsNegocios, Newsletter, NewsletterSimples, Footer) chama:

```ts
await supabase.functions.invoke('submit-contact', {
  body: {
    name,
    email,
    whatsapp,          // opcional
    source: 'slug-do-produto',
    utm: { source, medium, campaign },
    metadata: { ... }, // campos extras (faturamento, cargo, etc.)
  },
});
```

O tracker continua sendo chamado normalmente (`tracker.identify()` + `tracker.track()`).

### Auth do /admin

Proteção via `useRequireAuth(true)`. Admin é determinado por allowlist de emails em `src/hooks/useAuth.ts`:

```ts
const ADMIN_EMAILS = ['rodrigo@benitesalbuquerque.com.br'];
```

Para adicionar admin: editar essa constante.

## Design Tokens

### Cores da marca (CSS variables em index.css)

```
--ba-blue-light:  203 39% 69%    (azul claro principal)
--ba-blue-medium: 206 40% 60%    (azul médio)
--ba-blue-dark:   219 26% 28%    (azul marinho)
--ba-orange:      39 58% 64%     (laranja/dourado)
--ba-black:       0 0% 1%        (preto)
```

Acessíveis no Tailwind como `ba-blue-light`, `ba-blue-medium`, `ba-blue-dark`, `ba-orange`, `ba-black`.

### Tipografia

- **Sans (padrão):** Inter
- **Display:** Poppins

### Gradientes

```css
--gradient-primary: ba-blue-light → ba-blue-medium
--gradient-hero:    ba-blue-dark → ba-blue-medium
--gradient-accent:  ba-orange → ba-blue-light
```

### Sombras

```css
--shadow-glow:    0 0 40px hsl(ba-blue-light / 0.3)
--shadow-card:    0 10px 30px -10px hsl(ba-blue-dark / 0.4)
--shadow-premium: 0 8px 32px hsl(0 0% 0% / 0.32)
```

## Método Stark (Design System Próprio)

O Método Stark tem identidade visual separada, definida em constantes no `src/pages/MetodoStark.tsx`:

```
VOID:        #060A12   (fundo principal)
SURFACE:     #0C1220   (fundo de seções)
HUD_DARK:    #111A2E   (fundo de cards)
ARC:         #38BDF8   (azul destaque)
STARK_GOLD:  #F59E0B   (dourado)
IVORY:       #F0F6FF   (texto claro)
```

**Fontes:** Chakra Petch (display), IBM Plex Mono (mono), Exo 2 (body)

**Padrões:**
- Usa inline styles (não Tailwind) para os tokens de cor
- Cards com hover em `borderColor` e `boxShadow`
- Vídeo scroll-driven na seção 1 (mundo se dividindo)
- Componentes especializados em `src/components/metodostark/`

## Padrões de Código

### Componentes de página

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tracker } from "@/lib/tracking";

const Page = () => {
  useEffect(() => { tracker.page("Nome da Página"); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero → Conteúdo → CTA */}
      <Footer />
    </div>
  );
};
```

### Componentes shadcn/ui

- Ficam em `src/components/ui/`
- Usam CVA (Class Variance Authority) para variantes
- Composição de classes com `cn()` (clsx + tailwind-merge)

### Tracking/Analytics

- `tracker.page("Nome")` no useEffect de cada página
- `tracker.track("evento", { props })` para CTAs e interações
- LGPD-compliant (consent-based)
- Tracking é anônimo — liga anonymous_id a contato no BA Hub via `submit-contact`, não via `identify-lead`

### Mapa do Site

`src/lib/siteMap.ts` é a **fonte única de verdade** de todas as rotas públicas. Usado pelo `/admin` (dashboard) e `/admin/landing-pages`. Ao adicionar uma rota nova em `App.tsx`, adicionar também em `SITE_ROUTES`.

### CTAs

- WhatsApp como canal principal: `https://wa.me/5511999718595`
- Sempre usar `tracker.track("cta_click", { product, location })` antes do redirect

## Convenções de Rotas

- **Propostas:** todas as páginas de propostas comerciais devem estar sob `/propostas/*`
- **Cursos/Educação:** todas as páginas de cursos, imersões e conteúdo educacional devem estar sob `/educacao/*` (ex: `/educacao/imersao-claude`, `/educacao/metodo-stark`)

## Rotas Principais

- `/` — Homepage
- `/consultoria`, `/servicos`, `/tecnologia`, `/educacao` — Pilares do negócio
- `/educacao/metodo-stark` — Landing page Método Stark
- `/educacao/claude-code` — Página Claude Code
- `/educacao/imersao-claude` — Imersão Claude
- `/cases`, `/blog` — Cases e blog (dados do Supabase)
- `/admin` — Dashboard admin com mapa do site (protegido por allowlist de emails)
- `/admin/blog` — CRUD de posts
- `/admin/cases` — CRUD de cases
- `/admin/landing-pages` — Lista de landing pages com links
- `/propostas/*` — Propostas comerciais customizadas

## Comandos

```bash
npm run dev      # Dev server (Vite)
npm run build    # Build de produção
npm run preview  # Preview do build

# Gerar types Supabase (rodar após alterar schema)
npx supabase gen types typescript --project-id sebjvyvcjkxfonfosymq --schema ba_site > src/integrations/supabase/types.ts

# Deploy de edge function
npx supabase functions deploy <nome> --project-ref sebjvyvcjkxfonfosymq

# Setar secret de edge function
npx supabase secrets set CHAVE=valor --project-ref sebjvyvcjkxfonfosymq
```
