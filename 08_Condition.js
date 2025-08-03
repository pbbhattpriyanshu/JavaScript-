// Conditional Flow (Decision Making)

//1. if-else
//2. if-else-if
//3. switch
//4. Ternary operator (?:) (shortcut)

//Voting System
// let age = 15;

// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("Too young to vote.");
// }


//Grade System
// function checkGrade(marks) {
//   if (marks >= 90) {
//     console.log("Grade A");
//   } else if (marks >= 75) {
//     console.log("Grade B");
//   } else if (marks >= 50) {
//     console.log("Grade C");
//   } else {
//     console.log("Fail");
//   }
// }


// let marks = 85;
// checkGrade(marks)

//Rock, Paper, Secissor logic

function game(user, computer) {
    if (user === computer) return "Draw"

    if (user === "Rock" && computer === "Secissor") return "User win"
    if (user === "Paper" && computer === "Rock") return "User Win"
    if (user === "Secissor" && computer === "Paper") return "User wWn"

    return "Computer win"
}

console.log(game("Rock", "Paper"));

// Switch Case

let Search = "Mango"

switch (Search) {
    case "Apple":
        console.log("Himanchal Apple");
        break;
    case "Banana":
        console.log("Breakfast time");
        break;
    case "Mango":
        console.log("King of fruits");
        break;
    default:
        console.log("No result found");
        break;
}

//ternary operator
// condition ? valueIfTrue : valueIfFalse

// Red light System
let color = "Red"
let signal = color === "Red" ? "Please Stop" : "Now, go"

console.log(signal);
