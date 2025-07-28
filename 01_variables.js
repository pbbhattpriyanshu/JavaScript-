console.log("VARIABLES");
// var - (old), let (changeable) and const (constant, not change after declare)
// var - function scope , let and const - block scope

//block
{ 
    var a = 12 // var does'nt care of block, so it's global it can easily access outside or anyware, but let and const give respect, if it's global then anywhere accesseble, if in block it only access inside a block

    let abc = 12;
    console.log(abc); //easily accessable
    
}
console.log(abc); //can't access

console.log(a); // easily access

const accountId = 12345; // declare and initialization 
let accountEmail = "piyushbhatt@gmail.com";
var accountPassword = "123evev";  // var --> don't use var , because of issue in block and function scope (Es5)
let accountState;

// accountId= 34355;
accountEmail = "bhsac@gmail.com";

console.log(accountId);
console.log(accountEmail);
console.table([accountEmail,accountId,accountState]) // another way to print code

// temporal dead zone - TDZ is a behavior in JavaScript where variables are not accessible before they are declared

console.log(a); // Cannot access 'a' before initialization

var a = 12; // hide - // a is not defined

// Hoisting - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.

var a = 14;

var a = undefined // move to top
a = 14 // bottom