function max(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const subMax = max(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}
  
  console.log(max([1, 3, 2])); // 3
  console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
  console.log(max([])); // undefined
  