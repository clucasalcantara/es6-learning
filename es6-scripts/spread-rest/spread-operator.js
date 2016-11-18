// JS ES6 Study, this file contains the examples i've built when i'm studying
//spread operators and rest parameters

let max = Math.max(4,6,3,8);
console.log(max);
//This will return the maximum value

let numbers = [4,6,3,8];
let max = Math.max(numbers);
console.log(max);
//This will return a NaN beacuse Math.max doesn't accpet array as parameter, so
// lets change for a max.apply(); that accepts what we want.

let numbers = [4,6,3,8];
let max = Math.max.apply(null, numbers);

console.log(max);
//Now this works :)

//But this is uggly! Let's use some ES6 Features :)
let numbers = [4,6,3,8];
let max = Math.max(...numbers);

console.log(max);

//Wow, *_*, I liked xD MOOOORE

let numbers = [ 4,6,3,8];
let nemNumber = [3,4,6,7,2];

let concatArray = newNumber.concat(numbers);
console.log(concatArray);
//Simple, but too much code.

//With ES6 features
let numbers = [ 4,6,3,8];
let nemNumber = [3,4,6,7,2...numbers];

console.log(newNumber);

//With one less variable! Ha! :))
