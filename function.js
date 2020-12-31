'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(paraml, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello!');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hellooo!');
log(123);


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unkknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!')



// 4. Rest parameters (added in ES6) (배열 형태로 전달)
function printAll(...args) {
    // 1.
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 2. 
    for (const arg of args) {
        console.log(arg);
    }
    // 3.
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');



// 5. Local scrop
//  밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessge() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    printAnother();

    // return undefined;   // 생략가능
}
printMessge();



// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    }
}
//good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic ...
}


//
//
//


// First-lasss function
// function are treated like ant other variable
// can be assigned as a vlaue to variable
// can ve passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {  // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


// 2. Callback function using function expression
// 
function randomQuiz (answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in devugger's stack trace
// recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);




// 3. Arrow function
// always annonymous
const simplePrint1 = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a,b) => a + b;

const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
};



// 4. IIFE: Immediately Invoked Function Expression
// 즉시 실행 함수
(function hello() {
    console.log('IEFF');
})();




// Fun quiz time 👍
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2,3));