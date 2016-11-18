// JS ES6 Study, this file contains the examples i've built when i'm studying the let declaration of variables.

// Inside a conditional loop, proving the let blockscope
if (true) {
    let name = "Ryan";
}
console.log(name);
//Results on undefined variable name

if (true) {
    var name = "Ryan";
}
console.log(name);
// Results on Ryan

//More let examples

//inside a for loop before es6
for(var i=0; i<10; i++) {
    console.log(i);
}
console.log('outsideloop', i);
//Results on a i=10 showing on console

//inside a for loop es6 let version
for(let i=0; i<10; i++) {
    console.log(i);
}
console.log('outsideloop', i);
//Results on a reference error, that comproves the let blockscope.
