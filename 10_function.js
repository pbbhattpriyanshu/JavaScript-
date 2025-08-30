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

//Pass - call
abc(function (){
  console.log("Home");
})

// Concept 2. High order function - a func that return the function or accept the function

//accept
function high(name) {
  name();
}

high(function() {
  console.log("Piyush bhatt");
})

//return
function cars() {
  return function() {
    console.log("BMW, Porche, Mustang, Ferari, Dodge Challenger, Thar, G-Wagon");
  }
}

cars()(); //call func1 func2 - 2 bracket

// Concept 3. Pure vs impure functions

//pure func - a func that can't change outer value 
let count = 1;

function pure() {
  console.log("Didn't change any outer value");
}

//impure func - opposite of pure func
function impure(){
  count++;
}

impure(); //call
console.log(count); //after call then change

// Concept 4. Closures - a func that can return a func, that return func use the variable of parent func.
function papa() {
  let money = 500;
  return function son(){
    let batPrice = 399;
    let balance = money - batPrice;
    console.log("Remaining balance is", balance);
  }
}

papa()();

// Concept 5. Lexical Scoping - func inside the func, func inside the func * n times
function home() {
  let houseRoom = 7; //accessable under home func
  function huswife() {
    let parentsRoom = 1; //accessable under huswife func
    function son() {
      let mikeRoom = 3; //accessable under son func
      function daughter() {
        let makiRoom = 2; //accessable under daughter func
      }
    }
  }
}

// Concept 6. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Imediately Invoked BOOM!");
})();

// Concept 7. Hoisting (declaration and expression)
callMe() //call the func by line no. 143
// callMeAgain(); // Cannot access 'callMeAgain' before initialization

//run - Func Statement
function callMe() {  //line no. 146: creating a func
  console.log("Function hoisting applicable");
}
//Not run - func expression
let callMeAgain = function () {  //line no. 146: creating a func
  console.log("Function hoisting applicable");
}

// Mini Project - BMI Calculator
function bmi(weight, height) {
  return weight / (height * height) //weight - kg, height - m
}

let report = bmi(70, 1.83).toFixed(2);
console.log(report);

// Mini Project - Discount Calculator (HOF)
function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  }
}

// Electronics Product - 30% OFF, Clothes Product - 20% OFF, Kids Section - 50% OFF
let electronicsProduct = discountCalculator(30);
let clothesProduct = discountCalculator(20);
let kidSection = discountCalculator(50)

// Order Purchase
let tvPrice = electronicsProduct(12000);
let tShirt = clothesProduct(780);
let toyCar = kidSection(27000)

console.log("Tv Price After discount:", tvPrice); //8400
console.log("Tshirt Price after discount:", tShirt); //624
console.log("Toy Car Price after discount:", toyCar); //13500

// Example - Closure
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}

let c = counter();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
