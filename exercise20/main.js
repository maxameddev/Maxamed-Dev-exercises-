// Map method 
// how many letters in each word

let fruits = ["apple", "banana", "grapes", "mangoes"];

let fruitsLength = fruits.map(function (fruit) {
    return fruit.length + " letters";
});
console.log(fruitsLength);