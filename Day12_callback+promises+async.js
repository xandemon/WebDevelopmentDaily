//callback functions
console.log("");
console.log("Callback functions are those \
which are passed as argument to other functions.");
function calculate(a, b, func) {
    let temp = a + b;
    func(temp);
}
function display(value = 100) { //default argument
    console.log("Value: " + value);
}
calculate(3, 5, display);   //display is a callback function


//js promises
console.log("");
let x = "PASS!";
let yourPromise = new Promise(function(myResolve, myReject) {
    if (x == "PASS!") {
        myResolve("He passed.");
    } else {
        myReject("He failed.");
    }
});
yourPromise.then(
    function (value) {console.log(value);},
    function (error) {console.log(error);}
);
console.log("");

//js async and await
console.log("");
async function aFunc() {
    let promise = new Promise(function(resolve, reject) {
        resolve("Love you!");
    });
    console.log(await promise);
}
aFunc();
console.log("");

//asynchronous functions
console.log("");
console.log("Asynchronous functions are those \
that run in parallel with other functions.");
setTimeout(display, 500);
let counter = 0;
let realTime = () => {
    let date = new Date();
    console.log(date.getHours() + ": " + date.getMinutes() +
    ". " + date.getSeconds());
    counter++;
    if (counter >= 5) {
        exit();
    }
}
setInterval(realTime, 1000);