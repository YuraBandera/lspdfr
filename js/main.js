// Приховання завантажувача
window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});

// Мобільне меню
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

// Плавний скрол
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
