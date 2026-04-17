/* -------------------- MENU BURGER -------------------- */

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

/* -------------------- SCROLL REVEAL -------------------- */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* -------------------- HERO TEXT ANIMATION -------------------- */

const heroTitle = document.querySelector('.hero-content h1');
const heroSubtitle = document.querySelector('.hero-content p');
const heroButton = document.querySelector('.hero-content .btn-hero');

window.addEventListener('load', () => {
    if (heroTitle) {
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = "1";
            heroSubtitle.style.transform = "translateY(0)";
        }, 250);
    }
    if (heroButton) {
        setTimeout(() => {
            heroButton.style.opacity = "1";
            heroButton.style.transform = "translateY(0)";
        }, 450);
    }
});
