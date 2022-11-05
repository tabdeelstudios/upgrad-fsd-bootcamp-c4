// enum Marketing { Sales, Analyst, Manager }

// var currentUser: number = Marketing.Sales

// switch (currentUser) {
//     case 0: console.log("You work in sales!"); break;
//     case 1: console.log("You work as an Analyst!"); break;
//     case 2: console.log("You are the Manager!"); break;
// }

// let cities: string[] = ["nagpur", "mumbai", "chennai", "bangalore"]

// for (var city in cities) {
//     console.log(cities[city]);
// }

// function add(phone: number, otp: number): number;
// function add(email: string, password: string): string;

// function add(value1: any, value2: any) {
//     if (typeof value1 == 'number' && typeof value2 == 'number') {
//         return value1 + value2;
//     } else {
//         return `${value1} ${value2}`;
//     }
// }

// Write a program to display n terms of odd natural number and their sum

var sum: number = 0;
var count: number = 0;
var n: number = 1;

while (count <= 5) {
    if (n % 2 != 0) {
        sum = sum + n;
    }
    n++;
    count++;
}

console.log(sum)