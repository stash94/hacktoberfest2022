const { execFileSync } = require('child_process');

const run = (...args) => parseFloat(execFileSync('./calculator.js', args, { encoding: 'utf8' }));

test('addition', () => {
  const actual = run('+', 3, 4);
  expect(actual).toBe(7);
});
