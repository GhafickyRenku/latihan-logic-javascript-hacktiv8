/**
 * @param {string} str
 * @returns {boolean}
 */
function hasABWithDistance(str) {
    let aIndex = str.indexOf('a');
    let bIndex = str.indexOf('b');
    while (aIndex >= 0 && bIndex >= 0) {
      if (Math.abs(aIndex - bIndex) >= 3) {
        return true;
      }
      aIndex = str.indexOf('a', aIndex + 1);
      bIndex = str.indexOf('b', bIndex + 1);
    }
    return false;
  }
  
  // Contoh penggunaan
  console.log(hasABWithDistance('abcdefg')); // Output: false
  console.log(hasABWithDistance('abcdbfgh')); // Output: true
  console.log(hasABWithDistance('aabbb')); // Output: false
  console.log(hasABWithDistance('axxbyybz')); // Output: true
  