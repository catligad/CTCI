// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. 

function rotateMatrix(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = matrix.length - 1; col >= 0; col--) {
      newMatrix[row].push(matrix[col][row]);
    }
  }
  console.log(JSON.stringify(newMatrix))
  return newMatrix;
}

// Can you do this in place?
//TO SOLVE
function rotateMatrix2(matrix) {
  
};

//Solve this with MxN

rotateMatrix([[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]])