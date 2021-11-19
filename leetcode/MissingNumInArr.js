// Given an array nums of n integers where nums[i] is in the range[1, n], return an array of all the integers in the range[1, n] that do not appear in nums.
// ex. Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let arr = [];

  for (let i = 1; i < nums.length + 1; i++) {
    if (!nums.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};
