// Main JavaScript for Doce Encanto Website

// State Management
let currentPage = 'home';
let isMenuOpen = false;
let isLoading = false;

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    produtos: document.getElementById('produtos-page'),
    sobre: document.getElementById('sobre-page')
};

const navButtons = {
    desktop: document.querySelectorAll('#desktop-menu .nav-button'),
    mobile: document.querySelectorAll('#mobile-menu .nav-button-mobile')
};

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

// Navigation Functions
function showPage(pageId) {
    if (isLoading || pageId === currentPage) return;
    
    isLoading = true;
    
    // Hide current page
    if (pages[currentPage]) {
        pages[currentPage].classList.remove('active');
        pages[currentPage].classList.add('page-transition');
    }
    
    // Show new page with delay for smooth transition
    setTimeout(() => {
        // Hide all pages
        Object.values(pages).forEach(page => {
            if (page) {
                page.classList.remove('active');
                page.classList.add('hidden');
            }
        });
        
        // Show target page
        if (pages[pageId]) {
            pages[pageId].classList.remove('hidden');
            pages[pageId].classList.add('active');
            pages[pageId].classList.remove('page-transition');
        }
        
        // Update navigation state
        updateNavigation(pageId);
        currentPage = pageId;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Load page content if needed
        loadPageContent(pageId);
        
        // Reinitialize animations
        initializeAnimations();
        
        isLoading = false;
    }, 100);
}

function updateNavigation(activePageId) {
    // Update desktop navigation
    navButtons.desktop.forEach(button => {
        const pageId = button.getAttribute('data-page');
        if (pageId === activePageId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update mobile navigation
    navButtons.mobile.forEach(button => {
        const pageId = button.getAttribute('data-page');
        if (pageId === activePageId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Page Content Loading
function loadPageContent(pageId) {
    switch (pageId) {
        case 'produtos':
            loadProductsPage();
            break;
        case 'sobre':
            loadAboutPage();
            break;
        default:
            break;
    }
}

function loadProductsPage() {
    const produtosPage = document.getElementById('produtos-page');
    if (!produtosPage || produtosPage.dataset.loaded) return;
    
    produtosPage.innerHTML = `
        <!-- Products Header -->
        <section class="py-20 section-candy-pink relative overflow-hidden">
            <!-- Floating decorations -->
            <div class="absolute top-10 left-10 animate-float hero-floating-element delay-1">
                <div class="bg-white-30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="cake" class="h-8 w-8 text-white"></i>
                </div>
            </div>
            <div class="absolute top-20 right-20 animate-float hero-floating-element delay-2">
                <div class="bg-white-30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="cherry" class="h-6 w-6 text-white"></i>
                </div>
            </div>
            <div class="absolute bottom-20 left-1/4 animate-float hero-floating-element delay-3">
                <div class="bg-white-30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="sparkles" class="h-5 w-5 text-white"></i>
                </div>
            </div>
            
            <div class="container mx-auto px-4 text-center">
                <div class="animate-fade-in">
                    <div class="inline-flex items-center bg-white-30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm animate-scale-in">
                        <i data-lucide="crown" class="h-5 w-5 text-white mr-2"></i>
                        <span class="text-white font-semibold">Produtos Artesanais</span>
                    </div>
                    
                    <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
                        <span class="text-white">
                            Nossa Deliciosa
                        </span>
                        <br />
                        <span class="gradient-text-yellow-orange">
                            Coleção
                        </span>
                    </h1>
                    
                    <p class="text-white-95 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
                        Descubra nossa ampla variedade de doces artesanais, criados com ingredientes 
                        selecionados e técnicas tradicionais para proporcionar momentos únicos.
                    </p>
                </div>
            </div>
        </section>

        <!-- Category Filter -->
        <section class="py-12 section-candy-mint">
            <div class="container mx-auto px-4">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center bg-white-30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
                        <i data-lucide="filter" class="h-4 w-4 text-white mr-2"></i>
                        <span class="text-white text-sm font-semibold">Filtrar por Categoria</span>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center gap-3" id="category-filters">
                    ${['Todos', 'Docinhos', 'Cupcakes', 'Bolos', 'Tortas', 'Brownies', 'Cookies'].map((categoria, index) => `
                        <button class="filter-button ${categoria === 'Todos' ? 'active' : ''}" 
                                data-category="${categoria}" 
                                onclick="filterProducts('${categoria}')"
                                style="animation-delay: ${index * 0.1}s">
                            ${categoria}
                        </button>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Products Grid -->
        <section class="py-20 bg-gradient-to-br from-white via-candy-pink-20 to-candy-purple-20">
            <div class="container mx-auto px-4">
                <!-- Most Popular Section -->
                <div class="mb-20">
                    <div class="text-center mb-12 animate-fade-in">
                        <div class="inline-flex items-center bg-yellow-100 rounded-full px-6 py-3 mb-6">
                            <i data-lucide="star" class="h-5 w-5 text-yellow-600 mr-2 animate-pulse-soft"></i>
                            <span class="text-yellow-800 font-semibold">Mais Vendidos</span>
                        </div>
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Favoritos dos Nossos Clientes
                        </h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            Os doces que conquistaram o coração e o paladar de quem já provou
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="popular-products">
                        <!-- Popular products will be loaded here -->
                    </div>
                </div>

                <!-- All Products Section -->
                <div>
                    <div class="text-center mb-12 animate-fade-in">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4" id="products-section-title">
                            Toda Nossa Coleção
                        </h2>
                        <p class="text-gray-600 max-w-2xl mx-auto" id="products-section-description">
                            Explore todos os nossos doces artesanais únicos
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="all-products">
                        <!-- All products will be loaded here -->
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 section-candy-peach relative overflow-hidden">
            <div class="absolute top-10 right-10 animate-float">
                <div class="bg-white-30 rounded-full w-20 h-20 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="palette" class="h-10 w-10 text-white"></i>
                </div>
            </div>
            <div class="absolute bottom-10 left-10 animate-float animate-delay-300">
                <div class="bg-white-30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="heart" class="h-8 w-8 text-white"></i>
                </div>
            </div>
            
            <div class="container mx-auto px-4 text-center">
                <div class="max-w-4xl mx-auto">
                    <div class="inline-flex items-center bg-white-30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm animate-scale-in">
                        <i data-lucide="sparkles" class="h-5 w-5 text-white mr-2"></i>
                        <span class="text-white font-semibold">Doces Personalizados</span>
                    </div>
                    
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
                        Quer um Doce Único?
                    </h2>
                    
                    <p class="text-white-95 text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
                        Criamos doces únicos para ocasiões especiais. Entre em contato e vamos 
                        transformar sua ideia em uma deliciosa realidade!
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animate-delay-500">
                        <div class="cta-contact-item">
                            <div class="cta-icon">
                                <i data-lucide="sparkles" class="h-5 w-5 text-white"></i>
                            </div>
                            <div class="text-left">
                                <p class="text-white-90 text-sm">Telefone</p>
                                <p class="text-white font-semibold">(11) 99999-9999</p>
                            </div>
                        </div>
                        <div class="cta-contact-item">
                            <div class="cta-icon">
                                <i data-lucide="heart" class="h-5 w-5 text-white"></i>
                            </div>
                            <div class="text-left">
                                <p class="text-white-90 text-sm">E-mail</p>
                                <p class="text-white font-semibold">contato@doceencanto.com.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    produtosPage.dataset.loaded = 'true';
    
    // Load products data
    loadProductsData();
    
    // Reinitialize icons
    lucide.createIcons();
}

function loadAboutPage() {
    const sobrePage = document.getElementById('sobre-page');
    if (!sobrePage || sobrePage.dataset.loaded) return;
    
    sobrePage.innerHTML = `
        <!-- Hero Section -->
        <section class="py-20 section-candy-pink relative overflow-hidden">
            <div class="absolute top-10 left-10 animate-float hero-floating-element delay-1">
                <div class="bg-white-30 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="heart" class="h-8 w-8 text-white"></i>
                </div>
            </div>
            <div class="absolute top-20 right-20 animate-float hero-floating-element delay-2">
                <div class="bg-white-30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="sparkles" class="h-6 w-6 text-white"></i>
                </div>
            </div>
            <div class="absolute bottom-20 left-1/4 animate-float hero-floating-element delay-3">
                <div class="bg-white-30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="award" class="h-5 w-5 text-white"></i>
                </div>
            </div>
            
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6 animate-slide-in-left">
                        <div class="inline-flex items-center bg-white-30 rounded-full px-6 py-3 backdrop-blur-sm animate-scale-in">
                            <i data-lucide="heart" class="h-5 w-5 text-white mr-2 animate-pulse-soft"></i>
                            <span class="text-white font-semibold">Nossa História</span>
                        </div>
                        
                        <h1 class="text-4xl md:text-6xl font-bold animate-slide-up animate-delay-200">
                            <span class="text-white">
                                Doce Encanto
                            </span>
                            <br />
                            <span class="gradient-text-yellow-orange">
                                Uma História de Amor
                            </span>
                        </h1>
                        
                        <p class="text-white-95 text-lg leading-relaxed animate-fade-in animate-delay-400">
                            Há mais de 15 anos criamos momentos especiais através dos nossos doces artesanais. 
                            Nossa paixão pela confeitaria começou na cozinha de casa e hoje se transformou 
                            em uma das confeitarias mais queridas da cidade.
                        </p>
                    </div>
                    
                    <div class="relative animate-slide-in-right animate-delay-200">
                        <div class="bg-white-20 backdrop-blur-sm rounded-3xl p-8 hover-glow transition-all-smooth">
                            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop"
                                 alt="Interior acolhedor da confeitaria"
                                 class="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform-smooth hover:scale-105"
                                 loading="lazy">
                        </div>
                        <!-- Decorative elements -->
                        <div class="absolute -top-4 -right-4 bg-candy-peach rounded-full w-16 h-16 flex items-center justify-center animate-bounce-gentle">
                            <i data-lucide="heart" class="h-8 w-8 text-white"></i>
                        </div>
                        <div class="absolute -bottom-4 -left-4 bg-candy-mint rounded-full w-12 h-12 flex items-center justify-center animate-bounce-gentle animate-delay-300">
                            <i data-lucide="sparkles" class="h-6 w-6 text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Story Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div class="space-y-6 animate-slide-in-left">
                            <div class="inline-flex items-center bg-candy-pink-20 rounded-full px-4 py-2">
                                <i data-lucide="coffee" class="h-4 w-4 text-candy-pink mr-2"></i>
                                <span class="text-sm text-gray-700">Nossos Início</span>
                            </div>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                                Como Tudo Começou
                            </h2>
                            <p class="text-gray-600 leading-relaxed">
                                A história da Doce Encanto começou em 2008, quando Maria Elena decidiu 
                                transformar sua paixão pela confeitaria em um negócio familiar. O que 
                                começou como uma pequena produção caseira para amigos e vizinhos, 
                                rapidamente se tornou uma referência em doces artesanais.
                            </p>
                            <p class="text-gray-600 leading-relaxed">
                                Com receitas transmitidas por gerações e a constante busca pela 
                                excelência, nossa confeitaria cresceu mantendo sempre os valores 
                                familiares e o compromisso com a qualidade.
                            </p>
                        </div>
                        <div class="relative animate-slide-in-right">
                            <img src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop"
                                 alt="Primeira confeitaria"
                                 class="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow-smooth hover:scale-105 transition-transform-smooth"
                                 loading="lazy">
                            <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg hover-lift transition-all-smooth">
                                <div class="flex items-center space-x-2">
                                    <i data-lucide="clock" class="h-5 w-5 text-candy-purple"></i>
                                    <span class="text-sm font-semibold text-gray-700">Desde 2008</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-16 items-center">
                        <div class="relative order-2 md:order-1 animate-slide-in-left">
                            <img src="https://images.unsplash.com/photo-1556909114-4f5b7e98b33c?w=500&h=400&fit=crop"
                                 alt="Ateliê de confeitaria"
                                 class="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow-smooth hover:scale-105 transition-transform-smooth"
                                 loading="lazy">
                            <div class="absolute -top-4 -left-4 bg-candy-pink-20 backdrop-blur-sm p-4 rounded-2xl hover-lift transition-all-smooth">
                                <i data-lucide="users" class="h-8 w-8 text-candy-pink"></i>
                            </div>
                        </div>
                        <div class="space-y-6 order-1 md:order-2 animate-slide-in-right">
                            <div class="inline-flex items-center bg-candy-purple-20 rounded-full px-4 py-2">
                                <i data-lucide="camera" class="h-4 w-4 text-candy-purple mr-2"></i>
                                <span class="text-sm text-gray-700">Nosso Espaço</span>
                            </div>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                                Nosso Ateliê
                            </h2>
                            <p class="text-gray-600 leading-relaxed">
                                Hoje, nossa confeitaria conta com um ateliê moderno e equipado, 
                                onde cada doce é preparado com técnicas artesanais e ingredientes 
                                cuidadosamente selecionados. Nosso espaço foi pensado para 
                                proporcionar a melhor experiência tanto para nossa equipe quanto 
                                para nossos clientes.
                            </p>
                            <p class="text-gray-600 leading-relaxed">
                                Mantemos a tradição das receitas familiares enquanto incorporamos 
                                inovações e novas técnicas, sempre com o objetivo de surpreender 
                                e encantar nossos clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-20 section-candy-blue">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16 animate-fade-in">
                    <div class="inline-flex items-center bg-white-30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                        <i data-lucide="sparkles" class="h-5 w-5 text-white mr-2"></i>
                        <span class="text-white font-semibold">Nossos Valores</span>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                        O que Nos Move
                    </h2>
                    <p class="text-white-95 text-lg max-w-2xl mx-auto">
                        Os princípios que guiam nosso trabalho e nossa paixão pela confeitaria artesanal
                    </p>
                </div>
                
                <div class="values-grid" id="values-grid">
                    <!-- Values will be loaded here -->
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <div class="inline-flex items-center bg-candy-purple-20 rounded-full px-6 py-3 mb-8 animate-scale-in">
                        <i data-lucide="target" class="h-5 w-5 text-candy-purple mr-2"></i>
                        <span class="text-sm font-medium text-gray-700">Nossa Missão</span>
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-slide-up">
                        Criando Momentos Especiais
                    </h2>
                    
                    <p class="text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in animate-delay-300">
                        Nossa missão é criar doces que não apenas satisfazem o paladar, mas também 
                        despertam emoções e criam memórias afetivas. Acreditamos que cada doce pode 
                        ser uma forma de expressar carinho, celebrar conquistas e tornar momentos 
                        ordinários em extraordinários.
                    </p>
                    
                    <div class="bg-gradient-to-r from-candy-pink-20 to-candy-purple-20 rounded-2xl p-8 hover-glow transition-all-smooth animate-scale-in animate-delay-500">
                        <blockquote class="text-xl italic text-gray-700 mb-4">
                            "Nosso maior prazer é ver o sorriso das pessoas ao provarem nossos doces. 
                            Cada receita carrega não apenas ingredientes, mas também amor, tradição e 
                            a alegria de fazer parte dos momentos mais doces da vida de nossos clientes."
                        </blockquote>
                        <p class="text-candy-purple font-semibold">
                            - Maria Elena, Fundadora
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-20 section-candy-peach">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16 animate-fade-in">
                    <div class="inline-flex items-center bg-white-30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                        <i data-lucide="users" class="h-5 w-5 text-white mr-2"></i>
                        <span class="text-white font-semibold">Nossa Equipe</span>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                        Talentos Doces
                    </h2>
                    <p class="text-white-95 text-lg max-w-2xl mx-auto">
                        Conheça os talentos por trás dos nossos doces artesanais
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" id="team-grid">
                    <!-- Team members will be loaded here -->
                </div>
            </div>
        </section>

        <!-- Contact CTA -->
        <section class="py-20 section-candy-pink">
            <div class="container mx-auto px-4 text-center">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
                        Vamos Conversar?
                    </h2>
                    <p class="text-white-95 text-lg mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-300">
                        Ficou com alguma dúvida ou quer conhecer mais sobre nossa história? 
                        Adoraríamos conversar com você!
                    </p>
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animate-delay-500">
                        <div class="cta-contact-item">
                            <div class="cta-icon">
                                <i data-lucide="heart" class="h-5 w-5 text-white"></i>
                            </div>
                            <div class="text-left">
                                <p class="text-white-90 text-sm">Feito com amor</p>
                                <p class="text-white font-semibold">desde 2008</p>
                            </div>
                        </div>
                        <div class="cta-contact-item">
                            <div class="cta-icon">
                                <i data-lucide="award" class="h-5 w-5 text-white"></i>
                            </div>
                            <div class="text-left">
                                <p class="text-white-90 text-sm">Qualidade</p>
                                <p class="text-white font-semibold">artesanal garantida</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    sobrePage.dataset.loaded = 'true';
    
    // Load about page data
    loadAboutData();
    
    // Reinitialize icons
    lucide.createIcons();
}

// Products Data and Functions
const productsData = [
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

const valuesData = [
    {
        icon: "heart",
        titulo: "Amor em Cada Doce",
        descricao: "Colocamos carinho e dedicação em cada receita, criando doces que tocam o coração."
    },
    {
        icon: "award",
        titulo: "Qualidade Premium",
        descricao: "Utilizamos apenas ingredientes selecionados e técnicas artesanais tradicionais."
    },
    {
        icon: "users",
        titulo: "Família e Tradição",
        descricao: "Receitas passadas de geração em geração, mantendo a tradição familiar viva."
    },
    {
        icon: "sparkles",
        titulo: "Criatividade",
        descricao: "Inovamos constantemente, criando sabores únicos e apresentações encantadoras."
    }
];

const teamData = [
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

let activeCategory = 'Todos';

function getCategoryColor(categoria) {
    const colors = {
        "Docinhos": "badge-docinhos",
        "Cupcakes": "badge-cupcakes", 
        "Bolos": "badge-bolos",
        "Tortas": "badge-tortas",
        "Brownies": "badge-brownies",
        "Cookies": "badge-cookies"
    };
    return colors[categoria] || "badge-primary";
}

function createProductCard(produto, index) {
    return `
        <div class="product-card animate-scale-in" style="animation-delay: ${index * 0.15}s">
            ${produto.maisVendido ? `
                <div class="product-badge">
                    <i data-lucide="star" class="h-3 w-3"></i>
                    Top
                </div>
            ` : ''}
            
            <div class="p-0">
                <div class="relative overflow-hidden">
                    <img src="${produto.imagem}"
                         alt="${produto.nome}"
                         class="product-image"
                         loading="lazy">
                    <div class="product-overlay"></div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="badge ${getCategoryColor(produto.categoria)}">
                            ${produto.categoria}
                        </span>
                        <i data-lucide="heart" class="heart-icon h-4 w-4"></i>
                    </div>
                    
                    <h3 class="font-semibold text-gray-800 mb-3 group-hover:text-candy-purple-vibrant transition-colors-smooth">
                        ${produto.nome}
                    </h3>
                    
                    <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                        ${produto.descricao}
                    </p>
                    
                    <div class="space-y-3">
                        <p class="text-xs text-gray-500 font-medium">Sabores disponíveis:</p>
                        <div class="flex flex-wrap gap-1">
                            ${produto.sabores.slice(0, 3).map(sabor => `
                                <span class="badge badge-outline">
                                    ${sabor}
                                </span>
                            `).join('')}
                            ${produto.sabores.length > 3 ? `
                                <span class="badge badge-outline">
                                    +${produto.sabores.length - 3}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadProductsData() {
    const popularProducts = document.getElementById('popular-products');
    const allProducts = document.getElementById('all-products');
    
    if (popularProducts) {
        const popularData = productsData.filter(produto => produto.maisVendido);
        popularProducts.innerHTML = popularData.map((produto, index) => createProductCard(produto, index)).join('');
    }
    
    if (allProducts) {
        allProducts.innerHTML = productsData.map((produto, index) => createProductCard(produto, index)).join('');
    }
    
    // Reinitialize icons after loading products
    lucide.createIcons();
}

function filterProducts(categoria) {
    activeCategory = categoria;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        if (button.dataset.category === categoria) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Filter products
    const filteredProducts = categoria === 'Todos' 
        ? productsData 
        : productsData.filter(produto => produto.categoria === categoria);
    
    // Update section title and description
    const sectionTitle = document.getElementById('products-section-title');
    const sectionDescription = document.getElementById('products-section-description');
    
    if (sectionTitle) {
        sectionTitle.textContent = categoria === 'Todos' ? 'Toda Nossa Coleção' : `Categoria: ${categoria}`;
    }
    
    if (sectionDescription) {
        sectionDescription.textContent = categoria === 'Todos' 
            ? 'Explore todos os nossos doces artesanais únicos'
            : `Descubra nossa seleção especial de ${categoria.toLowerCase()}`;
    }
    
    // Update products grid
    const allProducts = document.getElementById('all-products');
    if (allProducts) {
        allProducts.innerHTML = filteredProducts.map((produto, index) => createProductCard(produto, index)).join('');
        lucide.createIcons();
    }
}

function loadAboutData() {
    // Load values
    const valuesGrid = document.getElementById('values-grid');
    if (valuesGrid) {
        valuesGrid.innerHTML = valuesData.map((valor, index) => `
            <div class="value-card animate-scale-in animate-delay-${index * 200}">
                <div class="value-icon">
                    <i data-lucide="${valor.icon}" class="h-8 w-8 text-white"></i>
                </div>
                <h3 class="font-semibold text-gray-800 mb-3">
                    ${valor.titulo}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    ${valor.descricao}
                </p>
            </div>
        `).join('');
    }
    
    // Load team
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = teamData.map((membro, index) => `
            <div class="team-member animate-scale-in animate-delay-${(index + 1) * 200}">
                <div class="relative mb-6">
                    <img src="${membro.imagem}"
                         alt="${membro.nome}"
                         class="team-avatar"
                         loading="lazy">
                    <div class="team-badge">
                        <i data-lucide="heart" class="h-4 w-4 text-white"></i>
                    </div>
                </div>
                
                <h3 class="font-semibold text-gray-800 mb-2">
                    ${membro.nome}
                </h3>
                
                <p class="text-candy-purple font-medium mb-3">
                    ${membro.cargo}
                </p>
                
                <p class="text-gray-600 text-sm leading-relaxed">
                    ${membro.descricao}
                </p>
            </div>
        `).join('');
    }
    
    lucide.createIcons();
}

// Form Handling
function initializeFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const nome = formData.get('nome');
            const email = formData.get('email');
            const mensagem = formData.get('mensagem');
            
            // Simulate form submission
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Animation Utilities
function initializeAnimations() {
    // Initialize intersection observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    }
}

// Image Loading
function initializeImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    updateNavigation(currentPage);
    
    // Initialize form handling
    initializeFormHandling();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize image loading
    initializeImageLoading();
    
    // Initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Export functions for global access
window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.filterProducts = filterProducts;