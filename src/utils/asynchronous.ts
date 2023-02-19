export const fetchUser = () => {
  return new Promise((resole) => {
    setTimeout(() => {
      resole({
        name: 'moji',
        age: 24,
      });
    }, 2000);
  });
};
