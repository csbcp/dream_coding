/************************************************************************
   자바스크립트 8. 배열 제대로 알고 쓰자.
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/yOdAVDuHUKQ]                        
************************************************************************/
'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear;
// 3. Looping over an array
// a.for
for (let index = 0; index < fruits.length; index++) {
    console.log(`index: ${index}, fruit: ${fruits[index]}`);
};

// b.for of
for (let fruit of fruits) {
    console.log(`fruit: ${fruit}`);
};

// c. forEach
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array)
});

fruits.forEach(fruit => console.log(`forEach: ${fruit}`));

// d.do...while
let fruit;
let i = 0;

do {
    console.log(`do...while fruit: ${fruits[i]}`);
    i += 1;
} while (i < fruits.length)


// e.while
i = 0;
while (i < fruits.length) {
    console.log(`while index: ${i}, fruit: ${fruits[i]}`);
    i += 1;
}

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍉', '🍈');
console.log('push:', fruits);

// pop: remove an item from the end
fruits.pop()
console.log('pop:', fruits);

// unshift : add an item to the beginning
fruits.unshift('🍉', '🍈');
console.log('unshift:', fruits);

// shipt : remove an item for the beginning
fruits.shift();
console.log('shift:', fruits);

// note!! shipt, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('🍉', '🍈');
console.log('shift:', fruits);
fruits.splice(1);               // n부터 데이터를 지운다.
console.log('shift:', fruits);
fruits.splice(1, 1);            // n의 위치에서 n 개수만큼 지운다.
console.log('shift:', fruits);
fruits.splice(1, 1, '🍉', '🍈'); 
console.log('shift:', fruits);

// combine two arrays
const fruits2 = ['🍐', '🍒']
const newFruits = fruits.concat(fruits2)
console.log('fruits', fruits);
console.log('fruits2', fruits2);
console.log('newFruits', newFruits);

// 5.Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍈'));
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍜'));


// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));