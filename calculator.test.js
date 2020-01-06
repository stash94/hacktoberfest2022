const { execFileSync } = require('child_process');

const run = (...args) => parseFloat(execFileSync('./calculator.js', args, { encoding: 'utf8' }));

test('multiplication', () => {
  const actual = run('x', 3, 4);
  expect(actual).toBe(12);
});

test('division', () => {
  const actual = run('/', 3, 4);
  expect(actual).toBe(0.75);
});

test('addition', () => {
  const actual = run('+', 3, 4);
  expect(actual).toBe(7);
});

test('subtraction', () => {
  const actual = run('-', 3, 4);
  expect(actual).toBe(-1);
});
