function solution(a, b) {
    let days = b;
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    for(let i=2; i<=a; i++){
        days += month[i-2];
    }
    days %= 7;
    return day[days]
}