function solution(enrollList, referralList, seller, amount) {
    const enroll = enrollList.reduce((a, c, i) => {
        a[c] = [referralList[i], 0];
        return a;
    }, {});
    
    const shareProfit = (name, profit) => {
        const [referral] = enroll[name];
        
        // 이득 계산 먼저 하고
        // 왜냐면 존이랑 메리도 센터한테 이득을 나눠야 함
        const returnProfit = Math.floor(profit * 0.1);
        const myProfit = profit - returnProfit;
        
        enroll[name][1] += myProfit;
        
        // 그 후에 올라갈 곳이 없으니 종료
        if(referral === '-' || returnProfit === 0){
            return;
        };
        
        // 위로 올라가서 마저 진행
        shareProfit(referral, returnProfit)
    };
    
    seller.forEach((name, idx) => {
        shareProfit(name, amount[idx] * 100);
    });
    
    return Object.values(enroll).map((el) => el[1]);
}