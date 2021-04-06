/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const variants = [];
  for (let i = 0; i < arr.length; i++) {
    variants[i] = +arr.filter((el, k) => k !== i).join('');
  }
  return Math.max(...variants);
}

module.exports = deleteDigit;
