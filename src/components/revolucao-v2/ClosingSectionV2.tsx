import { Check, X, ArrowRight } from "lucide-react";

const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";
const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const forYouItems = [
  "Dono de agência ou profissional liberal que capta clientes via conteúdo e digital",
  "Trabalha 50–60h por semana e sente que é o gargalo do próprio negócio",
  "Sabe que precisa usar IA, mas não sabe COMO transformar em resultado real",
  "Já testou ChatGPT, talvez outras ferramentas, e não implementou nada de verdade",
  "Produz conteúdo esporadicamente mas nunca consegue manter consistência",
  "Quer previsibilidade pra crescer, não mais uma ferramenta pra testar",
];

const notForYouItems = [
  "Quer aprender IA por curiosidade, sem intenção de aplicar no negócio",
  "Busca um curso teórico sobre tendências e futuro da tecnologia",
  "Quer se tornar programador e entender cada detalhe técnico",
  "Espera resultado sem implementar (o curso entrega método, não mágica)",
];

const deliverables = [
  {
    title: "8 módulos gravados (27 aulas)",
    sub: "Do diagnóstico do negócio até sistemas funcionando.",
  },
  {
    title: "Método Capital completo",
    sub: "AVEE, ICE Score, frameworks de priorização.",
  },
  {
    title: "Templates e skills prontas",
    sub: "Conteúdo, análise de calls, relatórios, delegação.",
  },
  {
    title: "Comunidade de praticantes",
    sub: "Troca com outros empresários implementando — não um grupo de estudantes.",
  },
  {
    title: "Acesso por 1 ano",
    sub: "Incluindo atualizações. O campo muda toda semana — o curso também.",
  },
];

const sistemasShowcase = [
  {
    num: "01",
    title: "Produção de Conteúdo",
    body: "Crie uma skill que gera roteiros, posts e legendas alinhados com sua voz e sua persona. Saia da inconsistência de conteúdo. Produza o equivalente a uma semana em uma tarde.",
    tags: ["Conteúdo", "Consistência"],
    stat: "1 tarde = 1 semana",
  },
  {
    num: "02",
    title: "Análise de Calls e Propostas",
    body: "Envie uma gravação e receba um relatório com pontos fortes, fracos, objeções não tratadas e sugestões de melhoria. Pare de adivinhar por que o lead não fechou.",
    tags: ["Vendas", "Análise"],
    stat: "1 gravação → 1 relatório",
  },
  {
    num: "03",
    title: "Relatórios Automáticos pra Clientes",
    body: "Gere relatórios de resultado com dados reais, linguagem clara e apresentação profissional. Seu cliente enxerga valor. Você retém mais.",
    tags: ["Retenção", "Entrega"],
    stat: "Manual → Automático",
  },
];

interface Props {
  onCTA: (location: string) => void;
}

const ClosingSectionV2 = ({ onCTA }: Props) => {
  return (
    <>
      {/* SEÇÃO — Sistemas Reais (substitui SystemsShowcase) */}
      <section style={{ backgroundColor: SURFACE, paddingTop: 100, paddingBottom: 100 }} className="px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div style={{ width: 32, height: 1, background: ARC }} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: ARC,
                }}
              >
                06 — Sistemas reais
              </span>
              <div
                className="animate-pulse"
                style={{ width: 6, height: 6, background: ARC_BRIGHT, borderRadius: "50%", boxShadow: "0 0 10px rgba(56,189,248,0.5)" }}
              />
            </div>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: IVORY,
                maxWidth: 700,
              }}
            >
              Exemplos do que você vai implementar{" "}
              <em style={{ color: ARC, fontStyle: "italic" }}>no SEU negócio</em>
            </h2>
            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "1rem",
                color: TEXT_COLOR,
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 580,
              }}
            >
              Esses não são projetos teóricos. São sistemas que você constrói durante o curso e que começam a trabalhar pra você no dia seguinte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sistemasShowcase.map((s, i) => (
              <div
                key={i}
                className="transition-all duration-300"
                style={{
                  backgroundColor: HUD_DARK,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                  borderRadius: 14,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: FONT_MONO, fontSize: "0.6rem", color: ARC, letterSpacing: "0.15em", opacity: 0.7 }}>
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: "0.55rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: STARK_GOLD,
                      background: "rgba(245,158,11,0.08)",
                      border: "0.5px solid rgba(245,158,11,0.15)",
                      padding: "3px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {s.stat}
                  </span>
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.1rem", fontWeight: 700, color: IVORY, lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: "0.85rem", color: TEXT_COLOR, lineHeight: 1.65, fontWeight: 300, flex: 1 }}>
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: "0.5rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: ARC,
                        background: "rgba(56,189,248,0.08)",
                        padding: "3px 8px",
                        borderRadius: 4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: DIM, fontWeight: 300, marginBottom: 24 }}>
              E esses são só os exemplos dos módulos práticos. Com o Método Capital, você aprende a identificar e construir os sistemas certos pro{" "}
              <strong style={{ color: TEXT_COLOR }}>SEU</strong> negócio.
            </p>
            <button
              onClick={() => onCTA("sistemas-showcase")}
              className="inline-flex items-center gap-2 transition-all duration-300 font-semibold"
              style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: VOID, background: ARC, padding: "14px 36px", borderRadius: 8, border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = ARC_BRIGHT; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = ARC; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Quero implementar isso no meu negócio
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 08 — Para quem é */}
      <section style={{ backgroundColor: VOID, paddingTop: 100, paddingBottom: 100 }} className="px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", color: DIM, letterSpacing: "0.25em", textTransform: "uppercase" }}>
              08 — Para quem é
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, color: IVORY }}>
              Para quem <span style={{ color: ARC }}>trabalha demais</span> e fatura de menos
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: "1rem", color: TEXT_COLOR, lineHeight: 1.7, fontWeight: 300, maxWidth: 560, margin: "0 auto" }}>
              A Revolução foi feita pra um perfil muito específico de empresário:
            </p>
          </div>

          <div className="space-y-3">
            {forYouItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 transition-all duration-300"
                style={{ backgroundColor: HUD_DARK, borderRadius: 10, border: `0.5px solid ${BORDER_NORMAL}` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = BORDER_HOVER; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER_NORMAL; }}
              >
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ARC }} />
                <span style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontSize: "1rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 pt-4">
            <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }} />
            <p style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", color: DIM, textTransform: "uppercase", letterSpacing: "0.2em" }}>
              Você não precisa:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["saber programar", "ter experiência com IA", "ter equipe técnica"].map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: FONT_MONO,
                    color: TEXT_COLOR,
                    fontSize: "0.85rem",
                    backgroundColor: HUD_DARK,
                    borderRadius: 8,
                    border: `0.5px solid ${BORDER_NORMAL}`,
                    padding: "8px 20px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="space-y-2 pt-4">
              <p style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontSize: "1rem", fontWeight: 300 }}>
                Você só precisa de uma coisa:
              </p>
              <p style={{ fontFamily: FONT_DISPLAY, color: ARC, fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 700 }}>
                Estar disposto a parar de usar IA como brinquedo e começar a usar como sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 09 — Para quem não é */}
      <section style={{ backgroundColor: SURFACE, paddingTop: 100, paddingBottom: 100 }} className="px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", color: DIM, letterSpacing: "0.25em", textTransform: "uppercase" }}>
              09 — Para quem não é
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, color: IVORY }}>
              Pra quem ainda está no <span style={{ color: "#DC2626" }}>modo consumo</span>
            </h2>
          </div>

          <div className="space-y-3">
            <p style={{ fontFamily: FONT_MONO, fontSize: "0.65rem", color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.15em", textAlign: "center", marginBottom: 8 }}>
              Isso NÃO é para você que:
            </p>
            {notForYouItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5"
                style={{ backgroundColor: "rgba(220,38,38,0.04)", borderRadius: 10, border: "0.5px solid rgba(220,38,38,0.12)" }}
              >
                <X className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#DC2626" }} />
                <span style={{ fontFamily: FONT_BODY, color: DIM, fontSize: "1rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 10 — O que você recebe */}
      <section style={{ backgroundColor: VOID, paddingTop: 100, paddingBottom: 100 }} className="px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", color: DIM, letterSpacing: "0.25em", textTransform: "uppercase" }}>
              10 — O que você recebe
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, color: IVORY }}>
              Tudo o que você precisa pra{" "}
              <span style={{ color: ARC }}>capitalizar essa janela</span>
            </h2>
          </div>

          <div className="space-y-4">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 transition-all duration-300"
                style={{ backgroundColor: HUD_DARK, borderRadius: 10, border: `0.5px solid ${BORDER_NORMAL}` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = BORDER_HOVER; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER_NORMAL; }}
              >
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: `${ARC}15` }}
                >
                  <Check className="w-4 h-4" style={{ color: ARC }} />
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>{d.title}</p>
                  <p className="text-sm mt-1" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>{d.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bônus */}
          <div
            style={{
              backgroundColor: HUD_DARK,
              borderRadius: 14,
              border: `0.5px solid ${STARK_GOLD}30`,
              boxShadow: `0 0 40px rgba(245,158,11,0.04)`,
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p style={{ fontFamily: FONT_MONO, fontSize: "0.65rem", color: STARK_GOLD, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Bônus — decisão imediata
            </p>
            <p style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300, fontSize: "1rem" }}>
              Para os primeiros alunos: 1 call individual de implementação com o Rodrigo. Ele olha pro seu negócio, ajuda a priorizar, e garante que você saia da call com clareza total sobre{" "}
              <strong style={{ color: STARK_GOLD }}>o que construir primeiro.</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 11 — Pricing */}
      <section style={{ backgroundColor: SURFACE, paddingTop: 100, paddingBottom: 100 }} className="px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          {/* ROI argument */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, color: IVORY }}>
              Quanto custa <span style={{ color: "#DC2626" }}>NÃO agir?</span>
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
              Se você cobra R$50 por hora do seu tempo e o Método Capital te economiza 10 horas por semana, isso são{" "}
              <strong style={{ color: IVORY }}>R$2.000 por mês em tempo recuperado</strong>. O investimento se paga em menos de 4 semanas.
            </p>
            <p style={{ fontFamily: FONT_BODY, fontSize: "1rem", color: DIM, lineHeight: 1.8, fontWeight: 300 }}>
              E isso é só a economia de tempo. Sem contar os sistemas de conteúdo que atraem mais clientes, os relatórios que retêm, as análises que melhoram seu comercial.
            </p>
            <p style={{ fontFamily: FONT_DISPLAY, fontSize: "1.1rem", color: ARC, fontWeight: 600 }}>
              A pergunta real não é "quanto custa". É "quanto está custando cada mês sem sistema".
            </p>
          </div>

          {/* Price card */}
          <div
            className="max-w-md mx-auto p-10 text-center space-y-6"
            style={{
              backgroundColor: HUD_DARK,
              borderRadius: 14,
              border: `0.5px solid ${STARK_GOLD}40`,
              boxShadow: `0 0 60px rgba(245,158,11,0.06)`,
            }}
          >
            <p style={{ fontFamily: FONT_MONO, fontSize: "0.65rem", color: STARK_GOLD, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Investimento
            </p>
            <p style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 300 }}>
              Acesso completo à Revolução
            </p>
            <div>
              <p style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, color: IVORY, lineHeight: 1 }}>
                R$1.997
              </p>
              <p style={{ fontFamily: FONT_MONO, fontSize: "0.8rem", color: DIM, marginTop: 8 }}>
                à vista ou{" "}
                <span style={{ color: STARK_GOLD }}>12× de R$197</span>
              </p>
            </div>

            <button
              onClick={() => onCTA("pricing")}
              className="w-full inline-flex items-center justify-center gap-3 uppercase tracking-[2px] px-8 py-4 mt-4 transition-all duration-300 font-semibold"
              style={{
                fontFamily: FONT_MONO,
                color: VOID,
                backgroundColor: STARK_GOLD,
                borderRadius: 6,
                fontSize: "0.8rem",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FBBF24";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,158,11,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = STARK_GOLD;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Quero o Método Capital
              <ArrowRight className="w-4 h-4" />
            </button>

            <p style={{ fontFamily: FONT_MONO, fontSize: "0.65rem", color: DIM, marginTop: 8 }}>
              7 dias de garantia. Se não servir, devolvo tudo. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* CTA Final */}
      <section
        className="relative px-6"
        style={{ paddingTop: 100, paddingBottom: 100, backgroundColor: VOID }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)" }}
        />

        <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-4">
            <p style={{ fontFamily: FONT_BODY, color: DIM, fontSize: "1.05rem", fontWeight: 300 }}>
              Essa janela de arbitragem está aberta agora.
            </p>
            <p style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
              Você pode continuar trabalhando 60 horas por semana, usando ChatGPT pra reescrever texto e esperando que o próximo cliente apareça por indicação.
            </p>
          </div>

          <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }} />

          <div className="space-y-4">
            <p style={{ fontFamily: FONT_BODY, color: DIM, fontSize: "1.05rem", fontWeight: 300 }}>
              Ou pode:
            </p>
            <p style={{ fontFamily: FONT_DISPLAY, color: ARC, fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
              aprender a colocar IA pra trabalhar pelo seu negócio — com método, com prioridade, com retorno real.
            </p>
            <p style={{ fontFamily: FONT_BODY, color: DIM, fontSize: "0.95rem", fontWeight: 300 }}>
              A janela não espera. Os seus concorrentes também não.
            </p>
          </div>

          <button
            onClick={() => onCTA("final-cta")}
            className="inline-flex items-center gap-3 uppercase tracking-[2px] px-10 py-5 transition-all duration-300 font-semibold"
            style={{
              fontFamily: FONT_MONO,
              color: VOID,
              backgroundColor: ARC,
              borderRadius: 6,
              fontSize: "0.85rem",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ARC_BRIGHT;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ARC;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Quero fazer parte dA Revolução
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

export default ClosingSectionV2;
