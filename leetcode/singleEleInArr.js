// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

// ex.Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    } else {
      let index = result.indexOf(nums[i]);
      result.splice(index, 1);
    }
  }
  return result[0];
};
