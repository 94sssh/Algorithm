function solution(number) {
    return [...number].reduce((acc, cur)=>{
        return acc + +cur
    },0) % 9
}