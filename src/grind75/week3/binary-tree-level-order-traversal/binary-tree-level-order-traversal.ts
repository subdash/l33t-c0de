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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const queue = [[root]];
    const result: number[][] = []

    while (queue.length > 0) {
        // Pop next node from queue
        const newNodes = queue.shift();
        const branches: number[] = []; // Values for this level of tree
        const children = []; // Child nodes of nodes popped from queue
        newNodes.forEach((node) => {
            // Push root or left/right child values into temp array
            branches.push(node.val);
            // Push left/right child nodes into temp array
            if (node.left) {
                children.push(node.left);
            }
            if (node.right) {
                children.push(node.right);
            }
        });

        // Push values from current level of tree into result array
        result.push(branches);

        // If previous node(s) have children, push them into the queue.
        if (children.length > 0) {
            queue.push(children);
        }
    }
    return result;
};

