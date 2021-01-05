'use strict';

// HTTP : Hypertext Transfer Protocal
// AJAX : Asynchronous JavaScript And XML
// - 웹페이지에 동적으로 데이터를 주고받을 수 있는 기술을 의미
// - 대표적인 예로 : XHR(XMLHttpRequest) = 브라우저에서 제공하는 오브젝트
// XML : 마크업 언어

// **
// JSON (JavaScript Object Notation)
// Object { key: value }로 구성되어 있다.
// - simple data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization(직열화) and transmission of data between the network the network connections
// - indeplendent programming language and platform

// **
// object --(serialize)--> string
// object <--( deserizalize )-- string


// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'null',
    birthDate: new Date(),
    // 함수는 포함하지 않는다.
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'birthDate'? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();  // 오류

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());



// 유용한 사이트 !!
// 1. JSON Diff ( 첫 번째 데이터와 두 번째 데이터 비교 )
// 2. JSON Beautifier ( 코드 포맷 정리 )
// 3. JSON Parser ( object 형태로 확인 가능 )
// 4. JSON Validator ( 오류 확인 )


// *
// api 활용해서 토이 작업 go~
