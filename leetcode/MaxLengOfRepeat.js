// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is[3, 2, 1].


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {

    let count = 0;
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (num1[i] === num2[j]) {
                count++;
            } else count = count
        }
    }
    return count
};

