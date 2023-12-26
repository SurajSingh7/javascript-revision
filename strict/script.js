
/*

"use strict"
a=8;
console.log(a)

<......output...>

script.js:3 Uncaught ReferenceError: a is not defined
    at script.js:3:2

*/

// Normal
// function fun (a,b,b){
//     console.log(a+b+b);   // output--> 70
// }

// fun(10,20,30);


"use strict"
function fun (a,b,b){
    console.log(a+b+b);   // output--> Uncaught SyntaxError: Duplicate parameter name not allowed in this context (at script.js:24:19)
}

fun(10,20,30);


