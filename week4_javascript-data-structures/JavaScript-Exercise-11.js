let products = [
    {
        "brand": "Sony",
        "model": "Playstation 5",
        "price": 4000,
    },
    {
        "brand": "Polo",
        "model": "T-Shirt",
        "price": 400,
    },
    {
        "brand": "Sony",
        "model": "A7sIII",
        "price": 10000,
    },
    {
        "brand": "Apple",
        "model": "iPhone 12",
        "price": 5000,
    },
    {
        "brand": "Nokia",
        "model": "3310",
        "price": 1000,
    }
]

// Part 1 (Filter by Price)
// (1) Use the .filter() method to loop over the `products` array
// (2) Create a function inside the .filter() method (its argument) with 
//     parameter 'product'
// (3) Use if condition to check for products with price below 4000.
// Your code here
// (4) Assign the return value of filter to variable 'priceFilter';
let priceFilter = products.filter(
    (product) => {
        if(product['price'] < 4000) {
            return product;
        }
    }
)
console.log(priceFilter);


// Part 2 (Filter by Brand)
// (1) Use the .filter() method to loop over the `products` array
// (2) Create a function inside the .filter() method (its argument) with 
//     parameter 'product'
// (3) Use if condition to check for the 'Sony' brand.
// (4) Assign the return value of filter to variable 'brandFilter';
let brandFilter = products.filter(
    (product) => {
        if(product['brand'] === 'Sony') {
            return product;
        }
    }
)
console.log(brandFilter);

