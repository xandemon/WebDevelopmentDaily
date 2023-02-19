//representation of different numbers
let decNum = 369;
let hexNum = 0x369;
let octNum = 0367;
let binNum = 0b1010;

//convert number to other types
let numString = decNum.toString();
numFixed = decNum.toFixed();
numExpo = decNum.toExponential();

//adding numbers and strings
console.log(`21 + 4 = ${21 + 4}`);
console.log(`21 + "4" = ${21 + "4"}`);
console.log(`21 + 4 + "5" = ${21 + 4 + "5"}`);
console.log(`"5" + 21 + 4 = ${"5" + 21 + 4}`);

//creating BigInt numbers
let bigintNum = 3697556453434224n; //or
bigintNum = BigInt(3697556453434224);

//NaN and Infinity exists in JS
console.log(`21 * "4you" = ${21 * "4you"}`);
console.log(`2 / 0 = ${2 / 0}`);
console.log(`-2 / 0 = ${-2 / 0}`);