// ::: (1) Built-in Functions :::
// alert("Good Morning!!");
// var userName = prompt("What is your name?");
// alert(userName)


// ::: (2) Variables and Constants :::
// var, let, const


// ::: (3) Operators :::
// +         addition or concatenation
// -         subtraction
// *         multiplication
// /         division
// %         modulo
// =         assignment operator
// ==        equality comparison operator (value)
// ===       equality comparison operator (value & data type)
// ||        OR operator
// &&        AND operator
// !         NOT
// !=        NOT equal comparison operator
// <         less than comparison
// >         greater than comparison
// <=        leq comparison
// >=        geq comparison


// ::: (4) Data Structures :::
// Array
// .push()                  Adds an element to the end of Array
// .pop()                   Removes an element from end of Array
// .unshift()               Adds an element to the start of Array
// .shift()                 Removes an element from the start of Array
// .splice()                Add or remove an element at a specific key

let people = [
    'Jane',
    'Doe',
    'Jamal',
    'Jim',
    'Jolly',
    'Jana'
];

// .splice(index, numOfItemsToDelete, valuesToAdd)

// Remove an element at specific index
// people.splice(3,2);

// Add an element at specific index
// people.splice(3, 0, "Jalex");

// Replaces an element at specific index
// people.splice(1, 1, 'Doe');


// Object
// let airports = {
//     "dxb": "Dubai International",
//     "auh": "Abu Dhabi International",
//     "jfk": "John F Kennedy"
// }


// ::: (5) Control Statements :::

// if/else

// let price = 5000;
// const budget = 4000;

// if (price < budget) {
//     alert("Buy the product");
// } 
// else if (price == budget) {
//     alert("Buy the product");
// }
// else {
//     alert("Don't buy the product");
// }

// if (price <= budget) {
//     alert("Buy the product");
// } else {
//     alert("Don't buy the product");
// }

// Note:
// i++        is shortcut for       i = i + 1
// i--        is shortcut for       i = i - 1

// for(let i = 0; i < 4; i++) {
//     alert("This is " + i)
// }

// for (key in people) {
//     alert(people[key]);
// }



// Solution to Exercise 1

/*
JavaScript Exercise 1 

Register a user with their details

(1) Create an Array called questions with three questions about the user's (a) firstName, (b) lastName, and (c) email
(2) Create an empty Array called registration
(3) Use the for loop to iterate over the questions and prompt() the user for input
(4) After every response, use the .push() method to push each response to the Array 'registration'
(5) At the end of the for loop, use alert() function to confirm the registration details. Note: You can simply use alert(registration)
*/

/*
let questions = [
    'What is your first name?',
    'What is your last name?',
    'What is your email address?',
];

let registration = [];

// Declare a variable to which we will re-assign values
let ans;

// Loop over all of the questions
for (index in questions) {
    // Prompt with each question and assign to ans each response
    ans = prompt(questions[index]);
    // Put every answer in the registration array
    registration.push(ans)
}

// Confirm the registration details for user
alert(registration);
*/



// ::: (6) DOM :::
// Point to elements by their class name
// elements = document.getElementsByClassName('field')
// element = elements[0]

// Read the text value of an element
//element.value

// Bind an event listener to an element (e.g, onclick)
//element.onclick = function() { ... }



// ::: (7) Objects :::

/*
const building = {
    'Parking': ['P1', 'P2'],
    'Residential': ['Floor 1', 'Floor 2', 'Floor 3'],
    'Gym': {
        'Equipment': ['Treadmill','Bicycle'],
        'Personel': ['Trainer','Grizzly Bear']
    }
}

// Add another parking level
building['Parking'].push('P3');

// Add 7 more floors
for(let counter = 4; counter < 11; counter++) {
    building['Residential'].push('Floor ' + counter);
}

// Reassign value (option 1)
building['Gym']['Personel'][1] = 'Security Guard';

// Use string method (option)
building['Gym']['Personel'][1] = building['Gym']['Personel'][1].replace('Grizzly Bear', 'Security Guard');
*/


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

/*
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
*/


// ::: (8) Functions :::
// function addTwoNumbers(numA, numB) {
//     let theSum = numA + numB;
//     return theSum;
// }


// addTwoNumbers(4,4)

// console.log( addTwoNumbers(5,5) );



// ::: (9) String Methods :::
// .toUpperCase()                           Converts all the letters in a strings to uppercase     
// .toLowerCase()                           Converts all the letters in a strings to lowercase
// .replace(original, replacement)          Replaces the first substring in a string    
// .replaceAll(original, replacement)       Replaces all of substrings in a string        
// .includes()                              Searches for a substring and returns true if match found
// .match(regex pattern)                    Uses a Regular Expression to find a string
// .slice(startIndex, endIndex)             Return a slice of the string with given indices 
// .toString()                              Cast a number to a string
// .trim()                                  Removes whitespace at the start and end of a string
// .split(delimeter)                        Will split a string by a specified delimeter and return an Array           


// Example with .split()
/*
let product = "nokia 3310";
let productInfo = product.split(" ")        // "nokia 3310" ----> ["nokia","3310"]
productInfo[0]  // "nokia"
productInfo[1]  // "3310"
*/

// Example with .slice()
/*
let someString = "united arab emirates"
someString.slice(12)                       // returns "emirates"
someString.slice(7,11)                     // returns "arab"
*/

// Example with .toUpperCase*()
/*
let countryCodes = ['uae','uk','usa','ksa'];
console.log(countryCodes[0].toUpperCase())  // uae ---> UAE
*/


// Example with .replace()
/*
product = product.replace("3310", "8800");  // "nokia 3310" ----> "nokia 8800"
*/


// Example with .slice()
/*
let address = "AstroLabs, Cluster R, Jumeirah Lakes Towers, Dubai, UAE";
address.slice(45,50);       // ---> "Dubai"
*/


// ::: (10) More Array Methods :::                 
// .join()
// .foreach()
// .map()
// .find()
// .filter()

/*
Example with .forEach()
*/

/*
let airports = [
    "dxb",
    "auh",
    "jfk",
    "dus",
    "fra"
];


`<ul>`
for(let index = 0; index < airports.length; index++) {
    `<li>` + airports[index] + `</li>`
}
`<ul>`


`<ul>`
for( index in airports ) {
    `<li>` + airports[index]+ `</li>`
}
`<ul>`

'<ul>'
airports.forEach(
    function (someString) {
        html += '<li>' + someString + '</li>'
    }
)
'</ul>'
*/





// Example 2

/*
let airportsFixed = [];
// For each element in the 'airports' array...
airports.forEach(

    // apply this function to each element
    function(theString) {
        airportsFixed.push( theString.toUpperCase() )
    }
);
*/


// ::: (11) Function Scoping :::   
// Example with Scoping
// let somestring = "Hello";

// function level1() {
//     function level2() {   
//         return somestring;
//     }
//     return level2();
// }



// ::: (11) Arrow Functions :::   
/*
// Standard Function (can also be used Constructor)
function addTwoNumbers(numA, numB) {
    return numA + numB;
}



// Anonymous Function
let addTwoNumbers = (numA, numB) => {
    return numA + numB;
}


// Example of Using Anonymous Arrow Function to Create List Items
'<ul>'
airports.forEach(
    destination => '<li class="flight-destination">' + destination + '</li>'
)
'</ul>'
*/

/*
let olympicMedals = [
    'US',
    'China',
    'China',
    'US',
    'China',
    'China',
    'China',
    'China',
    'China',
    'China',
    'China',
    'China',
    'US',
    'China'
];



let filteredResults = olympicMedals.filter( 
    function(country) {
        if (country == 'China') {
            return country;
        }
    }
);
 
console.log(filteredResults.length)
*/

// Example with .filter()
/*
const movies = [
    {
        title: 'The Godfather',
        genre: 'Crime Thriller'
    },
    {
        title: 'Prometheus',
        genre: 'SciFi'
    },
    {
        title: 'Interstellar',
        genre: 'SciFi'
    },
    {
        title: 'Anabelle',
        genre: 'Horror'
    },
    {
        title: 'The Intern',
        genre: 'Comedy'
    }
];

let selectedMovies = movies.filter(
    (option) => {
        if(option['genre'] == 'SciFi') {
            return option;
        }
        else if(option['genre'] == 'Comedy') {
            return option;
        }
    }
)

console.log(selectedMovies);
*/






let companyNames = [
    'apple',
    'samsung',
    'siemens',
    'nokia',
    'lenovo'
];






// Using .forEach to Capitalize companyNames

// Long way
/*
companyNames.forEach(
    function(elemVal, elemIndex) {
        // Capitalize the word 'apple'
        let result = companyNames[elemIndex][0].toUpperCase() + companyNames[elemIndex].slice(1);
        console.log(result);
    }
);
*/


// Shorter way
/*
companyNames.forEach(
    function(elemVal) {
        let result = elemVal[0].toUpperCase() + elemVal.slice(1);
        console.log(result);
    }
);
*/


// Shortest way
/*
companyNames.forEach(
    elemVal => {
        let result = elemVal[0].toUpperCase() + elemVal.slice(1);
        console.log(result);
    }
);
*/


// Using .map() with arrow syntax
// Long way
/*
let companyNamesFixed = companyNames.map(
    (elemVal) => {
        let result = elemVal[0].toUpperCase() + elemVal.slice(1);
        return result;
    }
);
*/

// Shorter way
/*
let companyNamesFixed = companyNames.map(
    elemVal => {
        let result = elemVal[0].toUpperCase() + elemVal.slice(1);
        return result;
    }
);
*/

// Shortest Way
/*
let companyNamesFixed = companyNames.map(
    elemVal => elemVal[0].toUpperCase() + elemVal.slice(1)
);
*/