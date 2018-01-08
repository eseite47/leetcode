/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let convertedString = ''
  let conversionArr = []
  let counter = 0
  let zigzaging = false
  let zigCounter = 0
  
  for (var i = 0; i <= s.length; i++){
  conversionArr[i] = []

    if (!zigzaging || numRows === 1 || numRows === 2){
      for (var j = 0; j < numRows; j++){
        conversionArr[i][j] = s[counter] || ' '
        counter++
        zigCounter++
      }
      if (zigCounter >= numRows){
        zigzaging = !zigzaging
        zigCounter -= 2
      }
    }
    else if (zigzaging){
      conversionArr[i][zigCounter] = s[counter] || ' '
      counter++
      zigCounter--
      if (zigCounter <= 0){
        zigzaging = !zigzaging
      }
    }
    if (counter > s.length){
      break
    }
  }
  
  for (var i = 0; i < numRows; i++){
    for (var j = 0; j < conversionArr.length; j++){
      //console.log('i', i, 'j', j, conversionArr[j][i])
      if(conversionArr[j][i] && conversionArr[j][i] !== ' ')
      convertedString += conversionArr[j][i]
    }
  }
  return convertedString
};
