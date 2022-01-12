// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

// Example 1:

// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
// Example 2:

// Input: root = [0]
// Output: 0

var sumRootToLeaf = function (root) {
  //base condition
  if (!root) {
    return 0;
  }

  let paths = [];

  function dfs(root, curr) {
    curr = curr * 2 + root.val;
    if (!root.left && !root.right) {
      paths.push(curr);
      return;
    }

    root.left && dfs(root.left, curr);
    root.right && dfs(root.right, curr);
  }
  dfs(root, 0);
  let sum = paths.reduce((acc, curr) => acc + curr);
  return sum;
};
