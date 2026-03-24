

## Plan: Create Clinica Supreme Proposal Page

### What
Create a new proposal page at `/propostas/clinica-supreme` based on the standard template (`PropostaPadrao`), keeping the fixed "Quem esta por tras" and "Mentores" sections, and replacing all dynamic sections with the Clinica Supreme content.

### Key differences from template
This proposal has a unique structure compared to previous ones:
- **Hero**: Custom with 4 meta items (Preparado para, Preparado por, Data, Ciclo inicial) and gold accent color `#C6A84E` (slightly different from the standard `#c8956c`)
- **Contexto**: Long-form context block about the clinic's operation
- **Diagnostico**: 6 diagnostic cards (not the 2-column strengths/weaknesses format) with red/yellow indicators
- **Visao**: Comparison table (Hoje vs Com a implementacao) -- new section type
- **Plano de Implementacao**: 4 phases with detailed bullet lists -- replaces the standard "Objetivo" section
- **Alinhamento de Expectativas**: "What this is NOT" section with 3 cards
- **Investimento**: 2 options (R$5,000 co-construction vs R$8,000 hands-on recommended), with feature lists using checkmarks
- **Diferencial**: 4 cards with icons explaining why the model works
- **Proximos Passos**: 6 numbered steps
- **CTA**: Custom closing message

### Implementation

1. **Create `src/pages/PropostaClinicaSupreme.tsx`**
   - Copy standard template structure (imports, useEffect, "Quem esta por tras", "Mentores" sections)
   - Use `cs-` prefix for CSS animations (like `dsl-` for DSL)
   - Implement all dynamic sections from the provided HTML, converted to inline React styles
   - Keep gold color as `#C6A84E` per the design (slightly warmer than standard)
   - WhatsApp button pointing to `5511999718595`
   - Footer: "BA Consultoria" (not "Freedom Agency")
   - Replace any "Freedom Agency" references with "BA Consultoria"

2. **Update `src/App.tsx`**
   - Add import for `PropostaClinicaSupreme`
   - Add route `/propostas/clinica-supreme`

### Sections order in the page
1. Hero (Proposta Comercial badge, title, subtitle, 4 meta items)
2. Quem esta por tras (standard/fixed)
3. Mentores (standard/fixed)
4. Contexto (4 paragraphs about Supreme)
5. Diagnostico (6 cards grid)
6. Visao (comparison table)
7. Plano de Implementacao (4 phase blocks)
8. Alinhamento de Expectativas (3 "not" cards)
9. Investimento (2 option cards with pricing)
10. Diferencial (4 cards)
11. Proximos Passos (6 numbered steps)
12. CTA
13. Footer

