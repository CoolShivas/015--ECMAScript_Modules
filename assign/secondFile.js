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


const secFileFunc = require('./firstFile');

console.log(secFileFunc.addition(5,5));     // 10
console.log(secFileFunc.subtraction(5,5));  // 0
console.log(secFileFunc.multiply(5,5));     // 25
console.log(secFileFunc.division(5,5));     // 1


//////////************************************************************************************ */
//////////---------------------------------------------------------------------------------------
//////////************************************************************************************ */