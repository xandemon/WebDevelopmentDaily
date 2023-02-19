//array destructuring

const example = [1, 2, 3, ["hehe", "boi"]];
const [a, b, , [str1, str2]] = example;
console.log(a, b, str1, str2);

function addMultiply (x, y) {
    return [x+y, x*y];
}
const [sum, product] = addMultiply(2, 5);
console.log(sum, product);


//object destructuring
const intro = {
    fname: "Sandesh",
    lname: "Katwal",
    age: 20,
    address: {
        street: "none of your",
        city: "city"
    }
}
let { fname, lname: lastName, address: {street, city}} = intro;
console.log(fname, lastName, street, city);

function getFnameAndLname(fullname) {
    const [first, last] = fullname.split(' ');
    console.log(first);
    console.log(last);
}
getFnameAndLname("Roronoa Zoro");


//spread and rest operator

function printArray(...allNumbers) {    ///rest operator -> combines all the parameters/values into an array
    console.log(allNumbers);
}
printArray(1, 2, 3, 2, 1);

const exampleObject = {...example, ...[3, 2, 1]};  //spread operator -> spreads/ extracts all elements of array
console.log(exampleObject)
const introClone = {...intro};  //also works on objects, nodeLists, and probably all array-like structures.
console.log(introClone);


//enhanced object literal

const petName = "Panda";
const petDog = {
    petName,    // if the property name and value are the same i.e. petName: petName
    [`ageOf${petName}`]: 4,     //as long as the property is string, anything works
    pandaSpeaks() {     //function can be directly defined inside object declaration -> panda: function() {console.log("Vow vow")}
        console.log("Vow vow");
    }
}