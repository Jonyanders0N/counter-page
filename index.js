const btnDecrease = document.querySelector('.decrease');
const btnIncrease = document.querySelector('.increase');
const btnReset = document.querySelector('.reset');
const counter = document.getElementById('value');

btnDecrease.addEventListener('click', () => {
    counter.textContent -= 1;
});

btnIncrease.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1;
})

btnReset.addEventListener('click', () => {
    counter.textContent = 0;
})
