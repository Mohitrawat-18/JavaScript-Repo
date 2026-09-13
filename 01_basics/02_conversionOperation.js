let value = "40";
//console.log(typeof value);  // string

let valueInNumber = Number(value) 
//console.log(typeof valueInNumber);  // number

let value2 = "10abc"
let value2InNumber = Number(value2)
// console.log(typeof value2InNumber);
// console.log(value2InNumber);  // NaN

let name = "";
let nameInBoolean  = Boolean(name);
// console.log(nameInBoolean);   // false

// string to number -> number but "40abc" -> NaN
// null to number -> 0
// undefined to number -> NaN
// boolean to number -> 0(false), 1(true)
// string to boolean -> ""(false), "Mohit"(true)
// null/undefined to String -> null /undefined


let a = undefined
let nameInString  = String(a);
console.log(nameInString);  // empty 
console.log(typeof a)