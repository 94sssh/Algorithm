function solution(numbers, k) {
    let idx = (k-1) * 2 % numbers.length;
    
    return numbers[idx];
}