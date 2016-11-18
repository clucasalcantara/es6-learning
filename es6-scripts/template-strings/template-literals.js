// JS ES6 Study, this file contains the examples i've built when i'm studying th
//e template literals and template strings

// You can use double or single quotes to create strings
let name = "Ryan";

// Replacing the quotes for the ` (back) character, hey! Stills a string! :))
let name = `Ryan`;
let name = `Ryan
with a new line without problems`;
console.log(name);

// Concat strings, are beautiful now!

// Before ES6 template string
let firstName = "Ryan";
let lastName = 'Alfred';

// So uggly :()
console.log("My name is " + firstName + " " + lastName);

// And now with ES6 Power!
console.log(`My name is ${firstName} ${lastName}`);
// Oh God, I'm crying!!! <3 <3

// Now with some block of code <3
let person = {
    firstName: 'Ryan',
    lastName: 'Alfred',
    sayName() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

let name = person.sayName();
