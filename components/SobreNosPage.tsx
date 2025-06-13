"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Award, Users, Clock, Sparkles, Target, Camera, Coffee } from "lucide-react";

export function SobreNosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const valores = [
    {
      icon: Heart,
      titulo: "Amor em Cada Doce",
      descricao: "Colocamos carinho e dedicação em cada receita, criando doces que tocam o coração."
    },
    {
      icon: Award,
      titulo: "Qualidade Premium",
      descricao: "Utilizamos apenas ingredientes selecionados e técnicas artesanais tradicionais."
    },
    {
      icon: Users,
      titulo: "Família e Tradição",
      descricao: "Receitas passadas de geração em geração, mantendo a tradição familiar viva."
    },
    {
      icon: Sparkles,
      titulo: "Criatividade",
      descricao: "Inovamos constantemente, criando sabores únicos e apresentações encantadoras."
    }
  ];

  const equipe = [
    {
      nome: "Maria Elena",
      cargo: "Confeiteira Chefe & Fundadora",
      descricao: "30 anos de experiência em confeitaria artesanal",
      imagem: "https://images.unsplash.com/photo-1494790108755-2616b612b510?w=300&h=400&fit=crop"
    },
    {
      nome: "João Silva",
      cargo: "Confeiteiro Especialista",
      descricao: "Expert em bolos decorados e técnicas francesas",
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
    },
    {
      nome: "Ana Carolina",
      cargo: "Designer de Bolos",
      descricao: "Especialista em decorações personalizadas e artísticas",
      imagem: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-candy-pink-vibrant via-candy-purple-vibrant to-candy-mint-vibrant relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="bg-white/30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-20 right-20 animate-float animate-delay-300">
          <div className="bg-white/30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animate-delay-500">
          <div className="bg-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <div className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 backdrop-blur-sm animate-scale-in">
                <Heart className="h-5 w-5 text-white mr-2 animate-pulse-soft" />
                <span className="text-white font-semibold">Nossa História</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold animate-slide-up animate-delay-200">
                <span className="text-white">
                  Doce Encanto
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-100 to-orange-100 bg-clip-text text-transparent">
                  Uma História de Amor
                </span>
              </h1>
              
              <p className="text-white/95 text-lg leading-relaxed animate-fade-in animate-delay-400">
                Há mais de 15 anos criamos momentos especiais através dos nossos doces artesanais. 
                Nossa paixão pela confeitaria começou na cozinha de casa e hoje se transformou 
                em uma das confeitarias mais queridas da cidade.
              </p>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-slide-in-right animate-delay-200' : ''}`}>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover-glow transition-all-smooth">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop"
                  alt="Interior acolhedor da confeitaria"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform-smooth hover:scale-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-candy-peach rounded-full w-16 h-16 flex items-center justify-center animate-bounce-gentle">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-candy-mint rounded-full w-12 h-12 flex items-center justify-center animate-bounce-gentle animate-delay-300">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6 animate-slide-in-left">
                <div className="inline-flex items-center bg-candy-pink/20 rounded-full px-4 py-2">
                  <Coffee className="h-4 w-4 text-candy-pink mr-2" />
                  <span className="text-sm text-gray-700">Nossos Início</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Como Tudo Começou
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A história da Doce Encanto começou em 2008, quando Maria Elena decidiu 
                  transformar sua paixão pela confeitaria em um negócio familiar. O que 
                  começou como uma pequena produção caseira para amigos e vizinhos, 
                  rapidamente se tornou uma referência em doces artesanais.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Com receitas transmitidas por gerações e a constante busca pela 
                  excelência, nossa confeitaria cresceu mantendo sempre os valores 
                  familiares e o compromisso com a qualidade.
                </p>
              </div>
              <div className="relative animate-slide-in-right">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop"
                  alt="Primeira confeitaria"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow-smooth hover:scale-105 transition-transform-smooth"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg hover-lift transition-all-smooth">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-candy-purple" />
                    <span className="text-sm font-semibold text-gray-700">Desde 2008</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1 animate-slide-in-left">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556909114-4f5b7e98b33c?w=500&h=400&fit=crop"
                  alt="Ateliê de confeitaria"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow-smooth hover:scale-105 transition-transform-smooth"
                />
                <div className="absolute -top-4 -left-4 bg-candy-pink/20 backdrop-blur-sm p-4 rounded-2xl hover-lift transition-all-smooth">
                  <Users className="h-8 w-8 text-candy-pink" />
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2 animate-slide-in-right">
                <div className="inline-flex items-center bg-candy-purple/20 rounded-full px-4 py-2">
                  <Camera className="h-4 w-4 text-candy-purple mr-2" />
                  <span className="text-sm text-gray-700">Nosso Espaço</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Nosso Ateliê
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Hoje, nossa confeitaria conta com um ateliê moderno e equipado, 
                  onde cada doce é preparado com técnicas artesanais e ingredientes 
                  cuidadosamente selecionados. Nosso espaço foi pensado para 
                  proporcionar a melhor experiência tanto para nossa equipe quanto 
                  para nossos clientes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mantemos a tradição das receitas familiares enquanto incorporamos 
                  inovações e novas técnicas, sempre com o objetivo de surpreender 
                  e encantar nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Agora com o fundo colorido da timeline */}
      <section className="py-20 bg-gradient-to-r from-candy-blue-vibrant to-candy-lavender-vibrant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">Nossos Valores</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que Nos Move
            </h2>
            <p className="text-white/95 text-lg max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nossa paixão pela confeitaria artesanal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <Card 
                key={index} 
                className={`text-center border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all-smooth hover-lift animate-scale-in animate-delay-${index * 200}`}
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-candy-pink-vibrant to-candy-purple-vibrant p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-transform-smooth animate-float">
                    <valor.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {valor.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-candy-purple/20 rounded-full px-6 py-3 mb-8 animate-scale-in">
              <Target className="h-5 w-5 text-candy-purple mr-2" />
              <span className="text-sm font-medium text-gray-700">Nossa Missão</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-slide-up">
              Criando Momentos Especiais
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in animate-delay-300">
              Nossa missão é criar doces que não apenas satisfazem o paladar, mas também 
              despertam emoções e criam memórias afetivas. Acreditamos que cada doce pode 
              ser uma forma de expressar carinho, celebrar conquistas e tornar momentos 
              ordinários em extraordinários.
            </p>
            
            <div className="bg-gradient-to-r from-candy-pink/20 to-candy-purple/20 rounded-2xl p-8 hover-glow transition-all-smooth animate-scale-in animate-delay-500">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Nosso maior prazer é ver o sorriso das pessoas ao provarem nossos doces. 
                Cada receita carrega não apenas ingredientes, mas também amor, tradição e 
                a alegria de fazer parte dos momentos mais doces da vida de nossos clientes."
              </blockquote>
              <p className="text-candy-purple font-semibold">
                - Maria Elena, Fundadora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-candy-lavender-vibrant to-candy-peach-vibrant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Users className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">Nossa Equipe</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Talentos Doces
            </h2>
            <p className="text-white/95 text-lg max-w-2xl mx-auto">
              Conheça os talentos por trás dos nossos doces artesanais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {equipe.map((membro, index) => (
              <Card 
                key={index} 
                className={`text-center border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all-smooth group hover-lift animate-scale-in animate-delay-${(index + 1) * 200}`}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <ImageWithFallback
                      src={membro.imagem}
                      alt={membro.nome}
                      className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:scale-110 transition-transform-smooth"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-candy-pink rounded-full p-2 animate-pulse-soft">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {membro.nome}
                  </h3>
                  
                  <p className="text-candy-purple font-medium mb-3">
                    {membro.cargo}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {membro.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-candy-pink-vibrant to-candy-purple-vibrant">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Vamos Conversar?
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-300">
              Ficou com alguma dúvida ou quer conhecer mais sobre nossa história? 
              Adoraríamos conversar com você!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animate-delay-500">
              <div className="flex items-center bg-white/30 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/40 transition-all-smooth hover-lift">
                <div className="bg-white/30 p-2 rounded-full mr-4">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/90 text-sm">Feito com amor</p>
                  <p className="text-white font-semibold">desde 2008</p>
                </div>
              </div>
              <div className="flex items-center bg-white/30 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/40 transition-all-smooth hover-lift">
                <div className="bg-white/30 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/90 text-sm">Qualidade</p>
                  <p className="text-white font-semibold">artesanal garantida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}