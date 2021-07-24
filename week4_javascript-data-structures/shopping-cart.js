function createNewRow(productName, productDescription, price, currency, quantity) {
    let cartRow = `<div class="row">
            <div class="col-2"><img class="img-responsive" src="http://placehold.it/100x70">
            </div>
            <div class="col-4">
                <h4 class="product-name">
                    <strong>${productName}</strong></h4>
                    <h4><small>${productDescription}</small>
                </h4>
            </div>
            <div class="col-6">
                <div class="col-12 text-right">
                    <h6><strong>${price}<span class="text-muted">${currency}</span></strong></h6>
                </div>
                <div class="col-12">
                    <input type="text" class="form-control input-sm" value="${quantity}">
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-link btn-xs">
                        <span class="glyphicon glyphicon-trash"> </span>
                    </button>
                </div>
            </div>
        </div>
        <hr>`;
    return cartRow;
}

function start() {

    let products = [
        {
            productName: "Apple iPhone 12",
            productDescription: "Great phone by Apple",
            price: 6000,
            currency: "AED",
            quantity: 1
        },
        {
            productName: "Sony Playstation 5",
            productDescription: "Great gaming by Sony",
            price: 4000,
            currency: "AED",
            quantity: 1
        },
        {
            productName: "Polo T-Shirt",
            productDescription: "Great shirts by Polo",
            price: 400,
            currency: "AED",
            quantity: 1
        }
    ];


    const theCart = document.getElementById('cart-items');

    // let newRow = createNewRow("Apple iPhone 11", "Very nice phone", 3000, "AED", 1);
    // theCart.innerHTML += newRow;

    // (1) Use the .forEach method to loop over 'products'
    products.forEach(
        function(product) {

            /* Assume this is the current 'product'
                product = {
                    productName: "Apple iPhone 12",
                    productDescription: "Great phone by Apple",
                    price: 6000,
                    currency: "AED",
                    quantity: 1
                }
            */


            // (2) Use the createNewRow function create a new row for the cart
            let newRow = createNewRow(
                product['productName'],
                product['productDescription'],
                product['price'],
                product['currency'],
                product['quantity']
            );
            // (3) Push the new row into 'theCart'
            theCart.innerHTML += newRow;
        }
    )

}

start();