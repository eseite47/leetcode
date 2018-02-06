var threeSum = function(nums) {
    let result = []
    nums = nums.sort(function(a, b){return a - b})
      for (let i = 0; i < nums.length; i++){
        let target = -nums[i]
        let head = i+1
        let tail = nums.length-1
        while(head < tail){
          if (nums[head] + nums[tail] === target){
            let newResult = [nums[i], nums[head], nums[tail]]
            if(result.indexOf(newResult)){
              result.push(newResult)
            }
            head++
          }
          if (nums[head] + nums[tail] < target){
            head++
          }
          if (nums[head] + nums[tail] > target){
            tail--
          }
        }
      }
    
    return result
  };
  
  console.log(threeSum([-1, 0, 1, 2, -1, -4]))