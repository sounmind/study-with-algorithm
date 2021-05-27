var isAnagram = function(s, t) {
  const resultMap = {};

  if (s.length !== t.length) return false;

  for(const item of s) {
    if (!resultMap[item]) resultMap[item] = 0;
      resultMap[item]++; 
    } 
  for (const item of t) {
    if (resultMap[item]) resultMap[item]--;
  }
  for (let value in resultMap) {
    if (resultMap[value] > 0) return false;
  }

  return true;
};
  
  isAnagram("anagram", "nagaram")
  //Output: true
  
  isAnagram("aacc", "ccac")
  //false
  
  isAnagram("rat", "car")
  //Output: false
  
  isAnagram("a", "ab")
  //Output: false
  
  isAnagram("ab", "a")
  //Output: false
	