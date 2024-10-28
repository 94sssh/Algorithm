function solution(video_len, pos, op_start, op_end, commands) {
    const videoLen = video_len.split(":").map((el) => +el);
    const opStart = op_start.split(":").map((el) => +el);
    const opEnd = op_end.split(":").map((el) => +el);
    const answer = pos.split(":").map((el) => +el);
    
    const videoLenTime = videoLen[0] * 60 + videoLen[1];
    const opStartTime = opStart[0] * 60 + opStart[1];
    const opEndTime = opEnd[0] * 60 + opEnd[1];
    
    let currentTime = answer[0] * 60 + answer[1];
    
    commands.forEach((command) => {
        if(currentTime >= opStartTime && currentTime <= opEndTime){
            currentTime = opEndTime;
        };
        
        if(command === "prev"){
            currentTime -= 10;
            if(currentTime < 10) currentTime = 0;
        } else if(command === "next"){
            currentTime += 10;
            if(currentTime > videoLenTime - 10) currentTime = videoLenTime;
        };
    });
    
    if(currentTime >= opStartTime && currentTime <= opEndTime){
        currentTime = opEndTime;
    };
    
    const mm = `${parseInt(currentTime / 60)}`.padStart(2, '0');
    const ss = `${currentTime % 60}`.padStart(2, '0');
    return `${mm}:${ss}`;
};