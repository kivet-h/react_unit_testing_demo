import { getUserInfo } from './toMatch';

test("getUserInfo().name 应该包含'mo'", () => {
  expect(getUserInfo().name).toMatch(/mo/i);
});
