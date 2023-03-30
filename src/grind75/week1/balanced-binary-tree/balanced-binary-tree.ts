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

function isBalanced(root: TreeNode | null): boolean {
    // 0-element tree is technically height balanced, plus
    // base case for recursion here.
    if (!root) {
        return true;
    }

    // Use DFS traversal to get height of left and right subtrees,
    // then compare for equality
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    // Is height balanced if difference of left and right
    // tree height is abs(1) or 0
    return [-1, 0, 1].includes(leftHeight - rightHeight)
        // If either side of any subtree is not height balanced,
        // then neither is the tree itself.
        && isBalanced(root.left)
        && isBalanced(root.right);
};

const height = (node: TreeNode | null): number => 
    node
        ? 1 + Math.max(height(node.left), height(node.right))
        : 0;
