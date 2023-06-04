function solution(num_list) {
    let multiple = num_list.reduce((acc, cur) => acc * cur);
    let sum = num_list.reduce((acc, cur) => acc + cur);
    let square = sum * sum;
    
    return multiple < square ? 1 : 0;
}