var fairCandySwap = function(aliceSizes, bobSizes) {
  let aliceSum = 0;
  let bobSum = 0;

  for (let i = 0; i < aliceSizes.length; i++) {
    aliceSum += aliceSizes[i];
  }

    for (let i = 0; i < bobSizes.length; i++) {
    bobSum += bobSizes[i];
  }

  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if((aliceSum - aliceSizes[i] + bobSizes[j]) == (bobSum - bobSizes[j] + aliceSizes[i])) {
        return [aliceSizes[i], bobSizes[j]];
      }
    }
  }
};