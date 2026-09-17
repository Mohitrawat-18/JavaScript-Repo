const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task is complete");
        resolve()
    },1000)
});

promise1.then(function(){
    // console.log("Promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
});

const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Mohit',email:'mr@example.com'})
    },1000)
});

promise2.then(function(user){
    // console.log(user);
});

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'Ram',password:'123'});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },1000);
});

promise3
.then((user) => {
    // console.log(user);
    return user.username;
})
.then((username) => {
    // console.log(username);
})
.catch((error) => {
    // console.log(error);
})
.finally(() => console.log('The Promise is either resolved or rejected'));


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'Java',password:'1234'});
        }
        else{
            reject('ERROR: Java went wrong');
        }
    },1000);
});

async function consumePromise4(){
    try{
        const response = await promise4;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};

consumePromise4();

// async function getAllUsers(){
//    try{
//      const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data =await response.json();
//     console.log(data);
//    }catch(error){
//     console.log("ERROR: ",error);
//    }
// };

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))

