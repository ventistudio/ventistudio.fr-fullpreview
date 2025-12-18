// Form validation and handling

class FormValidator {
    constructor() {
        this.setupValidation();
    }

    setupValidation() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => this.validateForm(e));
        });
    }

    validateForm(e) {
        e.preventDefault();
        const form = e.target;
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
                this.showError(input, 'This field is required');
            } else {
                this.clearError(input);
            }
        });

        if (isValid) {
            this.submitForm(form);
        }
    }

    validateField(field) {
        if (!field.value.trim()) {
            return false;
        }

        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(field.value);
        }

        return true;
    }

    showError(field, message) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
    }

    clearError(field) {
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
    }

    submitForm(form) {
        // In production, submit to backend
        alert('Message envoyé! Merci de nous contacter.');
        form.reset();
    }
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new FormValidator();
    });
} else {
    new FormValidator();
}
