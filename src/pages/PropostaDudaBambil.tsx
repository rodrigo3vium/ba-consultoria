import rodrigoAlbuquerque from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import PropostaLayout from "@/components/pb/PropostaLayout";

const mentors = [
  { name: "Diego Barreto", role: "CEO - iFood", photo: diegoBarretoPhoto, bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.' },
  { name: "Pedro Somma", role: "Ex-COO - 99 Taxi", photo: pedroSommaPhoto, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
  { name: "Luis Vabo Jr.", role: "Ex-diretor - Stone", photo: vaboPhoto, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
  { name: "João Olivério", role: "CEO - Sales As A System", photo: joaoOliverioPhoto, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
  { name: "José Diogo C. Rodrigues", role: "CMO Latam - Tinder", photo: joseDiogoPhoto, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
];

const PropostaDudaBambil = () => {
  return (
    <PropostaLayout
      cliente="Duda Bambil"
      projeto="Receita Digital Previsível"
    >
      {/* ══════════ INTRO ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 01 CONTEXTO</p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Proposta personalizada para <span className="text-pb-ink font-medium">Duda Bambil</span> — estratégia orgânica + tráfego de retargeting para escalar as vendas do seu curso e construir uma máquina digital previsível.
        </p>
      </div>

      {/* ══════════ SOBRE ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 02 SOBRE</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Quem está por trás desta proposta</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-48 flex-shrink-0 border border-pb-grid-strong overflow-hidden aspect-square">
            <img
              loading="lazy"
              src={rodrigoAlbuquerque}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
            />
          </div>
          <div className="flex-1 space-y-4">
            <p className="font-body text-pb-ink-soft leading-relaxed">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="font-body text-pb-ink-soft leading-relaxed">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { num: "+R$130M", label: "gerados em vendas" },
                { num: "100+", label: "consultorias realizadas" },
                { num: "+7", label: "países atendidos" },
                { num: "+54", label: "avaliações 5 estrelas" },
              ].map((s) => (
                <div key={s.label} className="border border-pb-grid-strong bg-pb-void-card p-4">
                  <div className="font-display text-[clamp(24px,3vw,36px)] text-pb-cyan leading-none">{s.num}</div>
                  <div className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ MENTORES ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 REFERÊNCIAS</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Nossos Mentores e Professores</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <div key={m.name} className="border border-pb-grid-strong bg-pb-void-card p-4 text-center">
              <div className="w-16 h-16 overflow-hidden mx-auto mb-3 border border-pb-grid-strong">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
                />
              </div>
              <div className="font-display uppercase text-pb-ink text-sm mb-1">{m.name}</div>
              <div className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan mb-2">{m.role}</div>
              <div className="font-body text-pb-ink-muted text-xs leading-relaxed">{m.bio}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ DIAGNÓSTICO ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 DIAGNÓSTICO</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">O que identificamos na nossa conversa</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          A partir da nossa reunião, mapeamos os principais pontos do seu cenário atual e as oportunidades que existem para destravar o próximo nível do seu negócio digital.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: "→",
              title: "Crescimento orgânico acelerado",
              text: "Em menos de 3 semanas focando em conteúdo para profissionais de estética, você ganhou quase 2.000 seguidores novos com alto engajamento. Isso prova que o público existe e está faminto pelo seu conteúdo.",
            },
            {
              icon: "→",
              title: "Vendas dependem de você",
              text: "100% das vendas do mês vieram diretamente do seu esforço pessoal. O time de WhatsApp não está convertendo — falta processo, script e automação para transformar interesse em compra.",
            },
            {
              icon: "→",
              title: "Experiência anterior frustrante",
              text: "A agência anterior não segmentou público, não alinhou expectativas e não entregou resultado. Isso gerou desconfiança e gasto sem retorno — precisamos reconstruir confiança com resultados reais.",
            },
            {
              icon: "→",
              title: "Potencial de escada de valor",
              text: "Você já tem um curso a R$297, consultoria a R$3.500 com taxa de conversão de ~10% em reuniões, e mais produtos em desenvolvimento. A estrutura para uma escada de valor já está nascendo.",
            },
          ].map((d) => (
            <div key={d.title} className="border border-pb-grid-strong bg-pb-void-card p-6">
              <h3 className="font-display uppercase text-pb-ink text-lg mb-3">
                <span className="text-pb-cyan mr-2">{d.icon}</span>{d.title}
              </h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ ESTRATÉGIA ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 05 ESTRATÉGIA</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Como vamos construir sua máquina digital</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          A estratégia combina a força do seu conteúdo orgânico com tráfego pago de retargeting para maximizar conversões — sem depender de funil frio arriscado.
        </p>
        <div className="space-y-4">
          {[
            { num: "01", title: "Potencializar o orgânico", text: "Vamos estruturar sua produção de conteúdo com calendário editorial, formatos que convertem e uma estratégia de Stories focada em vendas. Você já provou que sabe engajar — agora vamos direcionar esse engajamento para a compra." },
            { num: "02", title: "Tráfego de retargeting na base", text: "Ao invés de gastar dinheiro tentando encontrar pessoas desconhecidas, vamos investir pouco para aparecer para quem já te segue, já assistiu seus vídeos e já demonstrou interesse. Conversão muito mais alta com investimento muito menor." },
            { num: "03", title: "Otimização do funil de vendas", text: "Vamos trabalhar cada etapa: alcance → clique no link da bio → visita na página de vendas → compra. Se uma etapa não funciona, a gente corrige antes de avançar. Isso é marketing como ciência, não achismo." },
            { num: "04", title: "Construção da escada de valor", text: "Com a base crescendo, vamos estruturar a jornada: curso de entrada (R$297) → materiais complementares → consultoria/mentoria (R$3.500+). Cada produto alimenta o próximo, aumentando o valor médio por cliente." },
            { num: "05", title: "Reuniões de fechamento para high-ticket", text: "Para produtos acima de R$2.000, a reunião é essencial — você já provou isso em dezembro com 7-8 fechamentos de consultoria. Vamos estruturar esse processo para que aconteça de forma consistente, não apenas em picos." },
          ].map((step) => (
            <div key={step.num} className="border border-pb-grid-strong bg-pb-void-card p-6 flex gap-6 items-start">
              <div className="font-display text-[40px] text-pb-ink-faint leading-none flex-shrink-0 select-none w-12">{step.num}</div>
              <div>
                <h3 className="font-display uppercase text-pb-ink text-xl mb-2">{step.title}</h3>
                <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ EXPECTATIVA ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 06 EXPECTATIVA</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Linha do tempo realista</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Transparência é fundamental. Resultados vêm com consistência — e a gente precisa ver as métricas evoluindo desde o primeiro mês.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-pb-grid-strong">
          {[
            { fase: "Mês 1", title: "Movimento e clareza", text: "Diagnóstico completo, estratégia definida, melhoria inicial de indicadores. Primeiros ajustes no funil e no conteúdo." },
            { fase: "Mês 2–3", title: "Evolução consistente", text: "Crescimento de alcance, cliques e audiência qualificada. Conversão começa a ganhar tração com otimizações contínuas." },
            { fase: "Mês 3–8", title: "Maturação da estrutura", text: "Funil validado, vendas com previsibilidade, base sólida para escalar. Introdução de novos produtos na escada de valor." },
          ].map((f, i) => (
            <div key={f.fase} className={`bg-pb-void-card p-6 ${i < 2 ? "border-r border-pb-grid-strong" : ""}`}>
              <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3">{f.fase}</div>
              <div className="font-display uppercase text-pb-ink text-lg mb-2">{f.title}</div>
              <p className="font-body text-pb-ink-muted text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ INVESTIMENTO ══════════ */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 07 INVESTIMENTO</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4vw,56px)]">Proposta comercial</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-2xl">
          Consultoria estratégica + direcionamento de crescimento digital com foco em resultado. Formato mensal, acompanhamento contínuo.
        </p>

        <div className="border border-pb-grid-strong bg-pb-void-card p-8">
          <div className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-2">Acompanhamento Estratégico Mensal</div>
          <div className="font-display uppercase text-pb-ink text-2xl mb-4">Consultoria + Direcionamento Digital</div>
          <div className="mb-6 pb-6 border-b border-pb-grid-strong">
            <div className="font-display text-[clamp(48px,6vw,80px)] text-pb-cyan leading-none">R$ 1.500<span className="text-[32px] text-pb-ink-muted">/mês</span></div>
            <p className="font-body text-pb-ink-muted text-sm mt-2">Acompanhamento contínuo com foco em crescimento orgânico, conversão e otimização do funil</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "① Direcionamento de conteúdo orgânico",
                items: [
                  "Definição das linhas editoriais mais estratégicas",
                  "Orientação sobre formatos com maior potencial de performance",
                  "Construção de lógica de conteúdo que aproxima a audiência da compra",
                  "Alinhamento entre conteúdo de rotina, relacionamento e venda",
                ],
              },
              {
                title: "② Funil de tráfego para público quente",
                items: [
                  "Desenho da jornada de conversão para quem já conhece a marca",
                  "Definição dos públicos mais estratégicos para reimpacto",
                  "Estruturação da lógica de campanhas para audiência quente",
                  "Leitura de métricas e otimizações contínuas do funil",
                ],
              },
              {
                title: "③ Apoio na conversão da audiência",
                items: [
                  "Orientação sobre Stories com intenção de venda",
                  "Ajuste de chamadas para ação e gatilhos",
                  "Estruturação de sequências de aquecimento",
                  "Alinhamento entre conteúdo, oferta e momento de conversão",
                ],
              },
              {
                title: "④ Acompanhamento estratégico",
                items: [
                  "Reuniões estratégicas periódicas",
                  "Acompanhamento de alcance, cliques, tráfego e conversão",
                  "Direcionamento de oferta e construção da escada de valor",
                  "Ajustes de rota conforme resposta do conteúdo e do mercado",
                ],
              },
            ].map((group) => (
              <div key={group.title}>
                <div className="font-display uppercase text-pb-ink text-base mb-3">{group.title}</div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-body text-pb-ink-soft text-sm leading-relaxed flex gap-2">
                      <span className="text-pb-cyan flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-pb-ink-muted text-sm leading-relaxed italic">
          A estratégia reduz risco, mas o resultado depende da constância. Esse projeto funciona melhor quando existe consistência de execução.
        </p>
      </div>

      {/* ══════════ CTA ══════════ */}
      <div className="border-t border-pb-grid-strong py-24 text-center space-y-6">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">// 08 PRÓXIMO PASSO</p>
        <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(40px,6vw,72px)]">Vamos construir isso juntos?</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-lg mx-auto">
          Se fizer sentido seguir, o próximo passo é validar o formato, alinhar a rotina de acompanhamento, organizar os ativos atuais e iniciar o diagnóstico do funil e da operação de conteúdo.
        </p>
        <div>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com Rodrigo
          </a>
        </div>
        <p className="font-mono text-[10px] text-pb-ink-muted pt-4">
          BA Consultoria © 2026 — Proposta válida por 7 dias
        </p>
      </div>
    </PropostaLayout>
  );
};

export default PropostaDudaBambil;
