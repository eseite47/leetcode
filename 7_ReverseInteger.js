/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let test = x.toString().split('').reverse()
    if(test.length === 1){
      return x
    }
    if(test[0] === '0'){
      test.shift()
    }
    if(test[test.length-1] === '-'){
      test.pop()
      test.unshift('-')
    }
    let result = parseInt(test.join(''))
    if (Math.abs(result) > Math.pow(2, 31)){
      return 0
    }
    return result
};