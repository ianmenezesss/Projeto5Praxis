const screenshot = document.querySelectorAll('.screenshot');
const screenshots = document.querySelector('#screenshots');

let indexAtual = 0;


function mostrarScreenshot(index) {
    screenshot.forEach((screenshot) => screenshot.classList.remove('ativa'));

    screenshot[index].classList.add('ativa');
}

screenshots.addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % screenshot.length;
    mostrarScreenshot(indexAtual);
});