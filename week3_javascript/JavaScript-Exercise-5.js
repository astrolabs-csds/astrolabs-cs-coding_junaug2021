const inventory = {
    'Asus Vivibook': 4000,
    'Apple MacbookPro': 7000,
    'Apple Watch': 1500,
    'Samsung S21': 5000,
    'Apple Airpods': 700
}

/*
 * @param productName: String
 * @return Number
 * Note:
 * You may create a modified copy of the inventory array in your code.
 */
function productInfo(productName) {

    // (1) format user's input (productName) with String methods
    // Note: mistakes will include (a) extra spaces and (b) bad letter casing
    productName = productName.trim(); 
    productName = productName.toLowerCase();
    productNameArray = productName.split(" "); // ['Asus', 'Vivibook']
    productNameArray[0]; // Brand
    productNameArray[1]; // Model

    // (2.a) If match is found in 'inventory' array...
    if(inventory[productName]) {
        // (3) return the price and name of the product (in correct form)
        return inventory[productName]
    }
    // (2.b) If no match is found in 'inventory' array...
    else {
        // (4) return 'not found' or something similar
        return "not found"
    }

}


console.log( productInfo("samsung s21") );