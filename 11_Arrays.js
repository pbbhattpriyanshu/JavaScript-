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

//Array Method (Advance level) (forEach, map)
let subject = ["English, Hindi, Maths, GK, Computer"];

subject.forEach(function (periods) {
    console.log("Subjects:",periods);
})
