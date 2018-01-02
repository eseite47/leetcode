/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let joinedArray = nums1.concat(nums2).sort(function(a, b){return a-b})
    console.log(joinedArray)
    if (joinedArray.length %2 === 0){
        let med1 = joinedArray[joinedArray.length/2]
        let med2 = joinedArray[joinedArray.length/2 -1]
        console.log(med1, med2)
        let median = (med1 + med2)/2
        return median
    }
    else {
        return joinedArray[Math.floor(joinedArray.length/2)]
    }
};