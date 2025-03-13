// // // // Commonjs way of Doing the stuff:-

// const addFunc = require('./firstFile');

// console.log(addFunc(5,7));

// // // // // Here, we are getting the Output on Terminal as :-
// // // // // Step.1) Open the terminal and clear all the stuff.
// // // // // Step.2) Then, check the list (i.e., by command ls).  
// // // // // Step.3) Then, move inside the folder (i.e., by command cd).  
// // // // // Step.4) Then, check the file in which you want to run (i.e., by command ls).  
// // // // // Step.5) Finally, choose the file ((i.e., by command node secondFile.js) for the result.
// // // // // Therefore, you get the result as 12;


/////////---------------------------------------------------------------------------------------


// const secFileFunc = require('./firstFile');

// console.log(secFileFunc.addition(5,5));     // 10
// console.log(secFileFunc.subtraction(5,5));  // 0
// console.log(secFileFunc.multiply(50,5));     // 250
// console.log(secFileFunc.division(5,5));     // 1

// // // // Instead of using node secondFile.js again and again for the result.
// // // // Using node --watch secondFile.js It will run automatically if any thing updated.




//////////************************************************************************************ */
//////////---------------------------------------------------------------------------------------
//////////************************************************************************************ */



// // // // ES Modules (ECMAScript Modules) way of Doing the same above stuff:-


// // // Named Export way of ES Modules :-


import { addition, subtraction, division, multiply } from './firstFile.js';


console.log(addition(50,4));        // 54
console.log(subtraction(50,4));     // 46
console.log(division(50,4));        // 12.5
console.log(multiply(50,4));        // 200