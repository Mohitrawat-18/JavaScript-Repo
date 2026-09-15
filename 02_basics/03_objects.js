// Objects in JS

//1. Constructor 
// Object.create()

//2. Object literals

const sym = Symbol("key1");

const user = {
    name : "Mohit",
    [sym] : "myKey1",
    age : 20,
    "city" : "New Delhi",
    email : "mohit12@gmail.com",
    subject : ["Java","Javascript","SpringBoot"]
};

// dot notation to access elements
console.log(user.email); // mohit12@gmail.com

// bracket notation
// usecases in Symbol 

// console.log(user["email"]); // mohit12@gmail.com
// console.log(user.city); // New Delhi
// console.log(user[sym]); // myKey1

// Changing values
user.email = "mohit23@gmail.com";
// console.log(user.email); // mohit23@gmail.com

// after this properties cannot be changed
// Object.freeze(user);

user.greeting = function(){
    console.log("Hello JS User");
};

user.greeting2 = function(){
    console.log(`Hello JS User,${this.name}`);
};
// console.log(user.greeting());
// console.log(user.greeting2());
console.log(user);