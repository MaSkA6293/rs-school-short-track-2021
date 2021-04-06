/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let format = '';
  arr.forEach((el, i, ar) => {
    if (el === -1) {
      format += '-1';
    } else {
      format += 'n';
    }
    if (i < ar.length - 1) {
      format += ' ';
    }
  });
  const sortArr = [...arr].filter((el) => el !== -1).sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    format = format.replace('n', sortArr[i]);
  }
  return format.split(' ');
}

module.exports = sortByHeight;
