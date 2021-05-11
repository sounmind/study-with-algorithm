var lengthOfLastWord = function (s) {
  const wordsList = s.trim().split(" ");
  const lastWord = wordsList.pop();

  return lastWord.length;
};
