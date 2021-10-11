// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const maxConsOnes = (nums) => {
    let count = 0;
    let largestCount = 0;

    for (i = 0; i < nums.length; i++) {
        if (n[i] === 0) {
            count = 0;
        } else {
            count++
        }

        if (count > largestCount) largestCount = count; 
    }
    return largestCount;
} 