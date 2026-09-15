// const user  = new Object();  // singleton
const user = {} // non singleton
user.id = "123abc";
user.name = "Amit";
user.isLoggedIn = true;

// console.log(user);

const regularUser  = {
    email : "abc12@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Amit",
            lastName : "Trivedi"
        }
    }
};
// console.log(regularUser.fullName.userFullName.firstName); // Amit

// Merging two objects
const obj1 = { 1: "a",2 : "b"};
const obj2 = { 3: "c",4 : "d"};
// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}; // spread operator
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "ab@gmail.com"
    },
    {
        id : 2,
        email : "bs@gmail.com"
    },
    {
        id : 3,
        email : "bd@gmail.com"
    }
];
// console.log(users[1].email); // bs@gmail.com

// console.log(Object.keys(user)); // [ '0', '1', '2' ]
// console.log(Object.values(user));
// console.log(Object.entries(user));

// hasOwnProperty method
// console.log(user.hasOwnProperty("isLogged")); // false

const course = {
    courseName : "Java in Depth",
    price : 999,
    courseInstructor : "Mohit"
};

// de-structuring of object

// const {courseInstructorr} = course;
const {courseInstructor: instructor} = course;
console.log(instructor); // Mohit