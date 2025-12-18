// Animation utilities

class AnimationController {
    constructor() {
        this.setupScrollObserver();
        this.setupKonamiCode();
    }

    setupScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }

    setupKonamiCode() {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            konamiIndex = e.key === konamiCode[konamiIndex] ? konamiIndex + 1 : 0;
            if (konamiIndex === konamiCode.length) {
                this.activateEasterEgg();
                konamiIndex = 0;
            }
        });
    }

    activateEasterEgg() {
        document.body.style.filter = 'hue-rotate(360deg)';
        setTimeout(() => { document.body.style.filter = 'none'; }, 1000);
        console.log('🎉 Easter egg activated!');
    }
}

// Initialize animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AnimationController();
    });
} else {
    new AnimationController();
}
