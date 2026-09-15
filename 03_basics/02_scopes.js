// Scopes

// Global scope
let a =50;

// Block scope
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER : ",a);
}

// console.log(a); // Not accessible //50
// console.log(b); // Not accessible 
// console.log(c); // 30

// child can access parent variables but not vice-versa.  
function one(){
    const name = "Amit"
    function two(){
        const age  = 25
        // console.log(name);
    };
    // console.log(age);  // error
    two();
};
one();

if(true){
    const name = "Ram";
    if(name === "Ram"){
        const email = "ram12@gmail.com";
        console.log(name+" "+email); // Ram ram12@gmail.com
    }
    // console.log(email); //error
}
// console.log(name); // error

// ************** Interesting (HOISTING) ***************

// Declarative Function
// console.log(addOne(20)); // 21 , Can be hoisted
function addOne(num){
    return num+1;
};
console.log(addOne(20));

// Expressive Function
// console.log(addTwo(20)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
};
console.log(addTwo(20));