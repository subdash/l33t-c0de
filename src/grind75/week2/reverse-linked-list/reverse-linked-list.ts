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

function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;
    let next = null;
    while (curr !== null) {
        // All 3 pointers will point to the same node at the
        // beginning of the loop. Point next to the next node.
        next = curr.next;
        // The key is to keep track of the previous node, and set
        // the current node's next pointer to the one before it.
        curr.next = prev;
        // Move prev and curr forward for the next loop iteration.
        prev = curr;
        curr = next;
    }
    // Once we've reached the last element in the list, it is
    // stored in `prev` and curr is null (the tail).
    return prev;
};

