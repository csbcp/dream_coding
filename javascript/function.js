/**********************************************************
   자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현
   프론트엔드 개발자 입문편 (JavaScript ES6)             
   [https://youtu.be/e_lU39U-5bQ]                        
**********************************************************/

/**********************************************************
    Function
        - fundamental building block in the program.
        - subprogram can be used multiple times.
        - performs a task calculates a value.
**********************************************************/

// 1. Function declaration
// function name(param1, param2) { body...return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// TypeScript
// https://www.typescriptlang.org/play/index.html
// function log(message : string): number  {
//     console.log(message);
//     return 0;
// }
// log('Hello@');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'corder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// Parameter에 기본값을 "= 'unknown'" 형태로 정의할 수 있다.
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
// ...args는 array 형태로 전달된다. 
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // array를 출력할때에는 for..of 문법을 이용해서 간단히 출력할 수 있다.  
    for (const arg of args) {
        console.log(args);
    }

    // 좀 더 단순하게 처리하려면 forEach 함수를 이용할 수 있다.
    args.forEach((args) => console.log(args));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'childMessage';
    }
    // console.log(childMessage);   // error 자식 메시지를 참조 할 수 없다.
}
printMessage();

// 6. Return a value
// Return Type이 없는 경우는 return undifined와 같다. 생략가능
// 모든 함수는 return undifined 이거나 return 값을 전달할 수 있다.
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad : 조건이 맞을때까지 block에서 로직을 수행.
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good : 조건이 맞지 않을때는 return을 수행하고 조건이 맞을때만 로직을 수행.
// 조건이 맞지 않는 경우, 값이 undifined 경우, 값이 - 인 경우 빨리 리턴을 수행.
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

/**********************************************************
    First-class function
        functions are treated lik any other variable
        can be assigned as a value to variable
        can be passed as an argument to other functions.
        can be returned by another function
**********************************************************/

// 1. Function Expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');    
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// paramters에 함수를 전달해서 상황에 맞는 함수를 호출 
function rendomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
};

const printYes = function () {
    console.log('yes!')
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function () {
   console.log('No!')
   print()
};
rendomQuiz('wrong', printYes, printNo);
rendomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePring = function () {
    console.log('simplePring!')
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do somethin more
    return a + b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculation(command, a, b)
// command: add, substract, devide, multiply, remainder


function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'devide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('Unknown command')
    }
}

console.log(calculate('a', 1, 2))