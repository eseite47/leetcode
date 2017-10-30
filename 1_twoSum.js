/*
DESCRIPTION
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // CODE

var twoSum = function(nums, target) {
    let head = 0
    let tail = nums.length - 1
    let found = false
    while (!found){
        let sum = nums[head] + nums[tail]
        if (sum === target){
            found = true
            let result = []
            head > tail ? result = [tail, head] : result = [head, tail]
            return result
        }
        else if (sum > target){
            tail--
        }
        else {
            head++
        }
    }
};
