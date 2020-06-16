// Whole-script strict mode syntax
// JavaScript is very fiexible
// flexible == dangerous
// added ECAMAScript 5

// 1. Use strict
// added in ES 5
// use this for Valina Javascript.

'use strict';

// 2. Variable (변수)
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'charles';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// block scope
// block 밖에서는 안에 내용을 볼 수 없다.
// global 변수는 어플리케이션이 실행할때부터 종료될때까지 메모리에 상주한다.

// "var" (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 변수를 어디에 선언했는지와 상관없이 항상 제일위로 선언으로 끌어올려준다.
// 그리고 block를 무시한다. has no block scope

// 3.contants
// 값을 할당하면 절대 값이 바뀌지 않는 것
// favor immutable data type always for a few reasons:
//  -- security
//  -- thread safety
//  -- reduce human mistakes
// Mutable Type : let, Immutable Type : const
const daysInWeek = 7;
const maxNumber = 5;

// 4. variable type
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numberic values: infinity, -infinity, Nan
const infinity = 1 / 0;             // 숫자를 0으로 나누는것은 무한대의 숫자가 생성되고 이것을 infinity라고 한다.
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;     // 문자를 숫자로 나누면 NaN 값이 출력된다.
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;  // over(-2**53) ~ 2**53  
console.log(`value : ${bigInt}, type ${typeof bigInt}`);

// string
const char = 'C';
console.log(`value: ${char}, type: ${typeof char}`);
const brendan = 'brendan';
const greeting = 'Hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${greeting}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, thpe, ${typeof test}`);

// null
const nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifirs of object
// 동일한 string을 작성했어도 다른 symbol로 만들어지기 주어지는 string에 상관없이 
// 고유한 식별자를 만들때 사용한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2)

// string이 똑같고 동일한 symbol을 만들고 싶다면 .for를 이용한다.
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2);  //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
console.log(`value: ${gsymbol1.description}, type: ${typeof gsymbol1}`);    //symbol은 .description을 이용해서 string으로 변환해서 출력한다.

// object, real-life object, data structure
// ellie object는 const로 정의되어서 할당이 불가하지만, ellie.name = 'none'으로는 변경이 가능한다.
const ellie = {name: 'ellie', aga: '20'};
ellie.name = 'none';
console.log(`value: ${ellie.name}, type: ${typeof ellie.name}`)

// 5. Dynamic typing: dynamically typed language
// javascript는 타입을 미리 선언하지 않고 runtime시에 할당된 값에 따라서 type이 변경될 수 있다.
let text = 'hello'
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = '7' + 5
console.log(`value: ${text}, type:${typeof text}`);
text = '8' / '2' 
console.log(`value: ${text}, type:${typeof text}`);

// console.log(text.charAt(0));    // runtime시에 type이 정해지므로 Uncaught TypeError

// 자바스크립트 기초 강의 (ES5+): 같이 노트를 작성하며 배워요 📒[https://youtu.be/OCCpGh4ujb8]