//EXPORTING MODULES WITH ES6

export const student = {
    name: "sandesh",
    id: 12345
}
const result = {
    science: 99,
    maths: 100
}
const collegeName = "ASCOL";
const printName = (student) => { console.log(student.name)}

export {result, collegeName};
export default printName;

/*
firstly, make sure to include type="module" while linking script.js in html.
to import above modules in another js file,
import printName, { result, collegeName } from "./exporting.js"
or, import printThis, { result as marks, collegeName} from "./exporting.js"
*/


//EXPORTING MODULES WITH NODE

// module.exports = {
//     student: student,
//     result: result,
//     collegeName: collegeName,
//     printName: printName
// }

/*
to import above modules in another js file,
const anyVariable = require('./exporting.js')
anyVariable.printName(anyVariable.student)
*/


//NPM

/*
you can search for and get npm modules to use in your code from
https://www.npmjs.com/

then the command to install those modules is:
npm i [module_name]
for e.g.  npm i uuid  --> this npm module generates a unique identifier

run "npm init -y" in terminal to create package.json file
*/
// import { v4 } from "./node_modules/uuid/dist/esm-browser/index.js"; //alternatively, --> const uuid = require('uuid') 
// console.log(v4());


//PARCEL MODULE BUNDLER
/*
to install Parcel,
run "npm i parcel" pr "npm i parcel --save-dev"
to bundle everything, 
run "npm start", or "npm run start", or "npm run parcel index.html"
*/