const prompt = require("prompt-sync")();

//typeof
console.log("Data type of NaN is " + typeof NaN);
console.log("Data type of null is " + typeof null);

//check if an object is an array
let arr1 = [1, 2, 3, 4];
let arr2 = 9;
function isArray(arr1) {
    return arr1.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(arr1));
console.log("");

//similarly check if an object is a date
let dateNow = new Date();
console.log(dateNow);
let isDate = (dateNow) => {
    return dateNow.constructor === Date;
}
console.log("It is a date: " + isDate(dateNow));
console.log("");

//data type constructor
let constructorReturns = isDate.constructor;
console.log(constructorReturns);
console.log("");

//instanceof operator
const fastFood = ["chatpate", "panipuri", "chowemein", "sausage"];
console.log(fastFood instanceof Number);
console.log(fastFood instanceof Array);
console.log(fastFood instanceof String);
console.log("");

//type conversion
console.log(String(fastFood));
console.log(arr1.toString());
console.log("");

//converting binary to decimal
let decNum = 15;
function decToBin(deci) {
    return deci.toString(2); //here 2 indicates binary
}
console.log(decToBin(decNum), typeof decToBin(decNum));
console.log("");

//converting decimal to binary
function binToDec(bin) {
    return Number(parseInt(bin, 2).toString(10));
}
console.log(binToDec(100), typeof binToDec(100));
console.log("");

//bitwise shift operator
console.log(-4 >>> 1, decToBin(-4 >>> 1));
console.log(4 >>> 2);
console.log(-4 >> 1, decToBin(-4 >> 1));
console.log("");

//regular expressions
let whoBest = "Who is the best";
console.log(whoBest);
whoBest = whoBest.replace(/who/i, "Sandesh"); //i for case-insensitive
console.log(whoBest);
console.log("Position of 'best' in the string: " + whoBest.search("Best"));
let childRingtone = "boo boo baa baa";
console.log(childRingtone);
childRingtone = childRingtone.replace(/b/g, "G");
console.log(childRingtone);
console.log(`Data type of /e/ is ${typeof /e/}`);
console.log("");

//Errors: try, catch, throw , finally
try {
    let input = prompt("Enter any number from 0 to 9:  ");
    if(isNaN(input)) {
        throw "Not a number";
    }
}
catch(err) {
    console.error(err.message);
}
finally {
    console.log("Whatever, I don't give a shit.");
}