const brands = ['Apple','Nokia','Samsung','LG','Sony','HP'];

function brandSearch(query) {


    // (1) Make all the brands lowercase
    // Create a formatted copy of brands
    let brandsFormatted = [];

    for(let i = 0; i < brands.length; i++) {
        brandsFormatted.push( brands[i].toLowerCase() )
    };


    // (2) Format the argument...
    // Remove spaces first
    query = query.trim();
    // Deal with letter casing
    query = query.toLowerCase();


    // (3) Search for a match in the brandsFormatted array
    if(brandsFormatted.includes(query)) {
        return "Brand is available";
    }
    else {
        return "Brand not available";
    }

}

console.log( brandSearch("   nOKiA    ") );