// Array

// 1st way to define array
const myArr = [0,1,2,3,4,5];
// console.log(myArr[1]);  // 1

// 2nd way to define array
const myArr1 = new Array("Ram",10,true,3.14);
// console.log(myArr1.length);  // 4

// Array Methods

// myArr.push(6);
// myArr.push(7); // add element at last
// myArr.pop();  // remove element from last

// myArr.unshift(0); // add element at start
// myArr.shift(); // remove element from start
// console.log(myArr);

// console.log(myArr.includes(7)); // false
// console.log(myArr.indexOf(5)); // 5

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr); // join + convert to string

console.log("A ",myArr);
const myArr2 = myArr.slice(1,3); //slice & no changes in original array
console.log(myArr2);
console.log("B ",myArr);

const myArr3 = myArr.splice(1,3); //splice & change in original array
console.log("C ",myArr);
console.log(myArr3);

