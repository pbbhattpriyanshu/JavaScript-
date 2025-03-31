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

greet(); // Calling the function

// Find Which is datatype 

console.log(typeof greet);
console.log(typeof person);

