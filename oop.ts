class Student {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(this.name + ' is running...');
    }

    static talk() {
        console.log(this.name + ' is talking...');
    }
}

class Employee extends Student{
    constructor(name) {
        super(name);
        console.log(name);
    }

    run() {
        super.run();
    }
}

let student = new Student('Bao Toan');
student.run();

console.log(student.run === Student.prototype.run);

Student.talk();

// Create Employee
let empl = new Employee('Hong Tham');
empl.run();
