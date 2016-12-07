//Using a little bit more of es6 to import our module
import myModule from '../es6-scripts/modules/modules';
import { add, subtract } from '../es6-scripts/modules/math'
//On ES6 you can remove .js from your imports

myModule('hot');

// Now you have access to your module functions
const total = add(2,4);

const subtraction = subtract(10,2);
