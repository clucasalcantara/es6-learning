// JS ES6 Study, this file contains the examples i've built when i'm studying
//arrow functions

//CoffeScript inspiration
add = (a,b) ->
    a + b;
console.log(add(2,3));

//And arrow function use:
let add = (a,b) => a + b;
console.log(add(2,3));

//More examples
let numbers = [2,3,4,5,6,7];

//Without arrow function
let doubled = numbers.map(function(n) {
    return n*2;
});

console.log(doubled);
//See map utilization on xpto

// And now with arrow function \o/
let doubled = numbers.map((n) => n*2);
console.log(doubled);

//More code =, now with an object! =D
// Interesting thing, arrow functions has a lexical scope, that prevents her to access
// the let scope, on this example below:
let person = {
    name: 'Jarvis',
    sayName: () => {
        console.log(`Hi Sir, I'm ${this.name}, your personal assistent`);
    }
}

person.sayname();

//This will result on a reference error on variable name, so we have do declare
// functions inside a object in a different way:

let person = {
    name: 'Jarvis',
    sayName() {
        console.log(`Hi Sir, I'm ${this.name}, your personal assistent`);
    }
}

person.sayname();
//This will work :), just remove the double dots and the arrow too.



//Now more examples :)
let person = {
    name: 'Jarvis',
    hobbies: [ 'Robots', 'Beer', 'IoT'],
    showHobbies: function() {
        this.hobbies.forEach(function(hobby) {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
}
person.showHobbies();

//This will result on a undefined error for this.name, because our forEach are
//outside the name variable scope, so we need to turns this into an arrow function
//beacuse her lexical scope give us acces to parent scope too.
let person = {
    name: 'Jarvis',
    hobbies: [ 'Robots', 'Beer', 'IoT'],
    showHobbies: function() {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
}
person.showHobbies();
//And now works :)
