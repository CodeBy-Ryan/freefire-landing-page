// Seleção dos elementos do menu e do botão hamburger
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".menu-list");

// Função para abrir e fechar o menu em dispositivos móveis
menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active"); // Adiciona ou remove a classe "active"
  menuToggle.classList.toggle("open"); // Adiciona uma animação ao ícone hamburger
});

// Fecha o menu quando o usuário clica em qualquer link
const menuLinks = document.querySelectorAll(".menu-list a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      // Só fecha em dispositivos móveis
      menuList.classList.remove("active");
      menuToggle.classList.remove("open");
    }
  });
});


