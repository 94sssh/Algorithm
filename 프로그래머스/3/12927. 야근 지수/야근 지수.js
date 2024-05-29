function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

function solution(n, works) {
    if (n > works.reduce((a,c) => a+c, 0)) return 0;

    const worksMap = works.reduce((a, c) => a.set(c, a.get(c)+1 || 1), new Map());
    while (n > 0 && worksMap.size) {
        const cur = quickSort([...worksMap.keys()]).at(-1);
        const curVal = worksMap.get(cur);
        const dif = n - curVal;

        if (dif >= 0) worksMap.delete(cur);
        else worksMap.set(cur, -dif); 
        
        const prev = cur-1;
        if (prev > 0) worksMap.set(prev, (worksMap.get(prev) || 0) + (dif >= 0 ? curVal : n));
        
        n -= curVal;
    }
    
    return [...worksMap.entries()].reduce((a, [val, repeat]) => a + val ** 2 * repeat, 0)
}