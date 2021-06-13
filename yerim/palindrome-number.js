/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  const original = head.toString();
  const copy = original.split('').reverse().join('');

  if (original === copy) {
    return true;
  } else {
    return false;
  }
};