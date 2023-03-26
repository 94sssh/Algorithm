const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [a, b, c, d, e, f] = input.split(' ').map(Number); 

const math = () => {
    for(let x=-999; x<=999; x++){
        for(let y=-999; y<=999; y++){
            if(a*x + b*y === c && d*x + e*y === f){
                return console.log(x, y)
            }
        }
    }
}

math()