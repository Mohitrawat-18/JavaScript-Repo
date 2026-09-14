// Numbers and Math in Js

const num = new Number(100);
// console.log(num);   // [Number: 100]

// console.log(num.toFixed(2));  // 100.00

const num2 = 243.364;
// console.log(num2.toPrecision(3));   // 243

const hundreds = 100000000;
// console.log(hundreds.toLocaleString());  // 100,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,00,000

// ****************** Maths ********************
// console.log(Math.abs(-47));  // 47 (absolute value)
// console.log(Math.round(44.8));  // 45
// console.log(Math.ceil(28.2));   // 29
// console.log(Math.floor(3.8));  // 3
// console.log(Math.min(3,6,4,9,2));   // 2 (same for max)

// console.log(Math.floor(Math.random()*10) + 1); // any random value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);