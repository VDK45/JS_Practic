
// Добавить товар в корзину
// Div внутри корзины, в который добавить товары
const cartWrapper = document.querySelector('.cart-wrapper');


window.addEventListener('click', function (event) {

    // По атрибуту 
    const addCart = event.target.hasAttribute('data-cart'); 
    
    if (addCart) {
        // console.log(addCart);
        const card = event.target.closest('.mb-4');
        // console.log(card)

        // Собираем данные с этого товара
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            tittle:  card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            weight:  card.querySelector('.price__weight').innerText,
            price:  card.querySelector('.price__currency').innerText,
            counter:  card.querySelector('[data-counter]').innerText
        };

        // Проверяем товар есть в корзине?
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart)
        
        // если есть в корзине плюсуем их количество
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
        } else {
            // Если товара нет в корзине
        

            // Собрать данные в шаблон
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.tittle}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.tittle}</div>
                    <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                    </div>
                </div>
            </div>`;
        
        

        // Отобразить товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)

        }
    }   
});


// Клики по кнопкам - и +
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
        
        // Удаление товара из корзины
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) { 
            // Находить родителя клика
            event.target.closest('.cart-item').remove();

        }
    };

    
});

