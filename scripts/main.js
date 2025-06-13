// =================================
// DOCE ENCANTO - JAVASCRIPT PRINCIPAL
// =================================

// Dados dos produtos
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
    }
];

// Dados dos valores da empresa
const valuesData = [
    { 
        titulo: "Amor em Cada Doce", 
        descricao: "Colocamos carinho e dedicação em cada receita.", 
        icon: '<svg class="icon" fill="white" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>'
    },
    { 
        titulo: "Qualidade Premium", 
        descricao: "Utilizamos apenas ingredientes selecionados.", 
        icon: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>'
    },
    { 
        titulo: "Família e Tradição", 
        descricao: "Receitas passadas de geração em geração.", 
        icon: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3m-5.5-2.5A4.5 4.5 0 1 1 21 8a4.5 4.5 0 0 1-7.5 7.5"/></svg>'
    },
    { 
        titulo: "Criatividade", 
        descricao: "Inovamos constantemente em sabores únicos.", 
        icon: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>'
    }
];

// Dados da equipe
const teamData = [
    { 
        nome: "Maria Elena", 
        cargo: "Confeiteira Chefe & Fundadora", 
        descricao: "30 anos de experiência", 
        imagem: "https://images.unsplash.com/photo-1494790108755-2616b612b510?w=300&h=400&fit=crop" 
    },
    { 
        nome: "João Silva", 
        cargo: "Confeiteiro Especialista", 
        descricao: "Expert em bolos decorados", 
        imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" 
    },
    { 
        nome: "Ana Carolina", 
        cargo: "Designer de Bolos", 
        descricao: "Especialista em decorações", 
        imagem: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop" 
    }
];

// Estado do filtro de produtos
let activeCategory = 'Todos';

// =================================
// FUNÇÕES DE NAVEGAÇÃO
// =================================

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        mobileMenu.classList.add('hidden');
    }
}

// =================================
// FUNÇÕES DE PRODUTOS
// =================================

function getCategoryClass(categoria) {
    const classes = {
        "Docinhos": "category-docinhos",
        "Cupcakes": "category-cupcakes", 
        "Bolos": "category-bolos",
        "Tortas": "category-tortas",
        "Brownies": "category-brownies",
        "Cookies": "category-cookies"
    };
    return classes[categoria] || "category-docinhos";
}

function createProductCard(produto) {
    return `
        <div class="product-card">
            ${produto.maisVendido ? `
                <div class="product-badge">
                    <svg class="icon-sm" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                    Top
                </div>
            ` : ''}
            
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}" class="product-img">
                <div class="product-overlay"></div>
            </div>
            
            <div class="product-content">
                <div class="product-header">
                    <span class="category-badge ${getCategoryClass(produto.categoria)}">
                        ${produto.categoria}
                    </span>
                    <svg class="heart-icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                    </svg>
                </div>
                
                <h3 class="product-title">${produto.nome}</h3>
                
                <p class="product-description">${produto.descricao}</p>
                
                <div class="flavors-section">
                    <p class="flavors-label">Sabores disponíveis:</p>
                    <div class="flavors-list">
                        ${produto.sabores.slice(0, 3).map(sabor => `
                            <span class="flavor-badge">${sabor}</span>
                        `).join('')}
                        ${produto.sabores.length > 3 ? `
                            <span class="flavor-badge">+${produto.sabores.length - 3}</span>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadProducts() {
    const popularProducts = document.getElementById('popular-products');
    const allProducts = document.getElementById('all-products');
    
    if (popularProducts) {
        const popularData = productsData.filter(produto => produto.maisVendido);
        popularProducts.innerHTML = popularData.map(produto => createProductCard(produto)).join('');
    }
    
    if (allProducts) {
        allProducts.innerHTML = productsData.map(produto => createProductCard(produto)).join('');
    }
}

function loadCategoryFilters() {
    const categorias = ['Todos', 'Docinhos', 'Cupcakes', 'Bolos', 'Tortas', 'Brownies', 'Cookies'];
    const filtersContainer = document.getElementById('category-filters');
    
    if (!filtersContainer) return;
    
    filtersContainer.innerHTML = categorias.map(categoria => `
        <button class="filter-button ${categoria === 'Todos' ? 'active' : ''}" 
                data-category="${categoria}" 
                onclick="filterProducts('${categoria}')">
            ${categoria}
        </button>
    `).join('');
}

function filterProducts(categoria) {
    activeCategory = categoria;
    
    // Atualizar botões de filtro
    document.querySelectorAll('.filter-button').forEach(button => {
        if (button.dataset.category === categoria) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Filtrar produtos
    const filteredProducts = categoria === 'Todos' 
        ? productsData 
        : productsData.filter(produto => produto.categoria === categoria);
    
    // Atualizar títulos
    const title = document.getElementById('products-title');
    const description = document.getElementById('products-description');
    
    if (title) {
        title.textContent = categoria === 'Todos' ? 'Toda Nossa Coleção' : `Categoria: ${categoria}`;
    }
    
    if (description) {
        description.textContent = categoria === 'Todos' 
            ? 'Explore todos os nossos doces artesanais únicos'
            : `Descubra nossa seleção especial de ${categoria.toLowerCase()}`;
    }
    
    // Atualizar grid de produtos
    const allProducts = document.getElementById('all-products');
    if (allProducts) {
        allProducts.innerHTML = filteredProducts.map(produto => createProductCard(produto)).join('');
    }
}

// =================================
// FUNÇÕES DA PÁGINA SOBRE
// =================================

function loadAboutData() {
    // Carregar valores
    const valuesGrid = document.getElementById('values-grid');
    if (valuesGrid) {
        valuesGrid.innerHTML = valuesData.map(valor => `
            <div class="card hover-lift">
                <div class="card-content">
                    <div style="text-align: center; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(4px); border-radius: 1rem; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); transition: all 0.4s ease;">
                        <div style="background: linear-gradient(135deg, var(--candy-pink-vibrant), var(--candy-purple-vibrant)); padding: 1rem; border-radius: 50%; width: 4rem; height: 4rem; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
                            ${valor.icon}
                        </div>
                        <h3 style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.75rem;">${valor.titulo}</h3>
                        <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.5;">${valor.descricao}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Carregar equipe
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = teamData.map(membro => `
            <div class="card hover-lift">
                <div class="card-content">
                    <div style="text-align: center; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(4px); border-radius: 1rem; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); transition: all 0.4s ease;">
                        <div style="position: relative; margin-bottom: 1.5rem;">
                            <img src="${membro.imagem}" alt="${membro.nome}" style="width: 8rem; height: 8rem; object-fit: cover; border-radius: 50%; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                            <div style="position: absolute; bottom: -0.5rem; right: -0.5rem; background: var(--candy-pink); border-radius: 50%; padding: 0.5rem; font-size: 1rem;">
                                <svg class="icon-sm" fill="white" viewBox="0 0 24 24">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 style="font-weight: 600; color: var(--gray-800); margin-bottom: 0.5rem;">${membro.nome}</h3>
                        <p style="color: var(--candy-purple); font-weight: 500; margin-bottom: 0.75rem;">${membro.cargo}</p>
                        <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.5;">${membro.descricao}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// =================================
// MANIPULAÇÃO DE FORMULÁRIO
// =================================

function initializeFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve. 💕');
            contactForm.reset();
        });
    }
}

// =================================
// INICIALIZAÇÃO
// =================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar formulários
    initializeFormHandling();
    
    // Carregar dados específicos da página
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('produtos.html')) {
        loadCategoryFilters();
        loadProducts();
    } else if (currentPage.includes('sobre.html')) {
        loadAboutData();
    }
});

// Expor funções globalmente
window.toggleMobileMenu = toggleMobileMenu;
window.filterProducts = filterProducts;