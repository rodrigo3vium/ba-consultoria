import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import PropostaLayout from "@/components/pb/PropostaLayout";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PropostaClinicaSitha = () => {
  useEffect(() => {
    tracker.page("Proposta Clínica Sitha");
  }, []);

  return (
    <PropostaLayout cliente="Clínica Sitha" projeto="Consultoria de IA">

      {/* ── SOBRE ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 01 SOBRE</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Quem está por trás</h2>

        <div className="grid grid-cols-[240px_1fr] gap-10 items-start">
          <div className="overflow-hidden border border-pb-grid-strong aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
            />
          </div>
          <div className="space-y-4">
            <p className="font-body text-pb-ink-soft text-[20px] leading-relaxed max-w-[760px]">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado de mais de 100 empresas atendidas.
            </p>
            <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 border border-pb-grid-strong mt-10">
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Gerados em vendas</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-cyan leading-none mt-2">+R$130M</p>
          </div>
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Consultorias</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-ink leading-none mt-2">100+</p>
          </div>
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Países atendidos</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-ink leading-none mt-2">+7</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Avaliações 5★</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-ink leading-none mt-2">+54</p>
          </div>
        </div>
      </div>

      {/* ── REFERÊNCIAS ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 02 REFERÊNCIAS</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Nossos mentores</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.</p>

        <div className="grid grid-cols-5 gap-px bg-pb-grid-strong border border-pb-grid-strong mt-8">
          {[
            { photo: diegoBarretoPhoto, name: "Diego Barreto", role: "CEO · iFood", desc: 'Autor do best-seller Nova Economia, lidera a expansão e inovação no iFood.' },
            { photo: pedroSommaPhoto, name: "Pedro Somma", role: "Ex-COO · 99", desc: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
            { photo: vaboPhoto, name: "Luis Vabo Jr.", role: "Ex-diretor · Stone", desc: "Empreendedor serial, investidor e autor de Falar em público é para você!." },
            { photo: joaoOliverioPhoto, name: "João Olivério", role: "CEO · Sales As A System", desc: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
            { photo: joseDiogoPhoto, name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder", desc: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
          ].map((ref) => (
            <div key={ref.name} className="bg-pb-void-card p-6">
              <div className="overflow-hidden border-b border-pb-grid-strong -mx-6 -mt-6 mb-4" style={{ aspectRatio: "1.4" }}>
                <img
                  loading="lazy"
                  src={ref.photo}
                  alt={ref.name}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
                />
              </div>
              <p className="font-display text-[24px] uppercase text-pb-ink leading-none">{ref.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mt-2">{ref.role}</p>
              <p className="font-body text-[14px] text-pb-ink-muted leading-relaxed mt-2">{ref.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTEXTO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 CONTEXTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Onde a Sitha está hoje</h2>
        <p className="font-body text-pb-ink-soft text-[20px] leading-relaxed max-w-[760px]">
          O tráfego traz o lead. A clínica tem demanda e uma estrutura que funciona. O que falta é visibilidade sobre onde estão as oportunidades de crescer.
        </p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          O conhecimento que faz a clínica funcionar — protocolos, decisões, histórico de casos, o jeito Sitha de conduzir cada tratamento — é riquíssimo, mas vive distribuído na cabeça das pessoas: da Dra. Thais, da nutri, de quem está no WhatsApp naquele dia. É um ativo enorme que ainda não está num lugar onde a clínica inteira possa consultar e crescer em cima dele.
        </p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          No dia a dia, cada conversa e cada decisão comercial geram um sinal valioso sobre o que está convertendo, quem vale reativar e onde há mais espaço. Hoje esse sinal não é lido nem agregado — então boa parte das oportunidades de crescimento passa despercebida, simplesmente porque ninguém tem como enxergá-la em escala.
        </p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          O gap não é a estrutura. É <span className="text-pb-cyan">visibilidade</span> — enxergar as <span className="text-pb-cyan">oportunidades que a operação já cria todos os dias.</span>
        </p>
      </div>

      {/* ── DIAGNÓSTICO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 DIAGNÓSTICO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">O que mapeamos</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">A base é forte. O retorno está em enxergar e capturar as oportunidades que ela já cria.</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <h3 className="font-display text-[28px] uppercase text-pb-ink leading-[0.95] mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-pb-cyan shadow-cyan-soft" />
              Pontos fortes
            </h3>
            <ul className="space-y-0">
              {[
                "Demanda saudável: o tráfego já traz leads de forma consistente",
                "Um jeito Sitha de conduzir tratamentos que comprovadamente converte e fideliza",
                "Base de pacientes e histórico de casos acumulados ao longo dos anos",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[15px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <h3 className="font-display text-[28px] uppercase text-pb-ink leading-[0.95] mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-pb-cyan shadow-cyan-soft" />
              Oportunidades
            </h3>
            <ul className="space-y-0">
              {[
                "Uma base de pacientes e histórico que, organizados, viram inteligência para reativação e crescimento",
                "Um jeito Sitha de atender que, mapeado, pode ser replicado por toda a equipe",
                "Sinais comerciais gerados todo dia — conversas e decisões que, lidos, revelam onde há mais espaço para crescer",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[15px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── OBJETIVO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 05 OBJETIVO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">O que este projeto resolve</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">Transformar o conhecimento e o tráfego que já existem em crescimento visível e dirigível.</p>

        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-8">
          {[
            "Centralizar o conhecimento da clínica num cérebro único e consultável, que a equipe inteira pode usar para crescer em cima dele",
            "Dar visibilidade das oportunidades de crescimento que a operação já gera — quem reativar, qual abordagem replicar, onde há mais espaço",
            "Priorizar os pacientes e as abordagens com maior potencial de retorno, e ativá-los na hora certa",
            "Fazer o jeito Sitha de atender deixar de ser talento individual e virar padrão da casa, replicável em escala",
          ].map((item) => (
            <p key={item} className="font-body text-pb-ink-soft text-[16px] leading-relaxed pl-6 relative">
              <span className="text-pb-cyan absolute left-0">+</span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* ── COMO FUNCIONA ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 06 COMO FUNCIONA</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">O que o agente faz</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          Sobre a fundação do Segundo Cérebro, o Agente de IA dá à clínica a visão que falta — e trabalha o comercial todos os dias para capturar o que ela revela.
        </p>

        <div className="grid grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
          {[
            {
              num: "FRENTE 01",
              title: "MOSTRA ONDE ESTÁ O CRESCIMENTO",
              body: "O agente lê cada conversa de WhatsApp e cada call de venda e aponta onde há mais a ganhar: quais pacientes vale reativar, quais abordagens estão convertendo melhor, em que ponto da jornada a clínica tem mais espaço para crescer. A operação ganha visão de onde está o próximo resultado.",
            },
            {
              num: "FRENTE 02",
              title: "FAZ O MELHOR VIRAR PADRÃO",
              body: "Como conversa com o Segundo Cérebro, o agente orienta com a clínica inteira por trás. O que já funciona — o atendimento que converte, o protocolo que fideliza — é mapeado e replicado em escala: a atendente nova passa a vender no nível da melhor da equipe.",
            },
            {
              num: "FRENTE 03",
              title: "ATIVA AS OPORTUNIDADES NA HORA CERTA",
              body: "Cada oportunidade que vale a pena perseguir entra na pauta no momento certo: o paciente com maior potencial de retorno, a abordagem que merece um próximo passo, a conversa pronta para avançar. O follow-up inteligente garante que o potencial que a clínica já tem vira agenda.",
            },
          ].map((card) => (
            <div key={card.num} className="bg-pb-void-card p-8">
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-4">{card.num}</p>
              <h4 className="font-display text-[26px] uppercase text-pb-ink leading-[0.95] mb-4">{card.title}</h4>
              <p className="font-body text-pb-ink-muted text-[14.5px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 07 INVESTIMENTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Proposta comercial</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          Dois níveis. A Opção A é a fundação que organiza e responde. A Opção B coloca essa fundação para enxergar e capturar oportunidades todos os dias.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* OPÇÃO A */}
          <div className="border border-pb-grid-strong bg-pb-void-card p-9">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Opção A</p>
            <h3 className="font-display text-[34px] uppercase text-pb-ink leading-[0.95]">Segundo Cérebro</h3>
            <p className="font-body text-pb-ink-muted text-[14px] leading-relaxed mt-3 mb-1">
              O conhecimento da clínica deixa de morar na cabeça das pessoas e vira a memória viva da casa — consultável em linguagem natural.
            </p>
            <div className="flex justify-between items-baseline py-3 border-b border-pb-grid">
              <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">Implementação</span>
              <span className="font-display text-[36px] text-pb-ink leading-none">R$8.000</span>
            </div>
            <div className="flex justify-between items-baseline py-3 border-b border-pb-grid">
              <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">Infraestrutura</span>
              <span className="font-mono text-[15px] text-pb-ink-soft">Custo do cliente</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-6 mb-3">Entregáveis</p>
            <ul className="space-y-0">
              {[
                "Base de protocolos, processos e histórico organizada num cérebro único e consultável",
                "Consulta em linguagem natural, direto no WhatsApp ou painel",
                "Ingestão contínua: cada decisão e caso novo alimenta a base automaticamente",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[14.5px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* OPÇÃO B */}
          <div className="border border-pb-cyan-dim bg-pb-void-card p-9">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-pb-cyan shadow-cyan-soft" />
              Recomendado · Opção B
            </p>
            <h3 className="font-display text-[34px] uppercase text-pb-ink leading-[0.95]">Segundo Cérebro + Agente de IA</h3>
            <p className="font-body text-pb-ink-muted text-[14px] leading-relaxed mt-3 mb-1">
              Tudo da Opção A — e sobre essa base um Agente de IA que lê a operação e revela onde estão as oportunidades de crescimento. A clínica deixa de ter só memória e passa a ter visão. E a visão age.
            </p>
            <div className="flex justify-between items-baseline py-3 border-b border-pb-grid">
              <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">Implementação</span>
              <span className="font-display text-[36px] text-pb-cyan leading-none">R$24.000</span>
            </div>
            <div className="flex justify-between items-baseline py-3 border-b border-pb-grid">
              <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">Infraestrutura</span>
              <span className="font-mono text-[15px] text-pb-ink-soft">Custo do cliente</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-6 mb-3">Entregáveis</p>
            <ul className="space-y-0">
              {[
                "Todo o Segundo Cérebro da Opção A",
                "Leitura automática de WhatsApp e calls para revelar onde há mais a ganhar em cada negociação",
                "Ativação inteligente dos pacientes e abordagens com maior potencial de retorno",
                "Padronização do atendimento puxada do que já funciona na clínica",
                "Relatório de oportunidades: onde crescer e quanto",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[14.5px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-pb-grid-strong border-l-2 border-l-pb-cyan p-6 mt-6">
          <p className="font-body text-pb-ink-soft text-[15px] leading-[1.7]">
            <strong className="text-pb-ink">A recomendação é honesta.</strong> A Opção A é uma base sólida — organiza o conhecimento e responde. O retorno mora na Opção B: é onde essa base vira visão que aponta crescimento, atendimento padronizado e oportunidade ativada na hora certa. Capturar 2 ou 3 oportunidades de crescimento por mês que hoje passam despercebidas já paga a estrutura inteira — e ela trabalha todo dia, sem depender de você.
          </p>
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 08 PRÓXIMO PASSO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(44px,7vw,104px)] leading-[0.9]">
          Vamos enxergar<br />o próximo<br />passo<span className="text-pb-red">.</span>
        </h2>
        <p className="font-body text-pb-ink-soft text-[18px] leading-relaxed max-w-[680px]">
          A Sitha já tem a estrutura e a demanda para crescer. O que falta é a inteligência que mostra por onde — e é exatamente isso que esta proposta entrega.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => tracker.track("cta_click", { product: "clinica-sitha", location: "proposta_cta" })}
          >
            FALAR COM RODRIGO <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default PropostaClinicaSitha;
