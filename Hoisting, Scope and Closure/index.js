//let
//const

// let balance = 1000;

// balance = 2000 + 3000;
// console.log("Total balance = " + (balance));

// Global Scope
// let balance = 100;

// console.log("Balance outside functions : " + balance);

// function credit(input) {
//     //Function Scope
//     balance = balance + input;
//     console.log("Balance inside credit function : " + balance);
// }

// function debit(input) {
//     balance = balance - input;
//     console.log("Balance inside debit function : " + balance);
// }

// console.log("Balance outside functions (end) : " + balance);

// credit(500);
// console.log(input);
// debit(200);


// Block Scope - ES6
// {
//     var amount = 100;
//     console.log(amount);
// }

// {
//     amount = 2000;
//     console.log(amount);
// }

// let amount = 1000;

// function modify(value) {
//     // let amount = 500;
//     console.log(amount + value);
// }

// modify(500);

// var number1;
// var number2;

// number1 = 100;

// console.log(number1, number2);

// var number2 = 200;

// console.log(number1, number2);

// 100 undefined

// var customCart = (function () {
//     let cartAmount = 0;
//     return function () {
//         cartAmount = cartAmount + 100;
//         console.log(cartAmount);
//         return cartAmount;
//     }
// })(); //Closure function

// customCart();
// customCart();
// customCart();
// customCart();
// customCart();


