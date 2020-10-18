export const convertToRp = (angka: number, currency: string = 'IDR') => {
  const value = angka.toString().split('.')[0];
  const space = ' ';
  let rupiah = '';
  const angkarev = value.toString().split('').reverse().join('');
  for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
  return (
    currency +
    space +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
};

export const titleCase = (str: string, char: string) => {
  const strReplace = str.toLowerCase().split(char);
  return strReplace.map((item: string) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
};

export const isEmpty = (val: any) => {
  if (val === undefined) return true;

  if (
    typeof val === 'function' ||
    typeof val === 'number' ||
    typeof val === 'boolean' ||
    Object.prototype.toString.call(val) === '[object Date]'
  )
    return false;

  if (val === null || val.length === 0)
    // null or 0 length array
    return true;

  if (typeof val === 'object') {
    // empty object
    let r = true;

    // eslint-disable-next-line no-unused-vars
    for (const _f in val) r = false;
    return r;
  }
  return false;
};

/** @private is the value an empty array? */
export const isEmptyArray = (value?: any) =>
  Array.isArray(value) && value.length === 0;

/** @private is the given object a Function? */
export const isFunction = (obj: any) => typeof obj === 'function';

/** @private is the given object an Object? */
export const isObject = (obj: any) =>
  obj !== null && typeof obj === 'object';

/** @private is the given object an integer? */
export const isInteger = (obj: any): boolean =>
  String(Math.floor(Number(obj))) === obj;

/** @private is the given object a string? */
export const isString = (obj: any): obj is string =>
  Object.prototype.toString.call(obj) === '[object String]';

/** @private is the given object a NaN? */
export const isNaN = (obj: any): boolean => obj !== obj;


/** @private is the given object/value a promise? */
export const isPromise = (value: any): value is PromiseLike<any> =>
  isObject(value) && isFunction(value.then);


export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func(...args) }, timeout)
  }
}
