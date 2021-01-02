'use strict';

// Object
// one of the Javascript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}; // 오브젝트는 키와 값의 집합체

const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax 

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; 
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);



// 2. Computed properties
// key should be always string
console.log(ellie.name);  // 코딩하는 순간 키에 해당하는 값을 받아오기 위해 
console.log(ellie['name']);  // 정확하게 어떤 키를 받아오는지 모를 때/ 런타임에서 결정될 때 
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
// const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 30);
console.log(person4);

// function makePerson(name, age) {
//     return {
//         name,  // name: name,
//         age,  // age: age,
//     }
// }

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}



// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random)



// 6. for..in  vs  for..of
// for (key in obj)
console.clear();
// for (key in ellie) {
//     console.log(key);
// }

// for (value of iterable)
const array = [1,2,4,5];
// for(let i = 0; i < array.length; i ++) {
//     console.log(array[i])
// }

// for(value of array) {
//     console.log(value);
// }




// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
// user2.name = 'coder';
console.log(user)

// old way
// const user3 = {};
// for (key in user) {
//     user[key] = user[key];
// }
// console.log(user3)

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
// 뒤에 나오는 값일수록 앞에 동일한 프로퍼티가 있다면 덮어씌운다
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue
console.log(mixed.size);  // big
