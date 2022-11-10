// export default function sayHello(username: string) {
//     console.log("Hello " + username);
// }

export interface UserLogin {
    isUserLoggedIn(username: string, password: string): boolean;
}

// export class UserLogin {
//     isUserLoggedIn(username: string, password: string): boolean {
//         console.log("Logged in");
//         return true;
//     }
// }

