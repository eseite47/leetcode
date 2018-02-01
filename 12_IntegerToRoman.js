// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.


let years = {
    '4': ['', 'M', 'MM', 'MMM'],
    '3': ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    '2': ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    '1': ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  }
  
  var intToRoman = function(num) {
      let index = 1
      romanNumber = ''
      while(num >= 1){
        currentLetter = Math.floor(num % 10)
        romanNumber = years[''+index][currentLetter] + romanNumber
        index++
        num = num /10
      }
      return romanNumber
  };