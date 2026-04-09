import { useEffect } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PropostaMonique = () => {
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
            Agenda cheia até julho.
            <br />
            <span style={{ background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Com estratégia.
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
            Projeto de captação de pacientes e fortalecimento de posicionamento digital para <strong style={{ color: "#f0ebe3", fontWeight: 500 }}>Monique Scalon Karasek</strong> — psicóloga em Dourados.
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
              <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                  <img loading="lazy" src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
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

        {/* ========== CONTEXTO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Contexto</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Onde a Monique está hoje
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            Monique está retomando com mais força sua atuação presencial em Dourados, com foco principal no público feminino. O objetivo de curto prazo é claro: preencher horários vagos da agenda até julho.
          </p>

          <div style={{ marginTop: "40px", padding: "32px", background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderLeft: "3px solid #c8956c", borderRadius: "0 16px 16px 0" }}>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7 }}>
              Hoje já existe produção de conteúdo em andamento — um ativo importante para fortalecer autoridade e percepção de valor. No entanto, ainda não há uma estratégia de tráfego pago implementada para acelerar a geração de demanda.
            </p>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginTop: "12px" }}>
              Em um segundo momento, a intenção é expandir a atuação para produtos e serviços de grupo: grupos terapêuticos, workshops e iniciativas presenciais voltadas para mulheres.
            </p>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginTop: "12px" }}>
              A estratégia mais adequada agora é <span style={{ color: "#e0b893", fontWeight: 500, fontStyle: "italic" }}>priorizar a captação direta de pacientes, com foco em resultado no curto prazo, sem perder de vista a construção de marca pessoal no médio prazo.</span>
            </p>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== OBJETIVO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Objetivo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            O que este projeto vai resolver
          </h2>

          <div style={{ marginTop: "40px", padding: "32px", background: "#1a1a1a", border: "1px solid #c8956c", borderRadius: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>🎯</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>Objetivo principal</h3>
            <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300 }}>
              Preencher até julho os horários vagos da agenda com novos pacientes alinhados ao perfil de atendimento da Monique.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginTop: "20px" }}>
            {[
              { icon: "📍", text: "Fortalecer o posicionamento da Monique como psicóloga de referência em Dourados" },
              { icon: "📊", text: "Aumentar a previsibilidade na geração de novos contatos qualificados" },
              { icon: "🚀", text: "Estruturar base de aquisição que futuramente apoie grupos terapêuticos, workshops e novos produtos" },
            ].map((obj) => (
              <div
                key={obj.icon}
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
                <div style={{ fontSize: "20px", marginBottom: "10px" }}>{obj.icon}</div>
                <p style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, lineHeight: 1.55 }}>{obj.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== DIRECIONAMENTO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Direcionamento</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Dois caminhos possíveis — um recomendado
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            Identificamos dois caminhos dentro do tráfego pago. A recomendação é clara: começar pelo que gera resultado mais rápido.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "48px" }} className="prop-paths-grid">
            {/* Caminho 1 */}
            <div style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "16px", padding: "32px", position: "relative", transition: "border-color 0.3s" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>Crescimento de perfil e autoridade</h3>
              <p style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, lineHeight: 1.6 }}>
                Estratégia focada em aumentar seguidores, alcance e reconhecimento. Construção importante, mas tende a gerar resultado de conversão em prazo mais longo. Ideal para uma segunda etapa.
              </p>
            </div>

            {/* Caminho 2 — Recomendado */}
            <div style={{ background: "linear-gradient(160deg, #1f1a15 0%, #1a1a1a 100%)", border: "1px solid #c8956c", borderRadius: "16px", padding: "32px", position: "relative", transition: "border-color 0.3s" }}>
              <div style={{ position: "absolute", top: "16px", right: "16px", fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", color: "#c8956c" }}>✦ RECOMENDADO</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>Captação direta de pacientes</h3>
              <p style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, lineHeight: 1.6 }}>
                Estratégia focada em atrair pessoas com potencial real de contratação, conduzindo o contato para um canal de atendimento e conversão. Atende diretamente ao objetivo de preencher a agenda até julho.
              </p>
            </div>
          </div>
        </section>

        {/* ========== ESTRATÉGIA / FASES ========== */}
        <div style={{ background: "#111111", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Estratégia</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              Como vamos executar
            </h2>
            <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
              Duas fases complementares — a primeira resolve o problema imediato, a segunda constrói o ativo de longo prazo.
            </p>

            {/* Fase 1 */}
            <div style={{ marginTop: "48px", padding: "40px", background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "20px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "100px", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", background: "rgba(200,149,108,0.12)", color: "#e0b893" }}>
                Fase 1 — Agora
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Captação de pacientes</h3>
              <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginBottom: "20px" }}>
                Gerar contatos de potenciais pacientes em Dourados e região, com campanhas orientadas para conversão.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                {[
                  "Definição da proposta de valor e comunicação da Monique",
                  "Construção de mensagens com tom direto, objetivo e posicionamento firme",
                  "Criação e estruturação da campanha de tráfego pago",
                  "Segmentação de público compatível com o ticket de atendimento",
                  "Direcionamento para canal de contato ideal",
                  "Monitoramento dos leads e otimização contínua",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, paddingLeft: "22px", position: "relative", lineHeight: 1.55 }}>
                    <span style={{ position: "absolute", left: 0, top: "2px", color: "#c8956c", fontSize: "9px" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fase 2 */}
            <div style={{ marginTop: "24px", padding: "40px", background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "20px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "100px", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", background: "rgba(107,168,122,0.1)", color: "#6ba87a" }}>
                Fase 2 — Após preencher a agenda
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Posicionamento e autoridade</h3>
              <p style={{ fontSize: "15px", color: "#9a9590", fontWeight: 300, lineHeight: 1.7, marginBottom: "20px" }}>
                Com a agenda preenchida, a estratégia evolui para fortalecimento de marca e crescimento do ativo digital.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                {[
                  "Crescimento qualificado do Instagram",
                  "Fortalecimento de autoridade local em Dourados",
                  "Construção de audiência para grupos terapêuticos e workshops",
                  "Preparação para eventos presenciais e novos produtos",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "14px", color: "#9a9590", fontWeight: 300, paddingLeft: "22px", position: "relative", lineHeight: 1.55 }}>
                    <span style={{ position: "absolute", left: 0, top: "2px", color: "#6ba87a", fontSize: "9px" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========== INVESTIMENTO ========== */}
        <div style={{ padding: "100px 24px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Investimento</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              Proposta comercial
            </h2>
            <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
              Gestão estratégica e operacional de tráfego pago com visão de negócio — não apenas "subir anúncios".
            </p>

            <div style={{ maxWidth: "600px", margin: "48px auto 0", border: "1px solid #c8956c", borderRadius: "20px", padding: "40px 36px", background: "linear-gradient(160deg, #1f1a15 0%, #1a1a1a 100%)" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c8956c", marginBottom: "12px" }}>
                Gestão de Tráfego Pago + Consultoria Estratégica
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, marginBottom: "24px" }}>
                Captação de Pacientes + Posicionamento
              </h3>

              {[
                { label: "Gestão estratégica mensal", value: "R$ 1.500", isNote: false },
                { label: "Verba de mídia recomendada", value: "R$ 1.000/mês", isNote: false },
                { label: "Prazo inicial recomendado", value: "3 meses", isNote: false },
                { label: "Nota sobre verba de mídia", value: "Paga diretamente para a plataforma. Não está inclusa no valor da gestão.", isNote: true },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderBottom: "1px solid rgba(200,149,108,0.15)" }}>
                  <span style={{ fontSize: "14px", color: "#9a9590", fontWeight: 400 }}>{row.label}</span>
                  <span style={{
                    fontFamily: row.isNote ? "'DM Sans', sans-serif" : "'Playfair Display', serif",
                    fontSize: row.isNote ? "13px" : "20px",
                    fontWeight: row.isNote ? 400 : 700,
                    color: row.isNote ? "#6b6560" : "#f0ebe3",
                    maxWidth: row.isNote ? "280px" : "none",
                    textAlign: row.isNote ? "right" as const : "left" as const,
                  }}>{row.value}</span>
                </div>
              ))}

              <div style={{ marginTop: "28px", paddingTop: "28px", borderTop: "1px solid rgba(200,149,108,0.15)" }}>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6560", marginBottom: "14px" }}>O que está incluso</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                  {[
                    "Diagnóstico inicial da estratégia",
                    "Definição do objetivo e planejamento da campanha",
                    "Estruturação e configuração dos anúncios",
                    "Gestão e acompanhamento dos resultados",
                    "Otimizações periódicas de custo e desempenho",
                    "Reuniões de alinhamento estratégico",
                    "Apoio estratégico em posicionamento, aquisição e conversão",
                    "Visão conectada entre anúncio, contato e fechamento",
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

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== PONTOS DE ATENÇÃO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Pontos de atenção</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            O que vamos alinhar em conjunto
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            Para que a estratégia de captação tenha melhor desempenho, alguns pontos serão trabalhados juntos desde o início.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "40px" }} className="prop-attention-grid">
            {[
              { title: "Clareza da oferta", desc: "Definição precisa do que está sendo oferecido, para quem, e por que a Monique é a escolha certa." },
              { title: "Canal de entrada", desc: "Escolha do melhor canal para receber os interessados — WhatsApp, formulário, agendamento direto." },
              { title: "Velocidade de resposta", desc: "Estrutura mínima para responder leads de forma ágil. Tempo de resposta impacta diretamente na conversão." },
              { title: "Coerência de posicionamento", desc: "Alinhamento entre anúncios, conteúdo orgânico e posicionamento profissional para gerar confiança." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#1a1a1a", border: "1px solid rgba(200,149,108,0.15)", borderRadius: "14px", padding: "24px" }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#f0ebe3" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", color: "#6b6560", fontWeight: 300, lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(135deg, #a06d42, #c8956c, #e0b893)", margin: "0 auto" }} />

        {/* ========== PRAZO / TIMELINE ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#c8956c", marginBottom: "16px" }}>Prazo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Período inicial recomendado: 3 meses
          </h2>
          <p style={{ color: "#9a9590", fontSize: "16px", maxWidth: "700px", fontWeight: 300 }}>
            Tempo necessário para estruturar, validar, otimizar e gerar volume suficiente para análise e tomada de decisão.
          </p>

          <div style={{ display: "flex", gap: 0, marginTop: "40px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(200,149,108,0.15)" }} className="prop-timeline-bar">
            {[
              { label: "Mês 1", title: "Estruturação", desc: "Onboarding, diagnóstico, definição de público, criação das campanhas e início da operação." },
              { label: "Mês 2", title: "Validação", desc: "Primeiros leads chegando, ajustes de comunicação, otimização de custo e segmentação." },
              { label: "Mês 3", title: "Otimização", desc: "Campanhas maduras, previsibilidade de contatos, análise de resultados para decisão sobre próximos passos." },
            ].map((phase, i) => (
              <div
                key={phase.label}
                style={{
                  flex: 1,
                  padding: "28px 20px",
                  background: "#1a1a1a",
                  borderRight: i < 2 ? "1px solid rgba(200,149,108,0.15)" : "none",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(200,149,108,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
              >
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c8956c", marginBottom: "8px" }}>{phase.label}</div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>{phase.title}</h4>
                <p style={{ fontSize: "13px", color: "#6b6560", fontWeight: 300, lineHeight: 1.5 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CTA ========== */}
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
            Se a proposta fizer sentido, o próximo passo é uma reunião de onboarding estratégico para aprofundar perfil de público, diferenciais, oferta atual e direcionar as mensagens e criativos das campanhas.
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
          .prop-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .prop-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .prop-paths-grid { grid-template-columns: 1fr !important; }
          .prop-attention-grid { grid-template-columns: 1fr !important; }
          .prop-timeline-bar { flex-direction: column !important; }
          .prop-timeline-bar > div { border-right: none !important; border-bottom: 1px solid rgba(200,149,108,0.15); }
          .prop-timeline-bar > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </>
  );
};

export default PropostaMonique;
