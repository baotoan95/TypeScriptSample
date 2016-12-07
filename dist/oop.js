var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Student = (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.run = function () {
        console.log(this.name + ' is running...');
    };
    Student.talk = function () {
        console.log(this.name + ' is talking...');
    };
    return Student;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        _super.call(this, name);
        console.log(name);
    }
    Employee.prototype.run = function () {
        _super.prototype.run.call(this);
    };
    return Employee;
}(Student));
var student = new Student('Bao Toan');
student.run();
console.log(student.run === Student.prototype.run);
Student.talk();
// Create Employee
var empl = new Employee('Hong Tham');
empl.run();
//# sourceMappingURL=oop.js.map