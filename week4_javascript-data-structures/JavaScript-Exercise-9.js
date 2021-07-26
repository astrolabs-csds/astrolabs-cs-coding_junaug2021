const shoppingCart = [
    {
        itemName: 'Playstation 5',
        price: 4000,
    },
    {
        itemName: 'Polo T-Shirt',
        price: 400,
    },
    {
        itemName: 'Lenovo ThinkPad',
        price: 3245,
    }
]

let grandTotal = 0;

// (1) Use the .forEach method to loop over the shoppingCart
// (2) Create an anonymous arrow function (inside .forEach) to calculate 
//     the grand total of the items in the shoppingCart

// Note:
// Remember to use square brackets [] to access keys in objects and arrays.

// Your code goes here

// Notes:
// The argument for `product` will by provided .forEach()
// `+=` is the operator to increase the value of a variable
// `product['price']` will return the value of each `product` object

shoppingCart.forEach(
    (product) => {
        grandTotal += product['price'];
    }
)

console.log(grandTotal);
