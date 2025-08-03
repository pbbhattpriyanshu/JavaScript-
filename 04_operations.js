// console.log("LECTURE 4 - OPERATIONS");

// let a = 5;
// let b = 2;

// let sum = a + b; // addition
// let sub = a - b; // subtraction
// let mul = a * b; // multiplication
// let div = a / b; // division
// let mod = a % b; // modulus
// let exp = a ** b; // exponentiation

// console.log("Sum: ", sum);
// console.log("Subtraction: ", sub);
// console.log("Multiplication: ", mul);
// console.log("Division: ", div);
// console.log("Modulus: ", mod);
// console.log("Exponentiation: ", exp);


// Logical Operators

// console.log(2 <= 3); // true
// console.log(6 == 2); // false
// console.log(2 == 2); // true
// console.log(2 != 3); // true
// console.log(2 != 2); // false


// console.log("2">1); // true
// console.log("2"<1); // false
// console.log("2"==1); // true


// console.log(undefined == 0); // false
// console.log(null == 0); // false
// console.log(null == undefined); // true
// console.log(true == 1); // true
// console.log(false == 0); // true


// === Strict comparison not only number but also type 
// == not strict
// != not strict
// !== strict

// console.log("2" === 2); // false
// console.log(2 == '2'); //true
// console.log("2" != 2); // false
// console.log(2 !== '2'); //true

// ternary operator
// condition ? valueIfTrue : valueIfFalse

let age = 10;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote); 

let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);

// When to Use Ternary
// ✅ Best for short if-else
// ✅ Great for inline decisions
// ❌ Avoid very long or complex conditions → use normal if-else instead


// instanceof in JavaScript – the detective 🕵️‍♂️ that checks what type of object you’re dealing with.

//syntax -> object instanceof Constructor

let arr = [1, 2, 3];

console.log(arr instanceof Array);      // true
console.log(arr instanceof Object);     // true
console.log(arr instanceof String);     // false


function Person(name) {
  this.name = name;
}

let john = new Person("John");

console.log(john instanceof Person);  // true
console.log(john instanceof Object);  // true
console.log(john instanceof Array);   // false

// Key Points
// Checks the prototype chain → if the object is derived from that constructor at any level.
// Does not check for type of primitives (like numbers, strings):

console.log(42 instanceof Number); // false (primitive)
console.log(new Number(42) instanceof Number); // true (object)