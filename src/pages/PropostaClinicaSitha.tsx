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

const PropostaClinicaSitha = () => {
  useEffect(() => {
    tracker.page("Proposta Clínica Sitha");
  }, []);

  return (
    <PropostaLayout cliente="Clínica Sitha" projeto="Consultoria de IA">

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
        <Eyebrow>03 Contexto</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Onde a Sitha está hoje</h2>
        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            O tráfego traz o lead. A clínica tem demanda e uma estrutura que funciona. O que falta é visibilidade sobre onde estão as oportunidades de crescer.
          </p>
          <p className="max-w-[760px]">
            O conhecimento que faz a clínica funcionar — protocolos, decisões, histórico de casos, o jeito Sitha de conduzir cada tratamento — é riquíssimo, mas vive distribuído na cabeça das pessoas: da Dra. Thais, da nutri, de quem está no WhatsApp naquele dia. É um ativo enorme que ainda não está num lugar onde a clínica inteira possa consultar e crescer em cima dele.
          </p>
          <p className="max-w-[760px]">
            No dia a dia, cada conversa e cada decisão comercial geram um sinal valioso sobre o que está convertendo, quem vale reativar e onde há mais espaço. Hoje esse sinal não é lido nem agregado — então boa parte das oportunidades de crescimento passa despercebida, simplesmente porque ninguém tem como enxergá-la em escala.
          </p>
          <p className="max-w-[760px]">
            O gap não é a estrutura. É <span className="text-saas-cyan">visibilidade</span> — enxergar as <span className="text-saas-cyan">oportunidades que a operação já cria todos os dias.</span>
          </p>
        </div>
      </div>

      {/* ── DIAGNÓSTICO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>04 Diagnóstico</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que mapeamos</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">A base é forte. O retorno está em enxergar e capturar as oportunidades que ela já cria.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[22px] text-saas-ink leading-tight mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Pontos fortes
            </h3>
            <ul>
              {[
                "Demanda saudável: o tráfego já traz leads de forma consistente",
                "Um jeito Sitha de conduzir tratamentos que comprovadamente converte e fideliza",
                "Base de pacientes e histórico de casos acumulados ao longo dos anos",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[15px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[22px] text-saas-ink leading-tight mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Oportunidades
            </h3>
            <ul>
              {[
                "Uma base de pacientes e histórico que, organizados, viram inteligência para reativação e crescimento",
                "Um jeito Sitha de atender que, mapeado, pode ser replicado por toda a equipe",
                "Sinais comerciais gerados todo dia — conversas e decisões que, lidos, revelam onde há mais espaço para crescer",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[15px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* ── OBJETIVO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 Objetivo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que este projeto resolve</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">Transformar o conhecimento e o tráfego que já existem em crescimento visível e dirigível.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {[
            "Centralizar o conhecimento da clínica num cérebro único e consultável, que a equipe inteira pode usar para crescer em cima dele",
            "Dar visibilidade das oportunidades de crescimento que a operação já gera — quem reativar, qual abordagem replicar, onde há mais espaço",
            "Priorizar os pacientes e as abordagens com maior potencial de retorno, e ativá-los na hora certa",
            "Fazer o jeito Sitha de atender deixar de ser talento individual e virar padrão da casa, replicável em escala",
          ].map((item) => (
            <p key={item} className="text-saas-body text-[16px] leading-relaxed pl-6 relative">
              <span className="text-saas-cyan absolute left-0">+</span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* ── COMO FUNCIONA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 Como funciona</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que o agente faz</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Sobre a fundação do Segundo Cérebro, o Agente de IA dá à clínica a visão que falta — e trabalha o comercial todos os dias para capturar o que ela revela.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              num: "FRENTE 01",
              title: "Mostra onde está o crescimento",
              body: "O agente lê cada conversa de WhatsApp e cada call de venda e aponta onde há mais a ganhar: quais pacientes vale reativar, quais abordagens estão convertendo melhor, em que ponto da jornada a clínica tem mais espaço para crescer. A operação ganha visão de onde está o próximo resultado.",
            },
            {
              num: "FRENTE 02",
              title: "Faz o melhor virar padrão",
              body: "Como conversa com o Segundo Cérebro, o agente orienta com a clínica inteira por trás. O que já funciona — o atendimento que converte, o protocolo que fideliza — é mapeado e replicado em escala: a atendente nova passa a vender no nível da melhor da equipe.",
            },
            {
              num: "FRENTE 03",
              title: "Ativa as oportunidades na hora certa",
              body: "Cada oportunidade que vale a pena perseguir entra na pauta no momento certo: o paciente com maior potencial de retorno, a abordagem que merece um próximo passo, a conversa pronta para avançar. O follow-up inteligente garante que o potencial que a clínica já tem vira agenda.",
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

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 Investimento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Proposta comercial</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Dois níveis. A Opção A é a fundação que organiza e responde. A Opção B coloca essa fundação para enxergar e capturar oportunidades todos os dias.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OPÇÃO A */}
          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Opção A</p>
            <h3 className="font-extrabold text-[28px] text-saas-ink leading-tight">Segundo Cérebro</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              O conhecimento da clínica deixa de morar na cabeça das pessoas e vira a memória viva da casa — consultável em linguagem natural.
            </p>
            <div className="flex justify-between items-baseline py-3 border-b border-white/[0.06]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">Implementação</span>
              <span className="font-extrabold text-[36px] text-saas-ink leading-none">R$8.000</span>
            </div>
            <div className="flex justify-between items-baseline py-3 border-b border-white/[0.06]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">Infraestrutura</span>
              <span className="font-mono text-[15px] text-saas-body">Custo do cliente</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mt-6 mb-3">Entregáveis</p>
            <ul>
              {[
                "Base de protocolos, processos e histórico organizada num cérebro único e consultável",
                "Consulta em linguagem natural, direto no WhatsApp ou painel",
                "Ingestão contínua: cada decisão e caso novo alimenta a base automaticamente",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>

          {/* OPÇÃO B */}
          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Recomendado · Opção B
            </p>
            <h3 className="font-extrabold text-[28px] text-saas-ink leading-tight">Segundo Cérebro + Agente de IA</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              Tudo da Opção A — e sobre essa base um Agente de IA que lê a operação e revela onde estão as oportunidades de crescimento. A clínica deixa de ter só memória e passa a ter visão. E a visão age.
            </p>
            <div className="flex justify-between items-baseline py-3 border-b border-white/[0.06]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">Implementação</span>
              <span className="font-extrabold text-[36px] leading-none"><Accent>R$24.000</Accent></span>
            </div>
            <div className="flex justify-between items-baseline py-3 border-b border-white/[0.06]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">Infraestrutura</span>
              <span className="font-mono text-[15px] text-saas-body">Custo do cliente</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mt-6 mb-3">Entregáveis</p>
            <ul>
              {[
                "Todo o Segundo Cérebro da Opção A",
                "Leitura automática de WhatsApp e calls para revelar onde há mais a ganhar em cada negociação",
                "Ativação inteligente dos pacientes e abordagens com maior potencial de retorno",
                "Padronização do atendimento puxada do que já funciona na clínica",
                "Relatório de oportunidades: onde crescer e quanto",
              ].map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6">
          <span className="block w-10 h-[3px] rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet mb-5" aria-hidden />
          <p className="text-saas-body text-[15px] leading-[1.7]">
            <strong className="text-saas-ink">A recomendação é honesta.</strong> A Opção A é uma base sólida — organiza o conhecimento e responde. O retorno mora na Opção B: é onde essa base vira visão que aponta crescimento, atendimento padronizado e oportunidade ativada na hora certa. Capturar 2 ou 3 oportunidades de crescimento por mês que hoje passam despercebidas já paga a estrutura inteira — e ela trabalha todo dia, sem depender de você.
          </p>
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Próximo passo</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(34px,6vw,64px)] leading-[1.05] tracking-tight">
          Vamos enxergar<br />o próximo<br />passo<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          A Sitha já tem a estrutura e a demanda para crescer. O que falta é a inteligência que mostra por onde — e é exatamente isso que esta proposta entrega.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "clinica-sitha", location: "proposta_cta" })}
          >
            Falar com Rodrigo <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default PropostaClinicaSitha;
