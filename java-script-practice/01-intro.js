// ===================== JAVASCRIPT EXECUTION OVERVIEW =====================
// Reference: https://youtu.be/iLWTnMzWtj4?si=fFF4VeravntDw-QF

// JavaScript is a synchronous, single-threaded language.
// This means it executes one statement at a time, in order.

// When a JavaScript program runs, an Execution Context (EC) is created.
// The Execution Context has two main phases and components:

// 1) Memory Creation Phase (also called Variable Environment)
//    - Memory is allocated for variables and functions
//    - Variables declared with var are initialized as undefined
//    - Function declarations are stored with their complete code

// 2) Code Execution Phase (also called Thread of Execution)
//    - JavaScript executes the code line by line
//    - Values are assigned and functions are invoked

// JavaScript also uses a Call Stack
// - Call Stack manages Execution Contexts
// - Global Execution Context is pushed first
// - Each function call creates a new Execution Context
// - After function execution, its context is popped from the stack

// ===================== CODE EXAMPLE =====================

var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var secondsquare = square(n);
var foursquare = square(4);

console.log(secondsquare);
console.log(foursquare);

// ===================== EXECUTION FLOW =====================

// 1) Global Execution Context is created
//    Memory Phase:
//    n -> undefined
//    square -> function definition
//    secondsquare -> undefined
//    foursquare -> undefined

// 2) Code Execution Phase:
//    n = 2
//    square(n) is called -> new Execution Context created
//      num = 2
//      ans = 4
//      return 4
//    secondsquare = 4

//    square(4) is called -> new Execution Context created
//      num = 4
//      ans = 16
//      return 16
//    foursquare = 16

// 3) console.log prints:
//    4
//    16
