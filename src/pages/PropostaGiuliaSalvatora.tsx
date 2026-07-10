import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Eyebrow, Card, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const PropostaGiuliaSalvatora = () => {
  return (
    <PropostaLayout
      cliente="Giulia Salvatore"
      projeto="Receita, Tecnologia e Inteligência para a Sal"
    >
      {/* ══════════ INTRO ══════════ */}
      <section className="border-t border-white/[0.06] py-16 md:py-20">
        <Eyebrow>01 · Visão geral</Eyebrow>
        <div className="mt-6 space-y-5 max-w-2xl">
          <p className="text-saas-ink text-lg md:text-xl leading-relaxed">
            Uma parceria estratégica para transformar a Sal em um ecossistema de receita inteligente — com IA aplicada, funil otimizado e infraestrutura própria.
          </p>
          <p className="text-saas-body text-[17px] leading-relaxed">
            Meu papel é ser o braço direito da Sal em receita e tecnologia. Um olhar integrado que conecta inteligência artificial, otimização comercial e infraestrutura interna.
          </p>
        </div>
      </section>

      {/* ══════════ ESCOPO ══════════ */}
      <section className="border-t border-white/[0.06] py-16 md:py-20 space-y-8">
        <div>
          <Eyebrow>02 · Escopo de atuação</Eyebrow>
          <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
            Três frentes, um objetivo — <Accent>fazer a Sal faturar mais</Accent>.
          </h2>
        </div>

        {/* FRENTE 1 */}
        <Card className="p-8 space-y-5">
          <Eyebrow>Frente I</Eyebrow>
          <h3 className="font-extrabold text-saas-ink text-[clamp(20px,2.6vw,30px)] leading-tight tracking-tight">Inteligência Artificial aplicada à operação e ao produto</h3>
          <p className="text-saas-body leading-relaxed italic">
            Soluções que agregam valor direto para suas clientes e diferenciam a Sal no mercado. O foco é transformar o Método Sal em tecnologia — sem perder autenticidade.
          </p>
          <ul className="space-y-3">
            {[
              "Bot completo de produção de conteúdo alimentado pelo Método Sal, árvore de conteúdo, manual de marca individual e referências — gera roteiros de Stories personalizados por cliente, conectados aos galhos temáticos, pautas quentes e posicionamento de cada aluna.",
              "Monitoramento automatizado de Stories das clientes com relatórios diários — análise de produção baseada nos seus parâmetros, com feedback individual e personalizado.",
              "Adaptação de referências virais: a aluna sobe um vídeo que performou bem em outro perfil e a IA adapta para o contexto, tom de voz e nicho dela.",
              "Produção de carrosséis com IA usando regras avançadas de design — hierarquia visual, tipografia, espaçamento — adaptados à identidade visual da Sal.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-saas-body text-sm leading-relaxed">
                <span className="text-saas-cyan flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-white/[0.09] bg-white/[0.02] p-4 mt-2">
            <p className="text-saas-cyan text-sm leading-relaxed">
              Esse bot pode se tornar um produto à parte, vendido por assinatura junto com o curso de produção de conteúdo — uma nova linha de receita recorrente.
            </p>
          </div>
        </Card>

        {/* FRENTE 2 */}
        <Card className="p-8 space-y-5">
          <Eyebrow>Frente II</Eyebrow>
          <h3 className="font-extrabold text-saas-ink text-[clamp(20px,2.6vw,30px)] leading-tight tracking-tight">Otimização do funil de receita de ponta a ponta</h3>
          <p className="text-saas-body leading-relaxed italic">
            Trabalho de CRO — Chief Revenue Officer. Mapeamento e melhoria contínua de todas as taxas de conversão, do topo do funil até o pós-venda. Cada etapa vira um ponto de alavancagem.
          </p>
          <ul className="space-y-3">
            {[
              "Mapeamento completo do funil: site → formulário de filtro → call de vendas → fechamento → ascensão entre produtos.",
              "Reunião semanal de vendas — acompanhamento de métricas e proposição de testes para melhorar conversão.",
              "Processo de repescagem de leads: toda a base que entrou, demonstrou interesse, foi cliente antiga ou disse \"agora não\" volta a ser trabalhada de forma sistemática.",
              "Estratégia de ascensão entre produtos — levar clientes dos cursos de entrada para mentoria e ofertas de maior ticket.",
              "Insights comerciais gerados por IA a partir dos dados da operação — conforme a base cresce, a personalização das abordagens melhora exponencialmente.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-saas-body text-sm leading-relaxed">
                <span className="text-saas-cyan flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* FRENTE 3 */}
        <Card className="p-8 space-y-5">
          <Eyebrow>Frente III</Eyebrow>
          <h3 className="font-extrabold text-saas-ink text-[clamp(20px,2.6vw,30px)] leading-tight tracking-tight">Infraestrutura tecnológica interna</h3>
          <p className="text-saas-body leading-relaxed italic">
            Eliminar a dependência de múltiplas plataformas pagas que não se integram, reduzir custos e dar liberdade total para customizar. Tudo fica da Sal, sem lock-in.
          </p>
          <ul className="space-y-3">
            {[
              "CRM próprio para organizar a base, gerar alertas de follow-up e dar visibilidade ao pipeline comercial.",
              "Formulários internos substituindo Typeform/Respondi.",
              "Automações de e-mail e integração com WhatsApp.",
              "Tudo construído sobre plataformas open source — código é nosso, custo é mínimo, liberdade é total.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-saas-body text-sm leading-relaxed">
                <span className="text-saas-cyan flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* ══════════ MODELO COMERCIAL ══════════ */}
      <section className="border-t border-white/[0.06] py-16 md:py-20 space-y-8">
        <div>
          <Eyebrow>03 · Modelo comercial</Eyebrow>
          <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
            Alinhamento total com o <Accent>seu resultado</Accent>.
          </h2>
        </div>
        <p className="text-saas-body leading-relaxed max-w-2xl italic">
          Se eu não gerar resultado, eu não ganho. Meu incentivo está 100% atrelado ao faturamento da Sal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-8 text-center">
            <div className="text-[clamp(56px,7vw,88px)] font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">15<span className="text-[40px]">%</span></div>
            <div className="text-saas-ink text-base mt-3">Mentorias e novos produtos</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-1.5">Faturamento gerado · Repasse mensal</div>
          </div>
          <div className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-8 text-center">
            <div className="text-[clamp(56px,7vw,88px)] font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">20<span className="text-[40px]">%</span></div>
            <div className="text-saas-ink text-base mt-3">Curso — Método Sal</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-1.5">Mantido conforme acordado</div>
          </div>
        </div>

        <Card className="p-6">
          <p className="text-saas-body leading-relaxed italic">
            Custos de operação como ferramentas e infraestrutura são negociados conforme surgirem. Precisa ser bom para os dois lados. Não estou vendendo horas — estou assumindo a responsabilidade de fazer a Sal faturar mais.
          </p>
        </Card>
      </section>

      {/* ══════════ PRÓXIMOS PASSOS ══════════ */}
      <section className="border-t border-white/[0.06] py-16 md:py-20 space-y-8">
        <div>
          <Eyebrow>04 · Próximos passos</Eyebrow>
          <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
            O que acontece <Accent>depois do sim</Accent>.
          </h2>
        </div>

        <div className="space-y-0">
          {[
            { bold: "Confirmar o aceite desta proposta", rest: " para iniciar formalmente a parceria." },
            { bold: "Sessão de trabalho de 2–3 horas", rest: " para absorver o Método Sal completo e estruturar o bot de conteúdo." },
            { bold: "Envio dos primeiros roteiros gerados por IA", rest: " baseados nas transcrições dos seus vídeos, para validação." },
            { bold: "Mapeamento completo do funil", rest: " e estruturação do processo de repescagem de leads." },
            { bold: "Definição e implementação do CRM interno", rest: " para organizar a base e dar visibilidade ao pipeline." },
            { bold: "Teste da integração Claude + ManyChat", rest: " para automação de DM." },
          ].map((step, i) => (
            <div key={step.bold} className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-b-0">
              <div className="font-extrabold text-xl flex-shrink-0 min-w-[32px] bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-saas-body leading-relaxed">
                <span className="text-saas-ink font-semibold">{step.bold}</span>{step.rest}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 text-center space-y-6">
        <div className="flex justify-center">
          <Eyebrow>05 · Aceite</Eyebrow>
        </div>
        <h2 className="font-extrabold text-saas-ink text-[clamp(30px,4.5vw,54px)] leading-[1.1] tracking-tight">
          Pronta para construir o <Accent>ecossistema da Sal</Accent>?
        </h2>
        <p className="text-saas-body leading-relaxed max-w-md mx-auto">
          Vamos transformar método, dados e tecnologia em receita.
        </p>
        <div>
          <a
            href="https://wa.me/5511999718595?text=Aceito%20a%20nossa%20parceria!"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
          >
            Confirmar Proposta
          </a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint pt-4">
          Proposta confidencial — Abril 2026
        </p>
      </section>
    </PropostaLayout>
  );
};

export default PropostaGiuliaSalvatora;
