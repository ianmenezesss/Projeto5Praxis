const screenshots = document.querySelectorAll('.screenshot img');
const screenshot = document.querySelectorAll('.screenshot')
let indexAtual = 0;

function mostrarScreenshot(index) {
    screenshot.forEach((screenshot) => screenshot.classList.remove('ativa'));
    screenshot[index].classList.add('ativa');
}

screenshots.forEach((img, index) => {
    img.addEventListener('click', () => {
        indexAtual = (indexAtual + 1) % screenshots.length;
        mostrarScreenshot(indexAtual);
    });
});


const menuIcon = document.getElementById('logo-team-cherry');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});