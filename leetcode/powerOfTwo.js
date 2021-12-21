// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Input: n = 16
// Output: true
// Explanation: 24 = 16

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //base condition
  if (!n) return false;

  //divide n by 2 until it reaches 1
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      return false;
    }
  }
  return true;
};

var isPowerOfTwo = function (n) {
  return n ? Math.log2(n) === Math.floor(Math.log2(n)) : false;
};
