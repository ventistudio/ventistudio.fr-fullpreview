// VentiStudio v6 Main Application

class VentiStudio {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.registerServiceWorker();
        this.logInfo();
    }

    setupEventListeners() {
        // Form submission
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Smooth scroll links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.card, .portfolio-item, .service-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupScrollAnimations() {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            const parallax = document.querySelector('.hero::before');
            if (parallax) {
                parallax.style.transform = `translateY(${scroll * 0.5}px)`;
            }
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Validate
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Email invalide');
            return;
        }

        alert('Merci pour votre message! Nous vous recontacterons bientôt.');
        form.reset();
    }

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(reg => console.log('✅ Service Worker registered'))
                .catch(err => console.log('Service Worker error:', err));
        }
    }

    logInfo() {
        console.log('%cVentiStudio v6', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
        console.log('%cCréativité sans limites', 'color: #8b5cf6; font-size: 16px;');
        console.log('Built with ❤️ by Hikari Umaishi');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new VentiStudio();
});
