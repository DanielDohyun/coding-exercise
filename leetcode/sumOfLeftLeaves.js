// Given the root of a binary tree, return the sum of all left leaves.

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

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

var sumOfLeftLeaves = function (root) {
  //base case
  if (root == null) return 0;

  //checking for a leaf node (does not have its child)
  if (root.left !== null && root.left.left == null && root.left.right == null) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }

  //going down the treee
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
