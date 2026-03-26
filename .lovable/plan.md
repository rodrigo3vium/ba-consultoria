

## Plan: Add "O Outro Lado da Moeda" Section to Método Stark

### Summary
Create a new component for the opportunity/success stories section and insert it between the ApocalypseSection and MechanismSection on the Método Stark page. Adapt the HTML content to use the Stark IDV (ARC blue instead of green, Stark Gold, Chakra Petch/IBM Plex Mono/Exo 2 fonts).

### Color mapping (HTML → Stark IDV)
- Green (#34D399) → ARC (#38BDF8)
- Green-bright (#4ADE80) → ARC_BRIGHT (#7DD3FC)
- Gold (#D4A853) → STARK_GOLD (#F59E0B)
- Cream (#F5F0E8) → IVORY (#F0F6FF)
- Cream-muted (#B8B0A0) → TEXT_COLOR (#C8D6E5)
- bg-dark (#0a0806) → VOID (#060A12)
- bg-card (#0d1210) → SURFACE (#0C1220)
- bg-card-alt (#101410) → HUD_DARK (#111A2E)
- JetBrains Mono → IBM Plex Mono
- DM Sans → Exo 2
- Playfair Display → Chakra Petch

### New file
`src/components/metodostark/OpportunitySection.tsx`

Contains all the content from the HTML:
- Section header with eyebrow "O outro lado da moeda" + live dot
- Title: "Mas pra quem sabe usar, as oportunidades são infinitas"
- Subtitle paragraph
- 2 hero story cards (Maor Shlomo $80M, Danny Postma $300K/mês)
- 6 smaller story cards (QuickTables, Q Group, ShiftNex, Nick Dobos, Midjourney, Lumoo)
- Data strip with 4 stats (36%, 44%, 95%, 2026)
- Dario Amodei quote block
- CTA block with button linking to handleCTA

### Edit: `src/pages/MetodoStark.tsx`
- Import OpportunitySection
- Insert `<OpportunitySection onCTA={handleCTA} />` between ApocalypseSection and MechanismSection (around line 326), with gradient separators

