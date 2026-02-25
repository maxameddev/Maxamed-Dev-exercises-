//  Function Declaration

function addTwoNumbers(num1, num2) {

    console.log("Wadarta guud waa: " + (num1 + num2));

}

addTwoNumbers(5, 10);
addTwoNumbers(20, 30);
addTwoNumbers(100, 200);
addTwoNumbers(1, 2);

// let fisrtName = "maxamed";
// let middalename = "Xassan";
// let lastName = "Cumar";
// console.log("Magacaygu waa: " + fisrtName + " " + middalename + " " + lastName);


// Function Expression
let multipleTwoNumbers2 = function (num1, num2) {

    console.log("Jawaabtu waa: " + (num1 * num2))};

    multipleTwoNumbers2(5, 10);
    multipleTwoNumbers2(20, 30);
    multipleTwoNumbers2(100, 200);

    let name = function (firstName, middleName, lastName) {console.log("Magacaygu waa: " + firstName + " " + middleName + " " + lastName)};

    name("maxamed", "Xassan", "Cumar");
