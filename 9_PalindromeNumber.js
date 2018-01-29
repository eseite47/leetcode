var isPalindrome = function(x) {
	let number = x.toString()
	let head = 0
	let tail = number.length-1
	while (number[head] === number[tail] && head <= tail){
	  head++
	  tail--
	}
	if(head >= tail){
	  return true
	}
	return false
};