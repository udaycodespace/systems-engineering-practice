// ===================== FUNCTION INVOCATION =====================

// Function Invocation means calling or executing a function
// so that the code inside the function runs.

// A function is invoked using parentheses ()

// When a function is invoked:
// 1) A new Execution Context is created
// 2) The function is pushed onto the Call Stack
// 3) Parameters receive values from arguments
// 4) The function body executes line by line
// 5) A return value is sent back to the caller
// 6) The function Execution Context is removed from the Call Stack

// ===================== EXAMPLE =====================

// function square(num){
//     return num * num;
// }
// // square         -> function reference
// // square()       -> function invocation
// square(4);        // Function invocation
// square(10);       // Function invocation
// console.log(square(4));
// console.log(square(10));

var x = 1;        // Global variable x is declared and assigned 1

a();              // Function a() is called → works because of hoisting
b();              // Function b() is called → works because of hoisting

console.log(x);   // LOOKUP: Global scope → x = 1 → prints 1

function a() {
    var x = 10;   // Local variable x inside a() scope
    console.log(x); // LOOKUP: a() local scope → x = 10 → prints 10
} 
// After a() finishes, its Local Execution Context is popped off the call stack
// All local variables inside a() (like x=10) are deleted

function b() {
    var x = 100;  // Local variable x inside b() scope
    console.log(x); // LOOKUP: b() local scope → x = 100 → prints 100
} 
// After b() finishes, its Local Execution Context is popped off the call stack
// All local variables inside b() (like x=100) are deleted

/*
Call Stack & Execution Contexts:

1. Global Execution Context (GEC) created → pushed onto call stack
   - Functions a() and b() hoisted
   - Global variable x = 1

2. a() called → new Local Execution Context (LEC) for a() pushed onto call stack
   - Local x = 10
   - console.log(x) → prints 10
   - a() finishes → LEC popped off call stack → x=10 deleted

3. b() called → new LEC for b() pushed onto call stack
   - Local x = 100
   - console.log(x) → prints 100
   - b() finishes → LEC popped off call stack → x=100 deleted

4. Back to Global Execution Context
   - console.log(x) → global x = 1 → prints 1
   - Global EC stays until program ends
*/
