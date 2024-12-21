// Animal.js

// Class with private variables using closure
class Animal {
    constructor(name) {
        this.name = name;

        // Private variable using closure
        let __internalId__ = null;

        // Getter method
        this.getInternalId = function () {
            return __internalId__;
        };

        // Setter method
        this.setInternalId = function (id) {
            __internalId__ = id;
        };
    }

    // Method for sleeping
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    // Generic makeSound method
    makeSound() {
        console.log(`${this.name} makes a generic animal sound.`);
    }

    // Method for eating
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

module.exports = Animal;