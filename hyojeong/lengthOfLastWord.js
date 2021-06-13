var lengthOfLastWord = function(s) {
    const strArr = s.split(" ").filter(function(item) {
      return item;
    })
    
    const strLength = strArr.length;
  
    if (strLength !== 0) {
      return strArr[strLength - 1].length;
    } return 0;
};



lengthOfLastWord("Hello World")
//Output: 5

lengthOfLastWord("")
//0

lengthOfLastWord(" a ")
//1

lengthOfLastWord("a ")
//1
