# Learning ES6

## Hi, here you'll find all exercises that i'm doing and have done since I started to study the new ES6 features.

#### <b>Chapter One:<b>
##### Let and Const
* let and const are new variables declaration on ES6 that gives you power for create
block scoped variables, and when you are using const, also forbids you from change them.

##### Template literals
* Using the ` character to create a template string with easy replacement of content
like:
```JavaScript
let languageName = "JavaScript";
console.log(`${languageName} syntax highlighting`;
```
that corresponds to *JavaScript syntax highlighting* :)
- - - -

#### <b>Chapter Two:<b>
###### Arrow functions
* The inspiration for arrow functions implementation have origin on CoffeScript
syntax:

````CoffeScript
add = (a,b) ->
    a + b

console.log( add(2,3) );
````

###### and the Arrow Function equivalent, thats very useful for functional programming
````JavaScript
let add = (a,b) => a + b;
console.log( add(2,3) );
````

###### So, arrow functions are lexically scoped functions with a simplified syntax and because of scope allow us to access parental scope inside forEach, forIn, and others functions easily.
- - - -
#### <b>Chapter Three:<b>
###### Spread Operators and Rest Parameters
* The feature for spread operators on javascript helps us to access any numbers of
arguments passed to a function, simplifying the quantity of written code and helping at the semantic look of your code.

Before ES6:
````javascript
let sum = function() {
    return Array.prototype.reduce.call(arguments,(prev, curr) => {
        return prev + curr;
    });
}

console.log(sum(2,3,4,5));
````

After ES6:
````javascript
let sum = function(...args) {
    return args.reduce((prev, curr) => prev + curr);
};

console.log(sum(2,3,4,5));
````
- - - -
#### <b>Chapter Four:<b>
###### Destructuring
* Destructuring is a new feature that allows u to get data from object or array easier

Before ES6:
````javascript
var Router = require('react-router').Router;
````

After ES6:
````javascript
import { Router } from 'react-router';
````
- - - -
#### <b>Chapter Five:<b>
###### Using gulp and babel
* Gulp is a JS task manager and babel its js lib who allow u to transpile your ES6
code into es5, or keep es6 depending of your task (That's cool :)
* Check it out on the gulfile.js (Where the tasks are :) )
[Go to file]('https://github.com/clucasalcantara/es6-learning/blob/master/gulpfile.js')

* Doubts on gulp and babel installation: [Using es6 with gulp and babel]('https://markgoodyear.com/2015/06/using-es6-with-gulp/')
