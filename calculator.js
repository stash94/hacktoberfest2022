#!/usr/bin/env node
const program = require('commander');

program
  .command('x <a> <b> [others...]')
  .action((a, b, others) => {
    console.log([a, b, ...others].reduce((acc, cur) => acc * cur));
  });

program
  .command('/ <a> <b> [others...]')
  .action((a, b, others) => {
    console.log([a, b, ...others].reduce((acc, cur) => acc / cur));
  });

program
  .command('+ <a> <b> [others...]')
  .action((a, b, others) => {
    console.log([a, b, ...others].reduce((acc, cur) => acc + cur));
  });

program
  .command('- <a> <b> [others...]')
  .action((a, b, others) => {
    console.log([a, b, ...others].reduce((acc, cur) => acc - cur));
  });

program.parse(process.argv);
