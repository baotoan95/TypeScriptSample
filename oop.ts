class Student {
    public name: string;

    constructor(name:string, public age:number) {
        this.name = name;
    }

    run() {
        console.log(this.name + ' is running...');
    }

    static talk() {
        console.log('Student is talking...');
    }
}

class Employee extends Student{
    constructor(name:string, age:number) {
        super(name, age);
    }

    run() {
        super.run();
    }
}

let student = new Student('Bao Toan', 21);
student.run();

console.log(student.run === Student.prototype.run);

Student.talk();

// Create Employee
let empl = new Employee('Hong Tham', 33);
empl.run();
