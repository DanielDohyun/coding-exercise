// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
    
    function dfs(originalNode, clonedNode) {
        //when its a end node, do nothing 
        if(!originalNode) return;

        //when original node equals target => found a target, return clonenode which is same as original node 
        if(originalNode === target) return clonedNode;

        //perform dfs to find the node that equals the target 
        return dfs(originalNode.left, clonedNode.left) || dfs(originalNode.right, clonedNode.right);
    }

    return dfs(original, cloned);

};