function solution(order) {
    return order.reduce((acc, cur)=>{
        return (cur.includes('latte') ? 5000 : 4500) + acc;
    }, 0);
}