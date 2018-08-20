function insertionSort(arr) {
  debugger
  let j;
  let curNum;
  for (var i = 1; i < arr.length; i++) {
    curNum = arr[i];
    j = i;
    while(j > 0 && arr[j - 1] > curNum) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = curNum;
  }
  return arr;
}

console.log(insertionSort([10, 2, 7, 4, 3, 5]));