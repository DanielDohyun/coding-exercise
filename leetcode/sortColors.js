// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// ex Input: nums = [2,0,2,1,1,0] Output: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    //  create variables to keep number of red, and white 
    let red = 0;
    let white = 0;

    //tracking number of red and white
    for (let i of nums) {
        if (i == 0) {
            red++;
        } else if (i == 1) {
            white++;
        }
    }

    //replacing nums array with new values 
    for (let i in nums) {
        if (red > 0) {
            red--;
            num[i] = 0;
        } else if (white > 0) {
            white--;
            num[i] = 1;
        } else num[i] = 2
    }
    
};