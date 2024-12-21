// Base class Animal
class Animal {
    constructor(name, internalId) {
        this.name = name; // public property
        this._internalId = internalId; // private property (indicated by "_")
    }

    // Getter for internalId
    getInternalId() {
        return this._internalId;
    }

    // Setter for internalId
    setInternalId(id) {
        this._internalId = id;
    }

    // Common method sleep
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    // Common method eat
    eat() {
        console.log(`${this.name} is eating.`);
    }

    // Method to be overridden by subclasses
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Dog class extending Animal
class Dog extends Animal {
    constructor(name, internalId, breed) {
        super(name, internalId); // Call parent class constructor
        this.breed = breed; // specific to Dog
    }

    // Overriding makeSound method
    makeSound() {
        console.log(`${this.name}, the ${this.breed}, barks: Woof!`);
    }

    // Specific method for Dog
    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}

// Cat class extending Animal
class Cat extends Animal {
    constructor(name, internalId, furColor) {
        super(name, internalId); // Call parent class constructor
        this.furColor = furColor; // specific to Cat
    }

    // Overriding makeSound method
    makeSound() {
        console.log(`${this.name}, the ${this.furColor} cat, meows: Meow!`);
    }

    // Specific method for Cat
    scratch() {
        console.log(`${this.name} is scratching the furniture!`);
    }
}

// Example usage
const dog = new Dog("Buddy", 101, "Golden Retriever");
dog.sleep(); // Buddy is sleeping.
dog.eat(); // Buddy is eating.
dog.makeSound(); // Buddy, the Golden Retriever, barks: Woof!
dog.fetch(); // Buddy is fetching the ball!

const cat = new Cat("Whiskers", 102, "Black");
cat.sleep(); // Whiskers is sleeping.
cat.eat(); // Whiskers is eating.
cat.makeSound(); // Whiskers, the Black cat, meows: Meow!
cat.scratch(); // Whiskers is scratching the furniture!