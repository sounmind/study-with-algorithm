function solution(lottos, win_nums) {
  const correctNumber = lottos.filter((x) => win_nums.includes(x)).length; 
  const countZero = lottos.filter((x) => x === 0).length;
  
  function rank(num) {
      switch(num) {
        case 6:
          return 1;
        case 5:
          return 2;
        case 4:
          return 3;
        case 3:
          return 4;
        case 2:
          return 5;
        default:
          return 6;
      }
  }
  
  return [rank(correctNumber + countZero), rank(correctNumber)]; 
}