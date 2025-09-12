import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Cpu } from 'lucide-react';

const features = [
  {
    title: "Educação",
    description: "Transforme a experiência educacional com IA personalizada para alunos e professores.",
    icon: GraduationCap,
  },
  {
    title: "Consultoria",
    description: "Consultoria especializada para implementar IA nos seus processos de negócio.",
    icon: Users,
  },
  {
    title: "Tecnologia",
    description: "Desenvolva soluções tecnológicas inovadoras com inteligência artificial.",
    icon: Cpu,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-900" id="solucoes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-ba-orange text-ba-orange bg-ba-orange/10 text-sm font-medium mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
            Soluções completas em{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-inter max-w-4xl mx-auto">
            Oferecemos soluções completas de IA para revolucionar sua empresa e maximizar resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/80 hover:shadow-2xl transition-all duration-300 hover:scale-105 group rounded-2xl"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-700 rounded-full group-hover:bg-ba-orange/20 transition-all duration-300 border border-gray-600">
                      <IconComponent size={28} className="text-ba-orange" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins text-white mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <CardDescription className="text-center text-gray-300 font-inter leading-relaxed mb-6">
                    {feature.description}
                  </CardDescription>
                  {feature.title === "Consultoria" ? (
                    <Link to="/consultoria">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white group-hover:border-ba-orange group-hover:text-ba-orange transition-all duration-300"
                      >
                        Saber Mais
                      </Button>
                    </Link>
                  ) : feature.title === "Tecnologia" ? (
                    <Link to="/tecnologia">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white group-hover:border-ba-orange group-hover:text-ba-orange transition-all duration-300"
                      >
                        Saber Mais
                      </Button>
                    </Link>
                  ) : feature.title === "Educação" ? (
                    <Link to="/educacao">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white group-hover:border-ba-orange group-hover:text-ba-orange transition-all duration-300"
                      >
                        Saber Mais
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white group-hover:border-ba-orange group-hover:text-ba-orange transition-all duration-300"
                    >
                      Saber Mais
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;