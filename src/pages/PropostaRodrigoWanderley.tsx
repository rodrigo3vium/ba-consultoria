import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Eyebrow, Card, StatCard, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const H2_CLS =
  "font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight";

const esteira = [
  {
    nivel: "Entrada",
    produto: 'Guia "Do Contrato ao Repasse"',
    desc: "Do fechamento do contrato ao dinheiro na conta pela Caixa",
    preco: "~R$47",
    papel: "Paga o tráfego, qualifica e gera lista. Sai pronto e no ar no setup.",
  },
  {
    nivel: "Núcleo",
    produto: 'Curso "Construtora no Azul"',
    desc: "Estruturar o financeiro completo da construtora",
    preco: "~R$1.497",
    papel: "Onde começa a margem real",
  },
  {
    nivel: "Alto valor",
    produto: "Mentoria em grupo",
    desc: "Implementação guiada na construtora do aluno",
    preco: "~R$8.000",
    papel: "Maior ticket, para quem quer mão na massa",
  },
  {
    nivel: "Futuro",
    produto: "Consultoria individual",
    desc: "Para construtoras maiores",
    preco: "Sob demanda",
    papel: "Topo da escada",
  },
];

const setupEntregaveis = [
  "Imersão de extração: sessão para mapear seu conhecimento e transformar em produto",
  "Arquitetura completa da esteira: ofertas mapeadas, com promessa, preço e sequência de vendas",
  "Produto de entrada 100% pronto e à venda: conteúdo do guia + design + página de vendas + checkout funcionando",
  "Página de captura/vendas construída e publicada",
  "Configuração comercial completa: Hotmart (checkout, order bumps, entrega automática) + Pixel de rastreamento instalado e testado",
  "Estrutura de campanha de tráfego montada: públicos, primeiros criativos e conta pronta para rodar",
  "Painel de acompanhamento simples: quanto entra, quanto custa cada venda",
];

const gestaoEntregaveis = [
  "Operação e otimização diária das campanhas",
  "Produção contínua de criativos (sistema de IA + suas gravações)",
  "Relatório mensal: investimento, vendas, custo de aquisição e retorno",
  "Ajustes de página e oferta guiados pelos números",
];

const prazoSteps = [
  { num: "01", title: "Dias 1–3", desc: "Kickoff, imersão de extração e fechamento de posicionamento + esteira." },
  { num: "02", title: "Dias 3–10", desc: "Produção do produto de entrada, página, checkout, pixel e campanhas." },
  { num: "03", title: "Até o dia 14", desc: "Tráfego no ar." },
];

const investimento = [
  { item: "Setup completo", valor: "R$6.000", condicao: "50% na assinatura (R$3.000) + 50% na entrega (R$3.000). Pix ou cartão." },
  { item: "Gestão de tráfego", valor: "R$1.500/mês", condicao: "A partir do go-live · mínimo 3 meses" },
  { item: "Verba de mídia", valor: "R$1.500 a R$3.000/mês", condicao: "Recomendado para validação. À parte, direto na sua conta Meta. 100% sua, controlada por você." },
];

const precisamos = [
  "Uma sessão de imersão (~2h) — é a matéria-prima do produto",
  "Um bloco de gravação de criativos (meio período) para o estoque inicial; reposições leves depois",
  "Aprovações em até 48h, para o cronograma não travar",
  "Acessos: conta Meta Business e domínio para publicar a página",
];

const foraDoEscopo = [
  "Verba de mídia (paga à parte, direto na sua conta Meta)",
  "Produção dos produtos 2 e 3 da esteira — só o de entrada sai pronto no setup; os demais entram como etapa à parte quando você decidir lançá-los",
  "Mensalidades de ferramentas de terceiros que você venha a querer (área de membros premium, e-mail marketing pago). Começamos com o stack gratuito.",
];

const PropostaRodrigoWanderley = () => {
  useEffect(() => {
    tracker.page("Proposta Rodrigo Wanderley");
  }, []);

  return (
    <PropostaLayout cliente="Rodrigo Wanderley" projeto="Produto Digital + Tráfego Pago" data="16 de julho de 2026">

      {/* ── SOBRE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>01 Sobre</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Quem está por trás</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/[0.09] aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-saas-body text-[20px] leading-relaxed max-w-[760px]">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado de mais de 100 empresas atendidas.
            </p>
            <p className="text-saas-body leading-relaxed max-w-[760px]">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="+R$130M" label="Gerados em vendas" accent />
          <StatCard value="100+" label="Consultorias" />
          <StatCard value="+7" label="Países atendidos" />
          <StatCard value="+54" label="Avaliações 5★" />
        </div>
      </div>

      {/* ── REFERÊNCIAS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>02 Referências</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Nossos mentores</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { photo: diegoBarretoPhoto, name: "Diego Barreto", role: "CEO · iFood", desc: 'Autor do best-seller Nova Economia, lidera a expansão e inovação no iFood.' },
            { photo: pedroSommaPhoto, name: "Pedro Somma", role: "Ex-COO · 99", desc: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
            { photo: vaboPhoto, name: "Luis Vabo Jr.", role: "Ex-diretor · Stone", desc: "Empreendedor serial, investidor e autor de Falar em público é para você!." },
            { photo: joaoOliverioPhoto, name: "João Olivério", role: "CEO · Sales As A System", desc: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
            { photo: joseDiogoPhoto, name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder", desc: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
          ].map((ref) => (
            <div key={ref.name} className="rounded-2xl overflow-hidden border border-white/[0.09] bg-saas-card">
              <div className="overflow-hidden" style={{ aspectRatio: "1.4" }}>
                <img
                  loading="lazy"
                  src={ref.photo}
                  alt={ref.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <p className="font-extrabold text-[18px] text-saas-ink leading-tight">{ref.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mt-2">{ref.role}</p>
                <p className="text-[13.5px] text-saas-muted leading-relaxed mt-2">{ref.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTEXTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>03 O que você quer construir</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Onde você está hoje</h2>
        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Treze anos à frente do financeiro de uma construtora do segmento econômico — Minha Casa Minha Vida — te deram um conhecimento que quase nenhum construtor pequeno ou médio tem: como funciona de verdade o fluxo de repasse da Caixa, como não perder dinheiro entre o contrato assinado e o dinheiro na conta, como organizar o caixa de uma obra.
          </p>
          <p className="max-w-[760px]">
            Esse conhecimento hoje mora só na sua cabeça e na sua rotina. A proposta é transformar ele numa fonte de renda própria — vendendo para quem tem exatamente esse problema. E é gente sobrando: construtor pequeno e médio, no Brasil inteiro, afogado em financiamento e fluxo de caixa de obra.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Ninguém compra "financeiro organizado"
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              Compra-se parar de perder dinheiro, ter previsibilidade e crescer a operação. A comunicação e a oferta vão ser construídas em cima de resultado, não de processo.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Você não vive de rede social — e não precisa
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              Seu perfil é técnico. O algoritmo do orgânico premia conteúdo raso e puniria exatamente o tipo de conteúdo denso e valioso que você produziria. A estratégia inteira é desenhada para não depender de você virar influenciador.
            </p>
          </Card>
        </div>
      </div>

      {/* ── ESTRATÉGIA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>04 A estratégia</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Três decisões que sustentam o projeto</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              num: "FRENTE 01",
              title: "Tráfego pago, não orgânico",
              body: "Em vez de esperar o algoritmo te descobrir, vamos atrás de quem já tem o problema — em todo o Brasil. Mercado gigante, dor específica: o cenário ideal para uma oferta direta \"você tem o problema X, aqui está a solução\".",
            },
            {
              num: "FRENTE 02",
              title: "Uma esteira, não um produto solto",
              body: "Não se vende mentoria cara para um estranho. Vende-se uma entrada barata que se paga sozinha no tráfego e qualifica quem tem interesse de verdade — a margem de verdade vem dos produtos seguintes. Todo o funil é construído de trás para frente, a partir de quem você quer atingir lá no topo.",
            },
            {
              num: "FRENTE 03",
              title: "A máquina escala, você grava pouco",
              body: "Uma página de vendas / VSL faz o trabalho de convencimento no seu lugar. Um sistema de produção de criativos com IA multiplica poucas gravações suas em muitos anúncios diferentes.",
            },
          ].map((card) => (
            <Card key={card.num} className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">{card.num}</p>
              <h4 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4">{card.title}</h4>
              <p className="text-saas-muted text-[14.5px] leading-relaxed">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── ESTEIRA DE PRODUTOS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 A esteira de produtos</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Do primeiro contato ao maior ticket</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Quatro níveis, cada um puxando o próximo. Nomes e preços abaixo são ponto de partida — ajustamos junto depois da imersão.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.09]">
          <table className="w-full border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {["Nível", "Produto", "Preço sugerido", "Papel no funil"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-left bg-saas-card">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {esteira.map((row) => (
                <tr key={row.nivel} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 align-top">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">{row.nivel}</span>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <div className="font-extrabold text-saas-ink text-[15px]">{row.produto}</div>
                    <div className="text-saas-faint text-[13px] leading-relaxed mt-1">{row.desc}</div>
                  </td>
                  <td className="py-4 px-4 align-top font-extrabold text-saas-ink text-[15px] whitespace-nowrap">{row.preco}</td>
                  <td className="py-4 px-4 align-top text-saas-body text-[13.5px] leading-relaxed">{row.papel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── O QUE ESTÁ INCLUÍDO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 O que está incluído</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Setup + gestão de tráfego</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Setup</p>
            <h3 className="font-extrabold text-[28px] text-saas-ink leading-tight">R$6.000</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              Tudo pronto e no ar: produto de entrada, página, checkout, pixel e campanha montada.
            </p>
            <ul>
              {setupEntregaveis.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Gestão de tráfego</p>
            <h3 className="font-extrabold text-[28px] text-saas-ink leading-tight"><Accent>R$1.500</Accent>/mês</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              Operação contínua depois do go-live, com produção de criativo incluída.
            </p>
            <ul>
              {gestaoEntregaveis.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-saas-faint text-[13px] leading-relaxed">
              Compromisso mínimo: 3 meses. Campanha precisa de maturação — antes disso o dado ainda não é confiável para decidir.
            </p>
          </Card>
        </div>
      </div>

      {/* ── PRAZO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 Prazo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Tráfego no ar em até 2 semanas</h2>

        <div className="mt-10">
          {prazoSteps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-[auto_1fr] gap-6 md:gap-8 py-7 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
            >
              <div className="text-4xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-saas-ink text-lg">{step.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-saas-body leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            Primeira campanha rodando em <b className="font-semibold text-saas-ink">até 2 semanas</b>
          </span>
        </div>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Investimento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Valor do projeto</h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.09]">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {["Item", "Valor", "Condição"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-left bg-saas-card">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investimento.map((row) => (
                <tr key={row.item} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 align-top font-extrabold text-saas-ink text-[15px] whitespace-nowrap">{row.item}</td>
                  <td className="py-4 px-4 align-top font-extrabold text-[17px] whitespace-nowrap"><Accent>{row.valor}</Accent></td>
                  <td className="py-4 px-4 align-top text-saas-body text-[13.5px] leading-relaxed">{row.condicao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── REQUISITOS E FORA DO ESCOPO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>09 Antes de começar</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que precisamos de você — e o que não entra</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              O que precisamos de você
            </h3>
            <ul>
              {precisamos.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-white/[0.20]" />
              O que não está incluído
            </h3>
            <ul>
              {foraDoEscopo.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-faint mr-2">–</span>{item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>10 Próximo passo</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(34px,6vw,64px)] leading-[1.05] tracking-tight">
          Treze anos de conhecimento.<br />Falta só a estrutura<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Você já sabe o que ninguém mais sabe sobre financeiro de obra. A gente entra com a esteira, a página, o tráfego e o sistema de criativos — pra transformar isso em produto no ar em até 2 semanas.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "rodrigo-wanderley", location: "proposta_cta" })}
          >
            Falar com Rodrigo <span aria-hidden>→</span>
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint">
          Proposta válida por 15 dias · Data: 16/07/2026
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaRodrigoWanderley;
