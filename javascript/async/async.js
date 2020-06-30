/************************************************************************
   자바스크립트 13. 비동기의 꽃 JavaScript async 와 await 그리고 유용한 Promise APIs
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/aoQSOZfz3vQ]                        
************************************************************************/

// async $ await
// clear style of using promise

// 1.async
// Promise
// function fetchUser() {
//     // do network request in 10 secs...
//     return new Promise((resolve, rejuct) => {
//         resolve('ellie');
//     });
// }

// const user = fetchUser();
// user.then((console.log))
// console.log(user);

// async
// Promise를 좀 더 간편하게 사용할 수 있는 Syntactic Sugar.
async function fetchUser() {
    return 'elle';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ⭐️
function delay(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
   );
}

async function getApple() {
    await delay(1500);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`; 
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple, getBanana])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

// Promise to async and await

// callback hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
    
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user = 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            })
        });
    }
};


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
    .catch(console.log)