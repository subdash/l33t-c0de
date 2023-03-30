/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // If true, we're at the bottom of a branch
	if (root === null) {
        return null;
    }

    if (root.val > p.val && root.val > q.val) {
        // If true, descend left
        return lowestCommonAncestor(root.left, p, q);
    }

    if (root.val < p.val && root.val < q.val) {
        // If true, descend right
        return lowestCommonAncestor(root.right, p, q);
    }

    // If we make it here, we've found our target
    return root;
};

