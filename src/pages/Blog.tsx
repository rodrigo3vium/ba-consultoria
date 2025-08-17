import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Dados de exemplo para os posts do blog
  const blogPosts = [
    {
      id: 1,
      title: "Porque a Inteligência Artificial vai fazer você ganhar menos dinheiro — e como evitar que isso aconteça",
      excerpt: "Um aluno parou de usar nutricionista porque faz tudo com IA. Isso me fez refletir sobre como a IA está diminuindo a demanda por profissionais do conhecimento e causando achatamento dos preços.",
      author: "Equipe Nexus",
      date: "2024-01-20",
      readTime: "8 min",
      category: "IA e Mercado",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png",
      content: `Essa semana um aluno comentou no grupo de alunos que encerrou com o nutricionista porque está fazendo toda a sua dieta com IA.

Aquilo me chamou **a** atenção e me fez pensar em todos os profissionais que eu já não contrato mais por causa da IA.

Reduzi minha equipe de 17 para 5 pessoas e diminuí muito a contratação de freelancers.

E isso se encaixou com uma ideia que eu tive há alguns meses, que é o tema principal que quero tratar contigo hoje.

---

Existe uma visão distópica de que a IA acabará com todos os empregos. Robôs dominarão o mundo e viveremos de renda básica universal.

Isso pode levar a um cenário como **Elysium** ou **WALL·E** retratam.

Se isso vai acontecer ou não, é futurologia.

Agora, existe um cenário muito mais real, praticamente irreversível e garantido que precisaremos superar.

O **achatamento dos preços**.

---

O preço de uma mercadoria é definido por oferta e demanda.

Quanto maior a relação entre **quantas pessoas querem** / **quantas unidades estão disponíveis**, maior o preço de um produto.

💡 **Pense no seguinte exemplo:**

Eu estou vendendo a minha casa. Se eu anunciar por R$ 5 mil, quantas pessoas você acha que irão se interessar? Milhares. Afinal, é uma barganha. Todo mundo sabe que uma casa vale mais de R$ 5 mil.

Mas se eu anunciar por 10 milhões, quantas pessoas se interessarão? Zero. Porque todo mundo sabe que é improvável que a minha casa valha 10 milhões.

Ou seja, conforme eu aumento o preço, partindo de R$ 5 mil, o número de pessoas que me procurarão irá diminuir.

**Economicamente falando, o preço ideal é aquele que maximiza a receita (ou o lucro), equilibrando preço e número de compradores dispostos a pagar — não necessariamente quando só uma pessoa aceita.**

Na prática, encontrar esse ponto é difícil. Então, nós pegamos uma **faixa** aceitável de preço, com um número razoável de pessoas interessadas, e fixamos o preço ali.

É assim que eu encontro o preço ideal de um produto: **pela quantidade de pessoas dispostas a pagar e pelo valor que elas estão dispostas a pagar.**

**O que pouca gente tem percebido é que, hoje, a demanda já está diminuindo.** 

Talvez isso ainda não apareça nas estatísticas, mas, como no exemplo desse meu aluno — e no meu próprio —, já existem pessoas que estão reduzindo a busca por determinados tipos de profissionais.

Em geral, **trabalhadores do conhecimento**. Aquelas pessoas que vendem o que sabem: médicos, advogados, consultores, nutricionistas, profissionais de social media…

E o que acontece quando a demanda cai e a oferta se mantém constante? **Os preços baixam.**

Ou seja, em um futuro muito próximo, precisaremos lidar com a tendência do mercado de puxar todos os preços para baixo.

Outro exemplo que ajuda a ilustrar isso.

Imagine que você quer fazer um site.

Você vai lá fazer um orçamento e percebe que existe uma média de algo em torno de R$ 5 mil para fazer um site. O profissional, além disso, te pede 30 dias para entregar.

Há 3 a 5 anos, um cenário super razoável.

Mas, em alguns meses, o questionamento será: **por que eu vou pagar R$ 5 mil e esperar 30 dias se eu sei que esse profissional vai usar IA e conseguir entregar muito mais rápido — possivelmente em horas ou em uma fração desse tempo — e, portanto, com preço menor?**

Mesmo que o cenário anterior não seja literal em todos os casos, ainda assim, **a percepção de valor do cliente tende a diminuir com o aumento da adoção de Inteligência Artificial pelos prestadores de serviços em geral.**

Por enquanto, esse cenário **não** se aplica com a mesma força a profissionais que executam tarefas estritamente físicas no mundo real — de cirurgiões a pedreiros.

**Mas uma grande parte do mercado de serviços já entrou em uma transformação sem precedentes e sem volta, e ninguém percebeu.**

### **O que eu vejo como solução para esse problema?**

A intensificação de algo que também já está acontecendo, mas que, para olhos menos atentos, pode ter passado despercebido.

Com a popularização da informação, **cresce a dificuldade de tomada de decisão**.

**Isso fará com que profissionais mais estratégicos sejam percebidos como mais valiosos.** Pelo menos, temporariamente.

Isso já está acontecendo na área de tecnologia.

Enquanto a demanda por profissionais juniores diminui, porque esses podem ser parcialmente substituídos por IA…

> Estudantes de ciência da computação cujos empregos foram ocupados pela IA são forçados a encontrar trabalho na Chipotle

> "Acabei de me formar em ciência da computação e a única empresa que me chamou para uma entrevista foi a Chipotle." — Manasi Mishra

fonte: https://nypost.com/2025/08/11/business/coding-students-whose-jobs-were-taken-by-ai-forced-to-work-at-chipotle/

…a demanda por profissionais seniores **aumenta**, chegando ao ápice de empresas oferecerem **pacotes de compensação total na casa dos bilhões** a ex-líderes da OpenAI; 

> Mira Murati, ex-CTO da OpenAI recusa proposta bilionária para liderar o departamento de superinteligência da Meta.

fonte: https://www.wsj.com/tech/ai/meta-zuckerberg-ai-recruiting-fail-e6107555

É um cenário extremo, mas que reflete uma **tendência de mercado** que deve se normalizar nos próximos meses.

Pelo menos, até a próxima grande mudança chacoalhar o mercado.

Dito isso, eu tenho duas grandes conclusões com essa reflexão:

1. **Profissionais que querem se manter competitivos precisam agregar valor estratégico ao próprio trabalho.**
2. **A ideia de que não existe estabilidade nunca foi tão real.** A forma mais segura de se manter relevante é **abraçar o caos e se reinventar com velocidade**.`
    },
    {
      id: 2,
      title: "Como a IA está Revolucionando os Pequenos Negócios",
      excerpt: "Descubra como pequenas e médias empresas estão usando inteligência artificial para aumentar produtividade e reduzir custos operacionais.",
      author: "Equipe Nexus",
      date: "2024-01-15",
      readTime: "5 min",
      category: "IA para Negócios",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 3,
      title: "Automação no-code: O Futuro da Eficiência Empresarial",
      excerpt: "Aprenda como implementar automações poderosas sem precisar programar, usando ferramentas como Make e Zapier.",
      author: "Equipe Nexus",
      date: "2024-01-10",
      readTime: "7 min",
      category: "Automação",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 4,
      title: "5 Casos de Uso de IA que Todo Empresário Deveria Conhecer",
      excerpt: "Conheça aplicações práticas de IA que podem transformar vendas, atendimento ao cliente e gestão financeira do seu negócio.",
      author: "Equipe Nexus",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Cases de Sucesso",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 5,
      title: "ChatGPT para Empresas: Guia Prático de Implementação",
      excerpt: "Tutorial completo sobre como integrar ChatGPT nos processos empresariais para maximizar resultados.",
      author: "Equipe Nexus",
      date: "2023-12-28",
      readTime: "8 min",
      category: "Tutorial",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 6,
      title: "ROI em IA: Como Medir o Retorno dos Seus Investimentos",
      excerpt: "Métricas e indicadores essenciais para avaliar o sucesso das suas iniciativas de inteligência artificial.",
      author: "Equipe Nexus",
      date: "2023-12-20",
      readTime: "5 min",
      category: "Estratégia",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 7,
      title: "Segurança em IA: Protegendo Dados Empresariais",
      excerpt: "Melhores práticas para implementar IA de forma segura, respeitando a LGPD e protegendo informações sensíveis.",
      author: "Equipe Nexus",
      date: "2023-12-15",
      readTime: "6 min",
      category: "Segurança",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    }
  ];

  const categories = ["Todos", "IA e Mercado", "IA para Negócios", "Automação", "Cases de Sucesso", "Tutorial", "Estratégia", "Segurança"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-6">
            Blog Nexus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutoriais e cases de sucesso sobre IA, automação e transformação digital para empresas que querem liderar o futuro.
          </p>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-3">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Não perca nenhuma novidade</CardTitle>
              <CardDescription className="text-lg">
                Receba os melhores insights sobre IA e automação diretamente no seu e-mail.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap">
                Inscrever-se
              </button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;