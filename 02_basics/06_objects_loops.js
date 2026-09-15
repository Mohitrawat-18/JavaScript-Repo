// for in loop

const myObj  = {
    game1 : "Free Fire",
    game2 : "BGMI",
    game3 : "Valorant"
};

for(const key in myObj){
    console.log(`${key} is ${myObj[key]}`);
}