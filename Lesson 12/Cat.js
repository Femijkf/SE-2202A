// Cat.js
const Animal = require('./Animal');

class Cat extends Animal {
    constructor(name, furColor) {
        super(name); // Call parent class constructor
        this.furColor = furColor; // Cat-specific property
    }

    // Overriding the makeSound method
    makeSound() {
        console.log(`${this.name}, the ${this.furColor} cat, meows: Meow!`);
    }

    // Cat-specific method
    scratch() {
        console.log(`${this.name} is scratching the furniture!`);
    }
}

module.exports = Cat;