/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const sentenceAlphabet = new Set(sentence);
  return sentenceAlphabet.size === 26 ? true : false;
};
