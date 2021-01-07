'use strict'

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    // class 안에서는 function 선언하지 않아도 된다.
    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            // console.log('yo!');
            
            // if(this.callback) {
            //     this.callback(this.counter);
            // }
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`wow ${num}`);
}
function alertNum(num) {
    alert(`alert ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// coolCounter.increase();