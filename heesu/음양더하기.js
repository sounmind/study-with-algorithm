function solution(absolutes, signs) {
  function addNum(accumulator, value, index) {
    signs[index]
      ? (accumulator = accumulator + value)
      : (accumulator = accumulator - value);

    return accumulator;
  }

  return absolutes.reduce(addNum, 0);
}
