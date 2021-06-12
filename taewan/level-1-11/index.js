function solution(lottos, win_nums) {
  const winRate = {
    "0" : 6,
    "1" : 6,
    "2" : 5,
    "3" : 4,
    "4" : 3,
    "5" : 2,
    "6" : 1,
  }

  let highRate = 0;
  let lowRate = 0;

  for (let item of lottos) {
    if (item === 0) {
      highRate++;
      continue;
    }

    if (win_nums.indexOf(item) >= 0) {
      lowRate++;
      highRate++;
    }
  }

  return [winRate[highRate], winRate[lowRate]];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);