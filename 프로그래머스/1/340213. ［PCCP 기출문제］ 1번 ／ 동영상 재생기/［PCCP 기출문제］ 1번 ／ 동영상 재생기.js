function solution(video_len, pos, op_start, op_end, commands) {
    let videoLen = video_len.split(":").map((el) => +el);
    let opStart = op_start.split(":").map((el) => +el);
    let opEnd = op_end.split(":").map((el) => +el);
    let answer = pos.split(":").map((el) => +el);
    
    const videoLenTime = videoLen[0] * 60 + videoLen[1];
    const opStartTime = opStart[0] * 60 + opStart[1];
    const opEndTime = opEnd[0] * 60 + opEnd[1];
    
    let currentTime = answer[0] * 60 + answer[1];
    
    
    commands.forEach((command) => {
        if(currentTime >= opStartTime && currentTime <= opEndTime){
            // answer = [...opEnd];
            currentTime = opEndTime;
        }
        
        if(command === "prev"){
            // if(answer[1] - 10 < 0){
            //     answer[0] -= 1;
            //     answer[1] += 50;
            // } else {
            //     answer[1] -= 10;
            // }
            // if((answer[0] * 60 + answer[1]) < 10) answer = [0, 0];
            currentTime -= 10;
            if(currentTime < 10) currentTime = 0;
            
        } else if(command === "next"){
            // if(answer[1] + 10 >= 60){
            //     answer[0] += 1;
            //     answer[1] -= 60;
            // } else {
            //     answer[1] += 10;
            // }
            
            // if((answer[0] * 60 + answer[1]) >= videoLenTime - 10) answer = [...videoLen];
            currentTime += 10;
            // 동영상의 남은 시간이 10초 미만
            if(currentTime > videoLenTime - 10) currentTime = videoLenTime;
        };
    });
    
    if(currentTime >= opStartTime && currentTime <= opEndTime){
        // answer = [...opEnd];
        currentTime = opEndTime;
        
    }
    
    // return answer.map((el) => `${el}`.padStart(2, '0')).join(':');
    const mm = `${parseInt(currentTime / 60)}`.padStart(2, '0');
    const ss = `${currentTime % 60}`.padStart(2, '0');
    return `${mm}:${ss}`;
}

// 배열을 쓸 게 아니라 처음부터 타임코드로 변환한 후 작업해보기