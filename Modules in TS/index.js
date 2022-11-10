"use strict";
// import sayHello from "./module.js"
exports.__esModule = true;
exports.ImplementLogin = void 0;
var ImplementLogin = /** @class */ (function () {
    function ImplementLogin() {
    }
    ImplementLogin.prototype.isUserLoggedIn = function (username, password) {
        console.log("Logged in");
        return true;
    };
    return ImplementLogin;
}());
exports.ImplementLogin = ImplementLogin;
// let john = new ImplementLogin();
// let john = new UserLogin();
// john.isUserLoggedIn("john", "john123");
