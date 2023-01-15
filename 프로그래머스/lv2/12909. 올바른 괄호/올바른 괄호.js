function solution(s){
    const arr = [];
    const push = () => {
        arr.push(0)
    }
    const pop = () => {
        if(arr.length===0){
            return console.log(false)
        }
        arr.pop();
    }
    if(s[0]===')'){
        return false
    }
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            push()
        } else {
            pop()
        }
    }
    if(arr.length===0){
        return true
    } else {
        return false
    }
}