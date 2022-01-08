// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Implement the Solution class:

// Solution(ListNode head) Initializes the object with the integer array nums.
// int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be choosen.

// Example 1:

// Input
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 3, 2, 2, 3]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.getRandom(); // return 1
// solution.getRandom(); // return 3
// solution.getRandom(); // return 2
// solution.getRandom(); // return 2
// solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  const nodes = new Map();
  let length = 0,
    curr = head;
  //storing nodes and length
  while (curr) {
    nodes.set(length, curr);
    curr = curr.next;
    length++;
  }
  this.length = length;
  this.nodes = nodes;
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const nodes = this.nodes,
    len = this.length;
  let curr = this.head;
  //generating a random number to pick random node
  const random = Math.floor(Math.random() * len);
  return nodes.get(random).val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
