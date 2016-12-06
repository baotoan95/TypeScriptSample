function getGreeting(name) {
    if(name == 'BaoToan') {
        greet = 'Welcome back, Bao Toan';
    } else {
        greet = 'Hello there';
    }
    console.log(greet);

    var greet; // hoisting
}

getGreeting('BaoToan');

let a = 1;
var b = 3;

if(a == 1) {
    let a = 5;
    var b = 10;
}

console.log(a);
console.log(b);

let fullName : string = 'Bao Toan';
let age: number = 21;
let greeting: string = `My name is ${fullName}, I'm ${age} years old.`;
console.log(greeting);

let arr:number[] = [8, 2, 3];
console.log(arr[0]);

let list:Array<string> = ['hello', 'ddd', 'abc'];
console.log(list[0]);

function printWeather() : void {
    console.log('Weather is coldy');
}

printWeather();

// Arrow function
let calulateSalary = function() {
    return 1000000;
}

let calulateSalary2 = (bonus:number) => 2000000 + bonus;

console.log(calulateSalary());
console.log(calulateSalary2(100000));

// Default value function
function sayHello(name:string = 'Bao Toan', desc:string = 'Handsome') : void {
    console.log('Hello ' + name + desc);
}

sayHello(undefined, ' very handsome');

// Rest param
let displayColors = function(...colors:string[]) {
    for(let i in arguments) {
        console.log(arguments[i]);
    }
}

displayColors('Blue');
displayColors('Red', 'Gray');