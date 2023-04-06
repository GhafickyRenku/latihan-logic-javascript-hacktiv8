/**
 * Function to reverse a string
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  // contoh penggunaan string
  console.log(reverseString('Hello World')); // Output: "dlroW olleH"
  console.log(reverseString('12345')); // Output: "54321"
  