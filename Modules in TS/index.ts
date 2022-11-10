// import sayHello from "./module.js"

// sayHello("John")

import { UserLogin } from "./userActions/login/login";

class ImplementLogin implements UserLogin {
    isUserLoggedIn(username: string, password: string): boolean {
        console.log("Logged in");
        return true;
    }
}

export { ImplementLogin };

// let john = new ImplementLogin();

// let john = new UserLogin();
// john.isUserLoggedIn("john", "john123");