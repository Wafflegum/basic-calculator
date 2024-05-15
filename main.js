const prompt = require("prompt-sync")({ sigint: true });

const a = prompt("Give me the first number");
const b = prompt("Give me the second number");

let c = parseFloat(a) + parseFloat(b);
console.log(c);