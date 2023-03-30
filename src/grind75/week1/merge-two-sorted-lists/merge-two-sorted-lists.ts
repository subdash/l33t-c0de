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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }

    // Compare current node of both lists. Add node with smaller
    // value to the output list. Recursively merge until we end up
    // with one empty list; that will be our final result.
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


