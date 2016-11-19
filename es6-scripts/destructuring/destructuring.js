// JS ES6 Study, this file contains the examples i've built when i'm studying
//destructuring

//Extracting data from and object using destructuringm new ES6 features
let person = {
    name: "Ryan",
    age: "27",
    location: "Toronto"
}

person.age; //30
person["age"]; //30 too

//Now using destructuring
let { age: personAge } = person;
//First thing is the key of data, right of the key we have the new variable who
//will hold this data, and last thing is from where you're extracting the data.

console.log(personAge); // Also show 30

// But you dont need a new variable to hold the extracted data, you can use
let { age } = person;
console.log(age); // Also shows 30

//You can get multiple values Also
let { age, location: currentLocation } = person;
console.log(age, currentLocation);

// In ES6 you have the computed properties of an object, who let you do this
let key = "age";
let {[key] : keyAge} = person;
console.log(keyAge); //Also show 30 :)

//Now lets see destructuring on arrays
let numbers = [ 1,2,3,4];

//Without destructuring
let first  = numbers[0];
let second = numbers[1];

//Using destructuring u can do this on one line! :)
let [first,second] = numbers;
console.log(first, second); //Show 1,2

//With interval
let [first,second,,fourth] = numbers;
console.log(first, second, fourth); // Shows 1,2,4

//And u can associate a spread operator on this thing to get the rest of the array
let [first,second,...theRestOfNumbers];
console.log(first, second, theRestOfNumbers); //Show 1,2,[3,4];




//Example of destructuring use on React app
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, Link} from 'react-router';
//This is a destructuring syntax

//The same imports above with es5 syntax will be like:
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Link = require('react-router').Link;

let App = React.createClass({
    render() {
        return (
            <div>
                <h1>My app</h1>
                <Link to="/somewhere">A Link</Link>
            </div>
        )
    }
});

ReactDom.render (
    (
        <Router>
            <Route path="/" component={App} />
        </Router>
    ), document.getElementById('app'));
);
