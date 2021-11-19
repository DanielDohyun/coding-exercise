// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let XOR = x ^ y;
  let distance = 0;

  // Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

  //     Operator	Name	Description
  // &	AND	Sets each bit to 1 if both bits are 1
  // |	OR	Sets each bit to 1 if one of two bits is 1
  // ^	XOR	Sets each bit to 1 if only one of two bits is 1
  // ~	NOT	Inverts all the bits
  // <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
  // >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
  // >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

  // Operator	Description	Example	Same as	Result	Decimal
  // &	AND	x = 5 & 1	0101 & 0001	0001	 1
  // |	OR	x = 5 | 1	0101 | 0001	0101	 5
  // ~	NOT	x = ~ 5	 ~0101	1010	 10
  // ^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	 4
  // <<	Left shift	x = 5 << 1	0101 << 1	1010	 10
  // >>	Right shift	x = 5 >> 1	0101 >> 1	0010	  2

  while (XOR > 0) {
    distance += XOR & 1;
    XOR = XOR >> 1;
  }

  return distance;
};
