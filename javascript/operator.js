/**********************************************************
   자바스크립트 4. 코딩의 기본 operator, if, for loop 코드리뷰 팁 
   프론트엔드 개발자 입문편 (JavaScript ES6)             
   [https://youtu.be/YBjufjBaxHo]                        
**********************************************************/

// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);     // add
console.log(1 - 1);     // substract
console.log(1 * 1);     // multiply
console.log(1 / 1);     // divide
console.log(5 % 2);     // remainder
console.log(2 ** 3);    // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement =  counter++;
// postIncreement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${postIncrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operstors
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5.Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 <= 6);   // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// value1 < value2 < check()
// expresion이나 function을 호출하는 경우는 제일뒤에 배치하는것이 효율적이다.
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😱');
    }
    return true;
}

// && (and), finds the first truthy value
// heavy한 operation의 경우 제일뒤에 배치하는것이 효율적이다.
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😱');
    }
    return true;
}

// ! (not), finds the first truthy value
// heavy한 operation의 경우 제일뒤에 배치하는것이 효율적이다.
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive); 
console.log(stringFive !== numberFive);

// object equality by reference
// ellie1과 ellie2의 value는 같지만 각기 다른 reference를 참조한다.
const ellie1 = {name: 'ellie'}; 
const ellie2 = {name: 'ellie'};
// ellie3는 ellie1을 참조하고 있으므로 같은 reference를 가지고 있다.
const ellie3 = ellie1;  
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equlity - puzzler
console.log(0 == false);    
console.log(0 === false);           
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 0, null and empty string은 false로 간주될 수 있다.

// 8. conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log(`welcome, ${name}!`);
} else if (name === 'coder') {
    console.log('You\'re amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for muliple if checks
// use for enum-like value check
// use for multiple type checks is TS
const brower = 'IE';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
      console.log('same all')
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// begin은 처음에 한번만 호출하고 condition과 step을 반복한다.
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline valiable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use condition)
for (i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`even numbers value: ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print only even numbers until reaching 8 (use break)
for (i = 0; i < 11; i++) {
    if (i > 8) {
        console.log('reaching 8');
        break;
    } else {
        console.log(`value: ${i}`);
    }
}
