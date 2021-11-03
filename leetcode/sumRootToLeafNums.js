// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// ex.Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumNumbers = function (root) {
  if (root == null) return 0;

  const helper = (root, sum) => {
    if (root == null) return 0;

    sum = sum * 10 + root.val;

    //case: tree with only 1 node
    if (root.left == null && root.right == null) {
      //take the previous sum and move it to left by one digit and root.val should be on unit digit
      return sum;
    }

    return helper(root.left, sum) + helper(root.right, sum);
  };

  //call helper to perform DFS
  return helper(root, 0);
};
