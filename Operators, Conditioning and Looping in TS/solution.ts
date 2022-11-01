let number: number = 1234
let display: string = ""
let myArray: string[] = ["zero", "one", "two", "three"]
let temp: number
while (number > 0) {
    temp = number % 10
    display += myArray[temp]
    number /= 10
}



// let numbers: number[] = [10, 20, -7]
// var count: number = 0
// var i: any

// for (i in numbers) {
//     if (numbers[i] < 0) {
//         count++
//     }
// }

// if (count % 2 != 0) {
//     console.log("The product is negative")
// } else {
//     console.log("The product is positive")
// }

// var a: number = 10
// var b: number = 20
// var c: number = -7
// var count: number = 0

// if (a < 0) {
//     count++
// }
// if (b < 0) {
//     count++
// }
// if (c < 0) {
//     count++
// }

// if (count % 2 != 0) {
//     console.log("The product is negative")
// } else {
//     console.log("The product is positive")
// }