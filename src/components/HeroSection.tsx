import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Award, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900">
      {/* Barra de destaque no topo */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-semibold text-sm md:text-base">
            EXCLUSIVO PARA EMPRESAS QUE BUSCAM TRANSFORMAÇÃO COM IA
          </p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              <span className="text-white">Transforme seu negócio com soluções </span>
              <span className="text-red-500">sob medida</span>
              <span className="text-white"> de Inteligência Artificial</span>
            </h1>
            
            <p className="text-xl text-gray-300 font-inter leading-relaxed">
              Implementamos IA de forma prática e eficiente, aumentando produtividade 
              e maximizando lucros sem contratar mais gente.
            </p>

            <div>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 font-inter bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                QUERO MAIS INFORMAÇÕES
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-slate-900 flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-slate-900 flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-slate-900 flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-green-400 font-semibold text-lg">+ de 100 empresas</p>
                <p className="text-gray-400 text-sm">já tomaram essa decisão</p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Visual com Métricas */}
          <div className="relative">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
            
            {/* Content Area */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 min-h-[400px] border border-slate-700">
              {/* Placeholder for image/content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Award size={200} className="text-white" />
              </div>

              {/* Floating Metric Cards */}
              <Card className="absolute top-8 right-8 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-red-500">+12</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Anos de<br />mercado</p>
                </CardContent>
              </Card>

              <Card className="absolute bottom-12 right-12 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-red-500">+100</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Empresas<br />atendidas</p>
                </CardContent>
              </Card>

              <Card className="absolute bottom-8 left-8 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-green-400">+40%</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Aumento médio<br />de produtividade</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;