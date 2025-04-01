// Dates

let myDate = new Date()  // datatype is object
// console.log(myDate.toString());  // converts date into string.
// console.log(myDate.toDateString());  // Returns only the date part as a string, without the time.  
// console.log(myDate.toISOString());  // Returns the date as an ISO 8601 formatted string (UTC timezone).  
// console.log(myDate.toJSON());  // Returns the date as a JSON-compatible string (same as toISOString()).  
// console.log(myDate.toLocaleDateString());  // Returns the date in a localized (human-friendly) format, based on your system settings. 
// console.log(myDate.toLocaleString());  // Returns the date and time in a localized format.
// console.log(typeof myDate);  // datatype is object


// let myCreatedDate = new Date(2023, 0, 23)  // new Date(year, month, day, hours, minutes, seconds, milliseconds);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // built-in JavaScript method that returns the current time in milliseconds since the Unix Epoch (January 1, 1970, UTC).
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  // returns the timestamp (number of milliseconds since the Unix Epoch: January 1, 1970, UTC).
// console.log(Math.floor(Date.now()/1000));  // Returns the timestamp in seconds and Math.floor removes the decimals


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // gives month starting from 0
console.log(newDate.getDay());  // gives the day in numeric form
// console.log(`the month is ${newDate.getMonth()} and day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {  
    weekday: "long"
})

// only the properties we specify in the options object will appear in the output.
// toLocaleString('default', { weekday: "long" }) extracts the full weekday name based on the user’s locale.
// 'default' lets the browser decide the language, but you can specify one (e.g., 'en-US', 'fr-FR').
// You can combine it with year, month, day, and other options for a complete date format.