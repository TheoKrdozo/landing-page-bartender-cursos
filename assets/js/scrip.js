document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Anima só uma vez
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.from-left');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Anima só uma vez
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.from-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Anima só uma vez
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});
