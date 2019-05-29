const { execFileSync } = require('child_process');

const run = args => parseFloat(execFileSync('./calculator.js', args, { encoding: 'utf8' }));

test('addition', () => {
  const actual = run(['+', 3, 4]);
  expect(actual).toBe(7);
});

test('subtraction', () => {
  const actual = run(['-', 15, 4]);
  expect(actual).toBe(11);
});

test('muplication', () => {
  const actual = run(['x', 3, 4]);
  expect(actual).toBe(12);
});

test('division', () => {
  const actual = run(['/', 10, 5]);
  expect(actual).toBe(2);
});
