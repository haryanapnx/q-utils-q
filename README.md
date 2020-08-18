# q-utils-q 
Npm package utilities for survival.

## How To Use

``` npm install q-utils --save ```


if the value is: 
```
null, undefined, 0, ''. 
```
then the return is ```true``` and vice versa

```javascript 
// <Import the function> using es5
const { isEmpty } = require('q-utils')

// <Import the function> using es6
import { isEmpty } from 'q-utils'

// <Examples with number>

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