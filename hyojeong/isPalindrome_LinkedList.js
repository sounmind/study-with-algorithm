var isPalindrome = function(head) {
  if (head === null || head.next === null) return true;
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow =  slow.next;
  }

  if (fast) {
    slow = slow.next;
  }

  slow = reverseList(slow);
  fast = head;

  while(slow) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

function reverseList(head) {
  let prev = null;
  let current = head;

  while(current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;        
  }
return prev;
}
