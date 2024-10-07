function solution(clothes) {
    const clothSort = {};
    
    clothes.forEach(([cloth, category]) => clothSort[category] = clothSort[category] ? [...clothSort[category], cloth] : [cloth]);
    
    const outfits = Object.values(clothSort).reduce((a, c) => (c.length + 1) * a, 1);
    
    return outfits - 1;
};