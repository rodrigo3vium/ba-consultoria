import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, X, ChevronDown, Menu, X as CloseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { tracker } from "@/lib/tracking";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  email: z.string().email("Email inválido").max(255),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
});

type FormData = z.infer<typeof formSchema>;

const OCaminho = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Remove body padding and set black background for standalone page
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
    },
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").upsert(
        {
          nome: data.nome,
          email: data.email,
          whatsapp: data.whatsapp,
          produto: "o-caminho",
          origem: "Landing Page O Caminho",
          status: "novo",
        },
        { onConflict: "whatsapp" }
      );

      if (error) throw error;

      await tracker.identify(data.email, data.whatsapp, data.nome);
      await tracker.track("lead_capture", {
        product: "o-caminho",
        source: "landing-page",
      });

      toast.success("Inscrição realizada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      toast.error("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const menuItems = [
    { label: "O que é", id: "problema" },
    { label: "Como funciona", id: "mecanismo" },
    { label: "Conteúdo", id: "curriculo" },
    { label: "Para quem", id: "para-quem" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>O Caminho - Propósito, Direção e Autogoverno</title>
        <meta
          name="description"
          content="Encontre propósito. Construa direção. Governe a si mesmo. Um curso para quem quer parar de se perder em metas vazias e começar a caminhar com direção."
        />
      </Helmet>

      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-amber-500/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl md:text-2xl font-serif italic text-amber-400"
            >
              O Caminho
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-white/70 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("inscricao")}
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
              >
                Quero entrar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white/70 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("inscricao")}
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold w-full"
              >
                Quero entrar
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
          {/* Corner decorations */}
          <div className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
          <div className="absolute top-20 left-0 w-px h-32 bg-gradient-to-b from-amber-500/50 to-transparent" />
          <div className="absolute top-20 right-0 w-32 h-px bg-gradient-to-l from-amber-500/50 to-transparent" />
          <div className="absolute top-20 right-0 w-px h-32 bg-gradient-to-b from-amber-500/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Encontre <span className="italic text-amber-400">propósito</span>.
                <br />
                Construa <span className="italic text-amber-400">direção</span>.
                <br />
                Governe <span className="italic text-amber-400">a si mesmo</span>.
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Você não precisa de mais produtividade. Você precisa de uma vida que faça
                sentido — e de um jeito prático de organizar o que você faz em torno desse
                sentido.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Descubra a narrativa que você quer contar com a sua vida",
                  "Defina objetivos que você realmente respeita (e não modas)",
                  "Crie a base do autogoverno: narrativa → ambiente → corpo → mente",
                  "Pare de se perder em metas vazias e comece a caminhar com direção",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("inscricao")}
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold text-lg px-8 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all"
                >
                  Quero começar o Caminho
                </Button>
                <Button
                  onClick={() => scrollToSection("curriculo")}
                  variant="ghost"
                  size="lg"
                  className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
                >
                  Ver o conteúdo
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Card decorativo */}
            <div className="relative">
              <div className="bg-white/[0.03] backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-10">
                <div className="absolute -top-3 left-8 bg-amber-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Começa pelo começo
                </div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                  Autogoverno não nasce de força de vontade.
                  <br />
                  <span className="text-amber-400 font-medium">Nasce de um eixo.</span>
                </p>
                <div className="border-l-2 border-amber-500/50 pl-4">
                  <p className="text-white/60 italic">
                    "Sem narrativa, disciplina vira tortura."
                  </p>
                </div>
              </div>
              {/* Decoração do card */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-amber-500/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção: O Problema */}
      <section id="problema" className="py-20 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Você não está perdido por falta de <span className="italic text-amber-400">informação</span>.
            </h2>

            <ul className="space-y-4 mb-10 text-lg text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                Você funciona… mas por dentro sente que está construindo a vida errada.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                Você começa e para.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                Você consome conteúdo, mas não cria direção.
              </li>
            </ul>

            <blockquote className="relative bg-white/[0.02] border-l-4 border-amber-500 p-6 md:p-8 rounded-r-xl">
              <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed">
                "Sem propósito, disciplina vira tortura.
                <br />
                Sem narrativa, organização vira estética."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção: A Promessa */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O Caminho não é sobre ficar <span className="italic text-amber-400">motivado</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { title: "Clareza real", desc: "Saber o que você quer de verdade" },
              { title: "Um mapa", desc: "Um caminho claro a seguir" },
              { title: "Um critério", desc: "Para dizer sim e não com convicção" },
              { title: "Base sólida", desc: "Para hábitos e objetivos que duram" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.03] backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <span className="text-amber-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Propósito não é um sentimento bonito.
            <br />
            <span className="text-amber-400 font-medium">Propósito é uma estrutura.</span>
          </p>
        </div>
      </section>

      {/* Seção: O Mecanismo (3 Ordens de Influência) */}
      <section id="mecanismo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
              As 3 Ordens de <span className="italic text-amber-400">Influência</span>
            </h2>

            <div className="space-y-6 mb-12">
              {[
                { num: "1", title: "Governar a si mesmo" },
                { num: "2", title: "Governar a sua família" },
                { num: "3", title: "Governar a sua comunidade" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-center gap-6 bg-white/[0.02] border border-amber-500/10 rounded-xl p-6 hover:border-amber-500/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-black">{item.num}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium">{item.title}</h3>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-white/70 max-w-2xl mx-auto">
              A maioria tenta pular etapas…
              <br />
              <span className="text-amber-400">O Caminho começa onde deveria: em você.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Seção: Coração do Curso - Narrativa */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Se alguém escrevesse um livro sobre você…
            </h2>

            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-amber-400 italic mb-10 leading-tight">
              "O que você gostaria que estivesse escrito no final?"
            </p>

            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              A narrativa é o seu eixo. É ela que dá sentido às suas escolhas, aos seus
              sacrifícios, aos seus "nãos". Sem uma narrativa escolhida, alguém escolhe por
              você — a moda, a expectativa, o status, a ansiedade.
            </p>

            <blockquote className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-8 md:p-10">
              <p className="text-xl md:text-2xl italic text-white/90">
                "Histórias movem pessoas.
                <br />
                Pessoas movem o mundo."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção: Como a Transformação Acontece */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Você vai construir direção em <span className="italic text-amber-400">camadas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Camada 1 */}
            <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-black">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Narrativa</h3>
                  <p className="text-amber-400 text-sm">O eixo</p>
                </div>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  Valores reais vs. valores emprestados
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  A sombra: o inimigo interno
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  Seu norte verdadeiro
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  Critério para decisões
                </li>
              </ul>
            </div>

            {/* Camada 2 */}
            <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bases do Autogoverno</h3>
                  <p className="text-amber-400 text-sm">Os 4 pilares</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Narrativa", "Ambiente", "Corpo", "Mente"].map((pilar, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border border-amber-500/10 rounded-lg p-4 text-center"
                  >
                    <span className="text-white/80">{pilar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xl text-white/80 max-w-2xl mx-auto">
            Você não vai só aprender.
            <br />
            <span className="text-amber-400 font-medium">
              Você vai sair com uma direção escrita.
            </span>
          </p>
        </div>
      </section>

      {/* Seção: Conteúdo das Aulas (Currículo) */}
      <section id="curriculo" className="py-20 relative">
        <div className="absolute right-0 top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            O que tem nas <span className="italic text-amber-400">aulas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Aula 1 */}
            <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
              <div className="inline-block bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Aula 1
              </div>
              <h3 className="text-2xl font-bold mb-6">As Ordens de Influência</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Ordem natural do amadurecimento
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Por que conteúdo novo não é necessariamente melhor
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Governar a si mesmo como fundamento
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Educação da vontade e ordenação dos amores
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Beleza e pontualidade como sinais de autogoverno
                </li>
              </ul>
            </div>

            {/* Aula 2 */}
            <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
              <div className="inline-block bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Aula 2
              </div>
              <h3 className="text-2xl font-bold mb-6">A Narrativa</h3>
              <p className="text-sm text-amber-400/80 mb-4">(o núcleo do Caminho)</p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  A pergunta definitiva: que história eu quero contar?
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Por que a narrativa move o mundo
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Jornada do Herói aplicada à vida real
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Sombra: o inimigo interno
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  Por que um porquê sustenta a travessia
                </li>
              </ul>
            </div>
          </div>

          {/* Exercício Guiado */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                Exercício guiado <span className="text-amber-400">(prático)</span>
              </h3>
              <div className="space-y-4">
                {[
                  "Separar um momento de silêncio",
                  'Escrever ~1000 palavras: "Como eu quero que termine o livro da minha vida?"',
                  "Resumir em 1 parágrafo: sua narrativa",
                  "Transformar isso em critério de decisão",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-black">{index + 1}</span>
                    </div>
                    <p className="text-white/80 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Para Quem É / Não É */}
      <section id="para-quem" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Para quem é <span className="italic text-amber-400">(e para quem não é)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* É pra você */}
            <div className="bg-white/[0.03] border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-green-400">É pra você se…</h3>
              <ul className="space-y-4">
                {[
                  "Você sente que está construindo a vida errada",
                  "Você quer parar de começar e parar",
                  "Você quer um critério claro para dizer sim e não",
                  "Você quer uma estrutura, não apenas motivação",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é pra você */}
            <div className="bg-white/[0.03] border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-red-400">Não é pra você se…</h3>
              <ul className="space-y-4">
                {[
                  "Você quer soluções rápidas e superficiais",
                  "Você não está disposto a fazer o trabalho interno",
                  "Você prefere terceirizar suas escolhas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Resultado Esperado */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
              O que muda depois do <span className="italic text-amber-400">Caminho</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {["Um norte", "Uma história escolhida", "Um critério", "Autogoverno sólido"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all"
                  >
                    <p className="text-white/90 font-medium">{item}</p>
                  </div>
                )
              )}
            </div>

            <p className="text-2xl md:text-3xl font-bold">
              <span className="text-white/40">Ocupado…</span>
              <br />
              <span className="text-amber-400">construindo a vida errada.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final + Formulário de Inscrição */}
      <section id="inscricao" className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Você não precisa de mais um <span className="italic text-amber-400">método</span>.
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Você precisa escolher quem você vai ser.
            </p>

            <div className="bg-white/[0.03] backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            className="bg-black/40 border-amber-500/20 focus:border-amber-500/50 text-white placeholder:text-white/40 h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Seu melhor email"
                            className="bg-black/40 border-amber-500/20 focus:border-amber-500/50 text-white placeholder:text-white/40 h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu WhatsApp"
                            className="bg-black/40 border-amber-500/20 focus:border-amber-500/50 text-white placeholder:text-white/40 h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold text-lg h-14 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all"
                  >
                    {isSubmitting ? "Enviando..." : "Quero receber acesso"}
                  </Button>

                  <p className="text-xs text-white/40 text-center">
                    Ao enviar, você concorda em receber comunicações sobre o curso.
                  </p>
                </form>
              </Form>
            </div>

            <p className="mt-8 text-white/60">
              Comece pelo começo: <span className="text-amber-400">governar a si mesmo</span>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Perguntas <span className="italic text-amber-400">frequentes</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white/[0.02] border border-amber-500/10 rounded-xl px-6 data-[state=open]:border-amber-500/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">Eu não tenho clareza nenhuma. Serve pra mim?</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">
                  Serve principalmente pra você. O Caminho foi desenhado para quem sente que está
                  perdido, funcionando no automático ou construindo algo que não faz sentido. Se
                  você já tivesse clareza, não precisaria do curso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white/[0.02] border border-amber-500/10 rounded-xl px-6 data-[state=open]:border-amber-500/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">Isso é muito filosófico?</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">
                  É profundo, mas é prático. Você vai sair com exercícios feitos, uma narrativa
                  escrita e um critério claro para suas decisões. Não é teoria — é aplicação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white/[0.02] border border-amber-500/10 rounded-xl px-6 data-[state=open]:border-amber-500/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">E se eu não tiver tempo?</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">
                  Você não precisa de tempo livre. Você precisa de clareza sobre o que fazer com o
                  tempo que já tem. O curso é compacto e os exercícios podem ser feitos em momentos
                  curtos de reflexão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white/[0.02] border border-amber-500/10 rounded-xl px-6 data-[state=open]:border-amber-500/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">Isso é sobre carreira?</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">
                  É sobre vida. A carreira é uma parte da sua vida, não o centro. O Caminho te
                  ajuda a definir o centro primeiro — e a partir daí, organizar todo o resto,
                  incluindo trabalho.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-amber-500/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-serif italic text-amber-400 mb-2">O Caminho</p>
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-white/50 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <p className="text-xs text-white/30 text-center mt-8">
            Este curso não substitui acompanhamento psicológico ou terapêutico.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OCaminho;
