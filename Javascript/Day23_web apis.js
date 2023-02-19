//WEB FORMS API

//const inputElement = document.querySelector('input');
//if (inputElement.checkValidity()) {
//  console.log("Input element has a valid value.");
//}

//HISTORY OBJECT
function printHistory() {
    console.log(`Total URLs: ${window.history.length}`);
    console.log(window.history);
}
function goBack() {
    console.log(window.history.back());
}
printHistory();
goBack();

//FETCH API

/*
fetch(file)
.then(object => object.text())
.then(text => displayText(text));

async function getAndDisplayText() {
    let object = await fetch(file);
    let text = await object.text();
    displayText(text);
}
*/

//GEOLOCATION API

/*
navigator.geolocation.getCurrentPosition(showPosition, showError);
img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
*/