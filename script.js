function thankYou() {
    alert('Cảm ơn bé yêu đã tha lỗi cho an ❤️');
}

function moveNoButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
