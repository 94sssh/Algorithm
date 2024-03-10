function solution(my_string, s, e) {
    const arr = my_string.split('');
    const str1 = arr.slice(0,s).join('')
    const str2 = arr.slice(s,e+1).reverse().join('')
    const str3 = arr.slice(e+1).join('')
    
    return `${str1}${str2}${str3}`;
}