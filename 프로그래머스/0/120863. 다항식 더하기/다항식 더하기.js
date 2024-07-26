function solution(polynomial) {
    const paragraphX = polynomial.split(' ').filter((el)=>el.includes('x')).reduce((a, c) => a + (+c.slice(0, -1) || 1),0);
    const paragraphNumber = polynomial.split(' ').filter(Number).reduce((a, c) => a + +c, 0);

    
    let x = paragraphX === 1 ? 'x' : `${paragraphX}x`
    
    if(paragraphX){
        if(paragraphNumber) return `${x} + ${paragraphNumber}`;
        return x;
    }
    
    return `${paragraphNumber}`;
}