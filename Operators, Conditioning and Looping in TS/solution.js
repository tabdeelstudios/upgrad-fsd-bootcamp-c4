var numbers = [-10, -20, -7];
var count = 0;
var i;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    i = numbers_1[_i];
    if (i < 0) {
        count++;
    }
}
if (count % 2 != 0) {
    console.log("The product is negative");
}
else {
    console.log("The product is positive");
}
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
