// ================================
// 0-basic.js
// JavaScript Basics (Beginner Friendly)
// Each concept is explained using comments
// ================================

// -------- VARIABLES --------

// var: function-scoped, hoisted, initialized as undefined
var a = 10;
console.log(a); // 10

// let: block-scoped, hoisted but NOT initialized (TDZ applies)
let b = 20;
console.log(b); // 20

// const: block-scoped, must be initialized, value cannot be reassigned
const c = 30;
console.log(c); // 30

// -------- UNDEFINED vs NOT DEFINED --------

var x;
console.log(x); // undefined (declared but no value yet)

// console.log(y); 
// ❌ ReferenceError: y is not defined (never declared)

// -------- DATA TYPES --------

let num = 100;           // number
let str = "Hello";        // string
let isActive = true;     // boolean
let nothing = null;     // null (intentional empty value)
let notAssigned;        // undefined

console.log(typeof num);        // number
console.log(typeof str);        // string
console.log(typeof isActive);   // boolean
console.log(typeof nothing);    // object (JS quirk)
console.log(typeof notAssigned);// undefined

// -------- OPERATORS --------

// Arithmetic operators
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2

// Comparison operators
console.log(5 == '5');   // true (checks value only)
console.log(5 === '5');  // false (checks value + type)

// -------- IF / ELSE --------

let votingAge = 18;

if (votingAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// -------- SWITCH --------

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// -------- LOOPS --------

// for loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop i =", i);
}

// while loop
let count = 1;
while (count <= 3) {
  console.log("While loop count =", count);
  count++;
}

// -------- FUNCTIONS --------

function add(p, q) {
  return p + q;
}

console.log(add(2, 3)); // 5

// Function expression
const multiply = function (m, n) {
  return m * n;
};

console.log(multiply(2, 3)); // 6

// Arrow function
const square = (n) => n * n;
console.log(square(4)); // 16

// -------- ARRAYS --------

let arr = [1, 2, 3];
console.log(arr[0]); // 1

arr.push(4);         // add at end
console.log(arr);    // [1,2,3,4]

// -------- OBJECTS --------

let user = {
  name: "Uday",
  role: "Learner",
  isActive: true
};

console.log(user.name); // Uday
console.log(user.role); // Learner

// -------- SCOPE --------

var globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}

scopeTest();
// console.log(localVar); //  Error: localVar is not defined

// -------- HOISTING --------

console.log(hoistedVar); // undefined (var hoisting)
var hoistedVar = 50;

// console.log(hoistedLet); //  TDZ error
let hoistedLet = 60;

// -------- TRUTHY & FALSY VALUES --------

// Falsy values in JavaScript:
// false, 0, -0, "", null, undefined, NaN

if (0) {
  console.log("This will not run");
} else {
  console.log("0 is falsy");
}

if ("hello") {
  console.log("Non-empty strings are truthy");
}

// -------- TYPE COERCION --------

console.log('5' + 1); // "51" (number is coerced to string)
console.log('5' - 1); // 4 (string is coerced to number)

// -------- ARRAY METHODS --------

let nums = [1, 2, 3, 4];

// forEach: runs a function for each element (no return)
nums.forEach(function (n) {
  console.log("forEach value:", n);
});

// map: transforms array and returns new array
let doubled = nums.map(function (n) {
  return n * 2;
});
console.log(doubled); // [2, 4, 6, 8]

// filter: selects elements based on condition
let evenNums = nums.filter(function (n) {
  return n % 2 === 0;
});
console.log(evenNums); // [2, 4]

// -------- OBJECT DESTRUCTURING --------

let personInfo = {
  name: "Uday",
  age: 22,
  role: "Developer"
};

const { name, age: personAge } = personInfo;
console.log(name); // Uday
console.log(personAge);  // 22

// -------- SPREAD OPERATOR --------

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a:1, b:2, c:3}

// -------- STRICT MODE --------

// 'use strict';
// Prevents usage of undeclared variables

// x = 10; //  ReferenceError in strict mode

// -------- END --------
// This file now covers:
// var, let, const
// undefined vs not defined
// data types & typeof quirks
// operators & type coercion
// truthy & falsy values
// if/else, switch
// loops
// functions
// arrays & array methods
// objects & destructuring
// spread operator
// scope & hoisting
// strict mode basics
