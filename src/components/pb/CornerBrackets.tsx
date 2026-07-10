/**
 * CornerBrackets — neutralizado na IDV SaaS v.03 (Product Editorial).
 *
 * Os cantos-em-L (brackets HUD) fazem parte da estética "Strategic HUD Editorial"
 * antiga e são explicitamente PROIBIDOS no design system SaaS (docs/design-system-saas.md).
 * A superfície premium SaaS usa cantos arredondados e bordas sutis (rounded-2xl,
 * border-white/[0.09]) no próprio container — não brackets técnicos sobrepostos.
 *
 * API pública preservada (mesmo nome, mesmas props, mesmo default export) para não
 * quebrar as ~40 páginas/componentes que ainda importam este arquivo. Renderiza um
 * visual mínimo: nada. Os parents continuam funcionando; apenas deixam de sobrepor
 * o ornamento HUD, ganhando a aparência limpa da IDV SaaS.
 */
interface CornerBracketsProps {
  color?: "cyan" | "ink";
  size?: number;
  offset?: number;
}

const CornerBrackets = (_props: CornerBracketsProps) => null;

export default CornerBrackets;
