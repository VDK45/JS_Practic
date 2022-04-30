const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
    const responce = await fetch('./js/products.json');
    const productsArray = await responce.json();

    // console.log(productsArray)
    renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function(item) {

        const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">Филадельфия хит ролл</h4>
								<p><small data-items-in-box class="text-muted">${item.itemInBox} шт.</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">${item.weight}г.</div>
										<div class="price__currency">${item.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`

        productsContainer.insertAdjacentHTML('beforeend', productHTML)
    })
    
    
}
