function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
    return arr;
}

function countInversions(arr) {
  // debugger
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1 && arr[i] <= arr.length) {
          arr = swap(arr, i, arr[i]-1);
          count ++;
          i--;
      }
  }
  console.log(arr)
  // return count;
}

const list = [1, 1, 1, 2, 2];
countInversions(list)