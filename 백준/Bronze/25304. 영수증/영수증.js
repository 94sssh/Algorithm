const input = require('fs').readFileSync(0).toString().trim().split('\n');

let price = parseInt(input[0]);
let ea = parseInt(input[1]);
let total=0;

const list = function(input){
    for(let i=2; i<2+ea; i++){
        total = total + (input[i].split(' ')[0] * input[i].split(' ')[1])
    }
    if(price === total){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
}

list(input);