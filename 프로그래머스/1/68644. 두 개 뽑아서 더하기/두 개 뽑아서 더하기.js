function solution(numbers) {
    return numbers.reduce((a, c, i) => {
        for(let j = i + 1; j < numbers.length; j++){
            if(!a.includes(c + numbers[j])) a.push(c + numbers[j]);
        }
        return a;
    }, []).sort((a, b) => a - b);
}