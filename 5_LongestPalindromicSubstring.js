/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let longestString = ''
    for (var i = 0; i < s.length; i++){
      let j = i - 1
      let k = i + 1
      while (j > -1 && s[i] === s[j]){
        j--
      }
      while (s[i] === s[k] && k < s.length){
        k++
      }
      while (j >= 0 && k <= s.length && s[j] === s[k]){
        j--
        k++
      }
      let currentString = s.substring(j + 1, k)
      //console.log('currentString to be evaluated', currentString)
      if (currentString.length > longestString.length){
        longestString = currentString
      }
    }
    return longestString
  };
