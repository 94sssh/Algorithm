const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let temp = str.split('')
    for(let i=0; i<temp.length; i++){
        if(temp[i] === temp[i].toUpperCase()){
            temp[i] = temp[i].toLowerCase()
        } else {
            temp[i] = temp[i].toUpperCase()
        }
    }
    console.log(temp.join(''))
});