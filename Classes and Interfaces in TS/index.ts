class User {
    readonly username: string; //data abstraction
    password: string;
    age: number;
    _address: string = "";

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    showData() {
        console.log("Hello, " + this.username);
    }

    editPassword(newPassword: string) {
        this.password = newPassword;
    }

    constructor(username: string, password: string, age: number) {
        this.username = username;
        this.password = password;
        this.age = age;
    }
}

class AdminUser extends User {
    email: string;

    constructor(username: string, password: string, age: number, email: string) {
        super(username, password, age);
        this.email = email;
    }

    showData() {
        console.log("Hello, " + this.username);
        console.log("Your email is : " + this.email);
    }
}

let john = new User("John", "abc123", 54);
john.showData();
// john.editPassword("abc123");

let adminJane = new AdminUser("Jane", "jane123", 36, "jane@hello.com");
adminJane.showData();

