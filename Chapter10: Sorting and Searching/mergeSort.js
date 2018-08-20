//time: O(nlogn) space: depends

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;
  while(l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l += 1;
    } else {
      result.push(right[r]);
      r += 1;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([5, 6, 1, 3, 7, 8, 2, 4]))