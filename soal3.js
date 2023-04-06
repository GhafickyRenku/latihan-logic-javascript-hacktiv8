/**
 * @param {string} str
 * @returns {string}
 */
function sortAlphabeticallyCustom(str) {
    let arr = str.split('');
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    let sortedStr = arr.join('');
    return sortedStr;
  }
  
  // contoh 
  console.log(sortAlphabeticallyCustom('hello'));
  console.log(sortAlphabeticallyCustom('world'));
  console.log(sortAlphabeticallyCustom('kuliah'));
  