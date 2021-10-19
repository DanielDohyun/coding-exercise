// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.
// Two nodes of a binary tree are cousins if they have the same depth with different parents.
// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    if(!root) return false;
    if(root.val == x || root.val == y) return false;
    
    let myQueue = [ root ];
    
    while(myQueue.length){
        let updatedqueue = [];
        let xVisisted = false, yVisisted = false;
        while (myQueue.length) {
            //for each cycle of the looping, cutting the first element of the myqueue array and set that element as curNode. 
            let curNode = myQueue.shift();
            if(curNode.val == x) xVisisted = true;
            else if(curNode.val == y) yVisisted = true;
            if(curNode.left && curNode.right && ( curNode.left.val == x || curNode.left.val == y)  && ( curNode.right.val == x || curNode.right.val == y) ) return false;
            if(curNode.left)
                updatedqueue.push(curNode.left);
             if(curNode.right)
                 updatedqueue.push(curNode.right);
        }
        if(xVisisted && yVisisted) return true;
        myQueue = updatedqueue;
    }
    return false;
};