// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// ex Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//gives a runtime error
 var nextGreaterElement = function(nums1, nums2) {
     let output = [];
    
     nums1.foreach(e => {
         let j = num2.indexOf(e);
         for (let i = 0; i < num2.length; i++) {
             if (num2[j + 1] == undefined || num2[j] > num2[j + 1]) {
                 output.push(-1);
             } else output.push(num2[j + 1])
         }
     });
   
     return output;
};

//
let nextGreaterElement2 = function (nums1, nums2) {
    //map holds key-value pairs 
        let map = new Map();
        let stack = [];
    for (let num of nums2) {
            
            while (stack.length > 0 && stack[stack.length - 1] < num) {
                //when there is element inside the stack arr, compares its value with num and if its less than num  runs the code below 
                //removes element from stack arr 
                map.set(stack.pop(), num);
            }
            //stores element of num2 while looping thr num2 
            stack.push(num);
        }
    
        // arr.fill(value[, start[, end]])
        let res = new Array(nums1.length).fill(-1);
        for (let i = 0; i < res.length; i++) {
            res[i] = map.get(nums1[i]) || -1;
     }
        return res;
};