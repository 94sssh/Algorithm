function solution(id_list, report, k) {
    const reportList = {};
    const answer = {};
    
    for(const detail of report){
        const [reporter, respondent] = detail.split(' ');
        
        if(!reportList[respondent]) reportList[respondent] = [];
        
        if(!reportList[respondent].includes(reporter)){
            reportList[respondent] = [...reportList[respondent], reporter];
        }
    }
    
    Object.keys(reportList).forEach((key) => {
        if(reportList[key].length >= k) {
            reportList[key].forEach((name) => {
                answer[name] = (answer[name] || 0) + 1;
            })
        }
    })
    
    return id_list.map((id) => answer[id] || 0);
}