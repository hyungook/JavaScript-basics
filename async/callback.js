'use strict'

// Javascript is synchronous. (동기적)
// Excute the code block by orger after hoisting
// hoisting: var, function declaration 이런 함수 선언들이 자동적으로 제일 위로 올라가는 것.
console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');


// 1. Synchronus callback ( 즉각적으로 동기적으로 실행 )
function printImmediately(print) {
    print();
};
printImmediately(() => console.log('hello'));

// 2. Asynchronous callback ( 나중에 예측할 수 없이 실행 )
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);




// 3. Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess( {name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }

}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password, (user) => {
    userStorage.getRoles(user, (userWithRole) => {
        alert(`Hello ${userWithRole.name}m  you have a ${userWithRole.role} role`)
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
})

// 가독성이 떨어진다.

