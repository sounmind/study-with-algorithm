var isValid = function(s) {
  const splitString = s.split('');
  const stack = [];
  for (const item of splitString) {
    if (item === '[') stack.push(']')
    else if (item === '(') stack.push(')')
    else if (item === '{') stack.push('}')
    else if (item !== stack.pop()) return false;
  }
  return stack.length === 0;
  return false;
};


isValid("()")
isValid("(]")
isValid("{[]}")
isValid("([)]")
