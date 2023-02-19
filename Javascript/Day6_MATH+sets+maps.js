//mathematical constants in using MATH object (static)
let pi = Math.PI;
console.log("Value of pi = " + pi);
let euler = Math.E;
console.log("Value of euler's constant 'e' = " + euler);
let ln = Math.LN2;
console.log("The natural logarithm of 2 is " + ln);
let sqrt2 = Math.SQRT2;
console.log("Square root of 2 = " + sqrt2);
let log10e = Math.LOG10E;
console.log("Base 10 logarithm of e = " + log10e);

//generating a randm number using Math object
let randomNum = Math.random();
console.log(`Random number between 0 and 1: ${randomNum}`);
randomNum = Math.floor(Math.random()*100);
console.log(`Random number between 0 and 100: ${randomNum}`);
randomNum = Math.floor(Math.random()*101); //including 100
randomNum = Math.floor(Math.random()*(60 - 50) + 50);
console.log(`Random number between 50 and 60: ${randomNum}`);

//creating set data type
let set = new Set(["a", "e", "i", "o", "w"]);
console.log(set);
set.delete("w");
console.log(set);
set.add("u");
console.log(set);
let string ="";
set.forEach((element) => {
    string += element;
})
console.log(string);

//creating Maps in JS
let map = new Map([
    ["coffee", 50],
    ["tea", 40],
    ["cola", 75]
]);
map.set("milk", 20);
console.log(map);
string = "";
map.forEach((value, key) => {
    string += key + " = " + value + "\n";
})
console.log(string);