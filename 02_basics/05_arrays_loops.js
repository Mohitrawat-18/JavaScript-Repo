// for of loop

const arr = [1,2,3,4,5];
for(const data of arr){
    // console.log(data);
};

const greeting = "Hello World";
for(const greet of greeting){
    // console.log(greet);
};

//Map
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FRA',"France");

// console.log(map);
for(const [key,value] of map){
    // console.log(key,':-',value);
}

// for(const key in map){
//     console.log(key);
// }

// ForEach -> does not return a new array.
// filter -> return a new array
// map()     → returns a new array

// for in loop
// prints keys 
const programming = ["js","java","python","ruby","spring"];
for(const key in programming){
    // console.log(`${key} for ${programming[key]}`);
}

// forEach loop
const subjects = ["English","Physics","Hindi","Maths","Chemistry"];
//subjects.forEach((item) => console.log(item));
// subjects.forEach((index,item,arr) => console.log(index,item,arr));

const games = [
    {
        gameId : 101,
        gameName : "Free Fire"
    },
    {
        gameId : 102,
        gameName : "Apex Legends"
    },
    {
        gameId : 103,
        gameName : "Crossfire"
    }
];
games.forEach((game) => {
    // console.log(`Game ID is ${game.gameId} and name is ${game.gameName}`);
});

// filter()
const nums = [1,2,3,4,5,6,7,8,9,10];
// const numsData = nums.filter((num) => {
//     return num % 2 == 0
// }); // return compulsory in this case when block is present

const numsData = nums.filter((num) => num % 2 == 0);
// console.log(numsData); // [ 2, 4, 6, 8, 10 ]

// same logic in forEach method
const newNums = [];
nums.forEach((num) => {
    if(num> 4){
        newNums.push(num);
    }
});
//console.log(newNums);

const books = [
    { title: "The Alchemist",genre: "Fiction",publish: 1988,
        edition: "First"
    },
    { title: "Atomic Habits",genre: "Self-Help",publish: 2018,
        edition: "First"
    },
    { title: "Clean Code",genre: "Programming",publish: 2008,
        edition: "First"
    },
    { title: "The Pragmatic Programmer",genre: "Programming",publish: 1999,
        edition: "20th Anniversary"
    },
    { title: "Rich Dad Poor Dad",genre: "Finance",publish: 1997,
        edition: "Revised"
    },
    { title: "The Hobbit",genre: "Fantasy",publish: 1937,
        edition: "Second"
    },
    { title: "1984",genre: "Dystopian",publish: 1949,
        edition: "First"
    },
    { title: "The Great Gatsby",genre: "Classic",publish: 1925,
        edition: "First"
    },
    { title: "Harry Potter and the Philosopher's Stone",genre: "Fantasy",publish: 1997,
        edition: "First"
    },
    { title: "Think and Grow Rich",genre: "Self-Help",publish: 1937,
        edition: "Revised"
    }
];

// const userBooks = books.filter((book) => book.edition === "First");
// const userBooks = books.filter((book) => book.genre === "Self-Help");

// const userBooks = books.filter((book) => book.publish >= 1990);
const userBooks = books.filter((book) => book.publish >= 1990 && book.genre === "Programming");
// console.log(userBooks);

// map() method
const myNumbers = [1,2,3,4,5,6];
// console.log(myNumbers.map((num) => num+10));

// Chaining of methods
const newNumbers  = myNumbers
                .map((num) => num*10)
                .map((num) => num + 2)
                .filter((num) => num%4==0); 
// console.log(newNumbers); // [ 12, 32, 52 ]

// reduce() method
// (accumulator and currentValue)
const values  = [1,2,3,4,5];
const total = values.reduce((acc,currentValue) => {
    // console.log(`acc: ${acc} and current value is : ${currentValue}`);
    return acc+currentValue;
},0);
// console.log(total); // 15

const shoppingCart =[
    {
        itemName : "Mobile",
        price : 15999
    },
    {
        itemName : "Laptop",
        price : 89999
    },
    {
        itemName : "Refrigerator",
        price : 22000
    },
    {
        itemName : "AC",
        price : 42999
    }
];

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0);
console.log(`Your total amount to pay is ${priceToPay}`);
