// strings in js

const name = "Mohit"
const age = 20
// console.log(name+age+" years old ")

// Backticks
// console.log(`Hello my name is ${name} and my age is ${age}`)

const subject = new String("Javascript");
// console.log(subject.length);  // 10
// console.log(subject.toUpperCase());  //JAVASCRIPT
// console.log(subject.charAt(4));  // s
// console.log(subject.indexOf('p'));  // 8

// 0 included 4 excluded
const newString  = subject.substring(0,4); 
// console.log(newString);   // Java

// can also accept negative values for reverse 
const anotherString = subject.slice(0,4);
// console.log(anotherString);   // Java

// remove whitespaces from start and end not middle
const newStringOne = "    Hello world  ";
// console.log(newStringOne.trim()); // Hello world

const s = "Ram-Shyam-Arjun-Sundar";
console.log(s.split('-'));