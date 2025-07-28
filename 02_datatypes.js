console.log("DATATYPES");
// JavaScript has dynamic typing, meaning variables can hold any type of data and can change types.
// PRIMITIVES TYPES - Copy easily
// String, number, boolean, null, undefined, symbol
let a = 23;
let b = a;  // Copy value
a = 45;  // Change a, b remains 23
console.log(a);  // 45
console.log(b);  // 23

// REFERENCE TYPES -  Don't copy but store reference/address
//array, object, function
let arr = [1, 2, 3];
let arr2 = arr;  // Copy reference  
arr.push(4);  // Change arr, arr2 also changes
console.log(arr);  // [1, 2, 3, 4]
console.log(arr2);  // [1, 2, 3, 4]

// number => 2, 5
// bigint
// string => " "
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
// object




let age = 21;
let tF = true
let empty;


console.log(typeof "piyush");
console.log(typeof age);
console.log(typeof tF);
console.log(typeof empty);
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined






