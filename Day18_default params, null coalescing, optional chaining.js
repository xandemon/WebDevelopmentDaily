//default parameters
let printName =  function(fullName, title = "Mr.") {
    console.log(title, fullName);
}
printName("Sandesh Katwal");
printName("Sandesh Katwal", "Boss");
printName("Sandesh Katwal", null);

console.log("");
printName = function(fullName, title) { //works same as above but returns default value if 0 or empty string is sent
    title = title || "Mr.";
    console.log(title, fullName);
}
printName("Sandesh Katwal", null);  //here, the null value isn't passed, default value is used
printName("Sandesh Katwal", 0);     //treats 0 and empty string "" as false


//null coalescing
console.log("");
printName = function(fullName, title) { //similar but doesn't return default value if 0 or empty string is sent
    title = title ?? "Mr.";     // ?? is a null coalescing operator and it checks for only null and undefined
    console.log(title, fullName);
}
printName("Sandesh Katwal", null);
printName("Sandesh Katwal", 0);
printName("Sandesh Katwal", "");


//optional chaining
console.log("");
const person = {
    name: "aBoy",
    age: 21,
    address: {
        street: "New York Street",
        city: "Berlin"
    },
    greeting() {
        return ("Hello world!");
    }
}
if (person && person.address && person.address.street) {
    console.log(person.address.street); //throws an error when the person or the address or the street don't exist
}
console.log(person && person.address && person.address.street); //same as if statement above
console.log(person?.address?.street);   //using optional chaining: checks if the argument exists
console.log(person?.greeting?.());  //works for function too, and similarly for array