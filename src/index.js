module.exports = function towelSort (matrix) {

    let newMatrix = [];
    let stringMatrix = [];
    let resultMatrix = [];

    if (matrix === undefined) {
      return []
    } else{ 
      for (let i = 0; i < matrix.length; i++){
        stringMatrix = [];
        for (let j = 0; j < matrix[i].length; j++) {
          if (i%2 === 0) {
            stringMatrix.push(matrix[i][j])
          } else {
            stringMatrix.push(matrix[i][matrix[i].length - j - 1])
          }
        }  
        newMatrix.push(stringMatrix)
      }
    
      for (let i = 0; i < newMatrix.length; i++){
        for (let j = 0; j < newMatrix[i].length; j++) {
        resultMatrix.push(newMatrix[i][j]);
        }
    }
  }
return resultMatrix
}
