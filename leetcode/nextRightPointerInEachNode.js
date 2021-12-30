// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.The binary tree has the following definition:

// struct Node {
//     int val;
//     Node *left;
//     Node *right;
//     Node *next;
//   }
//   Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

//     Initially, all next pointers are set to NULL.

//     Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree(Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Input: root = []
// Output: []

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  //base condition
  if (!root) return null;

  //initial variables
  let current = root;
  let leftChild = null;

  while (current.left) {
    leftChild = current.left;

    while (current) {
      current.left.next = current.right;
      current.right.next = current.next ? current.next.left : null;

      //moving to the next node
      current = current.next;
    }
    current = leftChild;
  }

  return root;
};
