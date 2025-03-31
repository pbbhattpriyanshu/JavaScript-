// Primitive data types
// call by value 
// 7 types : String, Number, BigInt, Boolean, undefined, null, Symbol

const score = 100; // Number
const name = "John"; // String
const isActive = true; // Boolean
const bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
const undefinedValue = undefined; // Undefined
const nullValue = null; // Null
const symbolValue = Symbol("unique"); // Symbol

// Example of primitive data types

// Non-primitive data types
// Reference data types
// Object, Array, Function

const heros = ["Ironman", "Thor", "Hulk"]; // Array


const person = {
  name: "John",
  age: 30,
  isActive: true,
}; // Object

const greet = function () {
  console.log("Hello, Piyush!");
}; // Function

// Example of non-primitive data types

//greet(); // Calling the function

// Find Which is datatype 

// console.log(typeof greet);
// console.log(typeof person);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Management in JavaScript

// Stack (Primitive) vs Heap (Non-Primitive)

// Stack: Memory allocation for primitive data types (fixed size, stored in a contiguous block of memory)
// Heap: Memory allocation for non-primitive data types (dynamic size, stored in a non-contiguous block of memory)
// Stack is managed by the compiler, while heap is managed by the programmer
// Stack is faster than heap because of its fixed size and contiguous memory allocation
// Heap is slower than stack because of its dynamic size and non-contiguous memory allocation
// Stack is used for function calls and local variables, while heap is used for dynamic memory allocation

let myName = "Piyush"; // Stack (Primitive)
let anotherName = myName; // Stack (Primitive)
anotherName = "Priyanshu"; // Stack (Primitive)

//console.log(anotherName);
//console.log(myName);

// anotherName is now "Priyanshu" because it is a copy of myName, which is a primitive data type
// myName is still "Piyush" because primitive data types are passed by value

let userOne = {
  email: "user@google.com",
  upi: "user@upi",
  isActive: true,
  app: "Gpay"
}

// 
// user is a reference to the object in heap memory

let userTwo = userOne;  // userTwo is a reference to the same object in heap memory

userTwo.app = "PhonePe"; // Changing the app property of userTwo
// This will also change the app property of userOne because they both point to the same object in heap memory

//console.log(`userOne = ${userOne.app} userTwo = ${userTwo.app}`); // Both are same

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// String 

const gameName = "BGMI"

console.log(gameName.length); // Length of string
console.log(gameName[0]); // First character of string
console.log(gameName[1]); // Second character of string
console.log(gameName[2]); // Third character of string
console.log(gameName[3]); // Fourth character of string

console.log(gameName.charAt(0)); // First character of string using charAt() method
