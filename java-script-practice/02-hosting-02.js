// ======================= HOISTING PRACTICE =======================
//Hoisting is a JavaScript behavior where variables and functions are allocated memory before execution.
// Variables declared with var get undefined, while function declarations get their complete function definition.
// Memory allocation happens first, execution happens later.

// Undefined vs Not Defined
// undefined  -> variable exists but value is not assigned yet
// not defined -> variable was never declared

// ---------------------------------------------------------------
// CASE 1: Accessing variables and functions before declaration
// ---------------------------------------------------------------

// getName();           // TypeError: getName is not a function
// console.log(x);      // undefined
// console.log(getName); // undefined

// Reason:
// - var x is hoisted and initialized as undefined
// - arrow function is treated like a variable
// - function body is NOT hoisted for arrow functions

// ---------------------------------------------------------------
// CASE 2: Variable declaration
// ---------------------------------------------------------------

var x = 7;

// Before this line, x exists as undefined
// After this line, x = 7

// ---------------------------------------------------------------
// CASE 3: Arrow function (acts like a variable)
// ---------------------------------------------------------------

var getName = () => {
    console.log("Hello World");
};

// Arrow functions are hoisted as undefined
// They cannot be called before initialization

getName();            // Hello World
console.log(x);       // 7
console.log(getName); // function reference

// ---------------------------------------------------------------
// CASE 4: Function declaration (fully hoisted)
// ---------------------------------------------------------------

// function sayHello() {
//     console.log("Hello Uday");
// }

// sayHello();          // Works even if called before definition
// console.log(sayHello); // Function definition

// ---------------------------------------------------------------
// KEY TAKEAWAYS
// ---------------------------------------------------------------

// Hoisting means memory allocation happens before execution
// var            -> hoisted and initialized as undefined
// function fn()  -> fully hoisted with its body
// arrow function -> hoisted as undefined (like a variable)

// If a variable is not declared at all, accessing it causes ReferenceError

var getName = () => {
    console.log("Hello World");
}