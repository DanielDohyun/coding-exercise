// Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.

// Return the length of n. If there is no such n, return -1.

// Note: n may not fit in a 64 - bit signed integer.

Input: k = 1
Output: 1
Explanation: The smallest answer is n = 1, which has length 1.

Input: k = 2
Output: -1
Explanation: There is no such positive integer n divisible by 2.

Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.

/**
 * @param {number} k
 * @return {number}
 */
 var smallestRepunitDivByK = function(K) {
    if(!(K%2) || !(K%5)) return -1; // short circuit
    
    let len = 0, val = 0, loop = 100000;
    
    while(loop--) {
        val = (val*10 + 1) % K; 
        len++
        if(!val) return len;
    }
};
