/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */

function palindromeSwapper(str) {
    let newStr = '';
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < str.length; i++) {
        if (i === j) {
          newStr += str[j++];
          newStr += str[j];
          j++;
        } else {
          newStr += str[j];
        }
      }
      if (isPalindrome(newStr)) return true;
    }
    return false;
  }
  
  /**
   * @function isPalindrome
   * Cek apabila kata merupakan palindromeSwapper
   * @param {string} str - input kata yang dicek bila palindrom
   * @returns {boolean} true bila kata adalah palindrom
   */
  function isPalindrome(str) {
    if (str.split('').reverse().join() === str) return console.log(true);
    return console.log(false);
  }
  
  console.log(palindromeSwapper('arcecar')); // true
  console.log(palindromeSwapper('racecar')); // true
  console.log(palindromeSwapper('recacar')); // false
  console.log(palindromeSwapper('icvic')) // true
  console.log(palindromeSwapper('makan')) // false