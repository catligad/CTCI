//I: arr of unsorted integers ( from 1 - n), no duplicates
//O: minumum number of swaps needed to create an ordered arr


function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1 && arr[i] <= arr.length) {
          swap(arr, i, arr[i]-1);
          count ++;
          i--;
      }
  }
  console.log(count)
  return count;
}

minimumSwaps([7,1,3,2,4,5,6]);