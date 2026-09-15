const marvelHeroes = ["Thor","Ironman","Spiderman"];
const dcHeroes = ["Flash","Batman","Superman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes[3][2]); // Superman

// concat
const heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// spread operator
const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

// flat method
const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const flatArr = arr.flat(Infinity);
// console.log(flatArr);

console.log(Array.isArray("Mohit")); // false
console.log(Array.from("Mohit")); // [ 'M', 'o', 'h', 'i', 't' ]

// Empty array
console.log(Array.from({name:"Mohit"})); // interesting case

// Convert variables to array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
