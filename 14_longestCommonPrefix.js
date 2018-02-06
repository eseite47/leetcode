var longestCommonPrefix = function(strs) {
    let shortest = ''
    let currentLetter = ''
    let prefix = ''
    for (let i = 0; i < strs.length; i++){
      if (strs[i].length < shortest || shortest === ''){
        shortest = strs[i]
      }
    }
    for (let i = 0; i < shortest.length; i++){
      for (let j = 0; j < strs.length; j++){
        if(j === 0){
           currentLetter = strs[j][i]
        }
        else if (strs[j][i] !== currentLetter){
          return prefix
        }
      }
      prefix += currentLetter
    }
    return prefix
  };