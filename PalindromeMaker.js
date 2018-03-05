/*
A function that checks if a str is a palindrom and whether that string could be a palindrome if we removed one character.
*/

function isPalindrome(str){
    let head1 = 0
    let tail1 = str.length-1
    while (head1 < tail1){
        if (str[head1] != str[tail1]){
            return false
        }
        head1++
        tail1--
    }
    return true
}

function makePalindrome (str){
  let head = 0
  let tail = str.length-1
  while (head < tail){
    console.log(head, tail)
    if (str[head] != str[tail]){
      if(isPalindrome(str.substring(head+1, tail))){
          return head
      }
      if(isPalindrome(str.substring(head, tail-1))){
          return tail
      }
      return -1
    }
    head++
    tail--
  }
  return -2
}