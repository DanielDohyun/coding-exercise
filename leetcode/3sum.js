// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// ex Input: nums = [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
     let result = [];

     if (nums.length < 3) return result;

     nums.sort((a, b) => a - b);

     //since elements in the arr are sorted, if num[i] > 0, sum of 3 elements will be greater than 0
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] > 0) {
             return results;
         }
         break; 
     }

     for (let i = 0; i < nums.length - 2; i++) {
         let j = i + 1;
         let k = nums.length - 1;

         while (j < k) {
             const sum = nums[i] + nums[j] + nums[k];
             if (sum === 0) {
                 //push the elements to the results arr when sum = 0
                 results.push(nums[i], nums[j], nums[k]);
                 while (j < k && nums[j] === nums[j + 1]) {
                     j++;
                 }
                 j++;

                 while (k > j && nums[k] === nums[k - 1]) {
                     k--;
                 }
                 k--;
                 //increase index if sum < 0
             } else if (sum < 0) {
                 j++

                 //decrease index if sum > 0
             } else {
                 k--;
             }
         }
         while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
             i++;
         }
         
     }

     return results;
};