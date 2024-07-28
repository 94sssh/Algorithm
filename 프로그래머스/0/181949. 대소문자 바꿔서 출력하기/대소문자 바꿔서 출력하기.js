const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    console.log(input[0].split('').reduce((a, c) => a + (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()), ''));
});