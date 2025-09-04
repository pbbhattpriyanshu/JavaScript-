// Selecting elements: getElementsById, getElementsByClassName, querySelector, querySelectorAll
let a = document.querySelector("a");
let img = document.querySelector("img");
let h6 = document.querySelector("h6");

// Text/Content acesss: innerText, innerHTML, textContent
h6.innerText = "Hello World"  //change text

// Attributes manipulation: getAttribute, setAttribute, removeAttribute
//element.setAttribute(name, value)
a.setAttribute("href", "https://www.google.com")
console.dir(a);
img.setAttribute("src", "https://unsplash.com/photos/purple-sphere-explodes-with-colorful-particles-5pVGTtTdtMM")
console.log(img);

// Dynamic DOM Manipulation: createElement, appendChild, removeChild, prepend
let h2 = document.createElement("h2");
let para = document.createElement("p")
// h2.textContent = "Hello ji"
para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa sapiente praesentium necessitatibus dicta porro perspiciatis. Voluptate, impedit aliquid? Mollitia velit repellat rerum voluptatum, porro molestias odio laudantium voluptates quibusdam!"
console.log(h2); //print in console
console.log(para);

document.body.appendChild(h2) //show in html window append --> bottom
document.body.prepend(para)      // prepend --> top
img.remove();  //remove element from html window


//CSS/STYLE - Element access, manipulate, create, remove + Style

let h1 = document.querySelector("h1");
h1.style.color = "red"    //style - color
h1.style.backgroundColor = "black"

//element.classList.remove()
//element.classList.add()
console.dir(h1);
