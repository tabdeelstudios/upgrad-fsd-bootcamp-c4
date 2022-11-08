// let productName: any = "Shampoo"
// let productLength: number = (productName as string).length
// console.log(productLength)

// let amount: any = 2000
// let deposit: number = <number>amount + 500
// console.log(deposit)

interface Person {
    name: string;
    age: number;
}

interface Admin {
    name: string;
    age: number;
}

let john: Partial<Person> = {};

let jane: Required<Admin> = {
    name: "",
    age: 0
};

console.log(john);
console.log(jane);