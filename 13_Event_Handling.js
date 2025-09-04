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

function choose(e) {
    console.log("You Choose", e.target.value)
}   

change.addEventListener("change", choose);
