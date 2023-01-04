const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let index = Number(input[0].split(' ')[0]);

let saw = input.slice(1,index+1)
let heard = input.slice(index+1)

const set1 = new Set(saw);
const set2 = new Set(heard);

const intersection = new Set(([...set1].filter(x => set2.has(x))).sort());

console.log(intersection.size)
intersection.forEach((value) => {
	console.log(value);
});