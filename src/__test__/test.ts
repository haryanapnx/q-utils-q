import { convertToRp, titleCase, isEmpty } from '../index';

test('Convert currency', () => {
  expect(convertToRp(2000, 'IDR')).toBe('IDR 2.000');
});

test('Title Case', () => {
  expect(titleCase('nama/path', '/')).toBe('Nama Path');
});

test('IS EMPTY', () => {
  expect(isEmpty({})).toBe(true);
});
