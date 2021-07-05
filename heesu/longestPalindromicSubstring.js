var longestPalindrome = function(s) {
  if (s.length === 1) {
      return s;
  }
    
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = findPalindrome(s, i, i);
    const evenPalindrome = findPalindrome(s, i - 1, i);
    
    longest = evenPalindrome.length > longest.length ? evenPalindrome : longest;
    longest = oddPalindrome.length > longest.length ? oddPalindrome : longest;
  }
  
  return longest;

  function findPalindrome (string, l, r) {
    let i = 0;

    while (string[l - i] && string[l - i] === string[r + i]) {
      i++;
    }
    i--;

    return string.slice(l - i, r + i + 1);
  }

};

const result = longestPalindrome('bb');

console.log(result);