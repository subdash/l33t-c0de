/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    const nodes = [head];
    let curr = head;

    while (curr.next) {
        nodes.push(curr.next);
        curr = curr.next;
    }

    const middle = nodes.length % 2 === 0
        ? nodes.length / 2
        : Math.floor(nodes.length / 2);

    return nodes[middle];
};
