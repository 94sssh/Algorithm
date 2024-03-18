function solution(name, yearning, photo) {
    return photo.map((item)=>{
        return item.reduce((acc, cur)=>{
            return acc + (yearning[name.indexOf(cur)] || 0);
;        },0)
    });
}