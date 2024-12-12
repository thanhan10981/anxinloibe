function thankYou() {
    const letter = document.getElementById('apologyLetter');
    letter.style.display = 'block'; 
}
function closeLetter() {
    const letter = document.getElementById('apologyLetter');
    letter.style.display = 'none'; 
}
function moveNoButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
