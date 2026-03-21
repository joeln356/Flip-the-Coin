const flip = document.querySelector('.flip');
const btn = document.getElementById('buttom');
const text = document.getElementById('texto');


btn.addEventListener('click', ()=>{
    // Escolhe cara ou coroa aleatoriamente
    const lado = Math.random() <= 0.5 ? 'cara' : 'coroa';

    // Remove rotação anterior
    flip.classList.remove('animar');

    // Força reflow para resetar animação
    flip.offsetHeight; // necessário para reiniciar a animação

    // Define rotação baseada no lado
    if(lado === 'cara'){
        flip.style.setProperty('--final-rotation', '2880deg');
    } else {
        flip.style.setProperty('--final-rotation', '3060deg'); 

    }
    flip.classList.add('animar');
});