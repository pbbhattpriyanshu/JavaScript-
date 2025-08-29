// functions

//Syntax
function functionName(parameters) {
  // Code to run (machine's work)
  return someValue; // optional
}

// Example 1: Function Without Input
function sayHello() {
  console.log("Hello there!");
}

// Call (use the machine)
sayHello();

// Example 2: Function With Input (Parameters)
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Example 2.1: Function With or without Input (default Parameters)
function sub(val1 = 0, val2 = 0) {
    console.log(val1 - val2);
}

// Example 2.2: Function With multiple Input ( Rest Operator (...))
//Explanation:
// ...numbers collects all arguments into an array [1,2,3,4,5].
// Perfect for unknown number of inputs.
function sumOfAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumOfAll(1,2,3,4,5));

// Example 2.3  Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5, 6]



// Example 3: Function That Returns Something
function add(a, b) {
  return a + b;
}

//function expression
let func = function () {
    console.log("lolo");
}

// Arrow function
let wishes = () => {
    console.log("Happy birthday");
}

let sum = add(1,5);
console.log("Sum:",sum);

// Concept 1. first class function - func treats like value
function abc(val) {
  val();  
}

abc(function (){
  console.log("Piyush bhatt");
})
