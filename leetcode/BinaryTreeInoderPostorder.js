// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// ex.Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  const DFS = (arr) => {
    if (!arr.legnth) return null;

    //root is the last element on the postorder arr
    const root = postorder.pop();
    const index = arr.indexOf(root);
    const node = new TreeNode(root);
    node.right = DFS(arr.slice(index + 1));
    node.left = DFS(arr.slice(0, index));
    return node;
  };

  return DFS(inorder);
};
