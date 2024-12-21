// index.js
const Dog = require('./Dog');
const Cat = require('./Cat');

// Create a Dog instance
const dog = new Dog('Buddy', 'Golden Retriever');
dog.sleep(); // Buddy is sleeping.
dog.eat(); // Buddy is eating.
dog.makeSound(); // Buddy, the Golden Retriever, barks: Woof!
dog.fetch(); // Buddy is fetching the ball!

// Create a Cat instance
const cat = new Cat('Whiskers', 'Black');
cat.sleep(); // Whiskers is sleeping.
cat.eat(); // Whiskers is eating.
cat.makeSound(); // Whiskers, the Black cat, meows: Meow!
cat.scratch(); // Whiskers is scratching the furniture!

setTimeout(() => console.log("1st log"), 1500);
setTimeout(() => console.log("2nd log"), 500);
setTimeout(() => console.log("3rd log"), 1000);