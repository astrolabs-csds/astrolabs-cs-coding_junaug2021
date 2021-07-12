const products = {
    'Asus Vivibook': 4000,
    'Macbook Pro': 7000,
    'Apple Watch': 1500,
    'Samsung S21': 5000,
    'Apple Airpods': 700
}

const cart = [];
let grandTotal = 0;

function shoppingStart() {
    
    // Prompt the user for (a) product or (b) 'done'
    const userReponse = prompt('Please add a product or enter \'done\' to finish shopping')

    // If they enter a product (i.e, they're not done)
    if(userReponse !== 'done') {
    
        // add its price to 'cart'
        // Hint: use products[userResponse]
        cart.push(products[userReponse]);

        // Run the function again
        return shoppingStart();
    }
    // Else if they enter 'done'...
    else if(userReponse == 'done') {
        // Calculate the price of the items in cart
        for( key in cart ) {
            grandTotal += cart[key];   // [500, 300, 400]
        }

        // return the total price
        return grandTotal;
    }
}

console.log(shoppingStart());