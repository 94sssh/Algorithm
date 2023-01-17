let today = new Date();

let year = today.getFullYear();
let month = '0' + (today.getMonth()+1);
let day = today.getDate().length===1?'0'+today.getDate():today.getDate();

console.log(year + '-' + month + '-' + day)