function solution(numLog) {
    return numLog.reduce((a, c, i)=>{
        const diff = numLog[i+1] - c;
        if(diff === 1) return a + 'w';
        if(diff === -1) return a + 's';
        if(diff === 10) return a + 'd';
        if(diff === -10) return a + 'a';
        return a;
    },'');
}