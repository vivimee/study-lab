const sum = require('./sum');

test('adds 1 + 2 to equal 3', async () => {
  expect.assertions(1);
  try {
    const res = await new Promise((resolve) => setTimeout(() => {
      resolve(100);
    }, 300));
    expect(sum(res, 1)).toBe(101);
  } catch (e) {
    expect(e).toMatch('error');
  }
})