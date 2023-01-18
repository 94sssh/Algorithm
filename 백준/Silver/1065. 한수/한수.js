const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const check = (num) => {
    if (num < 100) {
        return 1;
    } else {
        num = String(num);
        let temp = num[1] - num[0];
        for (let i = 0; i < num.length - 1; i++) {
            if (num[i + 1] - num[i] !== temp) {
                return 0;
            }
        }
        return 1;
    }
};

let result = 0;
for (let i = 1; i <= input; i++) {
    result += check(i);
}

console.log(result);
