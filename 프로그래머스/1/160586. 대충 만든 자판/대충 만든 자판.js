function solution(keymap, targets) {
    const keyIndex = {};
    
    keymap.forEach((key) => {
       [...key].forEach((el, i) => {
           if(!keyIndex[el] || keyIndex[el] > i + 1) keyIndex[el] = i + 1;
       }) 
    });
    
    return targets.reduce((a, c) => {
        a.push([...c].reduce((acc, cur) => acc + keyIndex[cur], 0) || -1);
        return a;
    }, []);
}