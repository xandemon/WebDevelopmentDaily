const prompt = require("prompt-sync")();


//using switch case statements
switch (new Date().getDay) {
    case 0:
        console.log("It is Sunday.\n");
        break;
    case 6:
        console.log("It is Saturday.\n");
        break;
    default:
        console.log("Waiting for the weekend...\n");
}


//determine whether the number is divisible by either 2 or 3
let num = 27;
if(num%2 == 0 || num%3 == 0) {
    console.log("The number is divisible by either 2 or 3.\n");
}
else {
    console.log("The number is not divisible by 2 and 3.\n");
}


//print age of students using for loop
let age = {
    sandesh: 21,
    rijan: 20,
    saksham: 22
}
for (let i = 0; i < Object.keys(age).length; i++) {
    console.log("Age of " + Object.keys(age)[i] + ": " + age[Object.keys(age)[i]]);
}
console.log("\n");
for (let x in age) {
    console.log("Age of " + x + ": " + age[x]);
}


//check whether the entered key is a number or not
// let key;
// key = prompt("Enter any number:");
// while (key != Number) {
//     console.log("Please enter a number.");
// }

//function to find mean of 3 numbers
function findMean(inputNum) {
    let sum = 0;
    for (let i = 0; i < inputNum.length; i++) {
        sum += inputNum[i];
    }
    return sum / inputNum.length;
}
let nums = [21, 20, 22];
console.log("Mean: " + findMean(nums));