function arrayManipulation(n, queries) {
  let array = new Array(n);
  queries.forEach(query => {
    debugger
      if (array[query[0] - 1] == null) {
          array[query[0] - 1] = query[2];
      } else {
          array[query[0] - 1] += query[2];
      }
      if (query[1] !== array.length) {
          if (array[query[1]] == null) {
          array[query[1]] = -query[2];
          } else {
              array[query[1]] -= query[2];
          }
      }
  });
  let max = 0;
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      num += array[i];
    } else if (array[i] < 0) {
      num += array[i];
    }
    if (num > max) {
      max = num;
    }
  }
  return max;
}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])