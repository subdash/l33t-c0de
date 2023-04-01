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

// https://www.interviewbit.com/blog/diameter-of-a-binary-tree/
function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;
    const maxDepth = (root: TreeNode | null): number => {
        // Recursively calculate depth of both sides of tree
        if (!root) {
            return 0;
        }

        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        const leftPlusRight = leftDepth + rightDepth;
        if (leftPlusRight > diameter) {
            // If both sides are greater than the longest path,
            // that is our new diameter.
            diameter = leftPlusRight;
        }
        // Add 1 to account for root
        return Math.max(leftDepth, rightDepth) + 1;
    };

    const _ = maxDepth(root);
    return diameter;
};

