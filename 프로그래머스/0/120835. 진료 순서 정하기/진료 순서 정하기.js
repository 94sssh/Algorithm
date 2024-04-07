function solution(emergency) {
    const order = [...emergency].sort((a,b)=> b-a);
    return emergency.map((el) => order.indexOf(el)+1);
}