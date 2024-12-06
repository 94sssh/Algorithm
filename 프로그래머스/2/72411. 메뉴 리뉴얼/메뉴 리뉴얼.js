const getCombinations = (str, k, obj) => {
    const combine = (start, temp) => {
        if (temp.length === k) {
            const menu = temp.join('');
            obj[menu] = (obj[menu] || 0) + 1;
            return;
        }
        
        for (let i = start; i < str.length; i++) {
            temp.push(str[i]);
            combine(i + 1, temp);
            temp.pop();
        }
    }

    combine(0, []);
}

function solution(orders, course) {
    let answer = [];
    let courseObj = {};
    
    for(let i = 0; i < course.length; i++){
        orders.forEach((order) => getCombinations([...order].sort(), course[i], courseObj));
        
        const max = Math.max(...Object.values(courseObj));
                
        answer = [...answer, ...Object.keys(courseObj).filter((key) => courseObj[key] === max && courseObj[key] >= 2)];
        
        courseObj = {};
    };
    
    return answer.sort();
}