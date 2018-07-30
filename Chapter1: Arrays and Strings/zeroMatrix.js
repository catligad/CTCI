// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

function checkForZeros(matrix, rowsToMakeZero, colsToMakeZero) {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        rowsToMakeZero[row] = true;
        colsToMakeZero[column] = true;
      }
    }
  }
}

function zerofyCols(matrix, colsToMakeZero, rowLength) {
  for (let col in colsToMakeZero) {
    for (let i = 0; i < rowLength; i++) {
      matrix[i][col] = 0;
    }
  }
  return matrix;
}

function zerofyRows(matrix, rowsToMakeZero, colLength) {
  for (let row in rowsToMakeZero) {
    for (let i = 0; i < colLength; i++) {
      matrix[row][i] = 0;
    }
  }
  return matrix;
}

function zeroMatrix(matrix) {
  let rowsToMakeZero = {};
  let colsToMakeZero = {};
  let rowLength = matrix.length;
  let colLength = matrix[0].length;

  checkForZeros(matrix, rowsToMakeZero, colsToMakeZero);
  matrix = zerofyRows(matrix, rowsToMakeZero, colLength)
  matrix = zerofyCols(matrix, colsToMakeZero, rowLength);

  return matrix;
}

console.log(JSON.stringify(zeroMatrix([[1,2,3,4],[1,0,3,4],[0,1,2,3]])))