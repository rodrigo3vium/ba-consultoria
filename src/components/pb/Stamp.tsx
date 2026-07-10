interface StampProps {
  children: string;
  color?: "cyan" | "red";
}

/**
 * Stamp — badge/pill sutil no padrão SaaS IDV v.03.
 *
 * Antes era um selo HUD (mono + dot com glow ciano/vermelho). Agora é um
 * pill pequeno, arredondado e discreto, com dot em gradiente ciano→violeta.
 *
 * A prop `color` é mantida por compatibilidade de API (~40 páginas importam
 * este componente), mas o acento vermelho da IDV antiga não existe mais —
 * ambos os valores renderizam o mesmo gradiente da marca.
 */
const Stamp = ({ children, color = "cyan" }: StampProps) => {
  void color;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">
      <span
        className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet"
        aria-hidden
      />
      {children}
    </span>
  );
};

export default Stamp;
