// function hello() {
//     console.log("Hello!")
// }

// hello()

// var hello = () => console.log("Hello")
// hello()

// function createAccount(username: string, age: number, interests: string[]): boolean {
//     console.log("Username : " + username)
//     console.log("Age : " + age)
//     var output = "Interests : "
//     var i: any
//     for (i of interests) {
//         output = output + i + ", "
//     }
//     console.log(output)
//     return true;
// }

// createAccount("John", 45, ["Swimming", "Reading"])

function login(value1: string, value2: number): boolean;
function login(value1: string, value2: string, value3: number): boolean;

function login(value1: any, value2: any, value3?: any): boolean {
    if (typeof value1 == "string" && typeof value2 == "number") {
        //login for phone+otp
        return true
    }
    if (typeof value1 == "string" && typeof value2 == "string") {
        //login for email+pwd
        return true
    }
    return true
}