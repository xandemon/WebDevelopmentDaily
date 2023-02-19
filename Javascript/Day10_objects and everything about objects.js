//objects, methods, and properties
console.log("");
const myDevices = {
    laptop: "lenovo",
    smartphone: "infinix",
    headphone: "p47"
};
myDevices.prices = [
    {price: 40000, type: "laptop"},
    {price: 17000, type: "smartphone"},
    {price: 600, type: "headphone"}
];
for (let x in myDevices.prices) {
    console.log(myDevices.prices[x].type + " -> " +
    myDevices.prices[x].price);
}
delete myDevices.prices;
myDevices.returnBrand = function(item) {
    return myDevices[item];
}
let item = "laptop";
console.log("The brand of " + item + " is " + myDevices.returnBrand(item));
console.log("");

//displaying objects
console.log(myDevices);
let objStr = JSON.stringify(myDevices);
console.log(objStr);
console.log("");

//object accessors
const engToGer = {
    hello: "hallo",
    bye: "tschuss",
    great: "supe",
    get helloToGer() {
        return this.hello;
    },
    set greatToGer(german) {
        this.great = german;
    }
};
console.log(engToGer.helloToGer);
engToGer.greatToGer = "super";
console.log(engToGer.great);
Object.defineProperty(engToGer, "byeToGer", {
    get: function () { return this.bye = "Tschuss";}
});
Object.defineProperty(engToGer, "goodDayToGer", {
    set: function (input) {this.goodDay = input;}
});
engToGer.byeToGer;
console.log(engToGer.bye);
console.log("");

//object constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.getFullName = () => {
        return this.firstName + " " + this.lastName;
    }
}
let sandesh = new Person("Sandesh", "Katwal", 20, "dark brown");
console.log(sandesh.getFullName());
Person.prototype.species = "human"; //object prototype
console.log(sandesh.species);
console.log("");

//sets
let vowels = new Set(['a', 'e', 'i', 'love', 'u']);
vowels.delete('love');
vowels.add('o');
console.log(vowels);
console.log("");

//maps
let familyAge = new Map([
    ["dad", 45],
    ["mom", 40],
    ["sis", 15]
])
familyAge.set("bro", 20);
console.log(familyAge);