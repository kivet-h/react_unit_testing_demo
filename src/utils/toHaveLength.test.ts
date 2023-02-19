import { getIntArray, getIntString } from './toHaveLength';

test('getIntArray(3)返回的数组长度应该为3', () => {
  expect(getIntArray(3)).toHaveLength(3);
});

test('getIntString(5)返回的字符串长度应该为5', () => {
  expect(getIntString(5)).toHaveLength(5);
});
