'use strict';

//The fetch method returns us a promise, allowing us to use then to handle
// our api data
fetch('http://api.icndb.com/jokes/random/10')
    .then((res) => {
    // The res object return a method json, this method could receive an arrow
    // function as parameter to get data from the object
        res.json().then((data) => {
            console.log(data);
        });
    })
    .catch((err) => {
        console.log(err);
    })
