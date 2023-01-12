/*
A random number is generated between 0 and 100.
Try to guess the number (100 not included).
The faster you guess the number, the higher your score will be.
Note: only decimal numbers are valid
*/

const prompt = require("prompt-sync")();

console.log("\nA random number is generated between 0 and 100." +
    "Try to guess the number (100 not included)." +
    "The faster you guess the number, the higher your score will be." +
    "Note: only decimal numbers are valid\n")

let randomNum = Math.floor(Math.random() * 100);
let count = 0, userInput;

do {
    count++;
    if (count % 5 == 0) {
        console.log("\n\nAre you giving up?" + 
        "Enter 'exit' to quit the game. Else continue.\n\n");
    }
    userInput = prompt("What's your guess?\t");
    if (userInput == 'exit') {
        break;
    }
    userInput = Number.parseInt(userInput);

    if (userInput > randomNum) {
        console.log("Your guess is greater. Try again!\n");
    } else if (userInput < randomNum) {
        console.log("Your guess is lower. Try again!\n")
    } else {
        console.log("Congrats! You guessed it in", count, "guesses.\n");
    }
} while (userInput != randomNum);