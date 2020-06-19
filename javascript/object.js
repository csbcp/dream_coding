/************************************************************************
   자바스크립트 7. 오브젝트 넌 뭐니?
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/1Lbr29tzAA8]                        
************************************************************************/

/**********************************************************
    Objects
    one of the JavaScript's data types.
    a collection of related data and/or functionality.
    Nearly all objects in JavaScript are instance of Object
    object = {key : value} object는 key와 value의 집합체이다.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
***********************************************************/

// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const ellie = {name: 'ellie', age: 4};
print(ellie);

// with Javascript magic (dynamically typed language)
// can add or delete properties laster
ellie.hasJob = true;
console.log(ellie.hasJob);  // expected output: true

delete ellie.hasJob;
console.log(ellie.hasJob);  // expected output: undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name);    // 명확하게 key를 알고 있을때 사용
console.log(ellie['name']); // 실시간으로 key를 가지고 올때 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);  // expected output: true

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);   // expected output: true
console.log('age' in ellie);    // expected output: true
console.log('random' in ellie); // expected output: true

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key) ;
}

// for (value of iterable)
const array = [1, 2, 4, 5];

for (value of array) {
    console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// sample 1
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// sample 2
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const maxed = Object.assign({}, fruit1, fruit2);    // property가 같다면 뒤에 할당된것으로 덮어쓴다.
console.log(maxed.color);   // expected output: blue
console.log(maxed.size);    // expected output: big