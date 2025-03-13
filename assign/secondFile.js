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


// import { addition, subtraction, division, multiply } from './firstFile.js';


// console.log(addition(50,4));        // 54
// console.log(subtraction(50,4));     // 46
// console.log(division(50,4));        // 12.5
// console.log(multiply(50,4));        // 200




// //////////---------------------------------------------------------------------------------------



// // // // Export All At Once way of ES Modules :-


// import { addition, subtraction, division, multiply } from './firstFile.js';


// console.log(addition(50,4));        // 54
// console.log(subtraction(50,4));     // 46
// console.log(division(50,4));        // 12.5
// console.log(multiply(50,4));        // 200




// //////////---------------------------------------------------------------------------------------



// // // // Aggregate way of ES Modules :-


// import * as shivaji from './firstFile.js';


// console.log(shivaji.addition(50,4));        // 54
// console.log(shivaji.subtraction(50,4));     // 46
// console.log(shivaji.division(50,4));        // 12.5
// console.log(shivaji.multiply(50,4));        // 200




//////////---------------------------------------------------------------------------------------



// // // Aggregate way of ES Modules :-


// import mathematics from "./firstFile.js";


// console.log(shivaji.addition(50,4));        // 54
// console.log(shivaji.subtraction(50,4));     // 46
// console.log(shivaji.division(50,4));        // 12.5
// console.log(shivaji.multiply(50,4));        // 200



//////////---------------------------------------------------------------------------------------


// // // Export Default way of ES Modules :-

import addition from "./firstFile.js";


console.log(addition(20,4)); 
// // // // Here, by the import name addition. You were expecting for the result 20 * 4 = 80;
// // // // But, in reality the export is set to default to that division only. 
// // // // So, the method specifies on the division is divide. 
// // // // Therefore, the result is 5;


// // // Here, if you are making the export default means that the only one i.e.. division is selected not others. It can be taken out on import side with any other name also but method is default that is divison only;