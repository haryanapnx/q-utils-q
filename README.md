![mit](https://img.shields.io/npm/l/q-utils-q?style=plastic)
![stars](https://img.shields.io/github/stars/haryanapnx/q-utils-q?style=social)
[![npm](https://img.shields.io/npm/dm/q-utils-q)](https://www.npmjs.com/package/q-utils-q)
[![npm](https://img.shields.io/npm/v/q-utils-q)](https://www.npmjs.com/package/q-utils-q)



# q-utils-q 
Npm package utilities for survival.

## How To Use

``` npm install q-utils-q --save ```


if the value is: 
```
null, undefined, 0, ''. 
```
then the return is ```true``` and vice versa

```javascript 

import { 
   convertToRp,
   titleCase,
   isEmpty,
   isEmptyArray,
   isFunction,
   isObject,
   isInteger,
   isPromise,
   isNaN,
   isString 
} from 'q-utils-q'

// <Examples with number>

isString 

// <convert to RP >
convertToRp(2000, 'IDR') // will be IDR 2.000
convertToRp(2000, 'USD') // will be USD 2.000

// <titleCase >
titleCase('titlecase') // will be Titlecase
titleCase('title_case', '_') // will be Title Case

// <isEmptyArray > | Boolean
isEmptyArray([]) // will be true 
isEmptyArray([1,2,3]) // will be false

// <isFunction > | Boolean
isFunction(()=>{}) // will be true 

// <isObject > | Boolean
isObject({}) // will be true 
isObject({foo:1, bar:2}) // will be true 

// <isInteger > | Boolean
isInteger(1) // will be true 
isInteger('string') // will be false 


// <isString > | Boolean
isString('string') // will be true 

// <isNaN > | Boolean
isNaN(undefined) // will be false;
isNaN(1) // will be false;
isNaN('') // will be false;
isNaN([])// will be false;
isNaN(NaN)// will be true;

// <isPromise > | Boolean
const alwaysResolve = (resolve: Function) => resolve();
const promise = new Promise(alwaysResolve);
isPromise(promise); // will be true

// Will return false
console.log(`Check Value 1 result is ${isEmpty(1)}`);
// Will return true
console.log(`Check Value 0 result is ${isEmpty(0)}`);

// <Example with string>

// Will return false
console.log(`Check Value "hacktoberfest" result is ${isEmpty("hacktoberfest")}`);
// Will return true
console.log(`Check Value "" result is ${isEmpty("")}`);

// <Example with array>

// Will return false
console.log(`Check Value [1,2,3,4,5] result is ${isEmpty([1,2,3,4,5])}`);
// Will return true
console.log(`Check Value [] result is ${isEmpty([])}`);

// <Example with object>

// Will return false
console.log(`Check Value {name: "Udin"} result is ${isEmpty({name: "Udin"})}`);
// Will return true
console.log(`Check Value {} result is ${isEmpty({})}`);
```

### Contributing

PRs are welcome!

* Test: `npm test`
* Build: `npm run build`. 
