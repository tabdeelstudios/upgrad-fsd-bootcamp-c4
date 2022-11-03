// function hello() {
//     console.log("Hello!")
// }
function login(value1, value2, value3) {
    if (typeof value1 == "string" && typeof value2 == "number") {
        //login for phone+otp
        return true;
    }
    if (typeof value1 == "string" && typeof value2 == "string") {
        //login for email+pwd
        return true;
    }
    return true;
}
