function solution(n, words) {
    const stack = [words[0]];

    for(let i=1; i<words.length; i++){
        const word = words[i];
        const lastWord = stack.at(-1);
        
        if(stack.includes(word) || lastWord[lastWord.length - 1] !== word[0]){
            return [(i%n)+1, Math.ceil((i+1)/n)];
        }
        
        stack.push(word);
    }
    
    return [0,0];
}