

function aggregate(number) {

    if(number < 5) {
        return aggregate(number + 1);
    } else {
        return number;
    }
}

console.log( aggregate(0) );