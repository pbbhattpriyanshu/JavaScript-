//Create an Array
let marks = [23,24,23,12,19,20];
//modify 
marks[2] = 1; //23 -> 1
//Access through index
console.log(marks[2]); //1

console.log("***********************************");

//Array Method (beginner level) (push, pop, shift, unshift, splice, slice, reverse, sort)
let arr = [1,2,3,4,5];
arr.push(500); //Add element in array - [1,2,3,4,5,500]
arr.pop() //remove last element from array - [1,2,3,4,5]
arr.shift() //remove first element from array - [2,3,4,5]
arr.unshift(0) //add element in array from first - [0,2,3,4,5]
arr.splice(3,2) //splice(start: number(index), deleteCount?: number) - [0,2,3]
let newArr = arr.slice(0,2) //slice(start?: number(index), end?: number(index)) / didn't consider last element index 
console.log("New Arr due to slice:",newArr); // [ 0, 2 ]
arr.reverse() // reverse orignal array [3,2,0]

//Access all element in array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);   
}

console.log("***********************************");

//Array Method (Advance level) (forEach, map, filter, reduce, find, every, some)
let subject = ["English, Hindi, Maths, GK, Computer"];

subject.forEach(function (periods) {
    console.log("Subjects:",periods);
})

// map - use map, when you want to make new array (blank array) from basis of old array 
let numbers = [1,2,3,4,5,6,7,8,9]

let newNumbers = numbers.map(function(val) {
    return 0;    
})

console.table(newNumbers);

// filter - use filter, when you want to make new array (blank array) from basis of old array with selected elements, return true or false
let newSelected = numbers.filter(function(val) {
    if (val % 2 == 0) return true
})

console.table(newSelected);

//reduce - use reduce, when you want to reduce the array to a single value
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); //default accumulator value is 0

console.log("Sum of all numbers:", sum);

//find - use find, when you want to find a single element in the array
let found = numbers.find(function(val) {
    return val === 1;
});

console.log("Found element:", found);

//every - use every, when you want to check if all elements in the array pass a test
let allEven = numbers.every(function(val) {
    return val % 2 === 0;
});

console.log("All elements are even:", allEven);

//some - use some, when you want to check if at least one element in the array passes a test
let someEven = numbers.some(function(val) {
    return val % 2 === 0;
});

console.log("At least one element is even:", someEven);

// Destructuring - use destructuring to unpack values from arrays
// numbers = [1,2,3,4,5,6,7,8,9]
let [first, second, third] = numbers;
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);