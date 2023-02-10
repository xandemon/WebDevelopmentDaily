//GENERATORS AND ITERATORS

function* wholeNumGenrator() {  //doesn't work with arrow functions
    let count= 0;
    while (true) {
        const num = yield count;    //function stops after executing yield statement.
        if (num != null) {          //next time, .next() is called, it will continue executing from where it left
            count += num;
        } else {
            count++;
        }
    }
}
const generator = wholeNumGenrator();
console.log(generator);
console.log(generator.next());  //next is an iterator for the generator
console.log(generator.next(2));
console.log(generator.next(3));
console.log("")
const generator2 = wholeNumGenrator();
console.log(generator2.next()); //a new generator will start over again
console.log(generator2.next()); //while the olde generator will continue from where it was
console.log("");
console.log(generator.next());


//GETTERS AND SETTERS
const person = {
    age: 21,
    get dob() {
        const year = new Date().getFullYear();
        return year - this.age;
    },
    set dob(value) {
        const year = new Date().getFullYear();
        this.age = year - value;
    }
}
console.log(person.age);
console.log(person.dob);    //getters are functions but can be called as properties
person.dob = "2002";    //setters are given value like this
console.log(person.age);