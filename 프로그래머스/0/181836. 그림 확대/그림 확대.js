function solution(picture, k) {
    const answer = [];
    
    picture.forEach((pixel) => {
        const kTimes = pixel.split('').map((el)=>el.repeat(k)).join('');
        for(let i=1; i<=k; i++) answer.push(kTimes);
    }) 
    return answer;
}