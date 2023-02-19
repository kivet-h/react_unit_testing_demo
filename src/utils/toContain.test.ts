import { names } from './toContain';

test('匹配对象是否包含', () => {
  expect(names).toContain('jim');
});
