import { useEffect } from "react";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import { tracker } from "@/lib/tracking";
import { Calendar, Clock, Video, MessageCircle, Zap, DollarSign, Brain, Rocket, ArrowRight } from "lucide-react";

const HOTMART_BASE_URL = "https://pay.hotmart.com/T104822269G";

const ClaudeCode = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0e1a0f";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    tracker.page("Masterclass Claude Code");
  }, []);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "claude-code",
      cta_location: location,
      page: "/educacao/claude-code",
    });
    const url = buildHotmartCheckoutUrl({ baseUrl: HOTMART_BASE_URL });
    window.open(url, "_blank");
  };

  const learningTopics = [
    {
      icon: Brain,
      title: "Fundamentos do Claude",
      description: "Por que ele é diferente das outras IAs e como isso muda a forma de trabalhar.",
    },
    {
      icon: Zap,
      title: "Chat, Code e Coworking",
      description: "A diferença entre os três modos e quando usar cada um na prática.",
    },
    {
      icon: Rocket,
      title: "Skills e MCPs",
      description: "Como utilizar Skills e MCPs para trabalhar melhor na nova era da IA.",
    },
    {
      icon: MessageCircle,
      title: "Automações práticas",
      description: "Como pensar automações sem complicação, mesmo para quem nunca abriu uma IDE.",
    },
  ];

  const practicalExamples = [
    {
      icon: DollarSign,
      text: "Como deixei de pagar mais de R$500 em aplicativos que repliquei com Claude",
    },
    {
      icon: Clock,
      text: "Claude Coworking + Notion = mais de 4 horas economizadas por semana",
    },
    {
      icon: Rocket,
      text: "Os aplicativos mais ousados que estou construindo e que estão mudando minha tese de negócios",
    },
    {
      icon: Brain,
      text: "O que a Y Combinator está dizendo sobre esse movimento",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: "#0e1a0f" }}>
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9999,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Minimal Navbar */}
      <nav
        className="sticky top-0 z-50 border-b px-6 py-4"
        style={{
          backgroundColor: "#162318",
          borderColor: "rgba(201, 162, 39, 0.2)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span
            className="text-lg tracking-[3px]"
            style={{ fontFamily: "'Playfair Display', serif", color: "#c9a227" }}
          >
            BA · CONSULTORIA
          </span>
          <button
            onClick={() => handleCTA("nav")}
            className="text-sm uppercase tracking-[4px] border px-5 py-2 transition-all duration-400"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#c9a227",
              borderColor: "rgba(201, 162, 39, 0.3)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c9a227";
              e.currentTarget.style.color = "#0e1a0f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#c9a227";
            }}
          >
            Inscrever-se
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        {/* Decorative vertical line */}
        <div
          className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: "1px",
            height: "120px",
            backgroundColor: "rgba(201, 162, 39, 0.2)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(201, 162, 39, 0.7)",
              }}
            >
              ✦&nbsp;&nbsp;&nbsp;Masterclass ao vivo · 25/03 às 19h&nbsp;&nbsp;&nbsp;✦
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
          >
            Automatize sua vida com{" "}
            <span style={{ fontStyle: "italic", color: "#c9a227" }}>Claude</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#6b7d5a",
              fontSize: "clamp(17px, 2.2vw, 20px)",
              lineHeight: 1.85,
            }}
          >
            Saia da teoria e aprenda, na prática, como usar Claude de verdade para ganhar
            produtividade, construir automações e criar aplicações úteis no dia a dia.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button
              onClick={() => handleCTA("hero")}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[3px] border px-8 py-4 transition-all duration-500"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: "#c9a227",
                borderColor: "rgba(201, 162, 39, 0.4)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c9a227";
                e.currentTarget.style.color = "#0e1a0f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#c9a227";
              }}
            >
              Garantir minha vaga
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="text-center py-4" style={{ color: "rgba(201, 162, 39, 0.3)" }}>
        ✦
      </div>

      {/* O que você vai aprender */}
      <section className="px-6" style={{ backgroundColor: "#162318", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-[6px] block mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(201, 162, 39, 0.7)",
              }}
            >
              O que você vai aprender
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
            >
              Da teoria à{" "}
              <span style={{ fontStyle: "italic", color: "#c9a227" }}>prática</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="p-7 border transition-all duration-400"
                style={{
                  backgroundColor: "#1c2e1e",
                  borderColor: "rgba(201, 162, 39, 0.1)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201, 162, 39, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201, 162, 39, 0.1)";
                }}
              >
                <topic.icon className="w-6 h-6 mb-4" style={{ color: "#c9a227" }} />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
                >
                  {topic.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#6b7d5a",
                    lineHeight: 1.85,
                  }}
                >
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="text-center py-4" style={{ color: "rgba(201, 162, 39, 0.3)" }}>
        ✦
      </div>

      {/* O que vou mostrar na prática */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-[6px] block mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(201, 162, 39, 0.7)",
              }}
            >
              Na prática
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
            >
              O que vou{" "}
              <span style={{ fontStyle: "italic", color: "#c9a227" }}>mostrar ao vivo</span>
            </h2>
          </div>

          {/* Quote */}
          <p
            className="text-center text-xl md:text-2xl mb-16 max-w-3xl mx-auto"
            style={{
              fontFamily: "'IM Fell English', serif",
              fontStyle: "italic",
              color: "#f0e6d0",
              lineHeight: 1.7,
            }}
          >
            "Vou abrir parte do que eu já venho construindo na prática — incluindo o que está mudando
            completamente minha tese de negócios."
          </p>

          <div className="space-y-5">
            {practicalExamples.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 border transition-all duration-400"
                style={{
                  backgroundColor: "#1c2e1e",
                  borderColor: "rgba(201, 162, 39, 0.1)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201, 162, 39, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201, 162, 39, 0.1)";
                }}
              >
                <item.icon
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: "#c9a227" }}
                />
                <p
                  className="text-lg"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#f0e6d0",
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="text-center py-4" style={{ color: "rgba(201, 162, 39, 0.3)" }}>
        ✦
      </div>

      {/* Detalhes do evento */}
      <section className="px-6" style={{ backgroundColor: "#162318", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs uppercase tracking-[6px] block mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(201, 162, 39, 0.7)",
              }}
            >
              Detalhes
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
            >
              Quando e onde
            </h2>
          </div>

          <div
            className="p-8 md:p-12 border text-center"
            style={{
              backgroundColor: "#1c2e1e",
              borderColor: "rgba(201, 162, 39, 0.2)",
              borderRadius: "4px",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-center gap-3">
                <Calendar className="w-6 h-6" style={{ color: "#c9a227" }} />
                <div>
                  <p
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
                  >
                    25 de março de 2025
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#6b7d5a" }}
                  >
                    Terça-feira
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="w-6 h-6" style={{ color: "#c9a227" }} />
                <div>
                  <p
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
                  >
                    19h (Horário de São Paulo)
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#6b7d5a" }}
                  >
                    Ao vivo
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" style={{ color: "#c9a227" }} />
                <span
                  className="text-base"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f0e6d0" }}
                >
                  Google Meet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" style={{ color: "#c9a227" }} />
                <span
                  className="text-base"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f0e6d0" }}
                >
                  Dúvidas ao vivo no final
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleCTA("details")}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[3px] border px-8 py-4 transition-all duration-500"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: "#c9a227",
                borderColor: "rgba(201, 162, 39, 0.4)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c9a227";
                e.currentTarget.style.color = "#0e1a0f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#c9a227";
              }}
            >
              Garantir minha vaga
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="text-center py-4" style={{ color: "rgba(201, 162, 39, 0.3)" }}>
        ✦
      </div>

      {/* CTA Final */}
      <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p
            className="text-xl md:text-2xl"
            style={{
              fontFamily: "'IM Fell English', serif",
              fontStyle: "italic",
              color: "#f0e6d0",
              lineHeight: 1.7,
            }}
          >
            "A melhor hora para começar foi ontem. A segunda melhor é agora."
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0e6d0" }}
          >
            Comece a construir com{" "}
            <span style={{ fontStyle: "italic", color: "#c9a227" }}>Claude</span>
          </h2>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#6b7d5a",
              lineHeight: 1.85,
            }}
          >
            Masterclass ao vivo, 25 de março às 19h. Vagas limitadas pelo Google Meet.
          </p>

          <button
            onClick={() => handleCTA("final")}
            className="inline-flex items-center gap-3 text-base uppercase tracking-[3px] border px-10 py-5 transition-all duration-500"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: "#c9a227",
              borderColor: "rgba(201, 162, 39, 0.5)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c9a227";
              e.currentTarget.style.color = "#0e1a0f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#c9a227";
            }}
          >
            Garantir minha vaga agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-12"
        style={{
          backgroundColor: "#0a1209",
          borderColor: "rgba(201, 162, 39, 0.2)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span
            className="text-base tracking-[3px]"
            style={{ fontFamily: "'Playfair Display', serif", color: "#c9a227" }}
          >
            BA · CONSULTORIA
          </span>
          <p
            className="text-sm"
            style={{
              fontFamily: "'IM Fell English', serif",
              fontStyle: "italic",
              color: "#6b7d5a",
            }}
          >
            O estilo é a roupa da ideia. Vista bem.
          </p>
          <p
            className="text-xs tracking-[2px]"
            style={{ fontFamily: "monospace", color: "#6b7d5a" }}
          >
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=IM+Fell+English:ital@1&family=Cormorant+Garamond:wght@400;600&display=swap');
      `}</style>
    </div>
  );
};

export default ClaudeCode;
