// Efeito parallax suave no movimento do mouse
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.main-title');
    const image = document.querySelector('.main-image');
    
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
    const elements = document.querySelectorAll('.main-title, .subtitle, .image-container, .credits, .footer');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Efeito de brilho aleatório nas letras do título
setInterval(() => {
    const title = document.querySelector('.main-title');
    if (title) {
        const letters = title.textContent.split('');
        const randomIndex = Math.floor(Math.random() * letters.length);
        
        title.innerHTML = letters.map((letter, index) => {
            if (index === randomIndex) {
                return `<span style="color: #FFE4A6; text-shadow: 0 0 30px #FFE4A6;">${letter}</span>`;
            }
            return letter;
        }).join('');
    }
}, 2000);

// Efeito de hover interativo na imagem
const mainImage = document.querySelector('.main-image');
if (mainImage) {
    mainImage.addEventListener('mouseenter', () => {
        mainImage.style.filter = 'drop-shadow(0 20px 60px rgba(244, 228, 166, 0.6)) brightness(1.1)';
    });
    
    mainImage.addEventListener('mouseleave', () => {
        mainImage.style.filter = 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.7))';
    });
}

// Animação de fade nos créditos
const credits = document.querySelectorAll('.credits-left p, .credits-right p');
credits.forEach((credit, index) => {
    credit.style.opacity = '0.7';
    credit.style.transition = 'opacity 0.3s ease';
    
    credit.addEventListener('mouseenter', () => {
        credit.style.opacity = '1';
    });
    
    credit.addEventListener('mouseleave', () => {
        credit.style.opacity = '0.7';
    });
});

console.log('🌆 Retrowave Store Landing Page carregada com sucesso!');