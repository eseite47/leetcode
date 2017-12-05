/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let head = 0
  let tail = 0
  let visitedLetters = []
  let longestSubstring = ''

  while (head < s.length){
      if (visitedLetters.includes(s[tail]) || tail === s.length){
          let currentString = s.substring(head, tail)
          console.log('current', currentString, head, tail)
          if (currentString.length > longestSubstring.length){
              longestSubstring = currentString
          }
          head++
          visitedLetters = [s[head]]
          tail = head + 1
      }
      else {
          console.log('s[tail]', s[tail])
          visitedLetters.push(s[tail])
          tail++
      }
  }
  console.log(longestSubstring)
  return longestSubstring.length

};
