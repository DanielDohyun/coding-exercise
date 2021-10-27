// Given the root of a binary tree, invert the tree, and return its root

// ex Input: root = [4,2,7,1,3,6,9] => Output: [4,7,2,9,6,3,1]

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
 * @return {TreeNode}
 */
const invertTree = (node) => {
    //if node is null => return null
    if (!node) return null;

    //swapping left and right 
    [node.left, node.right] = [node.right, node.left];

    //going down the level starting from left and to right 
    invertTree(node.left);
    invertTree(node.right);
    return node;
  };