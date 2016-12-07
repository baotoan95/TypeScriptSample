var Dog = (function () {
    function Dog(name, isRun) {
        this.name = name;
        this.isRun = isRun;
    }
    return Dog;
}());
var dog = new Dog('Kiki', true);
var rooster = {
    "name": "Ahihi",
    "isRun": true,
    "desc": true
};
function display(animal) {
    console.log("Name: " + animal.name + ", Run: " + animal.isRun + ", Special: " + animal.desc);
}
display(dog);
display(rooster);
//# sourceMappingURL=interface.js.map