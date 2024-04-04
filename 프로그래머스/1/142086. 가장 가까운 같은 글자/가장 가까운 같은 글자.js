function solution(s) {
    const store = [];
    const answer = [];
    
    [...s].forEach((c, index)=>{
        const idx = store.lastIndexOf(c);
        
        if(store.includes(c)){
          answer.push(index - idx);
        } else {
          answer.push(-1);
        }    
          store.push(c);
    }) 
    
    return answer;
}