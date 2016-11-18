// JS ES6 Study, this file contains the examples i've built when i'm studying
//spread operators and rest parameters

// So, imagine, if u want to sum all numbers passed by parameter to a function
let sum = function() {
    return Array.prototype.reduce.call(arguments,(prev, curr) => {
        return prev + curr;
    });
}

console.log(sum(2,3,4,5));

// Reduce is a function that allows you to iterate over and object or even a array
// and take the values and do a lot of things... Ugly no?

//For reduce undestanding: https://www.youtube.com/watch?v=Wl98eZpkp-c

//So, lets use the es6 rest parameters
let sum = function(...args) {
    return args.reduce((prev, curr) => prev + curr);
};

console.log(sum(2,3,4,5));

//BEAUTIFULL!!

// The rest parameters are identified by ... before the args, they allow us to
// use the prototype form of an object or array without explicit declaration like
// the example above this.


//THE MDN MULTIPLIER Example

//For map undestanding see: https://www.youtube.com/watch?v=bCqtb-Z5YGQ
let multiply = (mul, ...numbers) => {
    return numbers.map((n) => {
        return mul * n
    });
}

let result = multiply(2,3,4,5);
console.log(result);
