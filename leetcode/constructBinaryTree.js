function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null: right)
}

//preorder => first index is the node
//inorder => node lies in the mid, so num on left is on left side of the node and vice versa 

var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(root.value);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid + 1))

    return root;
};

console.log(buildTree(preorder, inorder));