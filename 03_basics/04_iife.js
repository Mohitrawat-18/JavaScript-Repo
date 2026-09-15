// Immediately Invoked Function Expressions (IIFE)
// Used to prevent variables from leaking into the global scope.

(function printMsg(){
    console.log(`Hello Everyone`);
})();
// Last semi colon is compulsory to end the IIFE function.

// Can be a arrow function
((name) => {
    console.log(`${name} , How are you`);
})("Aman");
