//  reduc method 

const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
});

console.log(multipliedNumbers); // Output: 120