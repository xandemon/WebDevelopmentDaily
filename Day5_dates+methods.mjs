//getting real-time complate date and time
let dateNow = new Date();
console.log(dateNow);
//formatting full text string date to formatted ISO date string
let dateNowFormatted = dateNow.toString();
console.log(dateNowFormatted);

//different types of date formats
//date can vary by 1 day due to time zones
let dateISO = new Date("2001-09-29");
console.log(dateISO);
let dateShort = new Date("09/29/2002");
console.log(dateShort);
let dateLong = new Date("November 29 2022");
console.log(dateLong);

//another way of declaring date
let dateParam = new Date(2023, 0, 14, 23, 1, 999);
console.log(dateParam);
let dateMilisec = Date.parse(dateParam);
console.log(dateMilisec);

//getting time offset (difference) between local time and UTC time
let timeDiff = dateNow.getTimezoneOffset();

//finding the day of the week (same for finding year, month, day, hour, etc.)
let months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[dateNow.getMonth()]; //for UTC, use getUTCMonth
console.log(`Today is ${month}`);

export default dateNow;
export {dateNowFormatted, month};