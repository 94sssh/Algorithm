function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((a, c, i) => a + c * B[i], 0);
}