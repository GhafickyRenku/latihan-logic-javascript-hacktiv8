/**
 * Function untuk membandingkan dua angka
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {boolean | number}
 */
function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
      return -1;
    } else if (secondNumber > firstNumber) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  console.log(compareNumbers(5, 10)); // Output: true
  console.log(compareNumbers(10, 5)); // Output: false
  console.log(compareNumbers(5, 5)); // Output: -1
  