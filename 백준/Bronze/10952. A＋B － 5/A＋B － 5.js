const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function ab(input){
for(i=0; i<input.length; i++){
    let a = input[i].toString().split(' ');
    if(parseInt(a[0])!==0 && parseInt(a[1])!==0){
    console.log(`${parseInt(a[0])+parseInt(a[1])}`)
    }
}
}
ab(input);