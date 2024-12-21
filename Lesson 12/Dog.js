// Dog.js
const Animal = require('./Animal');

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent class constructor
        this.breed = breed; // Dog-specific property
    }

    // Overriding the makeSound method
    makeSound() {
        console.log(`${this.name}, the ${this.breed}, barks: Woof!`);
    }

    // Dog-specific method
    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}

module.exports = Dog;