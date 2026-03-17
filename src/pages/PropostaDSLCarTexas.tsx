import { useEffect } from "react";

const PropostaDSLCarTexas = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#f0ebe3";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        
        .dsl-page { font-family: 'DM Sans', sans-serif; background: #0a0a0a; color: #f0ebe3; line-height: 1.7; overflow-x: hidden; }
        
        @keyframes dsl-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dsl-fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dsl-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>

      <div className="dsl-page">
        {/* HERO */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "60px 24px",
            position: "relative",
            background: "radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(107,168,122,0.04) 0%, transparent 50%), #0a0a0a",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", opacity: 0.4 }} />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              border: "1px solid rgba(200,149,108,0.15)",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#e0b893",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "40px",
              animation: "dsl-fadeDown 0.8s ease both",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8956c", animation: "dsl-pulse-dot 2s infinite" }} />
            Proposta Exclusiva
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "24px",
              animation: "dsl-fadeUp 0.8s 0.2s ease both",
            }}
          >
            Estrutura para escalar
            <br />
            <span style={{ background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              sem perder controle
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#9a9590",
              maxWidth: "620px",
              marginBottom: "48px",
              fontWeight: 300,
              animation: "dsl-fadeUp 0.8s 0.4s ease both",
            }}
          >
            Proposta de estruturação do funil de captação, qualificação e agendamento para a <strong style={{ color: "#f0ebe3", fontWeight: 500 }}>DSL Car Texas</strong> — transformando demanda crescente em operação comercial funcional e escalável.
          </p>

          <div
            style={{
              display: "flex",
              gap: "32px",
              fontSize: "13px",
              color: "#6b6560",
              animation: "dsl-fadeUp 0.8s 0.6s ease both",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c8956c" }} />
              Proponente: Rodrigo Albuquerque
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c8956c" }} />
              Cliente: Guilherme Arcanjo
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c8956c" }} />
              BA Consultoria
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* SOBRE */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Sobre</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Quem está por trás desta proposta
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginTop: "40px" }} className="dsl-who-grid">
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #1a1510 0%, #2a221a 100%)",
                border: "1px solid rgba(200,149,108,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: 700, background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                RA
              </span>
              <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#6b6560" }}>BA Consultoria</span>
            </div>

            <div>
              <p style={{ color: "#9a9590", fontSize: "16px", fontWeight: 300, marginBottom: "16px" }}>
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p style={{ color: "#9a9590", fontSize: "16px", fontWeight: 300, marginBottom: "24px" }}>
                A Freedom Agency une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="dsl-stats-grid">
                {[
                  { num: "R$80M", label: "em vendas lideradas" },
                  { num: "100+", label: "empresas consultadas" },
                  { num: "R$500K", label: "investidos em mentoria" },
                  { num: "5x", label: "ROAS médio de clientes" },
                ].map((s) => (
                  <div key={s.num} style={{ padding: "16px", background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "12px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "#c8956c" }}>{s.num}</div>
                    <div style={{ fontSize: "12px", color: "#6b6560", marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* CONTEXTO */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Contexto</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Onde a DSL Car Texas está hoje
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            O negócio já validou mercado, oferta e posicionamento. A demanda está crescendo com força — impulsionada por conteúdo, autoridade no nicho e indicação.
          </p>

          <div style={{ marginTop: "40px", padding: "32px", background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderLeft: "3px solid #c8956c", borderRadius: "0 16px 16px 0" }}>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7 }}>
              A DSL Car Texas não depende de estoque físico, mas de um processo muito bem executado: entendimento do perfil do cliente, busca inteligente no inventário, curadoria dos veículos, inspeção presencial, confiança na recomendação e fechamento consultivo por ligação.
            </p>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginTop: "12px" }}>
              O principal gargalo agora não é gerar interesse — é <span style={{ color: "#e0b893", fontWeight: 500, fontStyle: "italic" }}>organizar, filtrar e transformar essa demanda em uma operação comercial funcional e escalável.</span>
            </p>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginTop: "12px" }}>
              O negócio já provou que vende. Agora precisa de estrutura para escalar sem perder qualidade no atendimento.
            </p>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <div style={{ background: "#111111", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Diagnóstico</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              O que mapeamos na nossa conversa
            </h2>
            <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
              Uma operação com fundações sólidas e gargalos claros que, uma vez resolvidos, destravam o próximo nível de escala.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "48px" }} className="dsl-diag-grid">
              {/* Pontos Fortes */}
              <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "16px", padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", fontSize: "14px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "#6ba87a" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(107,168,122,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>✦</span>
                  Pontos Fortes
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                  {[
                    "Oferta diferenciada e difícil de copiar",
                    "Autoridade crescente no nicho",
                    "Conteúdo com alto poder de atração",
                    "Forte confiança gerada no atendimento",
                    "Operação validada na prática",
                    "Ticket e margem que justificam investir em estrutura",
                    "Potencial real de escala",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, paddingLeft: "20px", position: "relative", lineHeight: 1.55 }}>
                      <span style={{ position: "absolute", left: 0, top: "1px", color: "#6ba87a", fontSize: "9px" }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gargalos */}
              <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "16px", padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", fontSize: "14px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "#a86b6b" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(168,107,107,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>▪</span>
                  Gargalos Atuais
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                  {[
                    "Excesso de mensagens chegando sem organização",
                    "Guilherme participa demais da triagem inicial",
                    "Ausência de agenda estruturada",
                    "Falta de processo comercial mapeado",
                    "Ausência de estrutura de dados para futuro CRM",
                    "Risco de perder oportunidade por falta de organização",
                    "Dependência excessiva do operacional manual",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, paddingLeft: "20px", position: "relative", lineHeight: 1.55 }}>
                      <span style={{ position: "absolute", left: 0, top: "2px", color: "#a86b6b", fontSize: "10px" }}>▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* OBJETIVO */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Objetivo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            O que este projeto vai resolver
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            Construir uma estrutura comercial e operacional que permita à DSL Car Texas transformar demanda em receita — com velocidade, simplicidade e eficiência.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginTop: "40px" }}>
            {[
              { num: "01", text: "Organizar os contatos que chegam pelo Instagram, WhatsApp e formulários" },
              { num: "02", text: "Filtrar automaticamente os leads com base no perfil ideal" },
              { num: "03", text: "Centralizar as informações estratégicas da operação" },
              { num: "04", text: "Agendar ligações nos melhores horários da rotina do Guilherme" },
              { num: "05", text: "Reduzir o volume de conversas improdutivas" },
              { num: "06", text: "Aumentar eficiência do atendimento e capacidade de fechamento" },
              { num: "07", text: "Preparar a operação para automação com IA e CRM" },
            ].map((obj) => (
              <div
                key={obj.num}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(200,149,108,0.15)",
                  borderRadius: "14px",
                  padding: "24px",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200,149,108,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,149,108,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#c8956c", marginBottom: "8px" }}>{obj.num}</div>
                <p style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, lineHeight: 1.55 }}>{obj.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INVESTIMENTO */}
        <div style={{ background: "#111111", padding: "100px 24px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Investimento</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              Proposta comercial
            </h2>
            <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
              Duas opções para momentos diferentes. Ambas resolvem o problema — a segunda já adiciona inteligência artificial à operação.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "48px" }} className="dsl-pricing-grid">
              {/* Opção 1 */}
              <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "20px", padding: "40px 32px", position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c8956c", marginBottom: "12px" }}>Opção 1</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, marginBottom: "8px" }}>Estruturação Inicial da Operação</h3>
                <p style={{ fontSize: "14px", color: "#6b6560", fontWeight: 300, marginBottom: "24px", lineHeight: 1.55 }}>
                  Resolve de forma prática e objetiva o problema atual, criando uma estrutura enxuta, funcional e pronta para rodar.
                </p>

                {[
                  { label: "Investimento", value: "R$ 6.000", cls: "" },
                  { label: "Formato", value: "Pagamento único", cls: "small" },
                  { label: "Prazo padrão", value: "15 dias úteis", cls: "small" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid rgba(200,149,108,0.15)" }}>
                    <span style={{ fontSize: "14px", color: "#9a9590", fontWeight: 400 }}>{row.label}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: row.cls === "small" ? "16px" : "20px", fontWeight: row.cls === "small" ? 500 : 700, color: row.cls === "small" ? "#9a9590" : "#f0ebe3" }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "20px", padding: "8px 16px", borderRadius: "8px", background: "rgba(200,149,108,0.08)", border: "1px solid rgba(200,149,108,0.2)", fontSize: "12px", color: "#e0b893", fontWeight: 500 }}>
                  ⚡ Taxa de urgência: +R$ 4.000 → Total R$ 10.000 — entrega até sexta para rodar na segunda
                </div>

                <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(200,149,108,0.15)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6560", marginBottom: "14px" }}>Entregáveis</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                    {[
                      "Landing page com VSL",
                      "Formulário de qualificação",
                      "Sistema de agendamento",
                      "Estrutura integrada e automatizada",
                      "Base de coleta de dados para futura transição para CRM",
                      "Mapeamento do processo comercial",
                    ].map((item) => (
                      <li key={item} style={{ fontSize: "13px", color: "#9a9590", fontWeight: 300, paddingLeft: "22px", position: "relative", lineHeight: 1.5 }}>
                        <span style={{ position: "absolute", left: 0, top: "2px", color: "#c8956c", fontSize: "9px" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Opção 2 — Featured */}
              <div style={{ background: "linear-gradient(160deg, #1f1a15 0%, #1a1a1a 100%)", border: "1px solid #c8956c", borderRadius: "20px", padding: "40px 32px", position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}>
                <div style={{ position: "absolute", top: "18px", right: "-30px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", color: "#0a0a0a", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", padding: "5px 38px", transform: "rotate(45deg)" }}>RECOMENDADO</div>

                <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c8956c", marginBottom: "12px" }}>Opção 2</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, marginBottom: "8px" }}>Estruturação com IA</h3>
                <p style={{ fontSize: "14px", color: "#6b6560", fontWeight: 300, marginBottom: "24px", lineHeight: 1.55 }}>
                  Toda a estrutura da Opção 1, mais uma camada de inteligência e automação com IA para tornar a operação ainda mais eficiente e escalável.
                </p>

                {[
                  { label: "Investimento", value: "R$ 10.000", cls: "" },
                  { label: "Manutenção mensal", value: "R$ 1.000/mês", cls: "small" },
                  { label: "Prazo padrão", value: "15 dias úteis", cls: "small" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid rgba(200,149,108,0.15)" }}>
                    <span style={{ fontSize: "14px", color: "#9a9590", fontWeight: 400 }}>{row.label}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: row.cls === "small" ? "16px" : "20px", fontWeight: row.cls === "small" ? 500 : 700, color: row.cls === "small" ? "#9a9590" : "#f0ebe3" }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "20px", padding: "8px 16px", borderRadius: "8px", background: "rgba(200,149,108,0.08)", border: "1px solid rgba(200,149,108,0.2)", fontSize: "12px", color: "#e0b893", fontWeight: 500 }}>
                  ⚡ Taxa de urgência: +R$ 4.000 → Total R$ 14.000 + R$ 1.000/mês — entrega até sexta
                </div>

                <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(200,149,108,0.15)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6560", marginBottom: "14px" }}>Entregáveis</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                    {[
                      "Tudo da Opção 1 incluso",
                      "Implementação de agente com IA no processo",
                      "Automação inteligente de etapas operacionais",
                      "Apoio na triagem e organização dos leads",
                      "Operação preparada para escala",
                      "Manutenção mensal do agente: funcionamento, ajustes e evolução",
                    ].map((item) => (
                      <li key={item} style={{ fontSize: "13px", color: "#9a9590", fontWeight: 300, paddingLeft: "22px", position: "relative", lineHeight: 1.5 }}>
                        <span style={{ position: "absolute", left: 0, top: "2px", color: "#c8956c", fontSize: "9px" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            padding: "120px 24px",
            background: "radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), #0a0a0a",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Próximo passo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Vamos estruturar a DSL para o próximo nível?
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: "#9a9590", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            Guilherme, teu negócio já passou da fase da ideia. Tu já construiu oferta, autoridade, confiança e demanda. O que está faltando agora não é mais validação — é estrutura para a operação acompanhar o nível do que você já construiu.
          </p>
          <a
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 48px",
              background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)",
              color: "#0a0a0a",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(200,149,108,0.25)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Falar com Rodrigo →
          </a>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "40px 24px", borderTop: "1px solid rgba(200,149,108,0.15)", fontSize: "13px", color: "#6b6560" }}>
          BA Consultoria © 2026 — Proposta válida por 7 dias
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .dsl-who-grid { grid-template-columns: 1fr !important; }
          .dsl-who-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .dsl-diag-grid { grid-template-columns: 1fr !important; }
          .dsl-pricing-grid { grid-template-columns: 1fr !important; }
          .dsl-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default PropostaDSLCarTexas;
