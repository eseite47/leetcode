var myAtoi = function(str) {
  let result = 0
  let negative = false
  let assignedSign = false
  let startCount = false
  let unexpectedChar = 0
  for (let i = 0; i < str.length; i++){
    result = result * 10
    let currentNum = str.charCodeAt(i) - 48
    if(str[i]=== ' ' && !startCount){
      // console.log('moving on')
    }
    else if(str[i]=== '+' && assignedSign === false){
      startCount = true
      assignedSign = true
    }
    else if (str[i] === '-' && negative === false && assignedSign === false){
      startCount = true
      negative = true
      assignedSign = true
    }
    else if (typeof currentNum === 'number' && currentNum.toString() === str[i]){
        startCount = true
        console.log(currentNum)
        result += currentNum
    }else{
      unexpectedChar++
    }
    if (unexpectedChar > 0){
      result = result/10
      break
    }
  }
  if (result > 2147483647){
    negative ? result = 2147483647 : result = 2147483648
  }
  if(negative){
    result -= result * 2
  }
  return result
};
