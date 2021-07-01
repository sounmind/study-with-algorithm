function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  
  const minRank = lottos.filter((value) => {
    return win_nums.includes(value);
  }).length;

  const zeroCount = lottos.filter((value) => {
    return !value
  }).length

  return [rank[zeroCount + minRank], rank[minRank]]
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);