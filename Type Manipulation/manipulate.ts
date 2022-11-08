// function readCredentialsNumber(arg: number): number {
//     return arg;
// }

// function readCredentialsString(arg: string): string {
//     return arg;
// }

// function readCredentialsBoolean(arg: boolean): boolean {
//     return arg;
// }


// function readCredentials2<Type>(arg: Type): Type {
//     return arg;
// }

// let userName = readCredentials2<string>("John");
// let userPhone = readCredentials2<number>(616161);
// let userLoggedIn = readCredentials2<boolean>(true);

interface Person {
    username: string;
    phone: number;
}

let value: keyof Person;

let value2: typeof value;

// string | number