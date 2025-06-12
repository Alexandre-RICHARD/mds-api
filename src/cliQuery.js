const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

export const makeQuery = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
}
