'use strict';

// Array // 자료구조

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits)
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);  // 배열의 마지막 데이터


console.clear();
// 3. Looping over an array
// print all fruits

// 1.
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
};

// 2.
for(let fruit of fruits) {
    console.log(fruit);
}

// 3. 
//fruits.forEach()  // 콜백함수를 받아온다.  // forEach는배열안에 들어있는 value들 마다 내가 전달한 함수를 전달
fruits.forEach((fruit, index, array) => {
    // console.log(fruit, index, array)
    console.log(fruit)
});


// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beniggin
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push!

// splice : remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
console.log(fruits2);
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the inddex
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));  //  -1

// includes
console.log(fruits.includes('🍉'));  // true // 배열에 들어 있는지 확인
console.log(fruits.includes('🥥'));  //  false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));




// Array 선언된 곳에 가서 하나하나 읽어보기!