'use strict';

// Whole-script strict mode syntax
// JavaScript is very felxible
//  flexiblr === dangerous
//  added ECMAScript 5


// 1. 'use strict'
'use strict'
console.log('hello world!')


// 2. Variable, rw(read/write) (변수)

// 2-1. let (added in ES6)
let globalName = 'global name'
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);    
    console.log(globalName);    
}
console.log(name);    
console.log(globalName);    

// 2-2. var (don't ever use this!)
// var hoistiog (move declaration from bottom to top)
// 어디에 선언했냐는 상관없이 항상 제일 위로 선언을 끌어올리는 것
// has no block scrop

console.log(age)
var age;
age = 4;



// 2-3. Constant, r(read only)  
//  use const whenever possible.
//  only use let if variable needs to change.
const dayInweek = 7;
const maxNumber = 5;

// Note!!
// Immutable data types : primitive types. frozen objects (i.e object.freeze())
//  Mutable data types : all abjects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security (보안)
//  - thread safety 
//  - reduce human mistakes 




//  3. Variable types
// primitive, single item: number, string, boolean, null, undirined, symbol
// object, box container
// functino, first-class function

const count = 17;  // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//  number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const nefativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(nefativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)  (최근에 생긴 문법)
const bigInt = 123456789012345678901234567890n;  // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean
//  false: 0, null, undefined, NaN, ''
//  true: any other value
const canRead = true;
const test = 3 < 1; //true
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);

// undefined
// let x ;
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)



//  object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;


// 4. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));  // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

