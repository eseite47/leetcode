var convert = function(s, numRows) {
  let convertedString = ''
  let conversionArr = []
  let counter = 0

  for (var i = 0; i <= s.length; i++){
    conversionArr[i] = []
    for (var j = 0; j < numRows; j++){
      if (i % 2 === 1 && j % 2 === 1 || i % 2 === 0 || numRows === 1){
        conversionArr[i][j] = s[counter] || ' '
        counter++
      }
      else {
      conversionArr[i][j] = ' '
      }
      if (counter > s.length){
        break
      }
    }
  }
  console.log(conversionArr)

  for (var i = 0; i < numRows; i++){
    for (var j = 0; j < conversionArr.length; j++){
      if (conversionArr[j][i] && conversionArr[j][i] !== ' ') {convertedString += conversionArr[j][i]}
    }
  }
  return convertedString
};

//console.log("PAHNAPLSIIGYIR", convert("PAYPALISHIRING", 3))
console.log('ABC', convert('ABC', 2))
