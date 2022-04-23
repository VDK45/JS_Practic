// Узнать куда клик был сделан

window.addEventListener('click', function (event) {
    // console.log('Click Window');   
    // console.log(event.target);      // Цель клика
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper'); // Находить родителя
        // console.log(counterWrapper);
        counter = counterWrapper.querySelector('[data-counter]');  // Находить элемент через родителя
        // console.log(counter);
    }
    

    if (event.target.dataset.action === 'plus') {
        // console.log('Click +');
        counter.innerText = ++counter.innerText;
    };

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {  // Парсить число
            counter.innerText = --counter.innerText;
        } 
    };
});