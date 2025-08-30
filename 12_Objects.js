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