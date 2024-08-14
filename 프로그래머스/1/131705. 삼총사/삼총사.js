function solution(number) {
    const result = [];
    
    for(let i=0; i < number.length; i++){
        for(let l=i+1; l < number.length; l++){
            for(let n=l+1; n < number.length; n++){
                result.push([number[i],number[l],number[n]]);
            };
        };
    };
    
    return result.map(el => el.reduce((a,c) => a + c)).filter(el => el===0).length;
}