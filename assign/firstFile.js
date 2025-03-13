// // // // Commonjs way of Doing the stuff:-

// const addition = (a, b) => {
//     return (a + b);
// };

// const subtraction = (a, b) => {
//     return (a - b);
// };

// const multiply = (a, b) => {
//     return (a * b);
// };

// const division = (a, b) => {
//     return (a / b);
// };


// module.exports.addition = addition;
// module.exports.subtraction = subtraction;
// module.exports.multiply = multiply;
// module.exports.division = division;


// // // // Commonjs way of exports using property.

//////////************************************************************************************ */
//////////---------------------------------------------------------------------------------------
//////////************************************************************************************ */




// // // // ES Modules (ECMAScript Modules) way of Doing the same above stuff:-


// // // Named Export way of ES Modules :-

// export const addition = (a, b) => {
//     return (a + b);
// };

// export const subtraction = (a, b) => {
//     return (a - b);
// };

// export const multiply = (a, b) => {
//     return (a * b);
// };

// export const division = (a, b) => {
//     return (a / b);
// };


//////////---------------------------------------------------------------------------------------


// // // Export All At Once way of ES Modules :-


const addition = (a, b) => {
    return (a + b);
};

const subtraction = (a, b) => {
    return (a - b);
};

const multiply = (a, b) => {
    return (a * b);
};

const division = (a, b) => {
    return (a / b);
};


export {addition, subtraction, multiply, division};