var isPalindrome = function(x) {
    const string = x.toString();
    const stringRevers = string.split('').reverse().join('');
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== stringRevers[i]) {
        return false;
      }
    }
    return true;
  }
  