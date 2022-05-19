// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

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
 var deepestLeavesSum = function(root) {
    let sum = 0;
    let deepestLevel = 0;

    // preorder traversal
    const traverse = (node, level) => {
        if (node === null) {
            return;
        }
        
        if (level === deepestLevel) {
            // sum the deepest node value
            sum += node.val;    
        } else if (level > deepestLevel) {
            // if deeper level is discovered, reset sum and record the level
            deepestLevel = level;    
            sum = node.val;
        }
        
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    traverse(root, 0);
    return sum;
};