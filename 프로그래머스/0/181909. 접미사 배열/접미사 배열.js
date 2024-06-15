function solution(my_string) {
    return [...my_string].reduce((a, _, i) => {
        a.push(my_string.slice(-i));
        return a;
    }, []).sort();
}