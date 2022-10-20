class Person {
    constructor(username, userage, useremail) {
        this.username = username;
        this.userage = userage;
        this.useremail = useremail;
    }

    showDetails() {
        console.log(this.username + " is " + this.userage + " years old!");
    }
}

class Leader extends Person {
    constructor(username, userage, useremail, position) {
        super(username, userage, useremail);
        this.position = position;
    }

    showDetails() {
        console.log(this.username + " is " + this.userage + " years old! This person is a " + this.position);
    }
}

let john = new Person("John", "50", "john@hello.com");
john.showDetails();

let jane = new Leader("Jane", "40", "jane@hello.com", "Executive");
jane.showDetails();

let bob = new Leader("Bob", "40", "jane@hello.com", "Chairman");
bob.showDetails();