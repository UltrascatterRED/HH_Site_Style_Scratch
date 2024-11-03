// sum of numbers a and b
function sum(a, b){
    return a + b;
}

// difference of "a - b"
function difference(a, b){
    return a - b;
}

// product of numbers a and b
function product(a, b){
    return a * b;
}

// quotient of "a / b". Returns 0 if divisor b is 0.
function quotient(a, b){
    if(b === 0) return 0;
    return a / b;
}

module.exports.sum = sum
module.exports.difference = difference
module.exports.product = product
module.exports.quotient = quotient