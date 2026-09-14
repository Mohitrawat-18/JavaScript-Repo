// Date (1 Jan 1970)

const myDate = new Date();
// console.log(myDate);  // 2026-09-14T14:42:08.539Z

// console.log(myDate.toString()); 
// Mon Sep 14 2026 14:43:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Mon Sep 14 2026
// console.log(myDate.toISOString()); // 2026-09-14T14:45:40.736Z
// console.log(myDate.toJSON()); // 2026-09-14T14:45:40.736Z
// console.log(myDate.toLocaleDateString()); // 9/14/2026
// console.log(myDate.toLocaleString());  // 9/14/2026, 2:45:40 PM

let myCreatedDate = new Date(2026,7,29)
// console.log(myCreatedDate.toDateString()); // Sat Aug 29 2026
 
let myTimeStamp = Date.now();
// console.log(myTimeStamp);

const newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay()); // 1 Mon
// console.log(newDate.getFullYear()); // 2026

const result = newDate.toLocaleString("default",{
    weekday: "long",
    hour: "numeric",
    timeZone: "Asia/Kolkata"
});

console.log(result);
// Monday 9 PM -> timeZone: "Asia/Kolkata"
// Monday 11 AM -> timeZone: "America/New York"