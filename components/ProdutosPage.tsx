"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Crown, Heart, Sparkles, Filter, Cake, Cherry, Palette } from "lucide-react";

export function ProdutosPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const produtos = [
    {
      id: 1,
      nome: "Brigadeiros Gourmet",
      descricao: "Brigadeiros artesanais com ingredientes premium, disponíveis em diversos sabores únicos.",
      imagem: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      categoria: "Docinhos",
      maisVendido: true,
      sabores: ["Tradicional", "Pistache", "Maracujá", "Nutella"]
    },
    {
      id: 2,
      nome: "Cupcakes Decorados",
      descricao: "Cupcakes personalizados com buttercream especial e decorações temáticas.",
      imagem: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop",
      categoria: "Cupcakes",
      maisVendido: true,
      sabores: ["Baunilha", "Chocolate", "Red Velvet", "Limão"]
    },
    {
      id: 3,
      nome: "Bolo de Aniversário",
      descricao: "Bolos personalizados para aniversários, com decorações exclusivas e sabores irresistíveis.",
      imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      categoria: "Bolos",
      maisVendido: false,
      sabores: ["Chocolate", "Morango", "Coco", "Prestígio"]
    },
    {
      id: 4,
      nome: "Macarons Franceses",
      descricao: "Delicados macarons franceses feitos com técnica tradicional e recheios especiais.",
      imagem: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      categoria: "Docinhos",
      maisVendido: true,
      sabores: ["Rosa", "Lavanda", "Chocolate", "Framboesa"]
    },
    {
      id: 5,
      nome: "Torta de Frutas",
      descricao: "Tortas artesanais com frutas frescas da estação e creme especial da casa.",
      imagem: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
      categoria: "Tortas",
      maisVendido: false,
      sabores: ["Morango", "Frutas Vermelhas", "Kiwi", "Manga"]
    },
    {
      id: 6,
      nome: "Brownies Premium",
      descricao: "Brownies úmidos e intensos, com chocolate belga e coberturas especiais.",
      imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      categoria: "Brownies",
      maisVendido: true,
      sabores: ["Tradicional", "Nozes", "Caramelo", "Doce de Leite"]
    },
    {
      id: 7,
      nome: "Cheesecake Artesanal",
      descricao: "Cheesecakes cremosos com base crocante e coberturas de frutas ou chocolate.",
      imagem: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
      categoria: "Tortas",
      maisVendido: false,
      sabores: ["Frutas Vermelhas", "Chocolate", "Limão", "Maracujá"]
    },
    {
      id: 8,
      nome: "Cookies Decorados",
      descricao: "Cookies artesanais decorados com glacê real, perfeitos para presentear.",
      imagem: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      categoria: "Cookies",
      maisVendido: false,
      sabores: ["Baunilha", "Chocolate", "Limão", "Canela"]
    },
    {
      id: 9,
      nome: "Docinhos de Festa",
      descricao: "Variedade de docinhos tradicionais brasileiros para festas e eventos especiais.",
      imagem: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      categoria: "Docinhos",
      maisVendido: true,
      sabores: ["Beijinho", "Cajuzinho", "Bicho de Pé", "Olho de Sogra"]
    }
  ];

  const categorias = ["Todos", "Docinhos", "Cupcakes", "Bolos", "Tortas", "Brownies", "Cookies"];
  
  const getCategoryColor = (categoria: string) => {
    const colors = {
      "Docinhos": "bg-candy-pink-vibrant",
      "Cupcakes": "bg-candy-purple-vibrant", 
      "Bolos": "bg-candy-blue-vibrant",
      "Tortas": "bg-candy-mint-vibrant",
      "Brownies": "bg-candy-peach-vibrant",
      "Cookies": "bg-candy-lavender-vibrant"
    };
    return colors[categoria as keyof typeof colors] || "bg-gray-400";
  };

  const filteredProducts = activeCategory === "Todos" 
    ? produtos 
    : produtos.filter(produto => produto.categoria === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-candy-pink/5 to-candy-purple/5">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-candy-pink-vibrant to-candy-purple-vibrant relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="bg-white/30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
            <Cake className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-20 right-20 animate-float animate-delay-300">
          <div className="bg-white/30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm">
            <Cherry className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animate-delay-500">
          <div className="bg-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <div className={`${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm animate-scale-in">
              <Crown className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">Produtos Artesanais</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-white">
                Nossa Deliciosa
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 bg-clip-text text-transparent">
                Coleção
              </span>
            </h1>
            
            <p className="text-white/95 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
              Descubra nossa ampla variedade de doces artesanais, criados com ingredientes 
              selecionados e técnicas tradicionais para proporcionar momentos únicos.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-r from-candy-mint-vibrant to-candy-blue-vibrant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <Filter className="h-4 w-4 text-white mr-2" />
              <span className="text-white text-sm font-semibold">Filtrar por Categoria</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((categoria, index) => (
              <Badge
                key={categoria}
                variant="secondary"
                onClick={() => setActiveCategory(categoria)}
                className={`px-6 py-3 rounded-full cursor-pointer transition-all-smooth hover-lift animate-scale-in animate-delay-${index * 100} ${
                  activeCategory === categoria 
                    ? "bg-white text-candy-mint-vibrant shadow-lg scale-105 font-semibold" 
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                {categoria}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Most Popular Section */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-3 mb-6">
                <Star className="h-5 w-5 text-yellow-600 mr-2 animate-pulse-soft" />
                <span className="text-yellow-800 font-semibold">Mais Vendidos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Favoritos dos Nossos Clientes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Os doces que conquistaram o coração e o paladar de quem já provou
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {produtos.filter(produto => produto.maisVendido).map((produto, index) => (
                <Card 
                  key={produto.id} 
                  className={`group hover:shadow-2xl transition-all-smooth overflow-hidden border-0 bg-white hover-lift hover-glow relative animate-scale-in animate-delay-${index * 150}`}
                >
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-yellow-500 text-white border-0 shadow-lg animate-pulse-soft">
                      <Star className="h-3 w-3 mr-1" />
                      Top
                    </Badge>
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all-smooth"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          className={`${getCategoryColor(produto.categoria)} text-white border-0 text-xs transition-all-smooth hover:scale-105`}
                        >
                          {produto.categoria}
                        </Badge>
                        <Heart className="h-4 w-4 text-gray-400 hover:text-candy-pink-vibrant cursor-pointer transition-colors-smooth hover:scale-125" />
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-candy-pink-vibrant transition-colors-smooth">
                        {produto.nome}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {produto.descricao}
                      </p>
                      
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 font-medium">Sabores disponíveis:</p>
                        <div className="flex flex-wrap gap-1">
                          {produto.sabores.slice(0, 3).map((sabor, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs border-candy-pink/30 text-gray-600 hover:border-candy-pink hover:bg-candy-pink/10 transition-all-smooth"
                            >
                              {sabor}
                            </Badge>
                          ))}
                          {produto.sabores.length > 3 && (
                            <Badge variant="outline" className="text-xs border-candy-pink/30 text-gray-600">
                              +{produto.sabores.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Products Section */}
          <div>
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {activeCategory === "Todos" ? "Toda Nossa Coleção" : `Categoria: ${activeCategory}`}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {activeCategory === "Todos" 
                  ? "Explore todos os nossos doces artesanais únicos"
                  : `Descubra nossa seleção especial de ${activeCategory.toLowerCase()}`
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((produto, index) => (
                <Card 
                  key={produto.id} 
                  className={`group hover:shadow-2xl transition-all-smooth overflow-hidden border-0 bg-white hover-lift hover-glow animate-scale-in animate-delay-${index * 100}`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all-smooth"></div>
                      
                      {produto.maisVendido && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500 text-white border-0 shadow-lg animate-pulse-soft">
                            <Star className="h-3 w-3 mr-1" />
                            Top
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          className={`${getCategoryColor(produto.categoria)} text-white border-0 text-xs transition-all-smooth hover:scale-105`}
                        >
                          {produto.categoria}
                        </Badge>
                        <Heart className="h-4 w-4 text-gray-400 hover:text-candy-pink-vibrant cursor-pointer transition-colors-smooth hover:scale-125" />
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-candy-pink-vibrant transition-colors-smooth">
                        {produto.nome}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {produto.descricao}
                      </p>
                      
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500 font-medium">Sabores disponíveis:</p>
                        <div className="flex flex-wrap gap-1">
                          {produto.sabores.slice(0, 3).map((sabor, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs border-candy-pink/30 text-gray-600 hover:border-candy-pink hover:bg-candy-pink/10 transition-all-smooth"
                            >
                              {sabor}
                            </Badge>
                          ))}
                          {produto.sabores.length > 3 && (
                            <Badge variant="outline" className="text-xs border-candy-pink/30 text-gray-600">
                              +{produto.sabores.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-candy-peach-vibrant to-candy-lavender-vibrant relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-10 right-10 animate-float">
          <div className="bg-white/30 rounded-full w-20 h-20 flex items-center justify-center backdrop-blur-sm">
            <Palette className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="absolute bottom-10 left-10 animate-float animate-delay-300">
          <div className="bg-white/30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm animate-scale-in">
              <Sparkles className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">Doces Personalizados</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Quer um Doce Único?
            </h2>
            
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
              Criamos doces únicos para ocasiões especiais. Entre em contato e vamos 
              transformar sua ideia em uma deliciosa realidade!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animate-delay-500">
              <div className="flex items-center bg-white/30 backdrop-blur-sm rounded-full px-6 py-4 hover:bg-white/40 transition-all-smooth hover-lift">
                <div className="bg-white/30 p-2 rounded-full mr-3">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/90 text-sm">Telefone</p>
                  <p className="text-white font-semibold">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center bg-white/30 backdrop-blur-sm rounded-full px-6 py-4 hover:bg-white/40 transition-all-smooth hover-lift">
                <div className="bg-white/30 p-2 rounded-full mr-3">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/90 text-sm">E-mail</p>
                  <p className="text-white font-semibold">contato@doceencanto.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}