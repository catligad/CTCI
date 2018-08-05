function findHourglass(row, col, arr) {
  const T = row - 1;
  const B = row + 1;
  const R = col + 1;
  const L = col - 1; 
  return arr[T][L] + arr[T][col] + arr[T][R] + arr[row][col] + arr[B][L] + arr[B][col] + arr[B][R];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        // debugger
          let sum = findHourglass(i, j, arr);
          if (sum > max) {
              max = sum;
          }
      }
  }
  return max;
}

let arr = 
[[-9, -9, -9, 1, 1, 1],
[0, -9, 0, 4, 3, 2],
[-9, -9, -9, 1, 2, 3],
[0, 0, 8, 6, 6, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, 1, 2, 4, 0]];

console.log(hourglassSum(arr));