import { useEffect } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.jpg";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.jpg";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.png";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const gold = "#C6A84E";
const goldLight = "#D4BC72";
const goldGlow = "rgba(198,168,78,0.15)";
const dark = "#0A0A0A";
const darkCard = "#111111";
const darkElevated = "#161616";
const darkBorder = "#1E1E1E";
const textPrimary = "#F0ECE2";
const textSecondary = "#9A9488";
const textMuted = "#5A564E";
const accentGreen = "#3A6B4A";
const accentRed = "#8B3A3A";

const PropostaClinicaSupreme = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = dark;
    document.body.style.color = textPrimary;
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  const diagnosticCards = [
    { icon: "🔴", title: "CRM desalinhado com a operação real", text: "Os sistemas tradicionais não foram pensados para uma operação médica/estética com múltiplas especialidades, protocolos complementares, histórico longo de pacientes e jornadas não-lineares. O Pipedrive virou um Frankenstein que a equipe não preenche." },
    { icon: "🔴", title: "429 tarefas/dia no comercial", text: "Dependência excessiva de esforço humano em tarefas mecânicas. Hoje, o time copia, cola, lembra, preenche e executa manualmente — exatamente o tipo de trabalho que pode e deve ser automatizado." },
    { icon: "🔴", title: "Base grande sem inteligência acionável", text: "~30 mil pacientes desde 2016, mas grande parte desse valor fica \"parada\" — sem resgate estruturado, sem priorização inteligente e sem personalização real de follow-up. Nenhum CRM conseguiu migrar por completo." },
    { icon: "🔴", title: "Receita perdida no resgate", text: "Pacientes que receberam protocolos de 10+ itens e não voltaram para concluir. Sem régua de reativação personalizada, esse dinheiro fica na mesa. Converter 1–2% disso já mudaria o faturamento mensal." },
    { icon: "🔴", title: "Cross-sell entre especialidades travado", text: "A paciente da dermatologia que menciona queda de libido não é conectada automaticamente à nutrologia. A da nutrologia que emagrece não é acionada para a dermatologia estética. Depende de pessoas pensando — e elas têm 429 tarefas." },
    { icon: "🟡", title: "Falta de documentação extensiva", text: "Para que IA opere bem, não basta ter ferramenta. É preciso organizar contexto: especialidades, médicos, protocolos, tecnologias, regras comerciais, etapas da jornada e lógica de encaminhamento interno. Hoje isso não existe de forma estruturada." },
  ];

  const comparisonRows = [
    { dim: "Follow-up de pacientes", old: "Manual, copia-cola, esquecido", now: "Automatizado por IA com contexto individual" },
    { dim: "Cross-sell entre especialidades", old: "Depende da memória humana", now: "Gatilhos automáticos baseados em transcrição" },
    { dim: "Resgate de pacientes inativos", old: "Não existe de forma estruturada", now: "Régua inteligente ativa por segmento" },
    { dim: "CRM", old: "Genérico e subutilizado", now: "Customizado para o fluxo real da clínica" },
    { dim: "Base de dados (~30k)", old: "Presa em sistema legado", now: "Migrada, limpa e acionável" },
    { dim: "Transcrição de consultas", old: "Não existe", now: "IA transcreve + extrai insights comerciais" },
    { dim: "Comunicação com paciente", old: "Régua genérica por persona", now: "Personalização individual em escala" },
    { dim: "Inteligência para closers", old: "Nenhuma informação prévia", now: "Contexto do paciente disponível no fechamento" },
  ];

  const phases = [
    {
      tag: "Fase 1 — Diagnóstico + Engenharia de Contexto",
      title: "Entender a operação antes de construir qualquer coisa",
      desc: "Antes de automatizar, precisamos que a IA entenda profundamente o universo da Supreme. Vamos mapear a operação real, documentar o contexto da clínica e definir as prioridades de implementação.",
      items: [
        "Mapeamento das especialidades, linhas de receita e lógica de atendimento",
        "Documentação extensiva: médicos, protocolos, tecnologias, preços e regras de encaminhamento",
        "Mapeamento do fluxo completo do paciente (da captação ao pós-protocolo)",
        "Priorização dos primeiros casos de uso por impacto × facilidade",
      ],
      note: "Essa etapa é decisiva. Sem isso, qualquer automação futura vira improviso.",
    },
    {
      tag: "Fase 2 — MVP no Ar",
      title: "Primeiro protótipo funcional rodando na operação",
      desc: "Com o diagnóstico feito, colocamos no ar o primeiro protótipo funcional — simples, customizado para a Supreme e focado no caso de uso que gera mais impacto imediato na receita.",
      items: [
        "Protótipo funcional do caso de uso prioritário (definido na Fase 1)",
        "Validação com a equipe no dia a dia real da clínica",
        "Ajustes rápidos baseados em feedback da operação",
      ],
      note: "O objetivo é ter algo útil rodando — não perfeito, mas funcional e gerando resultado.",
    },
    {
      tag: "Fase 3 — Substituição da Stack Atual",
      title: "Migração e consolidação da nova estrutura operacional",
      desc: "Com o MVP validado, avançamos para substituir gradualmente as ferramentas atuais que não atendem a operação — migrando dados, consolidando processos e expandindo as automações para novos casos de uso.",
      items: [
        "Migração da base de dados e consolidação do histórico de pacientes",
        "Transição gradual das ferramentas atuais para a nova estrutura",
        "Expansão para novos casos de uso priorizados (resgate, cross-sell, follow-up, etc.)",
        "Rotina contínua de evolução e ajuste — enquanto a parceria existir, a estrutura evolui",
      ],
      note: "A substituição é gradual e segura — nada é desligado até a nova estrutura estar validada.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .cs-page { font-family: 'DM Sans', sans-serif; background: ${dark}; color: ${textPrimary}; line-height: 1.7; overflow-x: hidden; }
        @keyframes cs-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cs-pulse { 0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); } 50% { opacity: 0.7; transform: translateX(-50%) scale(1.1); } }
      `}</style>

      <div className="cs-page">
        {/* ========== HERO ========== */}
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "80px 32px", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: `radial-gradient(circle, ${goldGlow} 0%, transparent 70%)`, pointerEvents: "none", animation: "cs-pulse 8s ease-in-out infinite" }} />

          <div style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, border: `1px solid ${gold}`, padding: "8px 24px", marginBottom: "48px", position: "relative", animation: "cs-fadeUp 1s ease 0.2s both" }}>
            Proposta Comercial
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "24px", position: "relative", animation: "cs-fadeUp 1s ease 0.4s both" }}>
            Arquitetura de Receita e<br />
            <span style={{ color: gold, fontStyle: "italic" }}>Personalização em Escala</span><br />
            para a Supreme Clínica
          </h1>

          <p style={{ fontSize: "1.05rem", color: textSecondary, maxWidth: "600px", margin: "0 auto 48px", position: "relative", animation: "cs-fadeUp 1s ease 0.6s both" }}>
            Estruturação de inteligência comercial e operacional para destravar receita, automatizar processos mecânicos e transformar complexidade em vantagem competitiva.
          </p>

          <div style={{ display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap", position: "relative", animation: "cs-fadeUp 1s ease 0.8s both" }}>
            {[
              { label: "Preparado para", value: "Dayana Dornelas" },
              { label: "Preparado por", value: "Rodrigo Albuquerque" },
              { label: "Data", value: "Março 2026" },
              { label: "Ciclo inicial", value: "90 dias" },
            ].map((m) => (
              <div key={m.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px", color: textMuted, marginBottom: "4px" }}>{m.label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: goldLight }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== QUEM ESTÁ POR TRÁS (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Sobre</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Quem está por trás desta proposta
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginTop: "40px" }} className="cs-who-grid">
            <div style={{ width: "100%", aspectRatio: "1", borderRadius: "20px", overflow: "hidden", border: `1px solid ${goldGlow}` }}>
              <img src={rodrigoPhoto} alt="Rodrigo Albuquerque" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div>
              <p style={{ color: textSecondary, fontSize: "16px", fontWeight: 300, marginBottom: "16px" }}>
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p style={{ color: textSecondary, fontSize: "16px", fontWeight: 300, marginBottom: "24px" }}>
                A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="cs-stats-grid">
                {[
                  { num: "+R$130M", label: "gerados em vendas" },
                  { num: "100+", label: "consultorias realizadas" },
                  { num: "+7", label: "países atendidos" },
                  { num: "+54", label: "avaliações 5 estrelas" },
                ].map((s) => (
                  <div key={s.num} style={{ padding: "16px", background: darkCard, border: `1px solid ${darkBorder}`, borderRadius: "12px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: gold }}>{s.num}</div>
                    <div style={{ fontSize: "12px", color: textMuted, marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== MENTORES (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px", textAlign: "center" }}>Referências</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "16px", lineHeight: 1.25, textAlign: "center" }}>
            Nossos Mentores e Professores
          </h2>
          <p style={{ color: textSecondary, fontSize: "16px", maxWidth: "700px", fontWeight: 300, textAlign: "center", margin: "0 auto 48px" }}>
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }} className="cs-mentors-grid">
            {[
              { name: "Diego Barreto", role: "CEO - iFood", photo: diegoBarretoPhoto, bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.' },
              { name: "Pedro Somma", role: "Ex-COO - 99 Taxi", photo: pedroSommaPhoto, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
              { name: "Luis Vabo Jr.", role: "Ex-diretor - Stone", photo: vaboPhoto, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
              { name: "João Olivério", role: "CEO - Sales As A System", photo: joaoOliverioPhoto, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
              { name: "José Diogo C. Rodrigues", role: "CMO Latam - Tinder", photo: joseDiogoPhoto, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
            ].map((m) => (
              <div
                key={m.name}
                style={{ background: darkCard, border: `1px solid ${darkBorder}`, borderRadius: "16px", padding: "20px", textAlign: "center", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(198,168,78,0.35)`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = darkBorder; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 12px", border: `1px solid rgba(198,168,78,0.2)` }}>
                  <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: textPrimary, marginBottom: "4px" }}>{m.name}</h3>
                <p style={{ fontSize: "12px", fontWeight: 600, color: gold, marginBottom: "8px" }}>{m.role}</p>
                <p style={{ fontSize: "12px", color: textMuted, fontWeight: 300, lineHeight: 1.5 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== CONTEXTO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Contexto</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            A Supreme como operação
          </h2>

          <div style={{ background: darkCard, border: `1px solid ${darkBorder}`, padding: "48px 40px", position: "relative", overflow: "hidden", marginTop: "40px" }} className="cs-context-block">
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px", background: `linear-gradient(90deg, ${gold}, transparent)` }} />
            <p style={{ fontSize: "0.92rem", color: textSecondary, lineHeight: 1.8, marginBottom: "16px" }}>
              A Supreme é uma clínica médica multidisciplinar com posicionamento premium, fundada pela Dra. Maria Lígia Mendonça (dermatologista e mentora de médicos em todo o Brasil) e pelo Dr. Arthur Rocha (nutrologia avançada e responsável técnico), com operação em Goiânia e um time de aproximadamente 10 médicos atuando de forma integrada.
            </p>
            <p style={{ fontSize: "0.92rem", color: textSecondary, lineHeight: 1.8, marginBottom: "16px" }}>
              A clínica reúne dermatologia e estética avançada, nutrologia, vascular, blefaroplastia, transplante capilar, ginecologia íntima, fisioterapia especializada e tecnologias de ponta como Fotona 5D, Morpheus, Sofwave, Liftera 2, Oligio X, Lipo AI e mais de 20 plataformas — uma operação naturalmente complexa, com jornadas de paciente não-lineares e múltiplas oportunidades de cross-sell.
            </p>
            <p style={{ fontSize: "0.92rem", color: textSecondary, lineHeight: 1.8, marginBottom: "16px" }}>
              Em operações como essa, o desafio deixa de ser apenas captar pacientes. O ponto crítico passa a ser <strong style={{ color: textPrimary, fontWeight: 600 }}>organizar dados de forma útil, transformar interações em inteligência comercial, garantir follow-up consistente, criar personalização em escala</strong> e, acima de tudo, estruturar processos simples o suficiente para que a equipe realmente use.
            </p>
            <p style={{ fontSize: "0.92rem", color: textSecondary, lineHeight: 1.8 }}>
              O principal gargalo identificado não é ausência de esforço da equipe — é a limitação estrutural dos sistemas atuais para atender a realidade da clínica.
            </p>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== DIAGNÓSTICO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Diagnóstico</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Os pontos críticos mapeados
          </h2>
          <p style={{ color: textSecondary, fontSize: "0.95rem", maxWidth: "640px" }}>
            Com base na nossa conversa, estes são os gargalos que estão impedindo a Supreme de operar na sua capacidade máxima de receita.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "48px" }} className="cs-diag-grid">
            {diagnosticCards.map((c) => (
              <div
                key={c.title}
                style={{ background: darkCard, border: `1px solid ${darkBorder}`, padding: "32px 28px", transition: "border-color 0.4s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(198,168,78,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = darkBorder; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: "1.4rem", marginBottom: "16px", display: "block" }}>{c.icon}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "10px", color: goldLight }}>{c.title}</h3>
                <p style={{ fontSize: "0.85rem", color: textSecondary, lineHeight: 1.6 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== VISÃO — Comparison Table ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Visão</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Para onde estamos indo
          </h2>
          <p style={{ color: textSecondary, fontSize: "0.95rem", maxWidth: "640px" }}>
            O objetivo não é entregar mais um sistema. É construir — junto com você — a estrutura operacional que a Supreme precisa e que nenhuma software house entregaria, porque elas não entendem o processo da clínica.
          </p>

          <div style={{ overflowX: "auto", marginTop: "40px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", color: textMuted, fontWeight: 600, borderBottom: `1px solid ${darkBorder}` }}>Dimensão</th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", color: textMuted, fontWeight: 600, borderBottom: `1px solid ${darkBorder}` }}>Hoje</th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", color: textMuted, fontWeight: 600, borderBottom: `1px solid ${darkBorder}` }}>Com a implementação</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.dim}>
                    <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: textSecondary, fontWeight: 500, borderBottom: `1px solid ${darkBorder}` }}>{r.dim}</td>
                    <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: accentRed, fontWeight: 600, borderBottom: `1px solid ${darkBorder}` }}>{r.old}</td>
                    <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: accentGreen, fontWeight: 600, borderBottom: `1px solid ${darkBorder}` }}>{r.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== PLANO DE IMPLEMENTAÇÃO ========== */}
        <div style={{ background: darkCard, padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Plano de Implementação</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              Três fases, resultado incremental
            </h2>
            <p style={{ color: textSecondary, fontSize: "0.95rem", maxWidth: "640px" }}>
              Cada fase entrega valor imediato enquanto constrói a base para a próxima. Sem esperar 5 meses por um protótipo — resultados desde a primeira semana.
            </p>

            {phases.map((phase) => (
              <div key={phase.tag} style={{ background: dark, border: `1px solid ${darkBorder}`, padding: "48px 40px", marginTop: "24px", position: "relative", overflow: "hidden" }} className="cs-phase-block">
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: `linear-gradient(180deg, ${gold}, transparent)` }} />
                <div style={{ display: "inline-block", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: gold, background: goldGlow, padding: "4px 14px", marginBottom: "20px" }}>
                  {phase.tag}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", marginBottom: "16px", lineHeight: 1.3 }}>{phase.title}</h3>
                <p style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.7, marginBottom: "16px" }}>{phase.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
                  {phase.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.7, padding: "6px 0", paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: gold, fontSize: "0.85rem" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "0.8rem", color: textMuted, marginTop: "16px", fontStyle: "italic" }}>{phase.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== ALINHAMENTO DE EXPECTATIVAS ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Alinhamento de Expectativas</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            O que esta proposta não é
          </h2>
          <p style={{ color: textSecondary, fontSize: "0.95rem", maxWidth: "640px" }}>
            Para evitar qualquer ruído, desde o início:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginTop: "40px" }} className="cs-not-grid">
            {[
              { title: "Não é uma software house", text: "Não vamos levar 5 meses para entregar um protótipo. A construção é progressiva, com resultados desde a primeira semana." },
              { title: "Não é um projeto fechado", text: 'Não é "paga X e recebe Y no final". É co-construção contínua, com entregas incrementais e priorização por impacto real.' },
              { title: "Não é troca de CRM genérico", text: "Não vamos substituir o Pipedrive por outro Frankenstein. A proposta é criar algo simples, personalizado e aderente à realidade da Supreme." },
            ].map((c) => (
              <div key={c.title} style={{ background: darkCard, border: `1px solid ${darkBorder}`, padding: "28px 24px", position: "relative" }}>
                <span style={{ position: "absolute", top: "20px", right: "20px", color: accentRed, fontSize: "0.9rem", fontWeight: 700, opacity: 0.6 }}>✕</span>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "8px", color: textPrimary }}>{c.title}</h4>
                <p style={{ fontSize: "0.82rem", color: textSecondary, lineHeight: 1.6 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== INVESTIMENTO ========== */}
        <div style={{ background: darkCard, padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Investimento</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
              Duas formas de trabalhar juntos
            </h2>
            <p style={{ color: textSecondary, fontSize: "0.95rem", maxWidth: "640px" }}>
              A escolha depende de quanto a equipe interna vai participar ativamente da construção versus quanto vocês preferem que eu acelere a execução.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginTop: "48px" }} className="cs-inv-grid">
              {/* Option 1 */}
              <div style={{ background: darkCard, border: `1px solid ${darkBorder}`, padding: "48px 36px", position: "relative", overflow: "hidden", transition: "border-color 0.4s" }}>
                <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "3px", color: textMuted, marginBottom: "8px" }}>Opção 1</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", marginBottom: "6px", color: textPrimary }}>Consultoria + Direcionamento</div>
                <p style={{ fontSize: "0.82rem", color: textSecondary, marginBottom: "24px", lineHeight: 1.5 }}>
                  Eu diagnostico, priorizo e direciono. A equipe da Supreme executa com meu acompanhamento.
                </p>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: gold, marginBottom: "4px" }}>R$ 5.000</div>
                <div style={{ fontSize: "0.8rem", color: textMuted, marginBottom: "28px" }}>por mês · ciclo mínimo de 90 dias</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "1 reunião estratégica por semana",
                    "Diagnóstico da operação e priorização de casos de uso",
                    "Engenharia de contexto (documentação extensiva)",
                    "Direcionamento técnico: o que construir, como e em que ordem",
                    "Revisão do que a equipe construiu + correção de rota",
                    "Suporte assíncrono entre encontros",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.82rem", color: textSecondary, padding: "6px 0", paddingLeft: "18px", position: "relative", lineHeight: 1.5 }}>
                      <span style={{ position: "absolute", left: 0, color: gold, fontWeight: 700, fontSize: "0.8rem" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Option 2 — Featured */}
              <div style={{ background: darkCard, border: `1px solid rgba(198,168,78,0.4)`, padding: "48px 36px", position: "relative", overflow: "hidden", transition: "border-color 0.4s" }}>
                <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "200px", height: "200px", background: `radial-gradient(circle, ${goldGlow}, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "3px", color: textMuted, marginBottom: "8px" }}>Opção 2 · Recomendada</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", marginBottom: "6px", color: textPrimary }}>Consultoria + Implementação</div>
                <p style={{ fontSize: "0.82rem", color: textSecondary, marginBottom: "24px", lineHeight: 1.5 }}>
                  Tudo da Opção 1 — mais eu botando a mão na massa. Construo os protótipos, automações e integrações junto com vocês.
                </p>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: gold, marginBottom: "4px" }}>R$ 8.000</div>
                <div style={{ fontSize: "0.8rem", color: textMuted, marginBottom: "28px" }}>por mês · ciclo mínimo de 90 dias</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "Tudo da Opção 1",
                    "Construção direta dos protótipos e MVPs",
                    "Desenvolvimento de automações e integrações (WhatsApp, CRM, IA)",
                    "Implementação de prompts, fluxos e lógicas operacionais",
                    "2 reuniões por semana (estratégia + trabalho técnico)",
                    "Disponibilidade ampliada para destravar gargalos em tempo real",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.82rem", color: textSecondary, padding: "6px 0", paddingLeft: "18px", position: "relative", lineHeight: 1.5 }}>
                      <span style={{ position: "absolute", left: 0, color: gold, fontWeight: 700, fontSize: "0.8rem" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p style={{ textAlign: "center", marginTop: "32px", fontSize: "0.85rem", color: textSecondary, maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Ciclo inicial de 90 dias — tempo necessário para entender a operação, organizar o contexto, validar o MVP e construir uma estrutura utilizável pela equipe. Menos do que isso tende a virar diagnóstico sem transformação real.
            </p>
            <p style={{ textAlign: "center", marginTop: "12px", fontSize: "0.85rem", color: textSecondary, maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Em ambas as opções, tudo que for construído é propriedade da Supreme. Sem lock-in, sem dependência permanente.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== DIFERENCIAL ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px" }}>Diferencial</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25 }}>
            Por que este modelo funciona
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "48px" }} className="cs-diff-grid">
            {[
              { icon: "⚡", title: "Velocidade real", text: "O que uma software house leva 5 meses para prototipar, a gente coloca para rodar em semanas usando ferramentas de IA e integração modernas." },
              { icon: "🏥", title: "Experiência no nicho", text: "Quase 2 anos atuando em clínicas médicas. Conheço os problemas porque já sofri com eles — CRM que ninguém preenche, médico que não vende, secretária que esquece." },
              { icon: "🧠", title: "Processo antes de tecnologia", text: "80% das empresas falham na automação porque não têm documentação extensiva de processos. A gente resolve isso primeiro — depois automatiza." },
              { icon: "🤝", title: "Transferência de conhecimento", text: "O objetivo é que a equipe se torne autônoma. Ensino a pescar enquanto construo junto — não crio dependência permanente." },
            ].map((c) => (
              <div
                key={c.title}
                style={{ background: darkCard, border: `1px solid ${darkBorder}`, padding: "32px 28px", transition: "border-color 0.4s, transform 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(198,168,78,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = darkBorder; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: "1.4rem", marginBottom: "16px", display: "block" }}>{c.icon}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "10px", color: goldLight }}>{c.title}</h3>
                <p style={{ fontSize: "0.85rem", color: textSecondary, lineHeight: 1.6 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== PRÓXIMOS PASSOS ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: gold, marginBottom: "16px", textAlign: "center" }}>Próximos Passos</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: "20px", lineHeight: 1.25, textAlign: "center" }}>
            Como começamos
          </h2>

          <div style={{ maxWidth: "600px", margin: "40px auto 0" }}>
            {[
              "Aprovação da proposta e escolha da opção de investimento",
              "Reunião de kickoff — mapeamento da operação atual",
              "Engenharia de contexto e priorização dos casos de uso",
              "MVP no ar — primeiro protótipo funcional rodando",
              "Migração e substituição gradual da stack atual",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "20px 0", borderBottom: `1px solid ${darkBorder}` }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: gold, minWidth: "36px", lineHeight: 1, paddingTop: "2px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.5 }}>{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CTA ========== */}
        <div style={{ textAlign: "center", padding: "120px 24px", background: dark }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginBottom: "24px", lineHeight: 1.2 }}>
            A Supreme já tem tudo que é<br />difícil de construir. <span style={{ color: gold, fontStyle: "italic" }}>Falta a estrutura.</span>
          </h2>
          <p style={{ color: textSecondary, maxWidth: "520px", margin: "0 auto 40px", fontSize: "0.95rem" }}>
            Posicionamento forte, operação robusta, múltiplas linhas de serviço, base relevante e visão clara de onde quer chegar. O que falta agora é transformar essa complexidade em vantagem competitiva.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: gold,
              color: dark,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "16px 48px",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = goldLight; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(198,168,78,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Falar com Rodrigo
          </a>
          <span style={{ display: "block", marginTop: "16px", fontSize: "0.8rem", color: textMuted }}>Resposta em até 24 horas</span>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "48px 24px", borderTop: `1px solid ${darkBorder}` }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: gold, marginBottom: "8px" }}>BA Consultoria</div>
          <p style={{ fontSize: "0.75rem", color: textMuted, letterSpacing: "1px" }}>Rodrigo Albuquerque · Documento confidencial</p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .cs-who-grid { grid-template-columns: 1fr !important; }
          .cs-who-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .cs-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .cs-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cs-diag-grid { grid-template-columns: 1fr !important; }
          .cs-inv-grid { grid-template-columns: 1fr !important; }
          .cs-diff-grid { grid-template-columns: 1fr !important; }
          .cs-not-grid { grid-template-columns: 1fr !important; }
          .cs-phase-block { padding: 32px 24px !important; }
          .cs-context-block { padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
};

export default PropostaClinicaSupreme;
