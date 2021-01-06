'use strict'

// Promise is a JavaScript object for asynchronous operation.
// - state(상태) : pending => fulfilled or rejected
// Producer(생산자) vs Consumer(소비자)
// - 프로듀싱 vs 컨슈머

// 1. Producer
// when new Promise is created, the executer runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...')
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no netWork'));
    }, 2000)
});


// 2. Cunsumers: then, catch, finally
// then : promise가 정상적으로 잘 수행되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 이 값이 value의 파라미터로 전달되어져 오는 것.
promise //
    .then((value) => {  
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1),1000)
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = (hen) =>
new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

// getHen()
// .then(hen => getEgg(hen))
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
//  콜백함수를 전달 할 때 받아오는 value를 다른 함수를 하나를 호출하는 경우 생략 가능.
getHen() //
    .then(getEgg)
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);



    