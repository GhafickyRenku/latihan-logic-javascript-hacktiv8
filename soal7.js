/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    // Bilangan prima harus lebih besar dari 1
    if (num <= 1) {
      return false;
    }
  
    // Loop dari 2 sampai setengah dari angka tersebut
    for (let i = 2; i <= num / 2; i++) {
      // Jika angka dapat dibagi habis oleh bilangan lain, maka bukan bilangan prima
      if (num % i === 0) {
        return false;
      }
    }
  
    // Jika loop selesai tanpa return false, maka angka tersebut adalah bilangan prima
    return true;
  }
  
  // Contoh penggunaan
  console.log(isPrime(5)); // Output: true
  console.log(isPrime(12)); // Output: false
  console.log(isPrime(23)); // Output: true
  