'use strict';
// JS ES6 Study, this file contains the examples i've built when i'm studying
// Promises, it is a solutions for the callback hell.


// For examples, using the fetch API that do requests HTTP


//Callback hell
getData(function (x) {
    getMoreData(x, function (y) {
        getMoreData(y, function (z) {
            console.log(z);
            //...
        });
    });
});

//Using Promise
let getData = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(a), 500);
    })
};
let getMoreData = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(a + b), 500);
    })
};

getData(1)
    .then((res) => getMoreData(res, 2))
    .then((res2) => getMoreData(res2, 3))
    .then((data) => console.log(data))



// More examples about promise uses
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Goo to go');
    }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 - the promising');
    }, 1500);
});

//The all method, it's how you handle multiple promises
Promise.all([myPromise, myPromise2])
    .then((data) => {
        console.log(data);
    })
// This method only works if all promises resolve, if one fails will be on catch
// block
    .catch((err) => {
        console.log(err);
    });
