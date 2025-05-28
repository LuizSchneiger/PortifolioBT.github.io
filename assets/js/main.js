/* JAVASCRIPT PRINCIPAL */

/*==================== MENU MOBILE ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.querySelector('.nav__close');

/* Mostrar menu */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Esconder menu */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Remover menu mobile ao clicar em um link */
const navLinks = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link');
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== MUDAR BACKGROUND DO HEADER ====================*/
function scrollHeader(){
  const nav = document.getElementById('header');
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== MOSTRAR SCROLL UP ====================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== TEMA ESCURO/CLARO ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Tema previamente selecionado (se o usuário já escolheu)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtemos o tema atual da interface validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// Validamos se o usuário já escolheu um tema
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton?.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Ativar/desativar o tema manualmente com o botão
if (themeButton) {
  themeButton.addEventListener('click', () => {
    // Adicionar ou remover o tema escuro / ícone
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
}
