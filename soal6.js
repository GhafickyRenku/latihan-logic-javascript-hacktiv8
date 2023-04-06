/**
 * function untuk mencari FPB
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function findGCD(num1, num2) {
    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2;
    let gcd = 1;
  
    for (let i = 1; i <= min; i++) {
      if (min % i === 0 && max % i === 0) {
        gcd = i;
      }
    }
  
    return gcd;
  }
  
  // Contoh penggunaan
  console.log(findGCD(12, 18)); // Output: 6
  console.log(findGCD(15, 20)); // Output: 5
  console.log(findGCD(30, 45)); // Output: 15
  