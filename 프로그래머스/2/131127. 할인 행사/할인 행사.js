function solution(want, number, discount) {
    let answer = 0;
    
    const wishList = {};
    
    want.forEach((el, i) => {
        wishList[el] = number[i];
    });
    
    for(let i = 0; i <= discount.length - 10; i++){
        const discountList = {};
        
        for(let j = i; j < i + 10; j++){
            discountList[discount[j]] = (discountList[discount[j]] || 0) + 1;
        }
        
        if(Object.entries(wishList).sort().every(([name, quantity], idx) => {
            const [discountName, discountQuantity] = Object.entries(discountList).sort()[idx];
            return name === discountName && quantity === discountQuantity;
        })) {
            answer++;
        }
    }
    
    return answer;
}



