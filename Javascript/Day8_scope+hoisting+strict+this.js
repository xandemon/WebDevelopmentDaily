//using strict mode
"use strict";
function strictTest() {
    console.log(this);
}
strictTest();
console.log("");

//scope of variables
console.log("'var' have global and function scope while",
    "'let' and 'const' have block scope also.");
console.log("");

//hoisting
console.log("When a variable is used before it's declared,",
    "it's called hoisting.");
year = 2023;
var year;
console.log("");

//this keyword
console.log("The 'this' keyword returns the object.");
const person1 = {
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName: "Sandesh",
    lastName: "Katwal",
}
console.log(person1.fullName.call(person2));
console.log("");

//normal declaration of function
function sum(a, b) {
    return a + b;
}
sum = function(a, b) {
    return a + b;
}
//declaration with arrow function
sum = (a, b) => {
    return a + b;
}
console.log("Arrow function makes the code shorter and well-presented");
console.log("");