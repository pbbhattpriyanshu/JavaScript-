// Looping Tips
// ✅ Use for for fixed repetitions
// ✅ Use while for unknown repetitions
// ✅ Use do…while if you need at least 1 execution
// ✅ Use for…of for arrays
// ✅ Use for…in for objects
// ✅ Remember break and continue to control flow

//for loop
for (let i = 0; i < 3; i++) {
  console.log("Hello");
}

//while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//do while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//break - exit
for (let i = 0; i <= 20; i++) {
    console.log(i);
    
    if (i === 17) {
        break;
    }
}

//continue - skip
for (let i = 0; i <= 20; i++) {
    if (i === 9) {
        continue;
    }
    console.log(i);
}