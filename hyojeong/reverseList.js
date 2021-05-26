var reverseList = function(head) {
    if (!head) return head;

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
//중간값을 찾아서 비교한다 하나씩
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while(head) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
        
    }
    return prev;
}



var isPalindrome = function(head) {
if (head === null || head.next === null) return true;
let slow = head;
let fast = head;

while(fast !== null || fast.next !== null) {
    slow.next;
    fast.next.next;
}

if (fast) {
    slow = slow.next;
}
    
    
slow = reverseList(slow) 
fast = head

while(slow) {
    if (slow.val !== fast.val) {
        return false;
    }
     slow = slow.next;
    fast = fast.next;
}
return true;
};


