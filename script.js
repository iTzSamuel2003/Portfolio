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

    // --- ANIMAÇÃO DE PARTÍCULAS (NOVO) ---
    if(document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
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
        // PALAVRAS ATUALIZADAS CONFORME SOLICITADO
        const words = ["Desenvolvedor de Software", "Entusiasta de Tecnologia", "Programador"];
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