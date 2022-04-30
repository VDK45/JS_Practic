function calcCartPriceAndDelivery() {

    const cartItem = document.querySelectorAll('.cart-item');     // Искать по классу / All elements
    let totalPrice = 0;
    // console.log(cartItem);

    cartItem.forEach(function(item){

        // console.log(item)
        const amountEl = item.querySelector('.items__current'); // Искать в родителе по классу
        const amountEl2 = item.querySelector('[data-counter]'); // Искать в родителе по артрибуту
        const priceEl = item.querySelector('.price__currency'); // Искать в родителе по классу
        
        

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        // console.log(amountEl2.innerText)
        // console.log(priceEl.innerText)
        // console.log(currentPrice);
        totalPrice += currentPrice;
        
    })

    console.log(totalPrice);
    // document.querySelectorAll('.total-price').innerText = totalPrice ; 

    
    

    // Показать или скрыть стоимость доставки
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]'); // Искать по артрибуту
    if (totalPrice > 0) {
        cartDeliveryEl.classList.remove('none')
    } else {
        cartDeliveryEl.classList.add('none')
    }


    // Стоимость доставки
    const deliveryCost =  document.querySelector('.delivery-cost'); 
    if (totalPrice >= 600) {
        deliveryCost.innerText = 'Бесплатно';
        deliveryCost.classList.add('free');
    }  else {
        deliveryCost.innerText = '200';
        deliveryCost.classList.remove('free');
        if (totalPrice > 0) {
            totalPrice += 200;
        } else {
            totalPrice = 0;
        }
    };


    
    // Отображать общую стоимость товаров
    const totalPriceEl = document.querySelector('.total-price'); 
    totalPriceEl.innerText = totalPrice;
}