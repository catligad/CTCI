//O(nlogn) time

function selectionSort(arr) {
  let smallestIndex;
  let smallestNumber = Infinity;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < smallestNumber) {
        smallestIndex = j; 
        smallestNumber = arr[j];
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    smallestIndex = null;
    smallestNumber = Infinity;
  }
  return arr;
}

console.log(selectionSort([5, 1, 12, -5, 16, 2, 12, 14]))