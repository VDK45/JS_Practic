// Филадельфия хит ролл

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

let count = 0;

btnMinus.addEventListener('click', function() {
    console.log('click -');
    count -= 1;
    if (count > 0) {
        counter.innerText = count;
    } else {
        count = 0;
        counter.innerText = count;
    }
});

btnPlus.addEventListener('click', function() {
    console.log('click +');
    count += 1;
    if (count < 10) {
        counter.innerText = count;
    } else {
        count = 10;
        counter.innerText = count;
    }
});




