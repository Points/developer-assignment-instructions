const input = require('./input/success.json');
const {simulate} = require('./simulator');

const output = simulate(input);

console.log(output);
