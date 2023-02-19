//BIND
window.lname = "Monkey";  //window object will only be defined when the webpage is live in browser
const person = {
    lname: "Gol"
};
function getName(middleName, firstName) {
    console.log(this.lname, middleName, firstName);
}
getName("D.", "Luffy");
getName.bind(person, "D.")("Roger");    //bind return function, so adding parenthesis to run function


//APPLY
getName.apply(person, ["D.", "Ace"]); //same as bind but takes parameters input as array


//CALL
getName.call(person, "D.", "Sabo"); //same as bind but takes parameters input as array