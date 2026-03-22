const flip = document.querySelector('.flip');
const btn = document.getElementById('buttom');
const letra = document.querySelector('.girar')

btn.addEventListener('click', ()=>{
    // Escolhe cara ou coroa aleatoriamente
    const lado = Math.random() <= 0.5 ? 'cara' : 'coroa';

    // Remove rotação anterior
    flip.classList.remove('animar');
    letra.classList.remove('animar')

    // Força reflow para resetar animação
    flip.offsetHeight; // necessário para reiniciar a animação
    letra.offsetHeight;

    // Define rotação baseada no lado
    if(lado === 'cara'){
        flip.style.setProperty('--final-rotation', '2880deg');
        letra.style.setProperty('--final-rotation', '2880deg');
    } else {
        flip.style.setProperty('--final-rotation', '3060deg');
        letra.style.setProperty('--final-rotation', '3060deg');
    }
    flip.classList.add('animar');
    letra.classList.add('animar')
});