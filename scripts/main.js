// =================================
// DOCE ENCANTO - JAVASCRIPT PRINCIPAL
// =================================

// Dados dos produtos
const productsData = [
  {
    id: 1,
    nome: "Brigadeiros Gourmet",
    descricao:
      "Brigadeiros artesanais com ingredientes premium, disponíveis em diversos sabores únicos.",
    imagem: "/img/doces/brigadeiro.JPG",
    categoria: "Docinhos",
    maisVendido: false,
    sabores: ["Tradicional", "Pistache", "Maracujá", "Nutella"],
  },
  {
    id: 2,
    nome: "Cupcakes Decorados",
    descricao:
      "Cupcakes personalizados com buttercream especial e decorações temáticas.",
    imagem: "/img/doces/cuperson.JPG",
    categoria: "Cupcakes",
    maisVendido: true,
    sabores: ["Baunilha", "Chocolate", "Red Velvet", "Limão"],
  },
  {
    id: 3,
    nome: "Bolo de Aniversário",
    descricao:
      "Bolos personalizados para aniversários, com decorações exclusivas e sabores irresistíveis.",
    imagem: "/img/doces/bolo1.JPG",
    categoria: "Bolos",
    maisVendido: false,
    sabores: ["Chocolate", "Morango", "Coco", "Prestígio"],
  },
  {
    id: 4,
    nome: "Macarons Franceses",
    descricao:
      "Delicados macarons franceses feitos com técnica tradicional e recheios especiais.",
    imagem: "/img/doces/macarrom.JPG",
    categoria: "Docinhos",
    maisVendido: true,
    sabores: ["Rosa", "Lavanda", "Chocolate", "Framboesa"],
  },
  {
    id: 5,
    nome: "Torta de Frutas",
    descricao:
      "Tortas artesanais com frutas frescas da estação e creme especial da casa.",
    imagem: "/img/doces/fruta.JPG",
    categoria: "Tortas",
    maisVendido: false,
    sabores: ["Morango", "Frutas Vermelhas", "Kiwi", "Manga"],
  },
  {
    id: 6,
    nome: "Brownies Premium",
    descricao:
      "Brownies úmidos e intensos, com chocolate belga e coberturas especiais.",
    imagem: "/img/doces/brownie.JPG",
    categoria: "Brownies",
    maisVendido: true,
    sabores: ["Tradicional", "Nozes", "Caramelo", "Doce de Leite"],
  },
];

// Dados dos valores da empresa
const valuesData = [
  {
    titulo: "Amor em Cada Doce",
    descricao: "Colocamos carinho e dedicação em cada receita.",
    icon: '<svg width="18" height="18" viewBox="0 0 11 10" fill="none"><path d="M5.86169 9.90602C5.80411 9.94499 5.7362 9.96582 5.66669 9.96582C5.59718 9.96582 5.52926 9.94499 5.47169 9.90602C4.54869 9.2892 0.666687 6.54426 0.666687 3.9544C0.666687 0.61265 4.59169 0.0773694 5.66669 2.32855C6.74169 0.0773694 10.6667 0.61265 10.6667 3.9544C10.6667 6.54476 6.78469 9.2892 5.86169 9.90502V9.90602Z"fill="currentColor"/></svg>',
  },
  {
    titulo: "Qualidade Premium",
    descricao: "Utilizamos apenas ingredientes selecionados.",
    icon: '<svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 0C15.8798 0 16.1184 0.114235 16.2753 0.306491L16.3373 0.393562L19.879 6.12082C20.0463 6.39148 20.0383 6.72947 19.8663 6.99014L19.8028 7.07393L10.6362 17.7103C10.3255 18.0708 9.77642 18.0948 9.43392 17.7825L9.36384 17.7103L0.197185 7.07393C-0.0111399 6.83223 -0.0568148 6.49719 0.0717102 6.21336L0.121019 6.12082L3.66269 0.393562C3.7949 0.179747 4.01819 0.03879 4.267 0.00688909L4.37501 0H15.625ZM12.9292 7.36364H7.07L9.99917 14.4589L12.9292 7.36364ZM17.37 7.36364H14.7275L12.2967 13.2505L17.37 7.36364ZM5.27167 7.36364H2.62917L7.70167 13.2488L5.27167 7.36364ZM6.395 1.63637H4.84251L2.3125 5.72728H5.20417L6.395 1.63637ZM11.8717 1.63637H8.1275L6.93667 5.72728H13.0625L11.8717 1.63637ZM15.1567 1.63637H13.6042L14.795 5.72728H17.6867L15.1567 1.63637Z" fill="#currentColor"/></svg>',
  },
  {
    titulo: "Família e Tradição",
    descricao: "Receitas passadas de geração em geração.",
    icon: '<svg width="20" height="17" viewBox="0 0 20 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.33396 15.9224C8.33362 16.299 8.4305 16.6697 8.61564 17H1.60035C1.17622 16.999 0.769746 16.8337 0.469838 16.5403C0.16993 16.2469 0.00100071 15.8492 0 15.4342V13.0861C0.00299958 12.049 0.425417 11.0552 1.17496 10.3219C1.9245 9.58852 2.94024 9.17522 4.00025 9.17229H10.9195C11.066 9.65168 11.3048 10.0993 11.6231 10.4909C10.7035 10.6455 9.86918 11.113 9.26742 11.8107C8.66566 12.5085 8.33507 13.3917 8.33396 14.3047V15.9224ZM7.6001 7.99826C6.79169 7.99826 6.00143 7.76371 5.32926 7.32428C4.65709 6.88485 4.1332 6.26027 3.82383 5.52953C3.51446 4.79878 3.43352 3.99469 3.59123 3.21894C3.74895 2.44318 4.13823 1.73061 4.70987 1.17132C5.2815 0.612031 6.00981 0.231151 6.80269 0.0768439C7.59557 -0.0774633 8.41741 0.00173287 9.16428 0.304417C9.91116 0.607102 10.5495 1.11968 10.9987 1.77733C11.4478 2.43499 11.6875 3.20818 11.6875 3.99913C11.6875 5.05976 11.2569 6.07696 10.4903 6.82694C9.7238 7.57692 8.68415 7.99826 7.6001 7.99826ZM20 15.9224C19.999 16.2079 19.8826 16.4814 19.6763 16.6833C19.47 16.8852 19.1904 16.999 18.8986 17H10.6353C10.3435 16.999 10.064 16.8852 9.85762 16.6833C9.65128 16.4814 9.53491 16.2079 9.53391 15.9224V14.3047C9.53625 13.5909 9.8271 12.9069 10.343 12.4022C10.8589 11.8974 11.5579 11.6129 12.2875 11.6106H17.2452C17.9747 11.6129 18.6738 11.8974 19.1897 12.4022C19.7056 12.9069 19.9964 13.5909 19.9987 14.3047L20 15.9224ZM17.5812 8.04769C17.5812 8.59226 17.4161 9.12461 17.1069 9.57741C16.7976 10.0302 16.3581 10.3831 15.8439 10.5915C15.3297 10.7999 14.7638 10.8544 14.2179 10.7482C13.672 10.642 13.1706 10.3797 12.777 9.99465C12.3834 9.60958 12.1154 9.11897 12.0068 8.58485C11.8982 8.05074 11.954 7.49712 12.167 6.994C12.38 6.49088 12.7407 6.06086 13.2035 5.75831C13.6663 5.45576 14.2104 5.29427 14.767 5.29427C15.5133 5.29427 16.2291 5.58436 16.7569 6.10073C17.2847 6.6171 17.5812 7.31744 17.5812 8.04769Z" fill="currentColor"/></svg>',
  },
  {
    titulo: "Criatividade",
    descricao: "Inovamos constantemente em sabores únicos.",
    icon: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
  },
];

// Dados da equipe
const teamData = [
  {
    nome: "Maria Elena",
    cargo: "Confeiteira Chefe & Fundadora",
    descricao: "30 anos de experiência",
    imagem: "/img/hero/foto1.JPG",
  },
  {
    nome: "João Silva",
    cargo: "Confeiteiro Especialista",
    descricao: "Expert em bolos decorados",
    imagem: "/img/hero/foto2.JPG",
  },
  {
    nome: "Ana Carolina",
    cargo: "Designer de Bolos",
    descricao: "Especialista em decorações",
    imagem:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
  },
];

// Estado do filtro de produtos
let activeCategory = "Todos";

// =================================
// FUNÇÕES DE NAVEGAÇÃO
// =================================

function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  document.getElementById("menu-icon").classList.toggle("hidden");
  document.getElementById("close-icon").classList.toggle("hidden");
}

// =================================
// FUNÇÕES DE PRODUTOS
// =================================

function getCategoryClass(categoria) {
  const classes = {
    Docinhos: "category-docinhos",
    Cupcakes: "category-cupcakes",
    Bolos: "category-bolos",
    Tortas: "category-tortas",
    Brownies: "category-brownies",
    Cookies: "category-cookies",
  };
  return classes[categoria] || "category-docinhos";
}

function createProductCard(produto) {
  return `
        <div class="product-card">
            ${
              produto.maisVendido
                ? `
                <div class="product-badge">
                    <svg class="icon-sm" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                    Top
                </div>
            `
                : ""
            }
            
            <div class="product-image">
                <img src="${produto.imagem}" alt="${
    produto.nome
  }" class="product-img">
                <div class="product-overlay"></div>
            </div>
            
            <div class="product-content">
                <div class="product-header">
                    <span class="category-badge ${getCategoryClass(
                      produto.categoria
                    )}">
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
                        ${produto.sabores
                          .slice(0, 3)
                          .map(
                            (sabor) => `
                            <span class="flavor-badge">${sabor}</span>
                        `
                          )
                          .join("")}
                        ${
                          produto.sabores.length > 3
                            ? `
                            <span class="flavor-badge">+${
                              produto.sabores.length - 3
                            }</span>
                        `
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadProducts() {
  const popularProducts = document.getElementById("popular-products");
  const allProducts = document.getElementById("all-products");

  if (popularProducts) {
    const popularData = productsData.filter((produto) => produto.maisVendido);
    popularProducts.innerHTML = popularData
      .map((produto) => createProductCard(produto))
      .join("");
  }

  if (allProducts) {
    allProducts.innerHTML = productsData
      .map((produto) => createProductCard(produto))
      .join("");
  }
}

function loadCategoryFilters() {
  const categorias = [
    "Todos",
    "Docinhos",
    "Cupcakes",
    "Bolos",
    "Tortas",
    "Brownies",
    "Cookies",
  ];
  const filtersContainer = document.getElementById("category-filters");

  if (!filtersContainer) return;

  filtersContainer.innerHTML = categorias
    .map(
      (categoria) => `
        <button class="filter-button ${categoria === "Todos" ? "active" : ""}" 
                data-category="${categoria}" 
                onclick="filterProducts('${categoria}')">
            ${categoria}
        </button>
    `
    )
    .join("");
}

function filterProducts(categoria) {
  activeCategory = categoria;

  // Atualizar botões de filtro
  document.querySelectorAll(".filter-button").forEach((button) => {
    if (button.dataset.category === categoria) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Filtrar produtos
  const filteredProducts =
    categoria === "Todos"
      ? productsData
      : productsData.filter((produto) => produto.categoria === categoria);

  // Atualizar títulos
  const title = document.getElementById("products-title");
  const description = document.getElementById("products-description");

  if (title) {
    title.textContent =
      categoria === "Todos" ? "Toda Nossa Coleção" : `Categoria: ${categoria}`;
  }

  if (description) {
    description.textContent =
      categoria === "Todos"
        ? "Explore todos os nossos doces artesanais únicos"
        : `Descubra nossa seleção especial de ${categoria.toLowerCase()}`;
  }

  // Atualizar grid de produtos
  const allProducts = document.getElementById("all-products");
  if (allProducts) {
    allProducts.innerHTML = filteredProducts
      .map((produto) => createProductCard(produto))
      .join("");
  }
}

// =================================
// FUNÇÕES DA PÁGINA SOBRE
// =================================

function loadAboutData() {
  // Carregar valores
  const valuesGrid = document.getElementById("values-grid");
  if (valuesGrid) {
    valuesGrid.innerHTML = valuesData
      .map(
        (valor) => `
            <div class="card hover-lift">
                <div class="card-content">
                    <div style="text-align: center; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(4px); border-radius: 1rem; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); transition: all 0.4s ease;">
                        <div style="background: linear-gradient(270deg, var(--candy-pink), var(--candy-purple)); padding: 1rem; border-radius: 50%; width: 4rem; height: 4rem; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; color: white;">
                            ${valor.icon}
                        </div>
                        <h3 style="font-weight: 600; color: var(--candy-purple-vibrant); margin-bottom: 0.75rem;">${valor.titulo}</h3>
                        <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.5;">${valor.descricao}</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Carregar equipe
  const teamGrid = document.getElementById("team-grid");
  if (teamGrid) {
    teamGrid.innerHTML = teamData
      .map(
        (membro) => `
            <div class="card hover-lift">
                <div class="card-content">
                    <div style="text-align: center; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(4px); border-radius: 1rem; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); transition: all 0.4s ease;">
                        <div style="position: relative; margin-bottom: 1.5rem;">
                            <img src="${membro.imagem}" alt="${membro.nome}" style="width: 10rem; height: 10rem; object-fit: cover; border-radius: 50%; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                            
                        </div>
                        <h3 style="font-weight: 700; color: var(--candy-purple-vibrant); font-size: 2rem; margin-bottom: 0.5rem;">${membro.nome}</h3>
                        <p style="color: var(--candy-pink-vibrant); font-weight: 500; font-size: 1rem margin-bottom: 0.75rem;">${membro.cargo}</p>
                        <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.5;">${membro.descricao}</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

// =================================
// MANIPULAÇÃO DE FORMULÁRIO
// =================================

function initializeFormHandling() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve. 💕");
      contactForm.reset();
    });
  }
}

// =================================
// INICIALIZAÇÃO
// =================================

document.addEventListener("DOMContentLoaded", function () {
  // Inicializar formulários
  initializeFormHandling();

  // Carregar dados específicos da página
  const currentPage = window.location.pathname;

  if (currentPage.includes("produtos.html")) {
    loadCategoryFilters();
    loadProducts();
  } else if (currentPage.includes("sobre.html")) {
    loadAboutData();
  }
});

// Expor funções globalmente
window.toggleMobileMenu = toggleMobileMenu;
window.filterProducts = filterProducts;
window.addEventListener("DOMContentLoaded", loadProducts);
