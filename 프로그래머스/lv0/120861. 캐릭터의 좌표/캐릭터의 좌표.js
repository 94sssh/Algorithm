function solution(keyinput, board) {
    let arr = [0,0]
    const up = (arr) => {
        if(arr[1]<Math.floor(board[1]/2)){
            arr[1] += 1;
        }
    }
    const down = (arr) => {
        if(arr[1]>0-Math.floor(board[1]/2)){
            arr[1] -= 1;
        }
    }
    const left = (arr) => {
        if(arr[0]>0-Math.floor(board[0]/2)){
            arr[0] -= 1;
        }
    }
    const right = (arr) => {
        if(arr[0]<Math.floor(board[0]/2)){
            arr[0] += 1;
        }
    }
    
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i]==='up'){
            up(arr);
        } else if (keyinput[i]==='down'){
            down(arr);
        } else if (keyinput[i]==='left'){
            left(arr);
        } else if (keyinput[i]==='right'){
            right(arr);
        }
    }
    return(arr)
}