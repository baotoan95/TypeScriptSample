function getGreeting(name) {
    if (name == 'BaoToan') {
        greet = 'Welcome back, Bao Toan';
    }
    else {
        greet = 'Hello there';
    }
    console.log(greet);
    var greet; // hoisting
}
getGreeting('BaoToan');
var a = 1;
var b = 3;
if (a == 1) {
    var a_1 = 5;
    var b = 10;
}
console.log(a);
console.log(b);
var fullName = 'Bao Toan';
var age = 21;
var greeting = "My name is " + fullName + ", I'm " + age + " years old.";
console.log(greeting);
var arr = [8, 2, 3];
console.log(arr[0]);
var list = ['hello', 'ddd', 'abc'];
console.log(list[0]);
function printWeather() {
    console.log('Weather is coldy');
}
printWeather();
// Arrow function
var calulateSalary = function () {
    return 1000000;
};
var calulateSalary2 = function (bonus) { return 2000000 + bonus; };
console.log(calulateSalary());
console.log(calulateSalary2(100000));
// Default value function
function sayHello(name, desc) {
    if (name === void 0) { name = 'Bao Toan'; }
    if (desc === void 0) { desc = 'Handsome'; }
    console.log('Hello ' + name + desc);
}
sayHello(undefined, ' very handsome');
// Rest param
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i - 0] = arguments[_i];
    }
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
displayColors('Blue');
displayColors('Red', 'Gray');
//# sourceMappingURL=hoisting.js.map