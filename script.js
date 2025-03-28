// Função que faz o botão "No" se mover para um lugar aleatório na tela
function moveButton() {
    const button = document.getElementById("noButton");

    // Gera posições aleatórias na tela
    const maxX = window.innerWidth - button.offsetWidth; // Largura máxima
    const maxY = window.innerHeight - button.offsetHeight; // Altura máxima

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Muda a posição do botão para a nova posição aleatória
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}