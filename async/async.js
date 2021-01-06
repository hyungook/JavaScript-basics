'use strict'

// async & await
// clear style of using promise :) (깔끔하게 promise 사용하기)

// 1. async
async function fetchUser() {
    // return new Promise((resolve, reject) => {
        // do network reqeust in 10 secs ...
        return 'ellie';
        // resolve('ellie');
    // });
}
const user = fetchUser();
user.then(console.log);
console.log(user);



// 2. await ✨
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function getBanana() {
//     return delay(3000)
//     .then(() => '🍌');
// }

//

// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     })
// }

async function pickFruits() {
    // const apple = await getApple();
    // const banana = await getBanana();
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);



// 3. useful Promise APIs
// 
function pickAllFruis() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruis().then(console.log);


// 가장 먼저 값을 리턴하는 것만 전달
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)



