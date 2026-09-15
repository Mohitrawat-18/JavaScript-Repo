const user = {
    username : "Amit",
    email : "amit12@gmail.com",
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
};

// user.welcomeMessage(); // Amit , Welcome to website
// user.username = "Ram";
// user.welcomeMessage(); // Ram , Welcome to website
// console.log(this); // {}

function msg(){
    let name = "Ram";
    console.log(this);
    console.log(this.name); // undefined
};
// msg();

// Arrow function(basic)
const addTwoNumbers = (num1,num2) => {
    // console.log(num1+num2);
   return num1+num2;
};

// Implicit return 
// const addTwoNumbers = (num1,num2) => (num1+num2);
const name = (name) => ({username:"Ram"});

// addTwoNumbers(6,5);
console.log(addTwoNumbers(4,5)); // 9
// console.log(name());