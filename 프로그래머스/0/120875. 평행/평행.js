function solution(dots) {
    const diff = [];
    
    for(let i=0; i<dots.length - 1; i++){
        for(let j=i+1; j<dots.length; j++){
            diff.push([dots[i], dots[j]]);
        }
    }
    
    for(let k = 0; k < diff.length - 1; k++){
        const [dot1, dot2] = diff[k];
        for(let l = k + 1; l < diff.length; l++) {
            if(!(diff[l].includes(dot1) || diff[l].includes(dot2))){
                const [dot3, dot4] = diff[l];
                if((dot1[1]-dot2[1]) / (dot1[0]-dot2[0]) === (dot3[1]-dot4[1]) / (dot3[0]-dot4[0])) return 1;
            }
        }
    }
    return 0;
}