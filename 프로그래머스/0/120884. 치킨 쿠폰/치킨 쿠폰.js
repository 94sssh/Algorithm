function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    
    while(coupon >= 10) {
        service += Math.floor(coupon / 10);
        coupon = Math.floor(coupon / 10) + coupon % 10;
    }    
    
    return service;
}