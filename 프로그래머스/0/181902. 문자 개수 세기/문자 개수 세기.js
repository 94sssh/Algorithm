function solution(my_string) {
    const answer = new Array(52).fill(0);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const alphabetArr = alphabet.split('');
    
    my_string.split('').forEach((str)=>{
        alphabetArr.forEach((el, idx)=>{
            if(str===el) answer[idx]++;
        })
    })
    
    return answer;
}