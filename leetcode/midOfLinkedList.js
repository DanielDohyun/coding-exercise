// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  //declare variables to keep track of head and position inside the linked list
  let node = head;
  let count = 1;

  //going thr the linked list and store the value and increase the count
  while (node.next) {
    node = node.next;
    count++;
  }

  //divide the count by 2 to get the midpoint
  count = parseInt(count / 2);

  //get the midpoint using the count variable
  while (count) {
    head = head.next;
    count--;
  }

  return head;
};
