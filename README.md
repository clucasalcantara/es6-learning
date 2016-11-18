# Learning ES6

## Hi, here you'll find all exercises that i'm doing and have done since I started to study the new ES6 features.

## <b>Chapter One:<b>
### Let and Const
* let and const are new variables declaration on ES6 that gives you power for create
block scoped variables, and when you are using const, also forbids you from change them.

### Template literals
* Using the ` character to create a template string with easy replacement of content
like:
```JavaScript
let languageName = "JavaScript";
console.log(`${languageName} syntax highlighting`;
```
that corresponds to *JavaScript syntax highlighting* :)
- - - -

## <b>Chapter Two:<b>
### Arrow functions
* The inspiration for arrow functions implementation have origin on CoffeScript
syntax:

````CoffeScript
add = (a,b) ->
    a + b

console.log( add(2,3) );
````

and the Arrow Function equivalent, thats very useful for functional programming
````JavaScript
let add = (a,b) => a + b;
console.log( add(2,3) );
````
