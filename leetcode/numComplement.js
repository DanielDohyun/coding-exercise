// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101(no leading zero bits), and its complement is 010.So you need to output 2.

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  //change num into binary num
  let binary = num.toString(2);

  let result = "";

  //loop thr the binary num and change 0 => 1 and 1 => 0
  // for (let str of binary) {
  //     if (str === '0') {
  //         str === '1'
  //     } else {
  //         str === 0
  //     }
  // }

  for (let i = 0; i < binary.length; i++) {
    result = result + (binary.charAt(i) === "0" ? "1" : "0");
  }

  //change binary num back to the integer
  return parseInt(result, 2);
};
