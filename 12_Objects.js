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

// Nesting and deep access
const user = {
    name: "Priyanshu bhatt",
    address: {
        city: "Ranikhet",
        pin: 263645,
        state: "Uttrakhand",
        location: {
            lat: 29.6434,
            lng: 79.4322,
        }
    }
}

// object destructuring
//console.log(lat); //Cannot access 'lat' before initialization

let {lat, lng} = user.address.location;
console.log(lat); //29.6434


// Looping : for-in, objeck.keys, object.entries

//for-in
for(let key in obj) {
    //console.log(key); --> obj.key = ❌
    console.log(obj[key]);
}

// object.keys --> array 
console.log(Object.keys(obj)); // [ 'name', 'age', 'role', 'isOnline' ]

// object.entries --> arrays of arrays
console.log(Object.entries(user)); 

// Copying objects: spread, object.assign, deep clone

// spread
let obj2 = {...obj};

for(let key in obj2) {
    console.log(key,":", obj2[key]);
}

//object.assign - copy the orignal object
let user2 = Object.assign({}, user) // {} -> add extra key: value

for(let key in user2) {
    console.log(key,":", user2[key]);
}

//deep clone
// We use deep clone to create a completely independent copy of an object, including all nested objects. This ensures that changes to the clone do not affect the original object, and vice versa. Shallow copies (like spread or Object.assign) only copy top-level properties, so nested objects still reference the same memory location. Deep cloning is important when you want full separation between objects, especially when working with complex or nested data structures.

let user3 = JSON.parse(JSON.stringify(user)); //stringify -> convert object to JSON string, parse -> convert back to object

for(let key in user3) {
    console.log(key,":", user3[key]);
}