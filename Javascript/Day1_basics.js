//creating a variable of type string
let someVariable = "Welcome";
someVariable = someVariable + 2023;
console.log(someVariable);

//finding the data type of someVariable
console.log(typeof someVariable);

//three ways to declare variables
var x = 0;
let y = 50;
const z = 100;

//creating translations for 3 words
let englishToDeutsch = {
    "Coffee" : "Kaffee",
    "Girlfriend" : "Freundin",
    "Game" : "Spiele"
};
console.log("Coffee in german is called " + englishToDeutsch["Coffee"]);