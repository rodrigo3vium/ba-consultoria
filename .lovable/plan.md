

# Plano: /home-2 — Dark Academia Forest-Green

## Resumo

Criar uma nova pagina `/home-2` com a **mesma copy** da home atual (`BA.tsx`), mas com o estilo visual **Dark Academia verde-floresta** descrito no prompt. Todas as secoes, textos, dados e imagens permanecem identicos — apenas a identidade visual muda.

---

## Arquivos a Criar/Modificar

### 1. `src/pages/Home2.tsx` (novo)

Copia funcional da `BA.tsx` com as seguintes mudancas visuais:

**Paleta de cores (inline/Tailwind arbitrary values):**
- Fundo principal: `bg-[#0e1a0f]`
- Fundo secundario (secoes alternadas): `bg-[#162318]`
- Cards: `bg-[#1c2e1e]`
- Hover/bordas ativas: `border-[#2d4a30]`
- Acento dourado: `text-[#c9a227]`, `border-[#c9a227]`
- Texto principal: `text-[#f0e6d0]` (parchment)
- Texto secundario: `text-[#6b7d5a]` (muted)

**Tipografia (Google Fonts):**
- Titulos H1/H2: `font-['Playfair_Display']` weight 700
- Citacoes/subtitulos de impacto: `font-['IM_Fell_English'] italic`
- Corpo/labels/nav: `font-['Cormorant_Garamond']`
- Eyebrows/labels: uppercase, letter-spacing 5-6px, gold 70% opacidade

**Elementos visuais:**
- Grain noise overlay via pseudo-elemento CSS (SVG data URI, opacidade 4%)
- Divisores ornamentais com `✦` centralizado entre secoes
- Bordas 1px gold com 15-30% opacidade (hover 40%)
- `border-radius` maximo 4px (nenhum `rounded-2xl`)
- ZERO gradientes coloridos — cor solida
- CTAs: border-only style (sem fill), hover → fill gold + texto escuro, transicao 400ms
- Espacamento generoso: secoes com ~120-160px padding vertical

**Mapeamento secao por secao:**

| Secao atual (BA.tsx) | Adaptacao Dark Academia |
|---|---|
| Pro-Life Banner | Mesmo texto, `bg-[#162318]` com borda inferior gold/15% |
| Header | Substituir por header custom: "BA · CONSULTORIA" em Playfair, links em Cormorant uppercase, fundo `bg-[#162318]` sticky, borda inferior gold/20% |
| Hero | Fundo `#0e1a0f`, H1 em Playfair Display (palavra "clientes" em italic gold), sub em Cormorant, CTA border-only gold, linha vertical decorativa 1px gold |
| Founders | Fundo `#162318`, fotos com `grayscale(100%)`, nomes em Playfair, cargos em gold, bios em Cormorant |
| Pillars | Fundo `#0e1a0f`, cards `bg-[#1c2e1e]` com borda gold/10%, icones em gold, hover borda gold/40% |
| Technologies | Fundo `#162318`, mesmo grid, cards `bg-[#1c2e1e]`, bordas gold |
| Use Cases Carousel | Fundo `#0e1a0f`, cards adaptados ao estilo, badges em Cormorant uppercase |
| Clients | Fundo `#162318`, logos grayscale mantidos |
| FAQ | Fundo `#0e1a0f`, details/summary com bordas gold, chevron em gold |
| World Map | Fundo `#162318`, borda gold na imagem |
| Leaders/Mentors | Fundo `#0e1a0f`, fotos grayscale, nomes em Playfair, cargos em gold |
| Stats | Fundo `#162318`, numeros em gold (cor solida, sem gradiente) |
| Footer | Fundo `#0a1209`, logo "BA · CONSULTORIA" em Playfair gold, links em Cormorant, linha ornamental gold, assinatura em IM Fell italic |

**Grain overlay** (adicionado via `<style>` tag no componente):
```css
.dark-academia-grain::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,...");
}
```

**Fontes** (adicionadas via `<style>` tag no componente):
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=IM+Fell+English:ital@1&family=Cormorant+Garamond:wght@400;600&display=swap');
```

### 2. `src/App.tsx` (modificar)

- Importar `Home2` e adicionar rota `/home-2`

---

## Regras de implementacao

- Mesmos imports de imagens/assets da `BA.tsx`
- Mesmo `useEffect` para body padding/background (`#0e1a0f`)
- Nao usar Header/Footer globais (standalone, como `OCaminho.tsx`)
- Header e footer customizados inline no componente
- Todas as transicoes: ease, 300-500ms
- Mobile-first: grids viram 1 coluna, fontes com clamp()

