/************************************************************************
   자바스크립트 6. 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/_DLhUBWsRtw]                        
************************************************************************/

'use strict';

/**********************************************************
    Object-oridndted programming
    class: template
    object: instance of a class
    JavaScript classes
        - introduced in ES6
        - syntactical sugar over prototype-base inheritance
***********************************************************/

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.aga  = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
    }

    get age() {
        return this._age;
    }

   set age(value) {
        //  if (value < 0) {
        //      throw Error('age can not be nagative');
        //  }
       this._age = value < 0 ? 0 : value;
   }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class Experment {
    publicField = 2;
    #privateField = 0;                  // 최근에 
}
const experiment = new Experment();
console.log(experiment.publicField);    // expected output: 2
console.log(experiment.privateField);   // expected output: undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);    // expected output: undefined
console.log(Article.publisher);     // expected output: Dream Coding
Article.printPublisher();           // expected output: Dream Coding

// 5. inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width  = width;
        this.height = height;
        this.color  = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw()
        console.log('🔺')
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Trangel color is ${this.color}`
   }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw()
console.log(rectangle.getArea())

const triangle = new Triangle(20, 20, 'red');
triangle.draw()
console.log(triangle.getArea());

// 6. Class checking instanceof
// object가 class를 이용해서 만들어진것인지 검사
console.log(rectangle instanceof Rectangle);    // expected output: true
console.log(triangle instanceof Rectangle);     // expected output: false
console.log(triangle instanceof Triangle);      // expected output: true
console.log(triangle instanceof Shape);         // expected output: true
console.log(triangle instanceof Object);        // expected output: true
console.log(triangle.toString());               

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// javascript 내부에 포함되어 있는 Object는 어떤것이 있는지 Category별로 정리되어 있다.
