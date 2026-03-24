

## Plan: Update Clinica Supreme Proposal — Phases, Investment & Steps

### Changes needed

Comparing the new HTML with the current code, three sections changed:

**1. Phases (lines 59-115)** — Changed from 4 phases to 3 phases with updated content:
- Phase 1: "Diagnóstico + Engenharia de Contexto" / "Entender a operação antes de construir qualquer coisa" (4 items)
- Phase 2: "MVP no Ar" / "Primeiro protótipo funcional rodando na operação" (3 items)
- Phase 3: "Substituição da Stack Atual" / "Migração e consolidação da nova estrutura operacional" (4 items)
- Section subtitle changes from "Quatro fases, resultado incremental" to "Três fases, resultado incremental"
- Section desc updates slightly

**2. Investment options (lines 407-466)** — Updated names and deliverables:
- Option 1: "Consultoria + Direcionamento" (was "Consultoria Aplicada + Co-construção"), new description and 6 items
- Option 2: "Consultoria + Implementação" (was "Consultoria Aplicada + Hands-on"), new description and 6 items
- Updated closing note text + added extra line about ownership

**3. Próximos Passos (lines 512-526)** — Changed from 6 steps to 5 steps with updated text

### Technical implementation

Edit `src/pages/PropostaClinicaSupreme.tsx`:
- Replace the `phases` array (lines 59-115) with the new 3-phase data
- Update the "Quatro fases" text to "Três fases" in the JSX
- Replace Option 1 name, description, and items list
- Replace Option 2 name, description, and items list  
- Update the closing investment note paragraph
- Replace the steps array with the new 5 steps

