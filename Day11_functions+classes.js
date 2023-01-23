//declaration of function
(function aFunc() {
    console.log("This is a function.");
})(); //function expression i.e. a self-invoking function

const anotherFunc = function() {
    console.log("This is another function.");
}
const yetAnotherFunc = () => {console.log("This is yet another function.");}
//IMP!! Only functions declared normally
//with function() keyword are hoisetd.
console.log("");

//function parameters
function aFunc(...args) {
    console.log("No. of arguments = " + arguments.length);
    for (let x of args) {
        console.log(x);
    }
}
aFunc(1,2,3,4,5,);
console.log("");

//function call, apply, and bind
const obj = {
    name: "Luffy",
    lname: "Monkey",
    info: function(lname, gender) {
        return this.name + " " + lname + " " + gender;
    }
};
const obj1 = {
    name: "Zoro"
};
let temp = obj.info.call(obj1, "Roronoa", "M"); //call method
console.log(temp);
temp = obj.info.apply(obj1, ["Roronoa", "F"]);//apply method
console.log(temp);
//to use Math.max function on arrays, we do this:
console.log(Math.max.apply(null, [5,2,6,13,757,324,5,354]));
temp = obj.info.bind(obj);
console.log("");

//function closures
console.log("A closure is a function having access to the parent scope \
even after the parent function has closed.");
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
})();
console.log("");
add(); add(); add();
console.log(add());

//js classes
class smartphone {
    constructor(brand) {
        this.brandName = brand;
    }
    whatBrand () {
        return "This is a " + this.brandName;
    }
}
class phone extends smartphone {
    constructor(brand, model) {
        super(brand);
        this.modelOfCar = model;
    }
    static lovePhones(anyPhone) {
        return anyPhone.brandName + " is love.";   //class static mrthods
    }
    whatModel () {
        return this.whatBrand() + ", model - " + this.modelOfCar;
    }
}
const redmi = new smartphone("Redmi");
console.log(redmi.whatBrand());
const samsung = new phone("Samsung", "S22");
console.log(samsung.whatModel());
console.log(phone.lovePhones(samsung));