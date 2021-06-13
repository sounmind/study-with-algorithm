/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let binaryList = [];
  let currentNode = head;

  while (currentNode) {
    binaryList.push(currentNode.val);
    currentNode = currentNode.next;
  }

  const binaryVal = binaryList.join("");

  return parseInt(binaryVal, 2);
};
