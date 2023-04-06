/**
 * Function untuk mendapatkan bilangan prima dari rentang antara dua bilangan
 * @param {number} angkaPertama
 * @param {number} angkaKedua
 * @returns {Array}
 */
function getPrimesInRange(angkaPertama, angkaKedua) {
    let primes = [];
  
    // Loop dari angkaPertama sampai angkaKedua
    for (let num = angkaPertama; num <= angkaKedua; num++) {
      let isPrime = true;
  
      // Bilangan prima harus lebih besar dari 1
      if (num <= 1) {
        isPrime = false;
      } else {
        // Loop dari 2 sampai setengah dari angka tersebut
        for (let i = 2; i <= num / 2; i++) {
          // Jika angka dapat dibagi habis oleh bilangan lain, maka bukan bilangan prima
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
  
      // Jika angka tersebut adalah bilangan prima, tambahkan ke dalam array primes
      if (isPrime) {
        primes.push(num);
      }
    }
  
    // Mengembalikan array yang berisi semua bilangan prima di antara angkaPertama dan angkaKedua
    return primes;
  }
  
  // Contoh penggunaan
  console.log(getPrimesInRange(1, 20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
  console.log(getPrimesInRange(20, 40)); // Output: [23, 29, 31, 37]
  console.log(getPrimesInRange(50, 70)); // Output: [53, 59, 61, 67]
  