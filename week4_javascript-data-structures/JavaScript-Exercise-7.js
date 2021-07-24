// Don't change the array
const companyNames = [
    'apple',
    'samsung',
    'google',
    'microsoft',
    'astrolabs',
    'siemens',
    'oracle',
    'facebook',
    'etisalat',
    'du',
    'starlink',
    'honda'
];

// For Bonus Step
const companyOrigin = {
    'apple': 'United States',
    'samsung': 'South Korea',
    'google': 'United States',
    'microsoft': 'United States',
    'astrolabs': 'United Arab Emirates',
    'siemens': 'Germany',
    'oracle': 'United States',
    'honda': 'Japan',
    'facebook': 'United States',
    'etisalat': 'United Arab Emirates',
    'du': 'United Arab Emirates',
    'starlink': 'United States',
}

// Your code below
const companyNamesFixed = [];

companyNames.forEach(
    function(theString) {   
        // Make theString upperCase
        // Add the string to companyNamesFixed

        // Assume theString = "apple"
        let firstLetterCapitalized = theString[0].toUpperCase();      // a --> A
        let remainingLetters = theString.slice(1)      // pple
        let nameFixed = firstLetterCapitalized + remainingLetters // A + pple

        companyNamesFixed.push(nameFixed);
    }
)

console.log(companyNamesFixed);