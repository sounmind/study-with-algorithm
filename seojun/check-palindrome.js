/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const toArray = [];
  let currentNode = head;

  while (currentNode) {
    toArray.push(currentNode.val);
    currentNode = currentNode.next;
  }

  for (let i = 0; i < toArray.length / 2; i++) {
    if (toArray[i] !== toArray[toArray.length - i - 1]) return false;
  }

  return true;
};
