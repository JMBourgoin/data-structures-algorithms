/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    if (root == null) return 0;
    let ans = 0;
    let leftAns = 0;
    let rightAns = 0;

    if (root.val >= L && root.val <= R) ans += root.val;
    leftAns = rangeSumBST(root.left, L, R);
    rightAns = rangeSumBST(root.right, L, R);

    return ans + leftAns + rightAns;

};