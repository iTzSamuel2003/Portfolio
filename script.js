document.addEventListener('DOMContentLoaded', () => {

    // Efeito de animação ao rolar a página
    const sections = document.querySelectorAll('.section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => { observer.observe(section); });

    // Navegação suave
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Fundo de Estrelas em Movimento ---
    const starsContainer = document.querySelector('.stars-background');
    if (starsContainer) {
        const numStars = 80;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            const fallDuration = Math.random() * 15 + 15;
            const fallDelay = Math.random() * fallDuration;
            const twinkleDelay = Math.random() * 3;
            star.style.animationDuration = `3s, ${fallDuration}s`;
            star.style.animationDelay = `${twinkleDelay}s, ${fallDelay}s`;
            starsContainer.appendChild(star);
        }
    }

    // --- EFEITO PARALLAX 3D NA FOTO ---
    const imageWrapper = document.querySelector('.sobre__image-wrapper');
    const image = document.querySelector('.sobre__image img');
    if (imageWrapper && image) {
        const intensity = 35;
        imageWrapper.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = imageWrapper.getBoundingClientRect();
            const mouseX = (e.clientX - left) / width - 0.5;
            const mouseY = (e.clientY - top) / height - 0.5;
            const rotateY = mouseX * intensity * -1;
            const rotateX = mouseY * intensity;
            image.style.transform = `scale(0.95) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        imageWrapper.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(0.95) rotateX(0deg) rotateY(0deg)';
        });
    }

    // --- EFEITO MÁQUINA DE ESCREVER ---
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const words = ["Desenvolvedor de Software", "Programador Full Stack", "Entusiasta de Tecnologia"];
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseDuration = 2000;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        function type() {
            const currentWord = words[wordIndex];
            if (!isDeleting) {
                typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, pauseDuration);
                } else {
                    setTimeout(type, typingSpeed);
                }
            } else {
                typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, typingSpeed + 300);
                } else {
                    setTimeout(type, deletingSpeed);
                }
            }
        }
        setTimeout(type, 250);
    }

    // --- EFEITO PARALLAX NOS ÍCONES DE HABILIDADE (CÓDIGO CORRIGIDO) ---
    const skillItems = document.querySelectorAll('.skill__item');
    if (skillItems.length > 0) {
        const intensity = 25;
        skillItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = item.getBoundingClientRect();
                const mouseX = (e.clientX - left) / width - 0.5;
                const mouseY = (e.clientY - top) / height - 0.5;
                const rotateY = mouseX * intensity * -1;
                const rotateX = mouseY * intensity;
                item.style.transform = `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
            });
        });
    }

}); // Fim do addEventListener principal