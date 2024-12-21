function solution(survey, choices) {
    const types = ['RT', 'CF', 'JM', 'AN'];
    
    const response = survey.reduce((a, c, i) => {
        const score = choices[i];
        if(score === 4) return a;
        
        const type = score > 4 ? c[1] : c[0]
        a[type] = (a[type] || 0) + Math.abs(4 - choices[i]);
        return a;
    }, {});
    
    return types.map((type, idx) => (response[type[0]] || 0) >= (response[type[1]] || 0) ? type[0] : type[1]).join('');
};