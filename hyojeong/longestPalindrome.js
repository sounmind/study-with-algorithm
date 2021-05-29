var longestPalindrome = function(s) {
    let singleItem = new Set();
    let count = 0;
    for (let item of s) {
      if (singleItem.has(item)) {
        count += 2;
        singleItem.delete(item);
      } else {
        singleItem.add(item);
      }
    }
    
    return count + (singleItem.size > 0 ? 1 : 0);
  };
  
  longestPalindrome("abccccdd")
  //7
  longestPalindrome("abotccccdd")
  //Output: 7
  longestPalindrome("a")
  //Output: 1
  longestPalindrome("dd")
  //2
  longestPalindrome("ccc")
  //3
  longestPalindrome("bananas")
  //5
