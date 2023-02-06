//JS PROMISES

console.log("");
const promise = new Promise((resolve, reject) => {
  let num = 78;
  console.log("calculating...");
  setTimeout(() => {
    if (num < 10) {
      resolve("1-digit number");
    } else {
      reject("Not a 1-digit number");
    }
  }, 100);
});
promise
  .then((value) => {
    console.log("Resolved! " + value);
  })
  .catch((error) => {
    console.error("Rejected! " + error);
  });


//JS ASYNC AND AWAIT

async function sameAsAbove() {
    try {
        const promise2 = new Promise((resolve, reject) => {
            let num = 78;
            console.log("calculating...");
            setTimeout(() => {
                console.log("");
                (num < 10)? resolve("1-digit number.") : reject("Not a 1-digit number.");
            }, 1000)
        });
        let response = await promise2;
        console.log(response);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("After going through many hardships, finally, we're done.");
    }
}
sameAsAbove();

console.log("");
function setTimeoutPromise(delay) {
  return new Promise((resolve, rejcet) => {
    setTimeout(resolve, delay);
  });
}
async function doStuff() {
  await setTimeoutPromise(250);
  console.log("1 : printed after 250 ms.");
  await setTimeoutPromise(500);
  console.log("2 : printed after 500ms");
}
doStuff();