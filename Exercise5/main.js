// Arrow function

let Total=(num1, num2) => console.log("Wadarta guud waa: " + (num1 + num2));

Total(5, 10);
Total(20, 30);
Total(100, 200);
Total(1, 2);    

let fee = (price, tax , cargo , percentage) => console.log("Qiimaha guud waa: " + (price + tax + cargo + (price * percentage / 100)));

fee(100, 10, 5, 5);
fee(200, 20, 10, 5);
fee(300, 30, 15, 5);