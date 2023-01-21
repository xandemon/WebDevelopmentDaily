//.mjs file extension
console.log(".mjs file extension is a js file but " +
    "indicates that it is a module that can be used in other files.");
console.log('In browser, .mjs extension cannot solve errors ' +
    'related to module, so make sure to add type="module" while ' +
    'linking javascript file in html.');
console.log("");

//import and export modules
import dateNow from "./Day5_dates+methods.mjs";
import {dateNowFormatted, month} from "./Day5_dates+methods.mjs"
console.log("");

let age;
let yourAge = (age) => {
    console.log("You are " + age + " years old.");
}
export {age, yourAge};
console.log("Exporting variables and functions ...");

console.log(dateNow);
console.log(dateNowFormatted);
console.log(month);

//code debugging
console.log("Searching for and fixing errors" +
" in a programming code is called code debugging.");
console.log("");

//style guides and best practices (IMP)
console.log("Style guides: https://www.w3schools.com/js/js_conventions.asp");
console.log("Best Practices: https://www.w3schools.com/js/js_best_practices.asp");
console.log("");

//js problem with precise flowating point numbers
let a = 0.1, b = 0.2;
console.log("0.1 + 0.2 when done normally is " + (a + b));
console.log("With another way, sum = " + ((a*10)+(b*10)) / 10);
console.log("");

//testing if an object exists or not
let existingObj = null;
if (typeof existingObj === "undefined") {
    console.log("The object does not exist.");
} else {
    console.log("The object exists.");
}

//testing if an object is null or not
if (typeof existingObj !== "undefined" && existingObj !== null) {
    console.log("The object is not null.");
} else {
    console.log("The object is null.");
}
console.log("");