import { convertCurrency, titleCase, isEmpty, isEmptyArray, isFunction, isObject, isInteger, isPromise, isNaN, isString, debounce, getter } from '../index';

test('Convert currency', () => {
  expect(convertCurrency(2000, 'IDR')).toBe('IDR 2.000');
});

test('Title Case', () => {
  expect(titleCase('nama/path', '/')).toBe('Nama Path');
});

test('IS EMPTY', () => {
  expect(isEmpty({})).toBe(true);
});

test('Is Empty Array', () => {
  expect(isEmptyArray([])).toBe(true)
})

test('Is Function', () => {
  expect(isFunction((a: any) => a)).toBe(true)
})

test('isObject', () => {
  expect(isObject({ a: 1 })).toBe(true)
})

test('is Integer', () => {
  expect(isInteger(1)).toBe(false)
})

test('is string', () => {
  expect(isString('string')).toBe(true)
})

describe('isPromise', () => {
  it('verifies that a value is a promise', () => {
    const alwaysResolve = (resolve: any) => resolve();
    const promise = new Promise(alwaysResolve);
    expect(isPromise(promise)).toEqual(true);
  });

  it('verifies that a value is not a promise', () => {
    const emptyObject = {};
    const identity = (i: any) => i;
    const foo = 'foo';
    const answerToLife = 42;

    expect(isPromise(emptyObject)).toEqual(false);
    expect(isPromise(identity)).toEqual(false);
    expect(isPromise(foo)).toEqual(false);
    expect(isPromise(answerToLife)).toEqual(false);
    expect(isPromise(undefined)).toEqual(false);
    expect(isPromise(null)).toEqual(false);
  });
});

describe('isNaN', () => {
  it('correctly validate NaN', () => {
    expect(isNaN(NaN)).toBe(true);
  });

  it('correctly validate not NaN', () => {
    expect(isNaN(undefined)).toBe(false);
    expect(isNaN(1)).toBe(false);
    expect(isNaN('')).toBe(false);
    expect(isNaN([])).toBe(false);
  });
});

describe('getter', () => {
  const obj = {
    foo: {
      foo1: "value"
    },
    fooArray: [
      { key: 'valueArray' }
    ]
  };

  it('get value object', () => {
    expect(getter(obj, 'foo.foo1')).toBe('value');
    expect(getter(obj, 'fooArray[0].key')).toBe('valueArray');
  });

});


jest.useFakeTimers();
test('execute just once', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 500);
  // execute for the first time
  debouncedFunc();
  // move on the timer
  jest.advanceTimersByTime(250);
  // try to execute a 2nd time
  debouncedFunc();

  // fast-forward time
  jest.runAllTimers();

  expect(func).toBeCalledTimes(1);
});