function solution(n, arr1, arr2) {
    const firstMap = arr1.map((el) => el.toString(2).padStart(n, '0'));
    const secondMap = arr2.map((el) => el.toString(2).padStart(n, '0'));
        
    return firstMap.reduce((a, c, i) => {
        a.push([...c].reduce((acc, cur, idx) => acc += cur === '1' || secondMap[i][idx] === '1' ? '#' : ' ', ''));
        return a;
    }, []);
}