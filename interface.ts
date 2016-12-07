interface Animal {
    name:string,
    isRun:boolean,
    desc?:boolean // optional field
}

class Dog implements Animal {
    public name:string;
    public isRun:boolean;

    constructor(name:string, isRun:boolean) {
        this.name = name;
        this.isRun = isRun;
    }
}

var dog = new Dog('Kiki', true);
var rooster:Animal = {
    "name" : "Ahihi",
    "isRun" : true,
    "desc" : true
}

function display(animal: Animal) {
    console.log("Name: " + animal.name + ", Run: " + animal.isRun + ", Special: " + animal.desc);
}

display(dog);
display(rooster);