// Мультимовність
const translations = {
  uk: {
    logo: "LSPDFR ELITE STUDIO",
    about: "Про нас",
    models: "Моделі",
    testimonials: "Відгуки",
    contact: "Контакти",
    heroTitle: "Якісні моделі української поліції для GTA 5",
    heroSubtitle: "Створені з любов'ю до деталей та патріотизму",
    viewModels: "Переглянути моделі"
  },
  en: {
    logo: "LSPDFR ELITE STUDIO",
    about: "About",
    models: "Models",
    testimonials: "Reviews",
    contact: "Contact",
    heroTitle: "High-quality Ukrainian police models for GTA 5",
    heroSubtitle: "Made with attention to detail and patriotism",
    viewModels: "View Models"
  }
};

let currentLang = 'uk';

function toggleLang() {
  currentLang = currentLang === 'uk' ? 'en' : 'uk';
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[currentLang][key];
  });
}

// Мобільне меню
document.querySelector('.burger-menu')?.addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Фіксація хедера
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});
