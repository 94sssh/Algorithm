const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let star = '';

function stars(input){
    for(i=0; i<input; i++){
        star = star+'*'
        console.log(star);
    }
}
stars(input);