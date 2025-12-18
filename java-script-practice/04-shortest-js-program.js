// ========================
// EMPTY JS FILE -> Shortest JS Program!
// ========================

// Even if a JS file is empty, JavaScript still does the following internally:

// 1️ Global Execution Context (GEC) is created
//    - Memory Phase:
//        - Global variables and functions are hoisted (none here, so memory empty)
//        - In browsers, the Global Object (window) is created
//        - 'this' in global scope points to window
//    - Code Phase:
//        - Executes code line by line (nothing here)

// 2️ Call Stack
//    - Global EC is pushed onto the call stack
//    - Functions are executed in their own Local Execution Contexts (LEC) if called
//    - After execution, LECs are popped, and finally Global EC is popped

// 3️ Window Object
//    - The 'window' object represents the browser window --> Window is global object created along Global Execution!
//    - Global variables become properties of window
//      Example:
//        var x = 10;
//        console.log(window.x); // 10
//    - Global functions also become methods of window
//      Example:
//        function sayHi() { console.log("Hi"); }
//        window.sayHi(); // "Hi"
//    - 'this' in global scope points to window --> a Variable
//      Example:
//        console.log(this === window); // true
//    - Window provides browser features:
//        alert(), setTimeout(), setInterval(), document, location, history, etc.

// 4️ Scope Lookup
//    - When JS executes console.log(x), it searches:
//        1. Local scope (current function)
//        2. Outer/parent scopes
//        3. Global scope → window in browsers
//    - If variable not found anywhere → ReferenceError

// 5️ Local Execution Context (LEC) Lifecycle
//    - Created when a function is called
//    - Holds local variables, parameters, and 'this' (points to window in non-strict mode global call)
//    - Once function finishes, LEC is popped off call stack and local variables are deleted

// ========================
// SUMMARY / LAYMAN ANALOGY
// ========================

// - The browser is a "room" → 'window' is the room itself
// - Global variables and functions = furniture in the room
// - 'this' in global scope = pointing to the room itself
// - Functions create their own "mini rooms" (LEC) when called
// - Call stack = stack of rooms being used
// - Even an empty file triggers:
//      - Global Execution Context creation
//      - Call stack setup
//      - Global object (window) setup
//      - Scope lookup rules
//      - 'this' pointing to window
//      - GEC remains until program ends


// NOTE:
// == (Loose Equality)

//  Compares values only
//  Automatically converts types (type coercion)

// 5 == "5"   // true


//  Why?
// JS converts "5" (string) → 5 (number), then compares.

//  Think like this:

// "== is friendly — it tries to make both sides look the same."

// === (Strict Equality)

//  Compares value AND type
//  No type conversion

// 5 === "5"  // false


//  Why?

// Left: number

// Right: string

// Types are different →  false

//  Think like this:

// "=== is strict — value AND type must match exactly."

// Simple Comparison Table
// Example	==	===
// 5 == "5"	true	
// 5 === "5"		false
// true == 1	true	
// true === 1		false
// null == undefined	true	
// null === undefined		false
// One-Line Rule (Easy to Remember)
// ==   → compares value (type conversion happens)
// ===  → compares value + type (no conversion)

// Best Practice (Important )

// Always use ===
// Avoid == unless you know exactly why you need it

// if (x === 10) {
//    // safe and predictable
// }

// var a =10;
// function b(){
//     var x=10;
// }
// console.log(window.a); ===  console.log(a); But console.log(window.a) works in browser only!

