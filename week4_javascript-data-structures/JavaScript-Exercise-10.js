let countries = [
    'Argentina',
    'Paraguay',
    'Afghanistan',
    'Brazil',
    'England',
    'Jordan',
    'Egypt',
    'Algeria',
    'Armenia',
    'Georgia',
    'France',
    'South Africa'
];


// (1) Use the .filter() method to loop over the `countries` array
// (2) Create a function inside the .filter() method (its argument) with 
    //     parameter 'country'
// (3) Use if condition to check the first letter of each country. Only return
//     the value if the country begins with the letter 'A'.

// Your code goes here...
let filteredCountries = countries.filter(
    (country) => {
        if(country[0] === 'A') {
            return country;
        }        
    }
);

console.log(filteredCountries);