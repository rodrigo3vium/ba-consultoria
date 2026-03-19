import { useEffect } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.jpg";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.jpg";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.png";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PropostaPadrao = () => {
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
        
        .prop-page { font-family: 'DM Sans', sans-serif; background: #0a0a0a; color: #f0ebe3; line-height: 1.7; overflow-x: hidden; }
        
        @keyframes prop-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes prop-fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes prop-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>

      <div className="prop-page">
        {/* ========== HERO ========== */}
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

          {/* Logo do cliente — substituir src e alt */}
          {/* <img src={clientLogo} alt="Nome do Cliente" style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%", marginBottom: "32px", animation: "prop-fadeDown 0.8s ease both" }} /> */}

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
              animation: "prop-fadeDown 0.8s ease both",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8956c", animation: "prop-pulse-dot 2s infinite" }} />
            Proposta Exclusiva
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "24px",
              animation: "prop-fadeUp 0.8s 0.2s ease both",
            }}
          >
            {/* Título principal da proposta */}
            Título da proposta
            <br />
            <span style={{ background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              destaque dourado
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#9a9590",
              maxWidth: "620px",
              marginBottom: "48px",
              fontWeight: 300,
              animation: "prop-fadeUp 0.8s 0.4s ease both",
            }}
          >
            {/* Subtítulo — descrever a proposta em 1-2 frases */}
            Descrição breve da proposta para o <strong style={{ color: "#f0ebe3", fontWeight: 500 }}>Nome do Cliente</strong> — objetivo principal do projeto.
          </p>

          <div
            style={{
              display: "flex",
              gap: "32px",
              fontSize: "13px",
              color: "#6b6560",
              animation: "prop-fadeUp 0.8s 0.6s ease both",
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
              Cliente: Nome do Cliente
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c8956c" }} />
              BA Consultoria
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== QUEM ESTÁ POR TRÁS (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Sobre</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Quem está por trás desta proposta
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginTop: "40px" }} className="prop-who-grid">
            <div style={{ width: "100%", aspectRatio: "1", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(200,149,108,0.15)" }}>
              <img src={rodrigoPhoto} alt="Rodrigo Albuquerque" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div>
              <p style={{ color: "#9a9590", fontSize: "16px", fontWeight: 300, marginBottom: "16px" }}>
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p style={{ color: "#9a9590", fontSize: "16px", fontWeight: 300, marginBottom: "24px" }}>
                A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="prop-stats-grid">
                {[
                  { num: "+R$130M", label: "gerados em vendas" },
                  { num: "100+", label: "consultorias realizadas" },
                  { num: "+7", label: "países atendidos" },
                  { num: "+54", label: "avaliações 5 estrelas" },
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

        {/* ========== MENTORES (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px", textAlign: "center" }}>Referências</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "16px", lineHeight: 1.25, textAlign: "center" }}>
            Nossos Mentores e Professores
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300, textAlign: "center", margin: "0 auto 48px" }}>
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }} className="prop-mentors-grid">
            {[
              { name: "Diego Barreto", role: "CEO - iFood", photo: diegoBarretoPhoto, bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.' },
              { name: "Pedro Somma", role: "Ex-COO - 99 Taxi", photo: pedroSommaPhoto, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
              { name: "Luis Vabo Jr.", role: "Ex-diretor - Stone", photo: vaboPhoto, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
              { name: "João Olivério", role: "CEO - Sales As A System", photo: joaoOliverioPhoto, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
              { name: "José Diogo C. Rodrigues", role: "CMO Latam - Tinder", photo: joseDiogoPhoto, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
            ].map((m) => (
              <div
                key={m.name}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(200,149,108,0.15)",
                  borderRadius: "16px",
                  padding: "20px",
                  textAlign: "center",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200,149,108,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,149,108,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 12px", border: "1px solid rgba(200,149,108,0.2)" }}>
                  <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#f0ebe3", marginBottom: "4px" }}>{m.name}</h3>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c8956c", marginBottom: "8px" }}>{m.role}</p>
                <p style={{ fontSize: "12px", color: "#6b6560", fontWeight: 300, lineHeight: 1.5 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== CONTEXTO (DINÂMICO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Contexto</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Onde o [Nome do Cliente] está hoje
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            [Descrição do momento atual do cliente e do negócio.]
          </p>

          <div style={{ marginTop: "40px", padding: "32px", background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderLeft: "3px solid #c8956c", borderRadius: "0 16px 16px 0" }}>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7 }}>
              [Parágrafo detalhando o contexto do cliente — como funciona o negócio, o modelo, o momento atual.]
            </p>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginTop: "12px" }}>
              O principal gargalo agora não é [problema superficial] — é <span style={{ color: "#e0b893", fontWeight: 500, fontStyle: "italic" }}>[problema real que a proposta resolve].</span>
            </p>
          </div>
        </section>

        {/* ========== DIAGNÓSTICO (DINÂMICO) ========== */}
        <div style={{ background: "#111111", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Diagnóstico</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              O que mapeamos na nossa conversa
            </h2>
            <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
              [Resumo do diagnóstico.]
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "48px" }} className="prop-diag-grid">
              {/* Pontos Fortes */}
              <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "16px", padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", fontSize: "14px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "#6ba87a" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(107,168,122,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>✦</span>
                  Pontos Fortes
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                  {[
                    "Ponto forte 1",
                    "Ponto forte 2",
                    "Ponto forte 3",
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
                    "Gargalo 1",
                    "Gargalo 2",
                    "Gargalo 3",
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

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== OBJETIVO (DINÂMICO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Objetivo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            O que este projeto vai resolver
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            [Resumo do objetivo principal.]
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginTop: "40px" }}>
            {[
              { num: "01", text: "Objetivo 1" },
              { num: "02", text: "Objetivo 2" },
              { num: "03", text: "Objetivo 3" },
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

        {/* ========== INVESTIMENTO (DINÂMICO) ========== */}
        <div style={{ background: "#111111", padding: "100px 24px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Investimento</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              Proposta comercial
            </h2>
            <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
              [Descrição das opções de investimento.]
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "48px" }} className="prop-pricing-grid">
              {/* Opção 1 */}
              <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "20px", padding: "40px 32px", position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c8956c", marginBottom: "12px" }}>Opção 1</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, marginBottom: "8px" }}>[Nome da Opção 1]</h3>
                <p style={{ fontSize: "14px", color: "#6b6560", fontWeight: 300, marginBottom: "24px", lineHeight: 1.55 }}>
                  [Descrição breve da opção 1.]
                </p>

                {[
                  { label: "Investimento", value: "R$ X.XXX", cls: "" },
                  { label: "Formato", value: "Pagamento único", cls: "small" },
                  { label: "Prazo padrão", value: "XX dias úteis", cls: "small" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid rgba(200,149,108,0.15)" }}>
                    <span style={{ fontSize: "14px", color: "#9a9590", fontWeight: 400 }}>{row.label}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: row.cls === "small" ? "16px" : "20px", fontWeight: row.cls === "small" ? 500 : 700, color: row.cls === "small" ? "#9a9590" : "#f0ebe3" }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(200,149,108,0.15)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6560", marginBottom: "14px" }}>Entregáveis</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                    {[
                      "Entregável 1",
                      "Entregável 2",
                      "Entregável 3",
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
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, marginBottom: "8px" }}>[Nome da Opção 2]</h3>
                <p style={{ fontSize: "14px", color: "#6b6560", fontWeight: 300, marginBottom: "24px", lineHeight: 1.55 }}>
                  [Descrição breve da opção 2.]
                </p>

                {[
                  { label: "Investimento", value: "R$ XX.XXX", cls: "" },
                  { label: "Manutenção mensal", value: "R$ X.XXX/mês", cls: "small" },
                  { label: "Prazo padrão", value: "XX dias úteis", cls: "small" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid rgba(200,149,108,0.15)" }}>
                    <span style={{ fontSize: "14px", color: "#9a9590", fontWeight: 400 }}>{row.label}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: row.cls === "small" ? "16px" : "20px", fontWeight: row.cls === "small" ? 500 : 700, color: row.cls === "small" ? "#9a9590" : "#f0ebe3" }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(200,149,108,0.15)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6560", marginBottom: "14px" }}>Entregáveis</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                    {[
                      "Tudo da Opção 1 incluso",
                      "Entregável adicional 1",
                      "Entregável adicional 2",
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

        {/* ========== CTA (DINÂMICO) ========== */}
        <div
          style={{
            textAlign: "center",
            padding: "120px 24px",
            background: "radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), #0a0a0a",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Próximo passo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Vamos começar?
          </h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: "#9a9590", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            [Mensagem personalizada para o cliente — texto de fechamento motivacional.]
          </p>
          <a
            href="https://wa.me/5511999718595"
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
          .prop-who-grid { grid-template-columns: 1fr !important; }
          .prop-who-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .prop-diag-grid { grid-template-columns: 1fr !important; }
          .prop-pricing-grid { grid-template-columns: 1fr !important; }
          .prop-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .prop-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
};

export default PropostaPadrao;
