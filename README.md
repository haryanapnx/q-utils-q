![mit](https://img.shields.io/npm/l/q-utils-q?style=plastic)
![stars](https://img.shields.io/github/stars/haryanapnx/q-utils-q?style=social)
[![npm](https://img.shields.io/npm/dm/q-utils-q)](https://www.npmjs.com/package/q-utils-q)
[![npm](https://img.shields.io/npm/v/q-utils-q)](https://www.npmjs.com/package/q-utils-q)



# q-utils-q 
Npm package Javascript utilities for survival.

## How To Use

``` npm install q-utils-q --save ```

```javascript 

import { 
   convertCurrency,
   titleCase,
   isEmpty,
   isEmptyArray,
   isFunction,
   isObject,
   isInteger,
   isPromise,
   isNaN,
   isString,
   getter,
   ...
} from 'q-utils-q'

// <isString > | Boolean
isString('string') 

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

// <getter > | Boolean
const obj = {
    foo: {
      foo1: "value"
    },
    fooArray: [
      { key: 'valueArray' }
    ]
  };

getter(obj, 'foo.foo1')) // result: 'value'
getter(obj, 'fooArray[0].key')); // result: 'valueArray'

// <isEmpty > | Boolean
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
