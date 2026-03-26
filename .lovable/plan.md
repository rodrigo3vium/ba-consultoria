

## Plan: Add Sections 5-7 + Pricing + Final CTA to Método Stark

### Summary
Create a new component with 5 sections (Para Quem É, Para Quem Não É, O Que Você Recebe, Pricing, Final CTA) and insert it after MechanismSection in MetodoStark.tsx.

### New file: `src/components/metodostark/ClosingSection.tsx`

Using the same Stark IDV constants (VOID, SURFACE, HUD_DARK, ARC, STARK_GOLD, IVORY, etc.) and fonts (Chakra Petch, IBM Plex Mono, Exo 2).

**Section 05 — Para Quem É** (bg: SURFACE)
- Eyebrow + H2 "Para quem decidiu sair do jogo antigo"
- Intro text: "não foi feito para curiosos..."
- 5 checkmark items (ARC-colored checks) in HUD_DARK cards
- "Você não precisa" block (3 items)
- Closing statement about "pensar como arquiteto"

**Section 06 — Para Quem Não É** (bg: VOID)
- Eyebrow + H2 "Para quem ainda está no modo consumo"
- 5 X-mark items (red/dim colored) 
- "atalhos / hacks / dinheiro fácil" callout
- "Aqui você aprende a construir" closing

**Section 07 — O Que Você Recebe** (bg: SURFACE)
- Eyebrow + H2
- 7 deliverable items with ARC checkmarks in a list/card layout
- Each with title + subtitle

**Pricing Block** (bg: VOID)
- Direct response copy about old model costs
- "1 único contrato pode pagar todo o investimento" highlight
- Price card: R$497 à vista / 12x R$49,70 (STARK_GOLD accent)
- 3 comparison items ("menos que...")

**Final CTA** (bg: VOID)
- "Você pode continuar..." vs "Ou pode..." contrast
- Big CTA button → handleCTA("final-stark")

### Edit: `src/pages/MetodoStark.tsx`
- Import ClosingSection
- Insert `<ClosingSection onCTA={handleCTA} />` after MechanismSection (line 336), before the existing CTA Final section
- Remove or keep the existing simple CTA Final (replace it since ClosingSection has its own)

