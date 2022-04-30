function toggleCartStatus () {

    const cartWrapper = document.querySelector('.cart-wrapper');        // Искать по классу
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');   // Искать по артрибуту
    const orderForm = document.querySelector('#order-form');        // Искать по id
    

    // console.log(cartWrapper.children.length)  // Узнать количество элементов в родителе

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');

    }
};

