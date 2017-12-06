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
        if(visitedLetters.includes(s[tail]) || tail === s.length){
            let currentString = s.substring(head, tail)
            if(currentString.length > longestSubstring.length){
                longestSubstring = currentString
            }
            head++
            visitedLetters = [s[head]]
            tail = head+1
        }
        else {
            visitedLetters.push(s[tail])
            tail++
        }
    }
    return longestSubstring.length
};
