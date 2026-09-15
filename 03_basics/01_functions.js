// Functions

function sayHello(){
    console.log("Hello Everyone");
}
// sayHello();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(2,3);// 5 
// OR
// const result = addTwoNumbers(2,3);
// console.log("Result is : ",result); // undefined


function addTwoNumbers(num1,num2){
    // const sum = num1+num2;
    // return sum;
    return num1 + num2;
}
const result = addTwoNumbers(2,3);
// console.log("Result is : ",result); // Result is :  5

// parameters can also have default values like username = xyz
function loginUserMsg(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
};
// console.log(loginUserMsg("Shyam")); // Shyam just logged in


// Rest Operator -> more than 1 arguments if it have only one param
function calculateCartPrice(...num1){
    return num1;
};
// console.log(calculateCartPrice(50)); // 50
// console.log(calculateCartPrice(50,100,200,300)); // [ 50, 100, 200, 300 ]

// Object inside function
const user = {
    name : "Ramesh",
    age : 35
};

function handleObject(anyObject){
    // console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`);
};
// handleObject(user);
// OR
handleObject({
    name : "Amit",
    age : 40
});

// Array inside function
const myArr = [100,200,300,400,500];
function returnSecondValue(getArray){
    return getArray[1];
};
console.log(returnSecondValue(myArr)); // 200