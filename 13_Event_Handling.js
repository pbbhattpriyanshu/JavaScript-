// Event listeners

// Event = action (browser)
// event listener = watches for the event to happen and then does something when it happens (reaction)

let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.color = "red"
})

let p = document.querySelector("p");
p.addEventListener("dblclick", function() {
    p.style.color = "green"
    p.style.backgroundColor = "black"
})

// syntax - element.addEventListener("event name", function() { write - action that can perform })

// How to remove? 

let hide = document.querySelector(".hide");

function changeColor() {
  hide.style.color = "blue";
}

function changeBg() {
  hide.style.backgroundColor = "green";
}

hide.addEventListener("click", changeColor);
hide.addEventListener("click", changeBg);

hide.removeEventListener("click", changeColor);

// Button Click Counter
// Create a button → every click increases a number shown on the screen.
// Example: “Clicked 5 times”.
let btn = document.querySelector(".countBtn");
let counting = document.querySelector(".counting")
let count = 0;

function countButton() {
    count = count +  1;
    console.log(count);
    counting.textContent = `Clicked ${count} times`
}

btn.addEventListener("click", countButton);

//Change Color on Click
// Make a div → on click, change its background to a random color.
let divChange = document.querySelector(".colorChange");

divChange.addEventListener("click", function(){
    switch (count) {
        case 1:
            divChange.style.backgroundColor = "green";
            break;
        case 2:
            divChange.style.backgroundColor = "red";
            break;
        case 3:
            divChange.style.backgroundColor = "yellow";
            break;
        default: divChange.style.backgroundColor = "brown";
            break;
    }
})

//Hover Effect
// A box turns red on mouseover, and back to blue on mouseout.
let box = document.querySelector(".box");

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "red"
})

box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "pink"
})

// Double Click vs Single Click
// Single click → show alert “Single Click”
// Double click → show alert “Double Click”
let single = document.querySelector(".single");
let double = document.querySelector(".double");

single.addEventListener("click", function(){
    alert("Single Click");
})

double.addEventListener("dblclick", function(){
    alert("Double Click")
})



// Other type of event listeners

//input
let input = document.querySelector("input");

function write(e) {
    if (e.data !== null) {
        console.log("You Type", e.data)
    }
}

input.addEventListener("input", write);


//change
let change = document.querySelector("select");
let heads = document.querySelector(".heads");
 
function choose(e) {
    heads.textContent = `${e.target.value} Device is Selected`
    console.log("You Choose", e.target.value)
}   

change.addEventListener("change", choose);

