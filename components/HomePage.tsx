"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Star, Phone, Mail, MapPin, Send, Sparkles, Cake, Cherry, Heart } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const featuredProducts = [
    {
      name: "Brigadeiros Gourmet",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop",
      description: "Deliciosos brigadeiros artesanais"
    },
    {
      name: "Cupcakes Personalizados",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=200&fit=crop",
      description: "Cupcakes únicos para ocasiões especiais"
    },
    {
      name: "Bolos de Aniversário",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      description: "Bolos decorados com muito carinho"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-candy-pink/30 via-candy-purple/30 to-candy-mint/30 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white/40"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float animate-delay-100">
          <div className="bg-candy-peach/60 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
            <Cake className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float animate-delay-300">
          <div className="bg-candy-mint/60 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm">
            <Cherry className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float animate-delay-500">
          <div className="bg-candy-blue/60 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <div className="inline-flex items-center bg-candy-pink/30 rounded-full px-4 py-2 backdrop-blur-sm animate-scale-in animate-delay-200">
                <Star className="h-4 w-4 text-candy-pink mr-2 animate-pulse-soft" />
                <span className="text-sm text-gray-700">Confeitaria Artesanal</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold animate-slide-up animate-delay-300">
                <span className="bg-gradient-to-r from-candy-pink-vibrant to-candy-purple-vibrant bg-clip-text text-transparent">
                  Doces que
                </span>
                <br />
                <span className="text-gray-700">tocam o coração</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in animate-delay-400">
                Criamos doces artesanais únicos, feitos com ingredientes selecionados 
                e muito amor. Cada receita é uma obra de arte que desperta sorrisos 
                e momentos especiais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-500">
                <Button 
                  onClick={() => onNavigate("produtos")}
                  className="bg-gradient-to-r from-candy-pink-vibrant to-candy-purple-vibrant hover:shadow-2xl transition-all-smooth rounded-full px-8 py-6 hover-lift animate-glow"
                >
                  Ver Produtos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform-smooth group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onNavigate("sobre")}
                  className="border-candy-pink-vibrant text-candy-pink-vibrant hover:bg-candy-pink-vibrant hover:text-white rounded-full px-8 py-6 transition-all-smooth hover-lift"
                >
                  Nossa História
                </Button>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-slide-in-right animate-delay-200' : ''}`}>
              <div className="bg-gradient-to-br from-candy-blue/40 to-candy-lavender/40 rounded-3xl p-8 backdrop-blur-sm hover-glow transition-all-smooth">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&h=600&fit=crop"
                  alt="Vitrine de doces artesanais"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform-smooth hover:scale-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-candy-peach rounded-full w-12 h-12 flex items-center justify-center animate-bounce-gentle">
                <Cake className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-candy-mint rounded-full w-16 h-16 flex items-center justify-center animate-bounce-gentle animate-delay-300">
                <Cherry className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-r from-candy-lavender-vibrant to-candy-purple-vibrant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center bg-white/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-white mr-2" />
              <span className="text-sm text-white font-medium">Produtos em Destaque</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Doces Especiais
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Conheça alguns dos nossos produtos mais queridos pelos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all-smooth overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover-lift hover-glow animate-scale-in animate-delay-${(index + 1) * 200}`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-candy-purple-vibrant/30 to-transparent opacity-0 group-hover:opacity-100 transition-all-smooth"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-candy-purple-vibrant transition-colors-smooth">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in animate-delay-600">
            <Button 
              onClick={() => onNavigate("produtos")}
              className="bg-white text-candy-purple-vibrant hover:bg-candy-purple-vibrant hover:text-white rounded-full px-8 py-6 transition-all-smooth hover-lift shadow-lg font-semibold"
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform-smooth group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Special Promotion Section */}
      <section className="py-20 bg-gradient-to-br from-candy-mint-vibrant to-candy-blue-vibrant relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 right-10 animate-float">
          <div className="bg-white/30 rounded-full w-20 h-20 flex items-center justify-center backdrop-blur-sm">
            <Cake className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-10 animate-float animate-delay-300">
          <div className="bg-white/30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
            <Cherry className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm animate-scale-in">
              <Star className="h-5 w-5 text-white mr-2 animate-pulse-soft" />
              <span className="text-white font-semibold">Oferta Especial</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Doces Personalizados para
              <br />
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 bg-clip-text text-transparent">
                Momentos Únicos
              </span>
            </h2>
            
            <p className="text-white/95 text-lg mb-8 leading-relaxed animate-fade-in animate-delay-300">
              Criamos doces exclusivos para casamentos, aniversários, batizados e todas as 
              suas celebrações especiais. Cada criação é única e feita especialmente para você.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Heart, title: "Casamentos", desc: "Doces elegantes para o grande dia" },
                { icon: Star, title: "Aniversários", desc: "Bolos únicos para celebrar a vida" },
                { icon: Sparkles, title: "Batizados", desc: "Docinhos delicados para momentos santos" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all-smooth hover-lift animate-scale-in animate-delay-${(index + 1) * 200}`}
                >
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <Button
              onClick={() => onNavigate("produtos")}
              className="bg-white text-candy-mint-vibrant hover:bg-candy-mint-vibrant hover:text-white rounded-full px-10 py-6 text-lg transition-all-smooth hover-lift shadow-2xl animate-scale-in animate-delay-600 font-semibold"
            >
              Faça Seu Pedido Especial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-candy-peach/20 via-candy-pink/20 to-candy-lavender/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center bg-candy-pink/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Mail className="h-4 w-4 text-candy-pink mr-2" />
                <span className="text-sm text-gray-700">Contato</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Entre em Contato
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tem alguma dúvida ou quer fazer um pedido especial? Fale conosco!
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm animate-slide-in-left hover-glow transition-all-smooth">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-slide-up animate-delay-200">
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="rounded-xl border-candy-pink/30 focus:border-candy-pink bg-white transition-all-smooth hover:shadow-md focus:shadow-lg"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div className="animate-slide-up animate-delay-300">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-xl border-candy-pink/30 focus:border-candy-pink bg-white transition-all-smooth hover:shadow-md focus:shadow-lg"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div className="animate-slide-up animate-delay-400">
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows={4}
                        className="rounded-xl border-candy-pink/30 focus:border-candy-pink bg-white resize-none transition-all-smooth hover:shadow-md focus:shadow-lg"
                        placeholder="Conte-nos como podemos ajudar..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-candy-pink-vibrant to-candy-purple-vibrant hover:shadow-2xl transition-all-smooth rounded-xl py-6 animate-scale-in animate-delay-500 hover-lift"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <div className="space-y-6 animate-slide-in-right">
                {[
                  { icon: Phone, title: "Telefone", info: "(11) 99999-9999", color: "candy-pink" },
                  { icon: Mail, title: "E-mail", info: "contato@doceencanto.com.br", color: "candy-purple" },
                  { icon: MapPin, title: "Endereço", info: "Rua das Delícias, 123\nSão Paulo - SP", color: "candy-mint" }
                ].map((item, index) => (
                  <Card 
                    key={index}
                    className={`border-0 shadow-lg bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all-smooth hover-lift animate-scale-in animate-delay-${(index + 2) * 200}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`bg-${item.color}/20 p-3 rounded-full transition-all-smooth hover:bg-${item.color}/30`}>
                          <item.icon className={`h-5 w-5 text-${item.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="bg-gradient-to-r from-candy-peach/30 to-candy-lavender/30 rounded-2xl p-8 text-center backdrop-blur-sm animate-scale-in animate-delay-600 hover-glow transition-all-smooth">
                  <h4 className="font-semibold text-gray-800 mb-3">Horário de Funcionamento</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábados: 8h às 16h</p>
                    <p>Domingos: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}