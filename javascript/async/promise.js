/************************************************************************
   자바스크립트 12. 프로미스 개념부터 활용까지 JavaScript Promise
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/JB_yU6Oe2eE]                        
************************************************************************/

'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1.Prodecer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'))
    }, 2000)
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally')
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        })
    })
    .then(num => console.log(num));    

// Error Handling
const getHan = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000); 
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
//        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook  = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHan() //
    .then(getEgg)
    .catch(error => {
        return '🍞'
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);