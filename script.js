// Configuração do ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false // Mude para 'false' para animar apenas uma vez
});

// Animações
sr.reveal('header h1, header p', { delay: 400 });
sr.reveal('section h2, section h3', { interval: 100 });
sr.reveal('.about p, .cursos-box', { interval: 100 });
sr.reveal('.project', { interval: 100 });
sr.reveal('.social-buttons .btn', { interval: 100 });

// para o menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// Abre/Fecha o menu ao clicar no ícone
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um dos links
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});