const brands = ['Apple','Nokia','Samsung','LG','Sony','HP'];

function brandSearch(query) {

    // Assume: query -> "Samsung"

    if(brands.includes(query)) {
        return "Brand is available";
    }
    else {
        return "Brand not available";
    }

}

console.log( brandSearch("Samsung") );