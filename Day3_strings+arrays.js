const prompt = require("prompt-sync")();

//length of below string
console.log("code\"".length);

//converting string to lowercase or uppercase
let someStr = "Be confident!";
console.log(someStr.toUpperCase());
console.log(someStr.toLowerCase());

//exctracting amount from string.
let moneyReq = "Can you lent me $100?";
console.log(moneyReq.slice(-5, -1));

//replacing 9th character of a string
let output = moneyReq.replace(moneyReq[8], 's');
console.log(moneyReq); //original string doesn't change: immutable
console.log(output);

//add user input number to array until 0 is entered.
let arr = [06, 13, 100, 09, 29, 30], input;
do {
    input = prompt("Enter a number: ");
    input = Number.parseInt(input);
    arr.push(input);
    console.log(arr);
} while (input != 0);

//filtering numbers divisble by 10 from array
function isDivisibleBy10(element) {
    if (element % 10 == 0) {
        return true;
    }
}
let filteredArr = arr.filter(isDivisibleBy10);
console.log(filteredArr);

//calculate factorial using reduce function
let naturalNum = [1, 2, 3, 4, 5];
let factorial = naturalNum.reduce((a, b) => {
    return a * b;
})
console.log(factorial);

//sort arr in descending order using sort function
console.log(`\nInitial array:  ${arr}`);
arr.sort((a, b) => {
    return b - a;
})
console.log(`Sorted array:  ${arr}`);