import {fname as name, clazz, obj, default as greet, getDefaultName, Employee} from 'src/moduleB.js';

//clazz = "ABC"; // Not change
obj.name = "Changed";

console.log(obj.name);
console.log('Hello ' + name + ", you're in " + clazz);

// Get export default
console.log(greet);

// Import function
console.log(getDefaultName());

// Import class
let employee = new Employee('Hoang');
employee.sayHello();