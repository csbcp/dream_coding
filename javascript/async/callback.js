/************************************************************************
   자바스크립트 11. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험 😱
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/s1vpVCrT8f4]                        
************************************************************************/

'use strict';

// JavaScript is synchronous. by orger -> in order
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration.
console.log('1');
 
// setTimeout(function () {
//     console.log('2');
// }, 1000);

setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print()
};
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);

// callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id)
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    };
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user = 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        })
    }
};

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user, (userWithRole) => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            }, 
            (error) => {
                console.log(error);
            }
        );
    }, 
    (error) => {
        console.log(error);
    }
);
   
