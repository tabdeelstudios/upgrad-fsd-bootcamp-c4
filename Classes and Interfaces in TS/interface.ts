interface Person {
    name: string;
}

interface Student extends Person {
    university: string;
}

class FSDStudent implements Student {
    university: string = "XYZ";
    name: string = "John";
}