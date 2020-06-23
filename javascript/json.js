/************************************************************************
   자바스크립트 10. JSON 개념 정리 와 활용방법 및 유용한 사이트 공유 JavaScript JSON
   프론트엔드 개발자 입문편 (JavaScript ES6)        
   [https://youtu.be/FN_D4Ihs3LE]                        
************************************************************************/

// HTTP : Hypertext Transfer Protocal
// AJAX : Asynchronous JavaScript And XML
// XMR : XMLHttpRequest

/************************************************************************
   JSON : JavaScript Object Notation
   simplest data interchange format : 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 
   포멧이다
   lightweight text-based structure : 텍스트를 기반으로 가벼운 구조이다
   easy to read : 읽기 편하다
   key-value pairs : 키와 값으로 이루어져 있는 파일 포맷이다
   used for serialization and transmission of data between the network 
   the network connection
   : 데이터를 주고 받을 때 직렬화를 사용한다. 
   independent programming language and platform : 프로그램 언어나 플랫폼에 
   상관없이 쓸 수 있다.        
************************************************************************/

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);  // expected output: true

json = JSON.stringify(['apple', 'banana']);
console.log(json);  // expected output: ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
}, ' ');
console.log(json);

// 2. JSON to Object 
console.clear();
json = JSON.stringify(rabbit);

// const obj = JSON.parse(json);
// console.log(obj);
// rabbit.jump();

obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
console.log(obj.birthDate.getDate());

// 유용한 사이트
// http://jsondiff.com/
// https://jsonbeautifier.org/
// https://jsonparser.org/
// https://jsonformatter.curiousconcept.com/