/**
 * @param {array} arr 
 * @returns {boolean} 
 */
function isArithmetic(arr) {
    let n = arr.length;
    if (n <= 1) {
      return true;
    }
    let diff = arr[1] - arr[0];
    for (let i = 2; i < n; i++) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage:
  console.log(isArithmetic([2, 4, 6, 8])); // Output: true
  console.log(isArithmetic([2, 4, 6, 9])); // Output: false
  console.log(isArithmetic([1])); // Output: true
  console.log(isArithmetic([])); // Output: true
  