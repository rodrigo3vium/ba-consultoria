import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tracker } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";

const FATURAMENTO_OPTIONS = [
  "Até R$ 10 mil/mês",
  "Entre R$ 10 e R$ 30 mil",
  "Entre R$ 30 e R$ 100 mil",
  "Entre R$ 100 e R$ 300 mil",
  "Acima de R$ 300 mil",
];
const CARGO_OPTIONS = [
  "CEO / Fundador",
  "Diretor",
  "Gerente",
  "Coordenador",
  "Analista",
  "Outro",
];
const SEGMENTO_OPTIONS = [
  "Agência / Marketing",
  "Saúde / Clínica",
  "Educação",
  "E-commerce / Varejo",
  "Consultoria / Serviços",
  "Jurídico / Advocacia",
  "Tecnologia",
  "Outro",
];

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  faturamento: string;
  cargo: string;
  segmento: string;
}

const EducacaoSkillsNegocios = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    faturamento: "",
    cargo: "",
    segmento: "",
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#060A12";
    document.body.style.paddingTop = "0";
    tracker.page("20 Skills de IA Para Negócios");
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "20-skills-negocios",
      cta_location: location,
      page: "/educacao/20-skill-negocios",
    });
    setModalOpen(true);
  };

  const handleField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.whatsapp.trim() ||
        !form.faturamento || !form.cargo || !form.segmento) {
      setFormError("Preencha todos os campos para continuar.");
      return;
    }
    setIsSubmitting(true);
    setFormError("");
    try {
      const { error } = await supabase.from("leads").upsert(
        {
          nome: form.nome.trim(),
          email: form.email.trim(),
          whatsapp: form.whatsapp.trim(),
          faturamento: form.faturamento,
          situacao_profissional: form.cargo,
          observacoes: `Segmento: ${form.segmento}`,
          produto: "20-skills-negocios",
          origem: "Página 20 Skills de IA",
          status: "novo" as const,
        },
        { onConflict: "whatsapp" }
      );
      if (error) throw error;

      await tracker.identify(form.email.trim(), form.whatsapp.trim(), form.nome.trim());
      await tracker.track("form_submitted", {
        form_type: "20-skills-negocios",
        product: "20-skills-negocios",
        faturamento: form.faturamento,
        cargo: form.cargo,
        segmento: form.segmento,
      });

      setModalOpen(false);
      navigate("/educacao/obrigado-imersao-claude");
    } catch (err: unknown) {
      const msg = (err as { message?: string })?.message;
      console.error("Lead form error:", err);
      setFormError(msg ? `Erro: ${msg}` : "Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "É realmente gratuito?",
      a: (
        <>
          <span className="sn-faq-check">✓ Sim.</span> O ebook é 100% gratuito,
          sem cartão e com acesso imediato. Sem truque, sem upsell obrigatório.
        </>
      ),
    },
    {
      q: "Serve para qualquer tipo de negócio?",
      a: (
        <>
          <span className="sn-faq-check">✓ Sim.</span> O conteúdo foi
          desenvolvido para empreendedores e profissionais liberais de qualquer
          segmento — agências, clínicas, prestadores de serviço, infoprodutores.
          As skills se adaptam à realidade de cada operação.
        </>
      ),
    },
    {
      q: "É teórico ou mostra como aplicar na prática?",
      a: (
        <>
          O material é 100% prático. Você vai encontrar exemplos reais, prompts
          prontos e passo a passo para implementar cada skill imediatamente — sem
          precisar de equipe técnica ou conhecimento avançado.
        </>
      ),
    },
    {
      q: "Quanto tempo leva para ver resultado?",
      a: (
        <>
          Depende do seu ponto de partida, mas a maioria consegue aplicar pelo
          menos 3 skills nas primeiras 48 horas. O resultado mais comum nos
          primeiros dias é eliminar tarefas repetitivas que consomem horas da
          semana.
        </>
      ),
    },
  ];

  const contents = [
    ["01", "Criação de conteúdo com IA (posts, roteiros, emails)"],
    ["02", "Automação de processos internos sem código"],
    ["03", "Prospecção e qualificação de leads com IA"],
    ["04", "Atendimento e follow-up automatizados"],
    ["05", "Análise de dados e tomada de decisão com IA"],
    ["06", "Criação de propostas e materiais comerciais"],
    ["07", "Gestão de equipe e delegação com IA"],
    ["08", "Pesquisa de mercado e análise de concorrência"],
    ["09", "Produção de vídeos e roteiros em escala"],
    ["10", "Treinamento e onboarding automatizados"],
  ];

  return (
    <div className="sn-root">
      {/* NAV */}
      <nav className="sn-nav">
        <div className="sn-nav-brand">
          RA <span>·</span> Skills de IA
        </div>
        <a href="#cta" className="sn-nav-cta">
          Baixar Grátis
        </a>
      </nav>

      {/* HERO */}
      <section className="sn-hero-section">
        <div className="sn-hero">
          <div className="sn-hero-left">
            <div className="sn-hero-eyebrow">
              <span className="sn-dot-live"></span>
              Ebook gratuito · Rodrigo Albuquerque
            </div>
            <h1 className="sn-h1">
              As <span className="sn-num">20 Skills</span>
              <br />
              que separam
              <br />
              quem usa IA
              <br />
              <span className="sn-accent">de quem fatura com ela.</span>
            </h1>
            <p className="sn-hero-body">
              Há alguns anos, automatizar seu negócio com inteligência artificial
              era coisa de empresa de tecnologia com time de engenheiros.
            </p>
            <p className="sn-hero-contrast">
              Hoje, o empreendedor que não domina essas skills está entregando
              dinheiro para quem domina.
            </p>
            <div className="sn-cta-group">
              <a
                href="#cta"
                className="sn-btn-primary"
                onClick={() => handleCTA("hero")}
              >
                Baixar Ebook Gratuitamente
              </a>
              <span className="sn-cta-micro">
                ✓ acesso imediato &nbsp;·&nbsp; sem cartão &nbsp;·&nbsp; pdf
                completo
              </span>
            </div>
            <div className="sn-skill-tags">
              <span className="sn-skill-tag">Criação de conteúdo</span>
              <span className="sn-skill-tag">Automação comercial</span>
              <span className="sn-skill-tag">Prospecção com IA</span>
              <span className="sn-skill-tag">Análise de dados</span>
              <span className="sn-skill-tag">Atendimento</span>
              <span className="sn-skill-tag sn-skill-tag-gold">+ 15 skills</span>
            </div>
          </div>

          <div className="sn-hero-visual">
            <div className="sn-book-wrap">
              <div className="sn-book-glow-bg"></div>
              <div className="sn-book-pages-top"></div>
              <div className="sn-book-spine"></div>
              <div className="sn-book-cover">
                <div className="sn-book-reactor">
                  <div className="sn-book-reactor-inner"></div>
                </div>
                <div className="sn-book-author">Rodrigo Albuquerque</div>
                <div className="sn-book-big-num">20</div>
                <div className="sn-book-big-label">Skills de IA</div>
                <div className="sn-book-subtitle">Para Negócios</div>
                <div className="sn-book-divider"></div>
                <div className="sn-book-tagline">
                  O guia prático para <strong>faturar mais</strong>
                  <br />
                  trabalhando menos com IA
                </div>
              </div>
              <div className="sn-float-badge">
                <span className="sn-float-badge-num">100%</span>
                <span className="sn-float-badge-lbl">Gratuito</span>
              </div>
              <div className="sn-float-stat">
                <div className="sn-float-stat-icon">⚡</div>
                <div>
                  <span className="sn-float-stat-num">20 Skills</span>
                  <span className="sn-float-stat-lbl">aplicáveis hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="sn-proof-strip">
        <div className="sn-proof-strip-inner">
          <div className="sn-proof-item">
            <span>100%</span>Gratuito
          </div>
          <div className="sn-proof-sep"></div>
          <div className="sn-proof-item">
            <span>20</span>Skills práticas
          </div>
          <div className="sn-proof-sep"></div>
          <div className="sn-proof-item">
            <span>PDF</span>Acesso imediato
          </div>
          <div className="sn-proof-sep"></div>
          <div className="sn-proof-item">
            <span>0</span>Conhecimento técnico necessário
          </div>
        </div>
      </div>

      {/* BULLETS */}
      <section className="sn-bullets-section">
        <div className="sn-bullets-inner">
          <div>
            <div className="sn-section-label">O problema</div>
            <h2 className="sn-bullets-h2">
              IA não é
              <br />
              vantagem de quem
              <br />
              <em>sabe que existe.</em>
            </h2>
            <p className="sn-bullets-body">
              O guia prático com as habilidades que aplico no meu negócio e
              ensinei a centenas de empreendedores que hoje usam inteligência
              artificial para trabalhar menos e faturar mais.
            </p>
            <ul className="sn-bullet-list">
              {[
                "Implementação sem precisar de equipe técnica",
                "Conteúdo e vendas rodando no piloto automático",
                "Processos internos que escalam sem contratar mais",
                "Crie sistemas que trabalham enquanto você dorme",
                "Use IA como vantagem competitiva real, não como curiosidade",
              ].map((item) => (
                <li className="sn-bullet-item" key={item}>
                  <span className="sn-bullet-check"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="sn-benefits-grid">
            {[
              {
                icon: "⚡",
                title: "Resultado imediato",
                desc: "Aplique as primeiras skills em menos de 48 horas e sinta a diferença no operacional.",
              },
              {
                icon: "🎯",
                title: "Sem jargão técnico",
                desc: "Cada skill explicada para quem tem negócio, não para quem programa.",
              },
              {
                icon: "📈",
                title: "ROI mensurável",
                desc: "Cada skill tem métricas de impacto: tempo economizado, receita gerada.",
              },
              {
                icon: "🔁",
                title: "Qualquer negócio",
                desc: "Agência, clínica, consultoria, infoproduto — o método se adapta ao seu modelo.",
              },
            ].map(({ icon, title, desc }) => (
              <div className="sn-benefit-card" key={title}>
                <div className="sn-benefit-icon">{icon}</div>
                <div className="sn-benefit-title">{title}</div>
                <div className="sn-benefit-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="sn-pillars-section">
        <div className="sn-pillars-inner">
          <div className="sn-section-header">
            <div className="sn-section-label">Os fundamentos</div>
            <h2 className="sn-section-h2">
              Os três pilares
              <br />
              das 20 Skills
            </h2>
            <p className="sn-section-desc">
              Cada skill foi selecionada com base em três critérios
              inegociáveis.
            </p>
          </div>
          <div className="sn-pillars-grid">
            {[
              {
                num: "01",
                title: "Resultado na prática,\nnão na teoria",
                desc: "Nenhuma skill foi incluída sem ter sido testada em operações reais — no meu negócio e nos negócios que acompanho.",
              },
              {
                num: "02",
                title: "Aplicável sem\nconhecimento técnico",
                desc: "Você não precisa saber programar, entender APIs ou contratar um desenvolvedor para aplicar qualquer uma das 20 skills.",
              },
              {
                num: "03",
                title: "Funciona em\nqualquer nicho",
                desc: "Agência de marketing, clínica, escritório de advocacia, e-commerce, consultoria — o método se adapta à sua realidade.",
              },
            ].map(({ num, title, desc }) => (
              <div className="sn-pillar-card" key={num}>
                <div className="sn-pillar-num">{num}</div>
                <div className="sn-pillar-title">
                  {title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </div>
                <div className="sn-pillar-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="sn-contents-section">
        <div className="sn-contents-inner">
          <div className="sn-section-header">
            <div className="sn-section-label">O que você vai receber</div>
            <h2 className="sn-section-h2">
              Skills prontas
              <br />
              para aplicar agora
            </h2>
            <p className="sn-section-desc">
              Com exemplos reais, passo a passo e os prompts que eu mesmo uso no
              dia a dia.
            </p>
          </div>
          <div className="sn-contents-grid">
            {contents.map(([num, text]) => (
              <div className="sn-content-row" key={num}>
                <span className="sn-content-row-num">{num}</span>
                <span className="sn-content-row-text">{text}</span>
              </div>
            ))}
            <div className="sn-content-row">
              <span className="sn-content-row-num">11–20</span>
              <span className="sn-content-row-text sn-content-row-accent">
                + 10 skills avançadas reveladas no ebook
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sn-testimonials-section">
        <div className="sn-testimonials-inner">
          <div className="sn-section-header">
            <div className="sn-section-label">Prova social</div>
            <h2 className="sn-section-h2">
              Empreendedores que
              <br />
              já aplicaram o método
            </h2>
          </div>
          <div className="sn-testimonials-grid">
            {[
              {
                quote:
                  "Em dois dias de aplicação eliminei 6 horas semanais de trabalho repetitivo. O que mais me surpreendeu foi a simplicidade — não precisei de nenhum conhecimento técnico.",
                initials: "MF",
                name: "Marcos F.",
                role: "Dono de agência digital",
              },
              {
                quote:
                  "Apliquei a skill de prospecção e em uma semana fechei dois clientes novos. Antes eu ficava horas montando mensagens. Agora o processo é automático.",
                initials: "CL",
                name: "Carolina L.",
                role: "Consultora de marketing",
              },
              {
                quote:
                  "Sou médico e nunca pensei que conseguiria usar IA no meu negócio. As skills são tão claras que qualquer pessoa aplica. Meu atendimento melhorou 100%.",
                initials: "RP",
                name: "Dr. Ricardo P.",
                role: "Médico e gestor de clínica",
              },
            ].map(({ quote, initials, name, role }) => (
              <div className="sn-testimonial-card" key={name}>
                <p className="sn-testimonial-quote">{quote}</p>
                <div className="sn-testimonial-author">
                  <div className="sn-testimonial-avatar">{initials}</div>
                  <div>
                    <div className="sn-testimonial-name">{name}</div>
                    <div className="sn-testimonial-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="sn-author-section">
        <div className="sn-author-inner">
          <div className="sn-author-photo-wrap">
            <div className="sn-author-photo">
              RA
              <div className="sn-author-ring"></div>
            </div>
            <div className="sn-author-name-badge">
              <div className="sn-author-name-badge-main">
                Rodrigo Albuquerque
              </div>
              <div className="sn-author-name-badge-sub">
                Empreendedor · IA · Negócios
              </div>
            </div>
          </div>
          <div>
            <div className="sn-section-label">Quem desenvolveu o método</div>
            <h2 className="sn-author-h2">
              Construído por quem
              <br />
              <span>usa no próprio negócio</span>
            </h2>
            <p className="sn-author-body">
              Rodrigo Albuquerque é empreendedor, criador de conteúdo sobre IA e
              negócios, e fundador da BA — holding com operações em marketing,
              assessoria de receita e educação digital. Nos últimos anos,
              implementou inteligência artificial em todos os processos do seu
              negócio e compilou nesse ebook as 20 skills que mais geraram
              resultado real — para ele e para os empreendedores que acompanha.
            </p>
            <div className="sn-author-stats">
              {[
                { num: "3", lbl: "Empresas na holding" },
                { num: "20", lbl: "Skills validadas" },
                { num: "100%", lbl: "Baseado em casos reais" },
              ].map(({ num, lbl }) => (
                <div className="sn-author-stat-item" key={lbl}>
                  <span className="sn-author-stat-num">{num}</span>
                  <span className="sn-author-stat-lbl">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sn-final-cta" id="cta">
        <div className="sn-final-cta-bg-glow"></div>
        <div className="sn-final-cta-inner">
          <div className="sn-section-label">Acesso gratuito</div>
          <h2>
            Baixe agora as <span>20 Skills de IA</span>
            <br />e comece hoje.
          </h2>
          <p>
            Use inteligência artificial como vantagem de negócio — não como
            ferramenta de curiosidade. Acesso imediato, sem cartão, sem
            enrolação.
          </p>
          <a
            href="#cta"
            className="sn-btn-cta-final"
            onClick={(e) => { e.preventDefault(); handleCTA("final_cta"); }}
          >
            Baixar Ebook Gratuitamente
          </a>
          <span className="sn-cta-final-micro">
            ✓ gratuito &nbsp;·&nbsp; acesso imediato &nbsp;·&nbsp; pdf completo
            &nbsp;·&nbsp; sem cartão
          </span>
        </div>
      </section>

      {/* FAQ */}
      <section className="sn-faq-section">
        <div className="sn-faq-inner">
          <div className="sn-section-header sn-left">
            <div className="sn-section-label">Dúvidas frequentes</div>
            <h2 className="sn-section-h2 sn-left">
              Perguntas
              <br />
              frequentes
            </h2>
          </div>
          <div className="sn-faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`sn-faq-item${openFaq === index ? " open" : ""}`}
              >
                <div
                  className="sn-faq-q"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                </div>
                <div className="sn-faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sn-footer">
        <div className="sn-footer-brand">
          Rodrigo <span>Albuquerque</span>
        </div>
        <div className="sn-footer-copy">© 2026 · Todos os direitos reservados</div>
      </footer>

      {/* LEAD MODAL */}
      {modalOpen && (
        <div className="sn-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="sn-modal" onClick={(e) => e.stopPropagation()}>
            <button className="sn-modal-close" onClick={() => setModalOpen(false)}>×</button>
            <div className="sn-modal-header">
              <div className="sn-section-label" style={{ marginBottom: 8 }}>Acesso gratuito</div>
              <h3 className="sn-modal-title">INFORME SEUS DADOS:</h3>
            </div>
            <form className="sn-modal-form" onSubmit={handleSubmit} noValidate>
              <input
                className="sn-modal-input"
                type="text"
                placeholder="* Seu nome..."
                value={form.nome}
                onChange={(e) => handleField("nome", e.target.value)}
                autoComplete="name"
              />
              <input
                className="sn-modal-input"
                type="email"
                placeholder="* Seu melhor e-mail..."
                value={form.email}
                onChange={(e) => handleField("email", e.target.value)}
                autoComplete="email"
              />
              <input
                className="sn-modal-input"
                type="tel"
                placeholder="* +55 · Seu whatsapp..."
                value={form.whatsapp}
                onChange={(e) => handleField("whatsapp", e.target.value)}
                autoComplete="tel"
              />
              <select
                className="sn-modal-select"
                value={form.faturamento}
                onChange={(e) => handleField("faturamento", e.target.value)}
              >
                <option value="">* Qual é a sua receita MENSAL aproximada?</option>
                {FATURAMENTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <select
                className="sn-modal-select"
                value={form.cargo}
                onChange={(e) => handleField("cargo", e.target.value)}
              >
                <option value="">* Cargo</option>
                {CARGO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <select
                className="sn-modal-select"
                value={form.segmento}
                onChange={(e) => handleField("segmento", e.target.value)}
              >
                <option value="">* Segmento</option>
                {SEGMENTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {formError && <div className="sn-modal-error">{formError}</div>}
              <button
                type="submit"
                className="sn-modal-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "BAIXAR EBOOK GRATUITAMENTE"}
              </button>
              <div className="sn-cta-micro" style={{ marginTop: 8 }}>
                ✓ gratuito &nbsp;·&nbsp; sem spam &nbsp;·&nbsp; acesso imediato
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fonts + Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Exo+2:wght@300;400;500&display=swap');

        .sn-root {
          --sn-void: #060A12;
          --sn-surface: #0C1220;
          --sn-hud: #111A2E;
          --sn-arc: #38BDF8;
          --sn-arc-bright: #7DD3FC;
          --sn-arc-dim: #0C4A6E;
          --sn-arc-subtle: rgba(56,189,248,0.06);
          --sn-arc-border: rgba(56,189,248,0.08);
          --sn-arc-border-hover: rgba(56,189,248,0.22);
          --sn-gold: #F59E0B;
          --sn-gold-subtle: rgba(245,158,11,0.08);
          --sn-ivory: #F0F6FF;
          --sn-text: #C8D6E5;
          --sn-dim: #5A7089;
          --sn-muted: #3D5068;
          --sn-success: #34D399;
          --sn-font-display: 'Chakra Petch', sans-serif;
          --sn-font-mono: 'IBM Plex Mono', monospace;
          --sn-font-body: 'Exo 2', sans-serif;
          --sn-glow-arc: 0 0 32px rgba(56,189,248,0.2);
          --sn-radius-sm: 6px;
          --sn-radius-md: 10px;
          --sn-radius-lg: 14px;
          background: var(--sn-void);
          font-family: var(--sn-font-body);
          color: var(--sn-text);
          font-size: 16px;
          line-height: 1.7;
          overflow-x: hidden;
        }

        /* NAV */
        .sn-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(6,10,18,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 0.5px solid var(--sn-arc-border);
        }
        .sn-nav-brand {
          font-family: var(--sn-font-display);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          letter-spacing: 1px;
        }
        .sn-nav-brand span { color: var(--sn-arc); }
        .sn-nav-cta {
          font-family: var(--sn-font-display);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--sn-void);
          background: var(--sn-arc);
          border: none;
          padding: 10px 22px;
          border-radius: var(--sn-radius-sm);
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .sn-nav-cta:hover { box-shadow: var(--sn-glow-arc); transform: translateY(-1px); }

        /* HERO */
        .sn-hero-section {
          position: relative;
          background:
            radial-gradient(ellipse at 15% 40%, rgba(56,189,248,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(220,38,38,0.04) 0%, transparent 45%),
            var(--sn-void);
        }
        .sn-hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56,189,248,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.022) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
        }
        .sn-hero-section::after {
          content: '';
          position: absolute;
          top: 90px; left: 20px;
          width: 40px; height: 40px;
          border-top: 1.5px solid rgba(56,189,248,0.25);
          border-left: 1.5px solid rgba(56,189,248,0.25);
          pointer-events: none;
        }
        .sn-hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          padding: 120px 40px 80px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .sn-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--sn-font-mono);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--sn-arc);
          margin-bottom: 24px;
        }
        .sn-dot-live {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--sn-arc);
          animation: snLivePulse 2s ease-in-out infinite;
        }
        @keyframes snLivePulse {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .sn-h1 {
          font-family: var(--sn-font-display);
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.05;
          color: var(--sn-ivory);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .sn-num { color: var(--sn-arc); }
        .sn-accent {
          display: block;
          background: linear-gradient(90deg, var(--sn-arc), var(--sn-arc-bright));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sn-hero-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--sn-text);
          line-height: 1.7;
          margin-bottom: 8px;
          max-width: 460px;
        }
        .sn-hero-contrast {
          font-size: 15px;
          font-weight: 400;
          color: var(--sn-arc);
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 460px;
        }
        .sn-cta-group {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 380px;
        }
        .sn-btn-primary {
          background: var(--sn-arc);
          color: var(--sn-void);
          font-family: var(--sn-font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          padding: 18px 36px;
          border: none;
          border-radius: var(--sn-radius-md);
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          text-align: center;
          text-decoration: none;
          display: block;
        }
        .sn-btn-primary:hover { box-shadow: var(--sn-glow-arc); transform: translateY(-2px); }
        .sn-cta-micro {
          font-family: var(--sn-font-mono);
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--sn-dim);
          text-align: center;
        }
        .sn-skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 28px;
          max-width: 460px;
        }
        .sn-skill-tag {
          font-family: var(--sn-font-mono);
          font-size: 9px;
          letter-spacing: 0.5px;
          padding: 5px 11px;
          border-radius: 4px;
          background: var(--sn-arc-subtle);
          color: var(--sn-arc);
          border: 0.5px solid rgba(56,189,248,0.14);
        }
        .sn-skill-tag-gold {
          background: var(--sn-gold-subtle);
          color: var(--sn-gold);
          border-color: rgba(245,158,11,0.2);
        }

        /* BOOK MOCKUP */
        .sn-hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .sn-book-wrap {
          position: relative;
          width: 360px;
          height: 460px;
        }
        .sn-book-glow-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%);
          animation: snGlowBeat 3.5s ease-in-out infinite;
        }
        @keyframes snGlowBeat {
          0%,100% { opacity: 0.5; transform: translate(-50%,-50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%,-50%) scale(1.1); }
        }
        .sn-book-pages-top {
          position: absolute;
          top: 18px; left: 46px;
          width: 256px; height: 7px;
          background: repeating-linear-gradient(90deg, rgba(240,246,255,0.07) 0, rgba(240,246,255,0.07) 1px, transparent 1px, transparent 2.5px);
          border-radius: 0 2px 0 0;
          transform: rotate(-1.5deg);
          animation: snFloat 4s ease-in-out infinite;
        }
        .sn-book-spine {
          position: absolute;
          top: 22px; left: 38px;
          width: 9px; height: 330px;
          background: linear-gradient(to right, #040710, #0C1525);
          border: 0.5px solid rgba(56,189,248,0.12);
          border-right: none;
          border-radius: 2px 0 0 2px;
          transform: rotate(-1.5deg);
          animation: snFloat 4s ease-in-out infinite;
        }
        .sn-book-cover {
          position: absolute;
          top: 22px; left: 47px;
          width: 252px; height: 330px;
          background: linear-gradient(150deg, #0F1E3A 0%, #0A1528 45%, #070D1C 100%);
          border-radius: 3px 12px 12px 3px;
          border: 0.5px solid rgba(56,189,248,0.22);
          box-shadow: 6px 10px 40px rgba(0,0,0,0.75), inset 0 0 0 0.5px rgba(56,189,248,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 22px;
          text-align: center;
          overflow: hidden;
          transform: rotate(-1.5deg);
          animation: snFloat 4s ease-in-out infinite;
        }
        @keyframes snFloat {
          0%,100% { transform: rotate(-1.5deg) translateY(0); }
          50% { transform: rotate(-1.5deg) translateY(-10px); }
        }
        .sn-book-cover::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--sn-arc), transparent);
          opacity: 0.4;
        }
        .sn-book-cover::after {
          content: '';
          position: absolute;
          top: 8px; right: 8px;
          width: 14px; height: 14px;
          border-top: 1px solid rgba(56,189,248,0.3);
          border-right: 1px solid rgba(56,189,248,0.3);
        }
        .sn-book-reactor {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(56,189,248,0.35);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          animation: snReactorSpin 10s linear infinite;
        }
        @keyframes snReactorSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sn-book-reactor-inner {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0.12) 60%, transparent 100%);
          border: 1px solid rgba(56,189,248,0.5);
          animation: snLivePulse 2.5s ease-in-out infinite;
        }
        .sn-book-author {
          font-family: var(--sn-font-mono);
          font-size: 7px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--sn-dim);
          margin-bottom: 10px;
        }
        .sn-book-big-num {
          font-family: var(--sn-font-display);
          font-size: 52px;
          font-weight: 700;
          color: var(--sn-arc);
          line-height: 1;
          text-shadow: 0 0 24px rgba(56,189,248,0.35);
          letter-spacing: -2px;
        }
        .sn-book-big-label {
          font-family: var(--sn-font-display);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--sn-ivory);
          letter-spacing: 2px;
          margin-bottom: 4px;
        }
        .sn-book-subtitle {
          font-family: var(--sn-font-display);
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          margin-bottom: 14px;
          line-height: 1.15;
        }
        .sn-book-divider {
          width: 36px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--sn-arc), transparent);
          margin: 0 auto 12px;
        }
        .sn-book-tagline {
          font-family: var(--sn-font-mono);
          font-size: 7px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--sn-dim);
          line-height: 1.6;
        }
        .sn-book-tagline strong { color: var(--sn-arc); }
        .sn-float-badge {
          position: absolute;
          top: 4px; right: 4px;
          background: rgba(245,158,11,0.1);
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: var(--sn-radius-md);
          padding: 10px 14px;
          text-align: center;
          animation: snFloatAlt 3.5s ease-in-out infinite 1s;
        }
        @keyframes snFloatAlt {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        .sn-float-badge-num {
          font-family: var(--sn-font-display);
          font-size: 18px;
          font-weight: 700;
          color: var(--sn-gold);
          display: block;
          line-height: 1;
        }
        .sn-float-badge-lbl {
          font-family: var(--sn-font-mono);
          font-size: 7px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(245,158,11,0.65);
          margin-top: 3px;
          display: block;
        }
        .sn-float-stat {
          position: absolute;
          bottom: 30px; right: -10px;
          background: var(--sn-surface);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-md);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: snFloatAlt 3.5s ease-in-out infinite 2s;
        }
        .sn-float-stat-icon {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: var(--sn-arc-subtle);
          border: 0.5px solid rgba(56,189,248,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
        }
        .sn-float-stat-num {
          font-family: var(--sn-font-display);
          font-size: 13px;
          font-weight: 700;
          color: var(--sn-arc);
          display: block; line-height: 1;
        }
        .sn-float-stat-lbl {
          font-family: var(--sn-font-mono);
          font-size: 7.5px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--sn-dim);
          display: block; margin-top: 3px;
        }

        /* PROOF STRIP */
        .sn-proof-strip {
          background: var(--sn-surface);
          border-top: 0.5px solid var(--sn-arc-border);
          border-bottom: 0.5px solid var(--sn-arc-border);
          padding: 20px 40px;
        }
        .sn-proof-strip-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .sn-proof-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--sn-font-mono);
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--sn-dim);
        }
        .sn-proof-item span {
          color: var(--sn-arc);
          font-size: 16px;
          font-weight: 600;
          font-family: var(--sn-font-display);
        }
        .sn-proof-sep { width: 1px; height: 28px; background: var(--sn-arc-border); }

        /* BULLETS */
        .sn-bullets-section {
          padding: 100px 40px;
          background:
            radial-gradient(ellipse at 80% 50%, rgba(56,189,248,0.05) 0%, transparent 50%),
            var(--sn-void);
        }
        .sn-bullets-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .sn-section-label {
          font-family: var(--sn-font-mono);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--sn-arc);
          opacity: 0.85;
          display: inline-block;
          margin-bottom: 16px;
        }
        .sn-bullets-h2 {
          font-family: var(--sn-font-display);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .sn-bullets-h2 em { color: var(--sn-arc); font-style: normal; display: block; }
        .sn-bullets-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--sn-text);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .sn-bullet-list { list-style: none; display: flex; flex-direction: column; gap: 14px; padding: 0; }
        .sn-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 14px;
          color: var(--sn-text);
          line-height: 1.5;
        }
        .sn-bullet-check {
          width: 20px; height: 20px;
          min-width: 20px;
          border-radius: 4px;
          background: rgba(52,211,153,0.1);
          border: 0.5px solid rgba(52,211,153,0.3);
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
        }
        .sn-bullet-check::after {
          content: '✓';
          color: var(--sn-success);
          font-size: 10px;
          font-family: var(--sn-font-mono);
          font-weight: 600;
        }
        .sn-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .sn-benefit-card {
          background: var(--sn-surface);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-lg);
          padding: 20px;
          position: relative;
          transition: border-color 0.3s;
        }
        .sn-benefit-card:hover { border-color: var(--sn-arc-border-hover); }
        .sn-benefit-card::after {
          content: '';
          position: absolute;
          top: 8px; right: 8px;
          width: 10px; height: 10px;
          border-top: 1px solid rgba(56,189,248,0.2);
          border-right: 1px solid rgba(56,189,248,0.2);
        }
        .sn-benefit-icon { font-size: 22px; margin-bottom: 10px; }
        .sn-benefit-title {
          font-family: var(--sn-font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }
        .sn-benefit-desc { font-size: 12px; font-weight: 300; color: var(--sn-dim); line-height: 1.5; }

        /* PILLARS */
        .sn-pillars-section {
          padding: 100px 40px;
          background: var(--sn-surface);
          border-top: 0.5px solid var(--sn-arc-border);
          border-bottom: 0.5px solid var(--sn-arc-border);
        }
        .sn-pillars-inner { max-width: 1100px; margin: 0 auto; }
        .sn-section-header { text-align: center; margin-bottom: 60px; }
        .sn-section-h2 {
          font-family: var(--sn-font-display);
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .sn-section-desc { font-size: 15px; font-weight: 300; color: var(--sn-dim); max-width: 540px; margin: 0 auto; }
        .sn-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .sn-pillar-card {
          background: var(--sn-void);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-lg);
          padding: 32px 28px;
          position: relative;
          transition: border-color 0.3s, transform 0.3s;
          text-align: center;
        }
        .sn-pillar-card:hover { border-color: var(--sn-arc-border-hover); transform: translateY(-4px); }
        .sn-pillar-card::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--sn-arc), transparent);
          opacity: 0.5;
        }
        .sn-pillar-num {
          font-family: var(--sn-font-display);
          font-size: 48px;
          font-weight: 700;
          color: var(--sn-arc);
          opacity: 0.15;
          line-height: 1;
          margin-bottom: 12px;
        }
        .sn-pillar-title {
          font-family: var(--sn-font-display);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        .sn-pillar-desc { font-size: 13px; font-weight: 300; color: var(--sn-dim); line-height: 1.6; }

        /* CONTENTS */
        .sn-contents-section {
          padding: 100px 40px;
          background:
            radial-gradient(ellipse at 20% 80%, rgba(56,189,248,0.05) 0%, transparent 50%),
            var(--sn-void);
        }
        .sn-contents-inner { max-width: 1100px; margin: 0 auto; }
        .sn-contents-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 48px;
        }
        .sn-content-row {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--sn-surface);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-md);
          padding: 16px 20px;
          transition: border-color 0.3s;
        }
        .sn-content-row:hover { border-color: var(--sn-arc-border-hover); }
        .sn-content-row-num {
          font-family: var(--sn-font-mono);
          font-size: 10px;
          color: var(--sn-arc);
          opacity: 0.6;
          min-width: 28px;
        }
        .sn-content-row-text { font-size: 14px; color: var(--sn-text); font-weight: 300; }
        .sn-content-row-accent { color: var(--sn-arc) !important; }

        /* TESTIMONIALS */
        .sn-testimonials-section {
          padding: 100px 40px;
          background: var(--sn-surface);
          border-top: 0.5px solid var(--sn-arc-border);
          border-bottom: 0.5px solid var(--sn-arc-border);
        }
        .sn-testimonials-inner { max-width: 1100px; margin: 0 auto; }
        .sn-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .sn-testimonial-card {
          background: var(--sn-void);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-lg);
          padding: 28px;
          position: relative;
          transition: border-color 0.3s;
        }
        .sn-testimonial-card:hover { border-color: var(--sn-arc-border-hover); }
        .sn-testimonial-card::after {
          content: '';
          position: absolute;
          top: 8px; right: 8px;
          width: 10px; height: 10px;
          border-top: 1px solid rgba(56,189,248,0.15);
          border-right: 1px solid rgba(56,189,248,0.15);
        }
        .sn-testimonial-quote {
          font-size: 13px;
          font-weight: 300;
          color: var(--sn-text);
          line-height: 1.7;
          margin-bottom: 20px;
          font-style: italic;
        }
        .sn-testimonial-quote::before {
          content: '"';
          color: var(--sn-arc);
          font-size: 20px;
          font-family: Georgia, serif;
          font-style: normal;
          line-height: 0;
          vertical-align: -6px;
          margin-right: 4px;
        }
        .sn-testimonial-author { display: flex; align-items: center; gap: 12px; }
        .sn-testimonial-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--sn-arc-subtle);
          border: 0.5px solid rgba(56,189,248,0.2);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--sn-font-display);
          font-size: 12px;
          font-weight: 700;
          color: var(--sn-arc);
          flex-shrink: 0;
        }
        .sn-testimonial-name {
          font-family: var(--sn-font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          letter-spacing: 0.5px;
        }
        .sn-testimonial-role {
          font-family: var(--sn-font-mono);
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--sn-dim);
          margin-top: 2px;
        }

        /* AUTHOR */
        .sn-author-section {
          padding: 100px 40px;
          background:
            radial-gradient(ellipse at 70% 40%, rgba(56,189,248,0.05) 0%, transparent 50%),
            var(--sn-void);
        }
        .sn-author-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
          align-items: center;
        }
        .sn-author-photo-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .sn-author-photo {
          width: 220px; height: 220px;
          border-radius: 50%;
          background: var(--sn-surface);
          border: 2px solid rgba(56,189,248,0.2);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--sn-font-display);
          font-size: 64px;
          font-weight: 700;
          color: var(--sn-arc);
          position: relative;
          overflow: visible;
        }
        .sn-author-photo::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(56,189,248,0.12) 0%, transparent 60%);
        }
        .sn-author-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(56,189,248,0.12);
          animation: snReactorSpin 15s linear infinite;
          pointer-events: none;
        }
        .sn-author-ring::before {
          content: '';
          position: absolute;
          top: -3px; left: 50%;
          transform: translateX(-50%);
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--sn-arc);
          opacity: 0.6;
        }
        .sn-author-name-badge {
          background: var(--sn-surface);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-md);
          padding: 10px 18px;
          text-align: center;
        }
        .sn-author-name-badge-main {
          font-family: var(--sn-font-display);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          letter-spacing: 0.5px;
        }
        .sn-author-name-badge-sub {
          font-family: var(--sn-font-mono);
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--sn-arc);
          margin-top: 3px;
        }
        .sn-author-h2 {
          font-family: var(--sn-font-display);
          font-size: clamp(20px, 2.5vw, 30px);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .sn-author-h2 span { color: var(--sn-arc); }
        .sn-author-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--sn-text);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .sn-author-stats { display: flex; gap: 32px; flex-wrap: wrap; }
        .sn-author-stat-item { display: flex; flex-direction: column; gap: 4px; }
        .sn-author-stat-num {
          font-family: var(--sn-font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--sn-arc);
        }
        .sn-author-stat-lbl {
          font-family: var(--sn-font-mono);
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--sn-dim);
        }

        /* FINAL CTA */
        .sn-final-cta {
          padding: 120px 40px;
          background: var(--sn-surface);
          border-top: 0.5px solid var(--sn-arc-border);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sn-final-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 600px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--sn-arc), transparent);
          opacity: 0.4;
        }
        .sn-final-cta-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .sn-final-cta-bg-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 500px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .sn-final-cta h2 {
          font-family: var(--sn-font-display);
          font-size: clamp(22px, 3.2vw, 40px);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          margin-bottom: 14px;
          line-height: 1.1;
        }
        .sn-final-cta h2 span { color: var(--sn-arc); }
        .sn-final-cta p {
          font-size: 15px;
          font-weight: 300;
          color: var(--sn-dim);
          margin-bottom: 40px;
          line-height: 1.7;
        }
        .sn-btn-cta-final {
          background: var(--sn-arc);
          color: var(--sn-void);
          font-family: var(--sn-font-display);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          padding: 20px 56px;
          border: none;
          border-radius: var(--sn-radius-md);
          cursor: pointer;
          transition: all 0.3s;
          display: inline-block;
          text-decoration: none;
          margin-bottom: 16px;
        }
        .sn-btn-cta-final:hover { box-shadow: var(--sn-glow-arc); transform: translateY(-2px); }
        .sn-cta-final-micro {
          display: block;
          font-family: var(--sn-font-mono);
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--sn-muted);
          margin-top: 12px;
        }

        /* FAQ */
        .sn-faq-section {
          padding: 100px 40px;
          background: var(--sn-void);
          border-top: 0.5px solid var(--sn-arc-border);
        }
        .sn-faq-inner { max-width: 760px; margin: 0 auto; }
        .sn-left { text-align: left !important; }
        .sn-faq-list { display: flex; flex-direction: column; gap: 12px; margin-top: 48px; }
        .sn-faq-item {
          background: var(--sn-surface);
          border: 0.5px solid var(--sn-arc-border);
          border-radius: var(--sn-radius-lg);
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .sn-faq-item:hover { border-color: rgba(56,189,248,0.14); }
        .sn-faq-q {
          padding: 20px 24px;
          font-family: var(--sn-font-display);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--sn-ivory);
          letter-spacing: 0.5px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          user-select: none;
        }
        .sn-faq-q::after {
          content: '+';
          color: var(--sn-arc);
          font-size: 20px;
          font-weight: 300;
          font-family: var(--sn-font-mono);
          min-width: 20px;
          text-align: right;
          transition: transform 0.3s;
          flex-shrink: 0;
        }
        .sn-faq-item.open .sn-faq-q::after { content: '−'; }
        .sn-faq-a {
          padding: 0 24px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
          font-size: 14px;
          font-weight: 300;
          color: var(--sn-dim);
          line-height: 1.75;
        }
        .sn-faq-item.open .sn-faq-a {
          max-height: 300px;
          padding: 0 24px 20px;
        }
        .sn-faq-check { color: var(--sn-success); font-weight: 500; }

        /* FOOTER */
        .sn-footer {
          padding: 40px;
          background: var(--sn-void);
          border-top: 0.5px solid var(--sn-arc-border);
          text-align: center;
        }
        .sn-footer-brand {
          font-family: var(--sn-font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-muted);
          letter-spacing: 1.5px;
          margin-bottom: 8px;
        }
        .sn-footer-brand span { color: var(--sn-arc); }
        .sn-footer-copy {
          font-family: var(--sn-font-mono);
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--sn-muted);
        }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .sn-nav { padding: 16px 20px; }
          .sn-hero { grid-template-columns: 1fr; padding: 100px 20px 60px; gap: 48px; }
          .sn-hero-visual { order: -1; }
          .sn-book-wrap { width: 280px; height: 360px; }
          .sn-book-cover { width: 200px; height: 268px; left: 37px; top: 18px; }
          .sn-book-spine { left: 28px; top: 18px; height: 268px; }
          .sn-book-pages-top { left: 36px; top: 15px; width: 204px; }
          .sn-book-glow-bg { width: 220px; height: 220px; }
          .sn-book-big-num { font-size: 40px; }
          .sn-float-stat { right: 0; }
          .sn-bullets-inner { grid-template-columns: 1fr; gap: 48px; }
          .sn-pillars-grid { grid-template-columns: 1fr; }
          .sn-contents-grid { grid-template-columns: 1fr; }
          .sn-testimonials-grid { grid-template-columns: 1fr; }
          .sn-author-inner { grid-template-columns: 1fr; text-align: center; }
          .sn-author-photo-wrap { align-items: center; }
          .sn-author-stats { justify-content: center; }
          .sn-benefits-grid { grid-template-columns: 1fr; }
          .sn-proof-strip-inner { gap: 24px; }
          .sn-proof-sep { display: none; }
          .sn-bullets-section,
          .sn-pillars-section,
          .sn-contents-section,
          .sn-testimonials-section,
          .sn-author-section,
          .sn-final-cta,
          .sn-faq-section {
            padding-left: 20px;
            padding-right: 20px;
          }
          .sn-proof-strip { padding: 20px; }
        }

        /* MODAL */
        .sn-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(6,10,18,0.82);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .sn-modal {
          position: relative;
          background: var(--sn-surface);
          border: 0.5px solid rgba(56,189,248,0.2);
          border-radius: var(--sn-radius-lg);
          padding: 36px 32px 32px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(56,189,248,0.06) inset;
        }
        .sn-modal::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 120px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--sn-arc), transparent);
          opacity: 0.5;
          border-radius: 1px;
        }
        .sn-modal-close {
          position: absolute;
          top: 14px; right: 18px;
          background: none;
          border: none;
          color: var(--sn-dim);
          font-size: 22px;
          cursor: pointer;
          line-height: 1;
          transition: color 0.2s;
          font-family: var(--sn-font-mono);
        }
        .sn-modal-close:hover { color: var(--sn-ivory); }
        .sn-modal-header { margin-bottom: 24px; }
        .sn-modal-title {
          font-family: var(--sn-font-display);
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sn-ivory);
          letter-spacing: 1px;
        }
        .sn-modal-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sn-modal-input,
        .sn-modal-select {
          width: 100%;
          background: rgba(56,189,248,0.04);
          border: 0.5px solid rgba(56,189,248,0.14);
          border-radius: var(--sn-radius-sm);
          padding: 13px 16px;
          font-family: var(--sn-font-body);
          font-size: 14px;
          font-weight: 300;
          color: var(--sn-ivory);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .sn-modal-input::placeholder { color: var(--sn-dim); }
        .sn-modal-input:focus,
        .sn-modal-select:focus {
          border-color: rgba(56,189,248,0.4);
          background: rgba(56,189,248,0.07);
        }
        .sn-modal-select option {
          background: #0C1220;
          color: var(--sn-ivory);
        }
        .sn-modal-select option[value=""] { color: var(--sn-dim); }
        .sn-modal-error {
          font-family: var(--sn-font-mono);
          font-size: 10px;
          letter-spacing: 1px;
          color: #F87171;
          padding: 4px 0;
        }
        .sn-modal-btn {
          background: var(--sn-arc);
          color: var(--sn-void);
          font-family: var(--sn-font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          padding: 16px 24px;
          border: none;
          border-radius: var(--sn-radius-md);
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 4px;
        }
        .sn-modal-btn:hover:not(:disabled) { box-shadow: var(--sn-glow-arc); transform: translateY(-1px); }
        .sn-modal-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        @media (max-width: 860px) {
          .sn-modal { padding: 28px 20px 24px; }
        }
      `}</style>
    </div>
  );
};

export default EducacaoSkillsNegocios;
