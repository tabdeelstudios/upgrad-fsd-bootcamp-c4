class Person {
    userName;

    constructor(userName) {
        this.userName = userName;
    }

    sayHello() {
        console.log("Hi, I'm " + this.userName);
    }
}

class Student extends Person {
    address;

    constructor(userName, address) {
        super(userName);
        this.address = address;
    }

    sayHello() {
        console.log("Hi, I'm " + this.userName + "\nand my address is : " + this.address);
    }
}

const newUser = new Student("John", "India");

newUser.sayHello();


