function solution(order) {
    let test = /[3,6,9]/g;
    return test.test(`${order}`) ? `${order}`.match(test).length : 0;
}