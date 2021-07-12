// JavaScript Exercise 3 - Pizza Problem
// Use the for loop, if/else, and Array methods
// to add the right ingredients to 'pizza'.
//
// Note: 
// You may use another Array for this problem.
// Do not hardcode the ingredients in the if/else statement
//
// Example outcome:
// pizza = ['Tomatoes','Olives','Chicken']

const ingredients = [
    'Tomatoes',
    'Olives',
    'Chocolate',
    'Chicken',
    'Banana',
    'Pineapples',
    'Beef',
    'Cheese',
    'Cucumber',
    'Pepperoni',
    'Strawberries',
    'Ice cream',
];

const pizza = [];

const blacklist = [
    'Chocolate',
    'Banana',
    'Strawberries',
    'Ice cream',
    'Pineapples',
    'Cucumber',
];

// Loop over all the ingredients
for (index in ingredients) {

    // If ingredient is NOT in the blacklist...
    if( !blacklist.includes( ingredients[index] ) ) {

        // Add to the pizza
        pizza.push( ingredients[index] );
    } 
}

alert(pizza);