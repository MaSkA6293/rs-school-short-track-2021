/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summ = 0;
  const badIndex = [];
  for (let k = 0; k < matrix.length; k++) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[k][i] && !badIndex.includes(i)) {
        summ += matrix[k][i];
      } else {
        badIndex.push(i);
      }
    }
  }
  return summ;
}

module.exports = getMatrixElementsSum;
