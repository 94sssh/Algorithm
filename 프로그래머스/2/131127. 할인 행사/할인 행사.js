function solution(want, number, discount) {
    let answer = 0;
    
    const wishlist = [];
    
    number.forEach((num, idx) => {
       for(let j = 1; j <= num; j++){
           wishlist.push(want[idx]);
       } 
    });
    
    wishlist.sort()
    
    for(let i = 0; i <= discount.length - 10; i++){
        const discountlist = discount.slice(i, i + 10).sort();
        
        if(discountlist.every((el, i) => el === wishlist[i])) answer++;
    };
    
    return answer;
}



