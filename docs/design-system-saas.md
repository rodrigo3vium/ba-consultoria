# Design System — SaaS IDV v.03 (Product Editorial)

> Identidade visual do site inteiro (BA Consultoria), extraída da página
> `/portfolio/imovel-vazio-nao-vende` e aplicada a todas as páginas públicas.
> **Substitui** a "Strategic HUD Editorial" (Bebas/Fraunces/dossiê — `design-system-pb.md`).
> Leia COMPLETO antes de editar qualquer página. Referência viva: `src/pages/ImovelVazioNaoVende.tsx`.

---

## Conceito

**SaaS moderno, escuro e premium.** Produto tech confiável: fundo quase-preto azulado,
tipografia geométrica limpa, um único gradiente de acento (ciano→violeta), cards arredondados,
glows radiais suaves, muito respiro. Nada de HUD, brackets, grid técnico, uppercase pesado,
serif ou tom de "dossiê". É a cara de uma ferramenta que você confiaria seu negócio.

---

## Tokens de cor (Tailwind `saas-*` — definidos em `tailwind.config.ts`)

| Classe | Hex | Uso |
|---|---|---|
| `bg-saas-void` | `#0A0A13` | Fundo principal (root de toda página) |
| `bg-saas-void-2` | `#0D0D18` | Faixa alternada sutil |
| `bg-saas-card` | `#15151F` | Cards, painéis, formulários |
| `text-saas-ink` | `#F5F5FA` | Texto forte / headings |
| `text-saas-body` | `#B7B8C7` | Corpo de texto |
| `text-saas-muted` | `#9A9CAA` | Secundário, subtítulos |
| `text-saas-faint` | `#7B7C8C` | Legendas, metadados |
| `text-saas-faint-2` | `#5D5F6B` | Placeholder |
| `saas-cyan` | `#20DDEB` | Início do gradiente de acento |
| `saas-violet` | `#8B7CF6` | Fim do gradiente de acento |
| `saas-green` | `#6EE7B7` | Checks / confirmação |

**Bordas:** `border-white/[0.06]` (divisórias de seção), `border-white/[0.09]` (cards),
`border-white/[0.10]` a `[0.14]` (inputs, pills, botão ghost).
**Superfícies sutis:** `bg-white/[0.02]` (stat cards), `bg-white/[0.04]` (inputs), `bg-white/[0.03]` (pills).

### O gradiente de acento (assinatura da marca)
`bg-gradient-to-r from-saas-cyan to-saas-violet` — usado em: botão primário, texto de destaque
(`<Accent>`), pontinhos de eyebrow, ícones-badge, números de stat, barras decorativas.
Texto em gradiente: `bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent`.

---

## Tipografia

- **Fonte única:** **Plus Jakarta Sans** (já é o `font-sans` global e default do `<body>`). Pesos 400–800.
- **Mono:** `font-mono` (IBM Plex Mono) — SÓ em eyebrows/metadados curtos, uppercase, `tracking-[0.14em]`.
- **Sem serif. Sem Bebas. Sem uppercase em headings.**

| Elemento | Classe |
|---|---|
| H1 hero | `font-extrabold text-saas-ink text-[clamp(25px,3.5vw,42px)] leading-[1.1] tracking-tight` |
| H2 seção | `font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight` |
| Corpo | `text-saas-body text-[17px] leading-relaxed` (ou `text-base md:text-lg`) |
| Eyebrow | pill `<Eyebrow>` OU `font-mono text-[11px] uppercase tracking-[0.2em] text-saas-cyan` |

> **Regra do H1 (global):** headline cabe em ≤ 3 linhas no desktop. Ajuste o `clamp` se estourar.

---

## Primitivos — importe de `@/components/saas/ui`

Use SEMPRE que couber (evita divergência). Também exporta os className crus.

```tsx
import { Accent, Eyebrow, SaasButton, Card, Section, SectionHeader, StatCard, Reveal,
         SAAS_BTN_PRIMARY, SAAS_BTN_GHOST, SAAS_CARD, SAAS_INPUT, SAAS_LABEL } from "@/components/saas/ui";
```

- `<Accent>parede vazia</Accent>` — trecho de headline em gradiente.
- `<Eyebrow>Como funciona</Eyebrow>` — pill mono acima de headings.
- `<SaasButton>` (variant `primary` | `ghost`) ou os className `SAAS_BTN_PRIMARY`/`SAAS_BTN_GHOST`.
- `<Card>` — `rounded-2xl border border-white/[0.09] bg-saas-card`.
- `<Section eyebrow container="max-w-3xl">` — `border-t border-white/[0.06] py-20 md:py-24` + container.
- `<SectionHeader eyebrow="...">Título com <Accent>destaque</Accent></SectionHeader>`.
- `<StatCard value="40s" label="..." accent />` — número em gradiente.
- Inputs de formulário: `className={SAAS_INPUT}`, labels `className={SAAS_LABEL}`.

### Padrões de referência (copiar de `ImovelVazioNaoVende.tsx`)
- **Botão primário:** pill gradiente, `rounded-full px-7 py-3.5 text-sm font-bold text-saas-void`, sombra `shadow-saas-btn`.
- **Botão ghost:** pill `border border-white/[0.14] text-saas-body`.
- **Seção:** `border-t border-white/[0.06] py-20 md:py-24`, container `max-w-3xl/5xl/7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Hero:** glows radiais `absolute ... rounded-full bg-saas-violet/20 blur-[110px]` + `bg-saas-cyan/15 blur-[110px]`.
- **Card raio:** `rounded-2xl` (cards), `rounded-xl` (inputs), `rounded-full` (botões, pills, badges).
- **Entrada:** envolva blocos com `animate-fade-in` (classe global) ou `<Reveal>`.

---

## Proibições (o que MATA a IDV)

- ❌ Bebas Neue, Fraunces, qualquer serif, `font-display`, `font-body`.
- ❌ `text-transform: uppercase` em headings/parágrafos (só em eyebrow mono curto).
- ❌ Cantos retos (`rounded-none`, `--radius:0`), brackets HUD, grid técnico de fundo, `CornerBrackets`, `Stamp`, coordenadas.
- ❌ Vermelho `#E44935` como acento (era da IDV antiga). Acento = gradiente ciano→violeta.
- ❌ Classes/componentes `pb-*` (`bg-pb-void`, `text-pb-ink`, `font-mono uppercase` como corpo, `pb-tag`, `pb-input`, `.btn-primary`/`.btn-ghost` do editorial).
- ❌ Preto puro `#000`. Sempre `#0A0A13`.

---

## Regras de conversão de página (para os agentes)

1. **Preserve TODO o conteúdo** (copy, headings, listas, dados, imagens) e **TODA a lógica**
   (imports, hooks, `useEffect(tracker.page)`, forms, `submit-contact`, `getPersistedUtm`,
   validações Zod, navegação, tracking). Você troca a **camada visual**, não reescreve o produto.
2. Root da página: `<div className="min-h-screen bg-saas-void text-saas-body">`. Se a página usa
   `<Header/>`/`<Footer/>` globais, mantenha — já estão no padrão SaaS.
3. Troque tokens editorial→SaaS: `bg-pb-void`→`bg-saas-void`, `text-pb-ink`→`text-saas-ink`,
   `text-pb-ink-soft`→`text-saas-body`, `text-pb-cyan`→`text-saas-cyan`, `border-pb-grid-strong`→`border-white/[0.09]`, etc.
4. Headings viram Plus Jakarta (`font-extrabold`, sem uppercase). Destaques com `<Accent>`.
5. Botões/CTAs → `SAAS_BTN_PRIMARY`/`SAAS_BTN_GHOST`. Mantenha `tracker.track("cta_click", …)` antes de redirect.
6. Cards → `<Card>` / `SAAS_CARD`. Inputs → `SAAS_INPUT` + `SAAS_LABEL`.
7. Não invente copy nova. Não remova seções. Não quebre rotas nem forms.
8. Resultado precisa compilar (`npm run build`) e passar no typecheck.
```
