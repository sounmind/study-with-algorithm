var plusOne = function(digits) {
    const digitsRight = digits.length - 1;
    for (i = digitsRight; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        return digits;
      } else {
       digits[i] = 0; 
      }
    }
    digits.unshift(1);
    return digits;
  };
  