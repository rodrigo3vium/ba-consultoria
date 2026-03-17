import { useEffect } from "react";

const diagnosticItems = [
  {
    icon: "📈",
    title: "Crescimento orgânico acelerado",
    text: "Em menos de 3 semanas focando em conteúdo para profissionais de estética, você ganhou quase 2.000 seguidores novos com alto engajamento. Isso prova que o público existe e está faminto pelo seu conteúdo.",
  },
  {
    icon: "💰",
    title: "Vendas dependem de você",
    text: "100% das vendas do mês vieram diretamente do seu esforço pessoal. O time de WhatsApp não está convertendo — falta processo, script e automação para transformar interesse em compra.",
  },
  {
    icon: "🎯",
    title: "Experiência anterior frustrante",
    text: "A agência anterior não segmentou público, não alinhou expectativas e não entregou resultado. Isso gerou desconfiança e gasto sem retorno — precisamos reconstruir confiança com resultados reais.",
  },
  {
    icon: "🚀",
    title: "Potencial de escada de valor",
    text: "Você já tem um curso a R$297, consultoria a R$3.500 com taxa de conversão de ~10% em reuniões, e mais produtos em desenvolvimento. A estrutura para uma escada de valor já está nascendo.",
  },
];

const strategySteps = [
  {
    num: 1,
    title: "Potencializar o orgânico",
    text: "Vamos estruturar sua produção de conteúdo com calendário editorial, formatos que convertem e uma estratégia de Stories focada em vendas. Você já provou que sabe engajar — agora vamos direcionar esse engajamento para a compra.",
  },
  {
    num: 2,
    title: "Tráfego de retargeting na base",
    text: "Ao invés de gastar dinheiro tentando encontrar pessoas desconhecidas, vamos investir pouco para aparecer para quem já te segue, já assistiu seus vídeos e já demonstrou interesse. Conversão muito mais alta com investimento muito menor.",
  },
  {
    num: 3,
    title: "Otimização do funil de vendas",
    text: "Vamos trabalhar cada etapa: alcance → clique no link da bio → visita na página de vendas → compra. Se uma etapa não funciona, a gente corrige antes de avançar. Isso é marketing como ciência, não achismo.",
  },
  {
    num: 4,
    title: "Construção da escada de valor",
    text: "Com a base crescendo, vamos estruturar a jornada: curso de entrada (R$297) → materiais complementares → consultoria/mentoria (R$3.500+). Cada produto alimenta o próximo, aumentando o valor médio por cliente.",
  },
  {
    num: 5,
    title: "Reuniões de fechamento para high-ticket",
    text: "Para produtos acima de R$2.000, a reunião é essencial — você já provou isso em dezembro com 7-8 fechamentos de consultoria. Vamos estruturar esse processo para que aconteça de forma consistente, não apenas em picos.",
  },
];

const timelinePhases = [
  {
    label: "Mês 1-2",
    title: "Fundação",
    text: "Setup do funil, calendário editorial, páginas de vendas otimizadas, início do tráfego de retargeting. Métricas de alcance e cliques devem crescer.",
  },
  {
    label: "Mês 3-4",
    title: "Otimização",
    text: "Ajuste de criativos, melhoria nas taxas de conversão, testes A/B na página de vendas. Vendas começam a ganhar previsibilidade.",
  },
  {
    label: "Mês 5-6",
    title: "Escala",
    text: "Funil validado em crescimento. Introdução de novos produtos na escada de valor. Estrutura de reuniões de fechamento para high-ticket.",
  },
];

const option1Features = [
  "Gestão completa do tráfego pago (retargeting)",
  "Consultoria estratégica semanal",
  "Estruturação do funil de vendas",
  "Otimização de página de vendas e copy",
  "Direcionamento editorial para conteúdo orgânico",
  "Relatório mensal de métricas e performance",
  "Suporte via WhatsApp para dúvidas estratégicas",
];

const option2Features = [
  "Tudo da Opção 1 incluso",
  "Atuação como sócio estratégico do projeto digital",
  "Planejamento completo da escada de valor",
  "Estruturação de novos produtos digitais",
  "Edição de criativos para tráfego pago (conforme disponibilidade)",
  "Treinamento do time de atendimento comercial",
  "Compromisso de resultado mútuo — eu ganho quando você ganha",
];

const stats = [
  { num: "R$80M", label: "em vendas lideradas" },
  { num: "100+", label: "empresas consultadas" },
  { num: "R$500K", label: "investidos em mentoria" },
  { num: "5x", label: "ROAS médio de clientes" },
];

const Proposta = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0e1a0f";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        backgroundColor: "#0e1a0f",
        color: "#f0e6d0",
        lineHeight: 1.85,
      }}
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center relative"
        style={{
          padding: "60px 24px",
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(201,162,39,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(107,125,90,0.04) 0%, transparent 50%), #0e1a0f",
        }}
      >
        {/* Top gold line */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #c9a227, transparent)",
            opacity: 0.4,
          }}
        />

        <div
          className="inline-flex items-center gap-2 mb-10"
          style={{
            padding: "8px 20px",
            border: "1px solid rgba(201,162,39,0.15)",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(201,162,39,0.7)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "#c9a227",
              animation: "pulse 2s infinite",
            }}
          />
          Proposta Exclusiva
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "24px",
            color: "#f0e6d0",
          }}
        >
          Transforme seu conhecimento
          <br />
          em{" "}
          <span style={{ color: "#c9a227", fontStyle: "italic" }}>
            receita digital
          </span>
        </h1>

        <p
          style={{
            fontSize: "17px",
            color: "#6b7d5a",
            maxWidth: "560px",
            marginBottom: "48px",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Proposta personalizada para{" "}
          <strong style={{ color: "#f0e6d0", fontWeight: 600 }}>
            Duda Bambil
          </strong>{" "}
          — estratégia orgânica + tráfego de retargeting para escalar as vendas
          do seu curso e construir uma máquina digital previsível.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="flex justify-center">
        <div
          style={{
            width: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, #c9a227, transparent)",
          }}
        />
      </div>

      {/* ABOUT / WHO */}
      <section
        className="mx-auto"
        style={{
          maxWidth: 900,
          padding: "100px 24px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(201,162,39,0.7)",
            marginBottom: "16px",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Sobre
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            marginBottom: "20px",
            lineHeight: 1.25,
            color: "#f0e6d0",
          }}
        >
          Quem está por trás desta proposta
        </h2>

        <div
          className="grid gap-12 mt-10"
          style={{
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          {/* Avatar */}
          <div
            className="flex flex-col items-center justify-center w-full"
            style={{
              aspectRatio: "1",
              borderRadius: "4px",
              background: "linear-gradient(135deg, #1c2e1e 0%, #2d4a30 100%)",
              border: "1px solid rgba(201,162,39,0.15)",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 48,
                fontWeight: 700,
                color: "#c9a227",
              }}
            >
              RA
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#6b7d5a",
              }}
            >
              Freedom Agency
            </span>
          </div>

          {/* Text + stats */}
          <div>
            <p
              style={{
                fontFamily: "'IM Fell English', serif",
                fontStyle: "italic",
                fontSize: "20px",
                color: "#f0e6d0",
                marginBottom: "20px",
                lineHeight: 1.7,
              }}
            >
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com
              alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões
              em vendas anuais e compilou na Freedom Agency o aprendizado
              extraído de mais de 100 empresas que receberam consultoria.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "#6b7d5a",
                lineHeight: 1.85,
              }}
            >
              A Freedom Agency não é uma agência de marketing tradicional. É uma
              operação de revenue que une consultoria estratégica, execução de
              marketing e inteligência comercial — tudo focado em gerar retorno
              financeiro real.
            </p>

            <div
              className="grid grid-cols-2 gap-4 mt-6"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: 16,
                    background: "#1c2e1e",
                    border: "1px solid rgba(201,162,39,0.15)",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#c9a227",
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7d5a", marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC */}
      <section
        style={{
          background: "#162318",
          padding: "100px 24px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "rgba(201,162,39,0.7)",
              marginBottom: "16px",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Diagnóstico
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              fontWeight: 700,
              marginBottom: "12px",
              color: "#f0e6d0",
            }}
          >
            O que identificamos na nossa conversa
          </h2>
          <p style={{ fontSize: 16, color: "#6b7d5a", maxWidth: 700 }}>
            A partir da nossa reunião, mapeamos os principais pontos do seu
            cenário atual e as oportunidades que existem para destravar o
            próximo nível do seu negócio digital.
          </p>

          <div
            className="grid md:grid-cols-2 gap-5 mt-12"
          >
            {diagnosticItems.map((item) => (
              <div
                key={item.title}
                className="transition-all duration-300"
                style={{
                  background: "#1c2e1e",
                  border: "1px solid rgba(201,162,39,0.15)",
                  borderRadius: "4px",
                  padding: "32px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(201,162,39,0.4)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(201,162,39,0.15)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "4px",
                    background: "rgba(201,162,39,0.1)",
                    fontSize: 18,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "#f0e6d0",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6b7d5a", lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="mx-auto" style={{ maxWidth: 900, padding: "100px 24px" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(201,162,39,0.7)",
            marginBottom: "16px",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Estratégia
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#f0e6d0",
          }}
        >
          Como vamos construir sua máquina digital
        </h2>
        <p style={{ fontSize: 16, color: "#6b7d5a", maxWidth: 700 }}>
          A estratégia combina a força do seu conteúdo orgânico com tráfego pago
          de retargeting para maximizar conversões — sem depender de funil frio
          arriscado.
        </p>

        <div className="flex flex-col mt-12">
          {strategySteps.map((step, i) => (
            <div
              key={step.num}
              className="grid"
              style={{ gridTemplateColumns: "80px 1fr", gap: 0 }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#1c2e1e",
                    border: "2px solid #c9a227",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#c9a227",
                  }}
                >
                  {step.num}
                </div>
                {i < strategySteps.length - 1 && (
                  <div
                    className="flex-1"
                    style={{
                      width: 2,
                      background:
                        "linear-gradient(to bottom, #c9a227, transparent)",
                      minHeight: 20,
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  padding:
                    i < strategySteps.length - 1
                      ? "8px 0 48px 0"
                      : "8px 0 0 0",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "#f0e6d0",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: "#6b7d5a", lineHeight: 1.7 }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section
        className="mx-auto"
        style={{ maxWidth: 900, padding: "100px 24px" }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(201,162,39,0.7)",
            marginBottom: "16px",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Expectativa
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#f0e6d0",
          }}
        >
          Linha do tempo realista
        </h2>
        <p style={{ fontSize: 16, color: "#6b7d5a", maxWidth: 700 }}>
          Transparência é fundamental. Resultados vêm com consistência — e a
          gente precisa ver as métricas evoluindo desde o primeiro mês.
        </p>

        <div
          className="flex flex-col md:flex-row mt-12"
          style={{
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid rgba(201,162,39,0.15)",
          }}
        >
          {timelinePhases.map((phase, i) => (
            <div
              key={phase.label}
              className="flex-1 transition-colors duration-300"
              style={{
                padding: "28px 20px",
                background: "#1c2e1e",
                borderRight:
                  i < timelinePhases.length - 1
                    ? "1px solid rgba(201,162,39,0.15)"
                    : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(201,162,39,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#1c2e1e";
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: 8,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {phase.label}
              </div>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: "#f0e6d0",
                }}
              >
                {phase.title}
              </h4>
              <p style={{ fontSize: 13, color: "#6b7d5a", lineHeight: 1.5 }}>
                {phase.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          background: "#162318",
          padding: "100px 24px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "rgba(201,162,39,0.7)",
              marginBottom: "16px",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Investimento
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              fontWeight: 700,
              marginBottom: "12px",
              color: "#f0e6d0",
            }}
          >
            Proposta comercial
          </h2>
          <p style={{ fontSize: 16, color: "#6b7d5a", maxWidth: 700 }}>
            Duas opções de formato para você escolher a que melhor se encaixa no
            seu momento atual.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Option 1 */}
            <div
              className="relative overflow-hidden transition-all duration-300"
              style={{
                background: "#1c2e1e",
                border: "1px solid rgba(201,162,39,0.15)",
                borderRadius: "4px",
                padding: "40px 32px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,162,39,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,162,39,0.15)";
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: 12,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Opção 1
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "#f0e6d0",
                }}
              >
                Prestação de Serviço + Consultoria
              </h3>
              <div
                style={{
                  fontSize: 14,
                  color: "#6b7d5a",
                  marginBottom: 24,
                  paddingBottom: 24,
                  borderBottom: "1px solid rgba(201,162,39,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#f0e6d0",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  Fee mensal fixo
                </span>
                Valor a definir conforme escopo final + investimento mínimo em
                tráfego pago
              </div>
              <ul className="flex flex-col gap-3">
                {option1Features.map((f) => (
                  <li
                    key={f}
                    className="relative"
                    style={{
                      fontSize: 14,
                      color: "#6b7d5a",
                      paddingLeft: 24,
                    }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "#c9a227", fontSize: 10, top: 3 }}
                    >
                      ✦
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Option 2 — featured */}
            <div
              className="relative overflow-hidden transition-all duration-300"
              style={{
                background: "linear-gradient(160deg, #1c2e1e 0%, #162318 100%)",
                border: "1px solid #c9a227",
                borderRadius: "4px",
                padding: "40px 32px",
              }}
            >
              {/* Recommended ribbon */}
              <div
                className="absolute"
                style={{
                  top: 16,
                  right: -32,
                  background: "linear-gradient(135deg, #a07d1a, #c9a227, #d4b84a)",
                  color: "#0e1a0f",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  padding: "6px 40px",
                  transform: "rotate(45deg)",
                }}
              >
                RECOMENDADO
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#c9a227",
                  marginBottom: 12,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Opção 2
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "#f0e6d0",
                }}
              >
                Coprodução Estratégica
              </h3>
              <div
                style={{
                  fontSize: 14,
                  color: "#6b7d5a",
                  marginBottom: 24,
                  paddingBottom: 24,
                  borderBottom: "1px solid rgba(201,162,39,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#f0e6d0",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  % sobre vendas
                </span>
                Sem fee fixo — entrada na porcentagem + investimento mínimo em
                tráfego pago
              </div>
              <ul className="flex flex-col gap-3">
                {option2Features.map((f) => (
                  <li
                    key={f}
                    className="relative"
                    style={{
                      fontSize: 14,
                      color: "#6b7d5a",
                      paddingLeft: 24,
                    }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "#c9a227", fontSize: 10, top: 3 }}
                    >
                      ✦
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="mt-6"
            style={{ fontSize: 13, color: "#6b7d5a", fontStyle: "italic" }}
          >
            * Em ambas as opções, o investimento mínimo em tráfego pago será
            definido em conjunto. O seu compromisso principal é com a produção
            de conteúdo orgânico consistente.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-center relative"
        style={{
          padding: "120px 24px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,162,39,0.04) 0%, transparent 70%), #0e1a0f",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(201,162,39,0.7)",
            marginBottom: "16px",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Próximo passo
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#f0e6d0",
          }}
        >
          Vamos construir isso juntos?
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#6b7d5a",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Se essa proposta fez sentido para você, o próximo passo é alinharmos
          os detalhes finais — valores, cronograma e escopo exato. Sem
          compromisso, sem pressão.
        </p>
        <a
          href="https://wa.me/5551999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-10 transition-all duration-400"
          style={{
            padding: "14px 32px",
            border: "1px solid #c9a227",
            borderRadius: "4px",
            color: "#c9a227",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            textDecoration: "none",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#c9a227";
            (e.currentTarget as HTMLAnchorElement).style.color = "#0e1a0f";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#c9a227";
          }}
        >
          Falar com Rodrigo →
        </a>
      </section>

      {/* FOOTER */}
      <footer
        className="text-center"
        style={{
          padding: "40px 24px",
          borderTop: "1px solid rgba(201,162,39,0.15)",
          fontSize: 13,
          color: "#6b7d5a",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        Freedom Agency © 2026 — Proposta válida por 7 dias
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=IM+Fell+English:ital@1&family=Cormorant+Garamond:wght@400;600&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @media (max-width: 768px) {
          .grid[style*="1fr 2fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Proposta;
