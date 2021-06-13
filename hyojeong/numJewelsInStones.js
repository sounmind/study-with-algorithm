var numJewelsInStones = function(jewels, stones) {
  const jewel = new Set(jewels)
  let count = 0;
  
  for(let stone of stones) {
    if (jewel.has(stone)) count++;
  }
  
  return count;
};

numJewelsInStones("aA", "aAAbbbb")
//Output: 3

numJewelsInStones("z", "aAAbbbb")
