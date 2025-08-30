// Key-value Structure
let obj = {
    //key : Value
    name: "Piyush",
    age: 21,
    role: "AI Engineer",
    isOnline: true,
}
// Dot vs bracket notation

//values access
console.log(obj.age); //dot
console.log(obj['isOnline']); //bracket

// Why we use bracket notation for accessing values
let aa = 'name';
console.log(obj.aa); //undefined

console.log(obj[aa]); //piyush


