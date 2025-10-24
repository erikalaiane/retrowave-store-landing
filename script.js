// Efeito parallax suave no movimento do mouse
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.main-title');
    const image = document.querySelector('.hero-image');
    
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;
    
    if (title) {
        title.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    if (image) {
        image.style.transform = `translate(${-moveX / 2}px, ${-moveY / 2}px)`;
    }
});

// Animação de entrada suave
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.main-title, .subtitle, .credits-area, .rating-badge, .footer-logos, .hero-image');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Efeito de brilho aleatório nas letras do título
setInterval(() => {
    const title = document.querySelector('.main-title');
    if (title) {
        const text = title.textContent;
        const letters = text.split('');
        const randomIndex = Math.floor(Math.random() * letters.length);
        
        title.innerHTML = letters.map((letter, index) => {
            if (index === randomIndex) {
                return `<span style="color: #FFE4A6; text-shadow: 0 0 30px #FFE4A6;">${letter}</span>`;
            }
            return letter;
        }).join('');
    }
}, 2000);

console.log('🌆 Retrowave Store carregada com sucesso!');