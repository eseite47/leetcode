// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(string) {
    let roman = {'M': 1000,'D': 500 ,'C': 100,'L': 50,'X': 10,'V': 5,'I': 1}
    let result = 0
    for (let i = 0; i < string.length; i++){
        value = string[i]
        result += roman[value]
    }
    console.log('result', result)
    if(string.includes('CM') || string.includes('CD')){
      result -= 200
      console.log('removing extra 100', result)
    }
    if(string.includes('XC') || string.includes('XL')){
      result -= 20
      console.log('removing extra 10', result)
    }
    if(string.includes('IX') || string.includes('IV')){
      result -= 2
      console.log('removing extra 1', result)

    }
    return result
};