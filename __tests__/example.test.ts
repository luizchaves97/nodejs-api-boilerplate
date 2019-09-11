const sum = (a: number, b: number) => {
  return a + b;
};

test('it should return 4', () => {
  expect(sum(1, 3)).toBe(4);
});
