document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Função que cria um emoji e o anima
    function createAnimatedEmoji() {
        const emoji = document.createElement('span');
        const emojis = ['🐑', '🐺'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.textContent = randomEmoji;
        emoji.style.position = 'fixed';
        emoji.style.fontSize = `${20 + Math.random() * 40}px`; // Tamanho aleatório
        emoji.style.zIndex = '9999';

        // Posição inicial (embaixo da tela)
        const startX = Math.random() * window.innerWidth;
        const duration = 8 + Math.random() * 5; // Duração aleatória (8 a 13 segundos)

        emoji.style.left = `${startX}px`;
        emoji.style.bottom = `-50px`; // Começa fora da tela

        // Aplica a animação
        emoji.style.transition = `transform ${duration}s linear`;
        
        // Adiciona ao body
        body.appendChild(emoji);

        // Faz o emoji subir (Animação principal)
        // Usa setTimeout para garantir que o emoji esteja no DOM antes de animar
        setTimeout(() => {
            const endY = window.innerHeight + 50; // Sobe até o topo
            const endX = startX + (Math.random() * 300 - 150); // Deslocamento horizontal leve
            emoji.style.transform = `translate(${endX - startX}px, -${endY}px)`;
        }, 100);


        // Remove o emoji quando a animação termina (chega no topo)
        setTimeout(() => {
            emoji.remove();
        }, duration * 1000);
    }

    // Cria um fluxo constante de emojis
    setInterval(createAnimatedEmoji, 1000); // Cria um novo emoji a cada 1 segundo
});