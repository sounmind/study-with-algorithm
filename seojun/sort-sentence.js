/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const sortedSentence = [];
  const wordList = s.split(" ");

  wordList.forEach(word => {
    const index = +word.slice(-1);
    sortedSentence[index - 1] = word.slice(0, word.length - 1);
  });

  return sortedSentence.join(" ");
};
