/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1Val = []
    let l2Val = []
    let resultArray = []

    while (l1 || l2){
       if (l1) {
            l1Val.push(l1.val)
            l1 = l1.next
       }
        if (l2) {
            l2Val.push(l2.val)
            l2 = l2.next
        }
    }
    const length = l1Val.length > l2Val.length ? l1Val.length : l2Val.length
    let leftover = false
    for (var i = 0; i < length; i++){
        let sum = l1Val[i] + l2Val[i] || l1Val[i] || l2Val[i] || 0
        console.log(l1Val[i], l2Val[i], sum)
        if (leftover){
            sum++
            leftover = false
        }
        if (sum >= 10){
            sum = sum % 10
            leftover = true
        }
        resultArray.push(sum)
    }
    if (leftover){
        resultArray.push(1)
        leftover = false
    }

    return resultArray
}
