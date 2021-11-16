// Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

// Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.

// ex.Input: m = 2, n = 3, k = 6
// Output: 6
// Explanation: The 6th smallest number is 6.

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const lessThanEqual = (target, rows, cols) => {
  let count = 0;

  for (let i = 1; i <= rows; i++) {
    count += Math.min(Math.floor(target / i), cols);
  }

  return count;
};

var findKthNumber = function (m, n, k) {
  let low = 0;
  let high = m * n;

  while (low + 1 < high) {
    const mid = low + Math.floor((high - low) / 2);
    const count = lessThanEqual(mid, m, n);

    // Find the minimum mid, such that count >= k
    if (count >= k) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return high;
};
