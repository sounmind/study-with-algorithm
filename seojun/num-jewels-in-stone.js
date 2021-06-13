/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const hashTable = {};
  let jewelsInStone = 0;

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];

    !hashTable[stone] ? hashTable[stone] = 1 : hashTable[stone]++;
  }

  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i];

    if (hashTable[jewel]) {
      jewelsInStone += hashTable[jewel];
    }
  }

  return jewelsInStone;
};
