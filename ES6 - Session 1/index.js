// let and const

let number = 5;
//Here, number = 5
{
    let number = 2;
    //Here, number = 2
}
//Here, number = 5


const number = 2; //The variable number is 2
const number = 3; //Not allowed
number = 3; //Not allowed


const person = { firstName: “John”, lastName: “Doe”, age: 27 };
person.age = 40; person.nationality = “English”;  //Allowed
person = { firstName: “Jane”, lastName: “Dias”, age: 25 };   //Not allowed


// --------------------------------------------------------

// Spread Operator

const contact = [“john@gmail.com”, +66345678001];
const person = [“John”, “Doe”, ...contact, “English”];
console.log(person); //["John", "Doe", "john@gmail.com", 66345678001, "English"]

let car = { name: “Mercedes”, model: “C200”, color: “white”, weight: 500 };
console.log(car.name); //Mercedes
let car2 = { ...car }; //Object car is copied by value into object car2
car.name = “Audi”;
console.log(car.name); //Audi
console.log(car2.name); //Mercedes

// --------------------------------------------------------
// Rest Parameters

let fun = (...numbers) => console.log(numbers.length);
fun(10, 2, 6, 7); //4
fun(1); //1
fun(20, 32); //2

// --------------------------------------------------------
// Template Literals

let user = “John Doe”;
let age = 27;
let str = `The name of the user is ${user} 
            and his age is ${age}`;
console.log(str);

// "The name of the user is John Doe
// and his age is 27"

// --------------------------------------------------------
// Exercise Question

// Write a JavaScript program to compare two objects in order to determine
// if the first one contains the property values equivalent to the second one

let obj1 = {
    city: "Nagpur",
    area: "Temple",
    state: "New",
    pincode: 440000
}

let obj2 = {
    city: "Nagpur",
    pincode: 440000,
    state: "New"
}

function checkObj(obj1, obj2) {
    for (key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(checkObj(obj1, obj2));

