let fname = "Bao Toan";
let clazz = "CD13TH";
let obj = {
    name : "Quynh"
}

export{fname, clazz, obj}

// Default export
let greeting = "Hello";

export default greeting;

// Export function
export function getDefaultName() {
    return "Default name is Bao Toan";
}

export class Employee {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`${this.name} says Hello to you.`);
    }
}