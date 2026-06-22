# Design System PB — Strategic HUD Editorial v.02

> Documento de referência para Claude Code, Cursor, v0 e qualquer IA que trabalhe neste projeto.
> Leia COMPLETO antes de criar ou editar qualquer componente visual.
> Última atualização: 2026-06

---

## Conceito

Dark editorial cinematográfico. Mistura três mundos:
1. **Editorial premium** — tipografia condensada dramática, cara de capa de livro de doutrina
2. **HUD futurista** — grids, coordenadas, brackets, indicadores técnicos, briefing de inteligência
3. **Biblioteca/estratégia** — quando há foto: livros escuros, mesa de madeira, luz lateral

Tom: inteligência estratégica, disciplina, clareza. Cada página parece um dossiê, não um SaaS.

---

## Tokens de cor

Todos definidos como CSS variables em `src/index.css` e acessíveis via classes Tailwind `pb-*`.

### Backgrounds (~70% do layout)

| Tailwind | CSS var | Hex | Uso |
|----------|---------|-----|-----|
| `bg-pb-void` | `--bg-main` | `#05090B` | Fundo principal — preto azulado, NUNCA preto puro |
| `bg-pb-void-deep` | `--bg-deep` | `#020405` | Inputs, áreas afundadas, terminal |
| `bg-pb-void-card` | `--bg-card` | `#0B1114` | Cards, painéis, blocos elevados |
| `bg-pb-void-elev` | `--bg-elev` | `#11171A` | Modais, elementos sobrepostos |

### Texto (~25%)

| Tailwind | CSS var | Hex | Uso |
|----------|---------|-----|-----|
| `text-pb-ink` | `--text-primary` | `#F2EDE4` | Texto principal — branco envelhecido, NUNCA puro |
| `text-pb-ink-soft` | `--text-secondary` | `#C8C0B2` | Corpo, parágrafos |
| `text-pb-ink-muted` | `--text-muted` | `#7D827D` | Metadados, labels auxiliares |
| `text-pb-ink-faint` | `--text-faint` | `#4A4F4D` | Bordas hover, separadores sutis |

### Acento ciano (~4%) — cor da inteligência

| Tailwind | CSS var | Hex | Uso |
|----------|---------|-----|-----|
| `text-pb-cyan` / `bg-pb-cyan` | `--accent-cyan` | `#20DDEB` | Navegação, dados, indicadores, decisão |
| `text-pb-cyan-soft` | `--accent-cyan-soft` | `#38F3FF` | Hover, glow mais intenso |
| `border-pb-cyan-dim` | `--accent-cyan-dim` | `#0F8995` | Bordas de foco, variante escura |

**Regra:** ciano só aparece quando há função — dado, navegação, status. Nunca decorativo.

### Acento vermelho (~1%) — pontuação visual

| Tailwind | CSS var | Hex | Uso |
|----------|---------|-----|-----|
| `text-pb-red` / `bg-pb-red` | `--accent-red` | `#E44935` | Ponto final, alerta, inflexão |
| `border-pb-red-dim` | `--accent-red-dim` | `#8C2A20` | Bordas de alert |

**Regra:** vermelho é pequeno e crítico. NUNCA como cor de bloco, fundo, ou área grande.

### Grid e bordas

| Tailwind | Uso |
|----------|-----|
| `border-pb-grid-strong` | Bordas de cards, divisores, brackets HUD |
| `border-pb-grid-line` | Grid de fundo (muito sutil) |

---

## Tipografia

Fontes importadas via Google Fonts em `index.html`. Três famílias, cada uma com função específica.

### Bebas Neue — `font-display`
- Uso: H1, H2, headlines de seção, hero text, frases de doutrina
- **Sempre `uppercase`** — nunca sentence case
- `leading-[0.88]` a `leading-[0.95]` (linha apertada)
- `tracking-[0.005em]` a `tracking-[0.01em]`
- Size de hero: `text-[clamp(72px,11vw,180px)]`
- Size de H1: `text-[clamp(48px,6vw,88px)]`
- Size de H2/seção: `text-[clamp(32px,4vw,56px)]`
- Size de H3/card: `text-[clamp(24px,2.4vw,32px)]` ou `text-3xl`

### IBM Plex Mono — `font-mono`
- Uso: labels, metadados, badges, coordenadas, números de protocolo, footer técnico
- **Sempre `uppercase`** em labels e metadados
- `tracking-[0.12em]` a `tracking-[0.20em]` (muito expandido)
- Size: `text-[10px]` a `text-sm`
- Classe atalho: `tracking-mono-wide` (definida em Tailwind)

### Fraunces — `font-body`
- Uso: parágrafos, body copy, descrições, bios, corpo de artigo
- Sentence case (não uppercase)
- `leading-relaxed` (1.6)
- Size: `text-base` a `text-lg`

### Hierarquia rápida

```
Hero:    font-display uppercase clamp(72px,11vw,180px)  leading-[0.88]
H1:      font-display uppercase clamp(48px,6vw,88px)    leading-[0.92]
H2:      font-display uppercase clamp(32px,4vw,56px)    leading-[0.95]
H3:      font-display uppercase text-3xl                leading-[0.95]
Body:    font-body    text-base/lg text-pb-ink-soft     leading-relaxed
Label:   font-mono    text-[10px]-[12px] uppercase      tracking-mono-wide
```

---

## Componentes disponíveis (`src/components/pb/`)

### `<PageLayout trackingName="..." className?="">`
Wrapper completo para páginas do site público. Inclui Header, Footer e `tracker.page()`.
```tsx
import PageLayout from "@/components/pb/PageLayout";

const MinhaPage = () => (
  <PageLayout trackingName="BA Consultoria - Serviços">
    {/* conteúdo aqui */}
  </PageLayout>
);
```

### `<Section idx="02" section="SERVIÇOS" headline="O QUE ENTREGAMOS." sub?="" align?="left|center" noBorderTop?={false} compact?={false}>`
Seção padronizada com `border-t`, padding e `SectionHeader` inclusos.
```tsx
import Section from "@/components/pb/Section";

<Section idx="03" section="STACK" headline={<>FERRAMENTAS QUE<br/>OPERAM A TESE.</>}>
  <div className="grid grid-cols-4 gap-px">...</div>
</Section>
```

### `<SectionHeader idx label headline sub? align?>`
Cabeçalho de seção com idx mono cyan + headline Bebas + sub Fraunces.

### `<StratCard brackets?={false} as?="div|article|li" className?="">`
Card com `bg-pb-void-card → pb-void-elev`, `border-pb-grid-strong`, hover border ciano.
```tsx
<StratCard brackets>
  <Stamp>CO-FOUNDER</Stamp>
  <h3 className="font-display text-3xl uppercase mt-4">NOME</h3>
  <p className="font-body text-pb-ink-soft mt-2 text-sm">Bio aqui.</p>
</StratCard>
```

### `<CornerBrackets size?={24} offset?={16} color?="cyan|ink">`
4 brackets absolutos nos cantos — envolve heros e cards principais.

### `<Stamp variant?="cyan|red">`
Dot com pulse + texto mono uppercase. Para status e categorias de card.
```tsx
<Stamp>OPERACIONAL</Stamp>
<Stamp variant="red">CRÍTICO</Stamp>
```

### `<Tag variant?="default|cyan|red|solid">`
Pill mono. Para filtros, categorias, tecnologias.

### `<MetaBar left right? dot?="cyan|red">`
Barra sticky/fixa no topo com indicador pulse.

### `<Coordinates file build owner state>`
Bloco mono FILE/BUILD/OWNER/STATE — canto superior direito de heros.

### `<PropostaLayout cliente projeto data?>`
Wrapper para propostas comerciais — capa + header sticky + footer BA.

---

## Padrões de layout

### Seção padrão (sem usar `<Section>`)
```tsx
<section className="border-t border-pb-grid-strong py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

### Grid de cards com borda compartilhada (gap-px no grid)
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
  {items.map(item => (
    <div key={item.id} className="bg-pb-void p-8">...</div>
  ))}
</div>
```
Efeito: bordas dos cards ficam "coladas", sem espaço — look de grid HUD.

### Hero full-height
```tsx
<section className="relative min-h-screen flex flex-col justify-end pb-20 pt-[108px]">
  <CornerBrackets size={32} offset={24} />
  <Coordinates file="HOME-01" build="2026.06" owner="BA" state="ACTIVE" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <h1 className="font-display uppercase text-pb-ink text-[clamp(72px,11vw,160px)] leading-[0.88]">
      HEADLINE<span className="text-pb-red">.</span>
    </h1>
  </div>
</section>
```

### Safe-top para páginas com MetaBar + Header
MetaBar: 36px. Header: 72px. Total: **`pt-[108px]`** em qualquer hero ou primeira seção.

---

## Botões e CTAs

### `.btn-primary` (CTA principal)
Borda ciano, texto ciano, fundo transparente. Hover: preenche ciano, texto escuro.
```tsx
<a href="..." className="btn-primary">
  Fale Conosco <span aria-hidden>→</span>
</a>
```

### `.btn-ghost` (CTA secundário)
Borda `grid-strong`, texto `ink-soft`. Para ações secundárias.

### `.btn-default`
Borda `ink`, texto `ink`. Para ações neutras.

---

## Formulários

### `.pb-input` + `.pb-label`
```tsx
<label htmlFor="email" className="pb-label">Email</label>
<input id="email" type="email" className="pb-input" />
```

---

## Regras absolutas (proibições)

❌ **Nunca usar:**
- Branco puro `#FFFFFF` ou `text-white` — usar `text-pb-ink` (`#F2EDE4`)
- Preto puro `#000000` — usar `bg-pb-void` (`#05090B`)
- Laranja em qualquer forma — não existe na IDV PB
- `rounded-xl`, `rounded-2xl`, `rounded-lg` — zero bordas arredondadas
- Glassmorphism com `backdrop-blur` em cards — só no Header
- Inter, Roboto, Arial como fonte principal — usar Fraunces para body
- Chakra Petch, Exo 2 — estilo antigo (Stark/Iron HUD)
- `#38BDF8` (Arc Reactor azul) — cor do sistema antigo
- Emojis em qualquer lugar
- `font-sans` nos componentes PB — mapeia para Fraunces (correto), mas deixar explícito com `font-body`
- Tokens BA antigos: `ba-blue-*`, `ba-orange`, `ba-black`
- Shadows decorativos `shadow-glow`, `shadow-card` — usar glow ciano via `style` quando necessário

✅ **Sempre:**
- `font-display uppercase` em todos os H1/H2/H3
- `font-mono uppercase tracking-mono-wide` em labels, badges, metadados
- `font-body` em parágrafos e bios
- `border-pb-grid-strong` em cards (nunca shadow)
- `window.scrollTo(0,0)` em `onClick` de todos os `<Link>` de navegação interna
- `tracker.track('cta_click', { product, location })` antes de CTAs externos
- `tracker.page('Nome da Página')` em `useEffect` de toda página

---

## Tom de copy

Manifesto, não publicitário. Imperativo, não motivacional.

**Exemplos de headlines:**
- "A PERGUNTA ESTÁ ERRADA."
- "QUEM NÃO DECIDE, TERCEIRIZA CONFUSÃO."
- "MENOS PROMPT. MAIS DIREÇÃO."
- "IA NÃO CORRIGE FALTA DE PENSAMENTO."

**O que evitar:**
- "Descubra como...", "5 dicas para..." → tutorial
- "Transforme sua vida" → motivacional
- "Revolucionário", "A IA mais poderosa" → publicitário
- Ponto de exclamação `!` — usar ponto final `.` com peso

**Ponto vermelho:** sempre o último período de uma headline de tensão.
```tsx
<h1 className="font-display uppercase text-pb-ink ...">
  MAIS LUCRO<span className="text-pb-red">.</span>
</h1>
```
