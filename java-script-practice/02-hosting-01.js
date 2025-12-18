var x=7;
// Demonstrating the difference between fn and fn()
function getName() {
    console.log("Hello World");
    // no return statement
}
console.log(getName);   
// Prints the function reference (the function code itself)
console.log(getName()); 
// Step 1: getName() runs -> prints "Hello World"
// Step 2: function returns undefined (no return statement)
// Step 3: console.log prints undefined
