// Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

// A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

// Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
// Output: 7
// Explanation: We have various ancestor-node differences, some of which are given below :
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// Among all possible differences, the maximum value of 7 is obtained by | 8 - 1 | = 7.

// Input: root = [1,null,2,null,0,3]
// Output: 3

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
var maxAncestorDiff = function (root) {
  if (!root) return 0;

  const helper = (node, min, max) => {
    if (!node) return 0;

    const newMin = Math.min(min, node.val);
    const newMax = Math.max(max, node.val);

    const left = helper(node.left, newMin, newMax);
    const right = helper(node.right, newMin, newMax);

    return Math.max(newMax - newMin, left, right);
  };

  return helper(root, root.val, root.val);
};
