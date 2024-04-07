function solution(myString, pat) {
    const index = myString.lastIndexOf(pat);
    return myString.slice(0, index + pat.length);
}