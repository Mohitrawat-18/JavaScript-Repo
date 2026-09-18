function multiplyBy5(num){
    this.num = num;
    return num*5;
};

multiplyBy5.power = 2;

// console.log(multiplyBy5(10)); // 50
// console.log(multiplyBy5.power); // 2
// console.log(multiplyBy5.prototype); // {}

function createUser(username,score){
    this.username = username;
    this.score = score;
};

createUser.prototype.increment = function(){
    this.score++;
};

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
};

const user1 = new createUser('A',20);
const user2 = new createUser('B',30);

user1.printMe();