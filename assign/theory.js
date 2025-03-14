/***
 * 
 * * * * * ES Modules in Node.js :-
 * 
 * 
    1.) ES Modules (ECMAScript Modules) allow you to use import and export syntax. 
        They have been available in Node.js since version 12.

    2.) To enable ES Modules, you can either:
        • Name your file with the .mjs extension, or
        • Set "type": "module" in your package.json. (Recommended)

    3.) Use import and export instead of require and module.exports.
 
    4.) After Node.js v14.8, you can use top-level await when ES Modules are enabled.

    5.) We'll use ES Modules in this course as it's part of the ECMAScript standard and 
        a more modern approach. Don’t worry, even if a package uses CommonJS, you 
        can import it into ES Modules. However, importing ES Module packages into 
        CommonJS may cause issues, as some packages have switched exclusively to 
        ES Modules.

 * 
 * 
 * 
 * 
 */