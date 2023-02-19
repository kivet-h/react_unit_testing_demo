import { getIntArray } from './toThorw';

test('getIntArray(3.3)应该抛出错误', () => {
  function getIntArrayWrapFn() {
    getIntArray(3.3);
  }

  expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
});
