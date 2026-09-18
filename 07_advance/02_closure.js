// Lexical scoping

function init(){
    let name  = "Javascript";
    function displayName(){
        // console.log(name); // Javascript
    };
    displayName();
};
init();

// function outer(){
//     let a = 20;
// };
// console.log(a); //  a is not defined

// Closure
// function makeFunc(){
//     let name  = "Java";
//     function displayName(){
//          console.log(name); // Java
//     };
//     return displayName;
// };

// const myFunc = makeFunc(); 
// myFunc();