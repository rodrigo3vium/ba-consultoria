import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import StratCard from "@/components/pb/StratCard";
import {
  Accent,
  Eyebrow,
  StatCard,
  SAAS_BTN_PRIMARY,
  SAAS_CARD,
  SAAS_GRADIENT_TEXT,
} from "@/components/saas/ui";

const PropostaWesleySardou = () => {
  return (
    <PropostaLayout
      cliente="Wesley Sardou"
      projeto="Ecossistema de Monetização"
      data="Abril 2026"
    >
      {/* SOBRE */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="01"
          label="Quem está por trás"
          headline={<>Sobre Rodrigo<br />Albuquerque</>}
          sub="Especialista em Inteligência Artificial aplicada a negócios com track record em construção de ecossistemas digitais completos."
        />

        <p className="text-saas-body text-[17px] leading-relaxed mb-4 max-w-2xl">
          Rodrigo Albuquerque investiu meio milhão de reais para passar dois anos sendo
          mentorado e aprendendo com alguns dos maiores empreendedores do país. É
          especialista em Inteligência Artificial aplicada a negócios e já ajudou mais de
          100 empresas a implementarem sistemas que geram resultados reais.
        </p>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Tem como diferencial a capacidade de construir ecossistemas completos — do
          produto digital ao CRM inteligente — que transformam audiência em receita
          previsível e escalável.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <StatCard value="100+" label="Empresas atendidas" accent />
          <StatCard value={<>R$&nbsp;500K</>} label="Investidos em formação" accent />
          <StatCard value="IA" label="Especialista aplicada a negócios" accent />
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="02"
          label="Diagnóstico"
          headline={<>O que está sendo deixado <Accent>na mesa</Accent></>}
          sub="Wesley, a sua audiência já confia em você. Pessoas qualificadas, com dinheiro, consumindo seu conteúdo diariamente. Hoje, esse potencial não está sendo convertido por três razões:"
        />

        <div className="flex flex-col gap-4">
          {[
            {
              num: "01",
              title: "Sem produto próprio para capturar a demanda",
              text: "Conteúdo gera interesse, mas não existe um destino para transformar essa atenção em receita. Cada vídeo que viraliza é dinheiro que passa pela sua mão e vai embora.",
            },
            {
              num: "02",
              title: "Sem sistema para qualificar e nutrir leads",
              text: "Quando alguém demonstra interesse em processo migratório ou em vir para o Texas, essa conversa morre no DM. Sem CRM, sem automação, sem seguimento. Lead que não é nutrido esfria e se perde.",
            },
            {
              num: "03",
              title: "Sem ecossistema para gerar negócios recorrentes",
              text: "Parceria com advogado, acesso a empresários brasileiros no Texas, conexões com influenciadores — tudo desconectado. Cada oportunidade depende de ação manual, memória e disponibilidade pessoal.",
            },
          ].map((item) => (
            <div key={item.num} className={SAAS_CARD + " p-6 flex gap-6"}>
              <span
                className={`${SAAS_GRADIENT_TEXT} font-extrabold text-[clamp(40px,5vw,64px)] opacity-40 leading-none flex-shrink-0 w-14`}
              >
                {item.num}
              </span>
              <div>
                <h4 className="font-bold text-saas-ink text-lg mb-2">{item.title}</h4>
                <p className="text-saas-body text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="03"
          label="A Solução"
          headline={<>Três camadas para construir<br />uma <Accent>máquina de monetização</Accent></>}
          sub="Um ecossistema integrado que transforma atenção em receita, leads em oportunidades e dados em decisões inteligentes."
        />

        <div className="flex flex-col gap-6">
          {/* CAMADA 1 */}
          <StratCard>
            <Eyebrow className="mb-4">Camada 01</Eyebrow>
            <h3 className="font-extrabold text-saas-ink text-[clamp(24px,3vw,34px)] leading-[1.12] tracking-tight mb-4">Aplicativo de Imigração</h3>
            <p className="text-saas-body text-[17px] leading-relaxed mb-6 max-w-2xl">
              Produto digital de pagamento único ($39) com informação completa sobre
              processos migratórios para os EUA: tipos de visto, custos, documentação e
              atualizações legislativas. Modelo superior ao concorrente que cobra
              mensalidade — maior conversão, melhor percepção de valor, zero atrito no
              cancelamento.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Aplicativo completo com conteúdo estruturado e navegação intuitiva",
                "Sistema de pagamento integrado (Stripe, em dólar)",
                "Interface responsiva e profissional para mobile e desktop",
                "Área de membros com acesso permanente",
                "Infraestrutura preparada para atualizações contínuas de conteúdo",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-saas-body text-sm leading-relaxed">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-saas-cyan pl-4 text-saas-body text-sm leading-relaxed italic">
              Esse produto gera receita direta, captura dados de potenciais clientes
              qualificados e funciona como filtro natural para identificar quem precisa de
              acompanhamento profissional.
            </div>
          </StratCard>

          {/* CAMADA 2 */}
          <StratCard>
            <Eyebrow className="mb-4">Camada 02</Eyebrow>
            <h3 className="font-extrabold text-saas-ink text-[clamp(24px,3vw,34px)] leading-[1.12] tracking-tight mb-4">Curso Completo sobre o Texas</h3>
            <p className="text-saas-body text-[17px] leading-relaxed mb-6 max-w-2xl">
              Produto de ticket médio ($197) voltado para brasileiros que estão considerando
              o Texas como destino — seja para morar, investir ou empreender. Conteúdo
              exclusivo cobrindo custo de vida, oportunidades de negócio, aspectos culturais
              e tudo que um empresário precisa saber antes de tomar uma decisão dessa
              magnitude.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Área de membros completa com módulos estruturados",
                "Sistema de pagamento e entrega automatizada",
                "Estrutura técnica pronta para gravação e publicação contínua",
                "Integração com o ecossistema para upsell e cross-sell",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-saas-body text-sm leading-relaxed">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-saas-cyan pl-4 text-saas-body text-sm leading-relaxed italic">
              Para o empresário que está levando a família para os EUA, $197 é irrelevante
              diante do risco de tomar uma decisão errada sobre onde morar. O conteúdo se
              paga na primeira dúvida resolvida.
            </div>
          </StratCard>

          {/* CAMADA 3 */}
          <StratCard>
            <Eyebrow className="mb-4">Camada 03</Eyebrow>
            <h3 className="font-extrabold text-saas-ink text-[clamp(24px,3vw,34px)] leading-[1.12] tracking-tight mb-4">CRM, Automações e Nutrição Inteligente</h3>
            <p className="text-saas-body text-[17px] leading-relaxed mb-6 max-w-2xl">
              Todo comprador de qualquer produto entra automaticamente em um sistema
              inteligente que classifica, nutre e qualifica — transformando cada venda em
              múltiplas oportunidades de negócio.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "CRM completo integrado aos produtos (captura automática na compra)",
                "Automação de WhatsApp para follow-up e nutrição pós-compra",
                "Sistema de qualificação com IA que identifica perfil do lead (advogado, mentoria, investimento)",
                "Fluxos de nutrição por e-mail e WhatsApp segmentados por interesse",
                "Dashboard com métricas de vendas, conversão e pipeline em tempo real",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-saas-body text-sm leading-relaxed">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-saas-cyan pl-4 text-saas-body text-sm leading-relaxed italic">
              Nada se perde. Cada comprador vira um dado. Cada dado vira uma oportunidade. O
              sistema trabalha 24 horas por dia qualificando e direcionando leads.
            </div>
          </StratCard>

          {/* CAMADA 4 */}
          <StratCard>
            <Eyebrow className="mb-4">Camada 04</Eyebrow>
            <h3 className="font-extrabold text-saas-ink text-[clamp(24px,3vw,34px)] leading-[1.12] tracking-tight mb-4">O Ecossistema Central</h3>
            <p className="text-saas-body text-[17px] leading-relaxed mb-6 max-w-2xl">
              Aqui o jogo muda de escala. Com a base de dados crescendo, Wesley se torna uma
              central de negócios para brasileiros nos EUA — e cada novo lead alimenta
              múltiplas fontes de receita.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Plataforma centralizada para gestão de todas as frentes de negócio",
                "Sistema de indicação inteligente: o CRM identifica perfil e direciona para o parceiro certo (advogado, consultoria financeira, contabilidade)",
                "Controle de comissões e indicações com rastreamento completo",
                "Painel unificado com visão de todas as fontes de receita",
                "Infraestrutura para adicionar novos produtos e parcerias sem limite",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-saas-body text-sm leading-relaxed">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-saas-cyan pl-4 text-saas-body text-sm leading-relaxed italic">
              Quanto mais gente entra no ecossistema, mais conexões são geradas e mais
              receita é produzida — sem depender de atenção individual para cada pessoa.
            </div>
          </StratCard>
        </div>
      </section>

      {/* MODELO DE PARCERIA */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="04"
          label="Modelo de Parceria"
          headline="Estrutura de remuneração"
          sub="Esta não é uma proposta de prestação de serviço. É uma proposta de sociedade no projeto, com pele no jogo dos dois lados."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {/* 50% */}
          <div className="rounded-2xl border border-saas-cyan/50 bg-saas-card p-8">
            <span className={`${SAAS_GRADIENT_TEXT} font-extrabold text-[clamp(48px,6vw,80px)] leading-none block`}>50%</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint block mb-4">Do faturamento</span>
            <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight leading-tight mb-3">Infoprodutos</h3>
            <p className="text-saas-body text-sm leading-relaxed mb-6">
              Participação sobre o faturamento bruto de todos os produtos digitais criados
              dentro do ecossistema.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Aplicativo de Imigração ($39)",
                "Curso do Texas ($197)",
                "Futuros infoprodutos do ecossistema",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[13px] text-saas-muted">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 10% */}
          <div className={SAAS_CARD + " p-8"}>
            <span className={`${SAAS_GRADIENT_TEXT} font-extrabold text-[clamp(48px,6vw,80px)] leading-none block`}>10%</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint block mb-4">Da receita gerada</span>
            <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight leading-tight mb-3">Negócios do Ecossistema</h3>
            <p className="text-saas-body text-sm leading-relaxed mb-6">
              Participação sobre toda receita gerada a partir de leads capturados e
              qualificados pelo ecossistema.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Fechamentos do advogado parceiro",
                "Indicações para advogada da Eliane",
                "Consultorias financeiras e contábeis",
                "Qualquer negócio originado pelo ecossistema",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[13px] text-saas-muted">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="05"
          label="Contrapartida técnica"
          headline="O que será construído e entregue"
          sub="Todo o ecossistema técnico é de responsabilidade de Rodrigo Albuquerque — do desenvolvimento inicial à evolução contínua."
        />

        <div className="flex flex-col gap-3">
          {[
            { label: "Aplicativo de Imigração completo", desc: "desenvolvimento, design, sistema de pagamento e entrega" },
            { label: "Estrutura técnica do Curso do Texas", desc: "área de membros, pagamento integrado e entrega automatizada" },
            { label: "CRM inteligente com IA", desc: "captura, qualificação e classificação automática de leads" },
            { label: "Automações de WhatsApp e e-mail", desc: "nutrição, follow-up e segmentação por perfil de interesse" },
            { label: "Dashboard completo de métricas", desc: "vendas, conversão, pipeline e performance em tempo real" },
            { label: "Plataforma do ecossistema", desc: "gestão de indicações, comissões e parceiros com rastreamento completo" },
            { label: "Evolução contínua", desc: "novos produtos, integrações e funcionalidades conforme o ecossistema cresce" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/[0.09] bg-saas-card p-5 flex gap-4 items-start">
              <span className="text-saas-cyan text-sm flex-shrink-0 mt-0.5">→</span>
              <div>
                <span className="font-semibold text-saas-ink text-sm">{item.label}</span>
                <span className="text-saas-body text-sm"> — {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="06"
          label="Por que funciona"
          headline="Vantagens da estrutura proposta"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Zero investimento inicial em tecnologia",
              text: "Todo o desenvolvimento, hospedagem e manutenção técnica está incluído na parceria. Sem custos fixos, sem risco financeiro.",
            },
            {
              title: "Modelo ganha-ganha",
              text: "Quanto mais o ecossistema fatura, mais todos ganham. Os incentivos estão alinhados para crescimento mútuo.",
            },
            {
              title: "Sem conflito com parceiros existentes",
              text: "Cada advogado recebe leads do seu respectivo canal. A estrutura foi desenhada para complementar, nunca competir.",
            },
            {
              title: "Escalável por design",
              text: "O sistema comporta 100 ou 10.000 leads sem exigir mais atenção humana. A tecnologia escala, a receita acompanha.",
            },
          ].map((item) => (
            <div key={item.title} className={SAAS_CARD + " p-6"}>
              <h4 className="font-bold text-saas-ink text-base mb-3">{item.title}</h4>
              <p className="text-saas-body text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-16 text-center">
        <SectionHeader
          idx="07"
          label="Próximo passo"
          headline={<>Pronto para construir<br />o <Accent>ecossistema</Accent>?</>}
          sub="Wesley, o concorrente já está no ar cobrando mensalidade com um produto inferior. A oportunidade é entrar agora com produto melhor, preço mais inteligente e um sistema por trás que eles nem imaginam que existe."
          align="center"
        />
        <a
          href="https://wa.me/5511999718595?text=Wesley%2C%20vamos%20fechar%20a%20parceria"
          target="_blank"
          rel="noopener noreferrer"
          className={SAAS_BTN_PRIMARY}
        >
          Fechar parceria →
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-4">
          Primeira versão do aplicativo rodando na próxima semana
        </p>
      </section>
    </PropostaLayout>
  );
};

export default PropostaWesleySardou;
