//내코드
function solution(board, moves) {
  const basket = [];
  let breakCount = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let index = moves[i] - 1;
      if (board[j][index] > 0) {
        basket.push(board[j][index]);
        board[j][index] = 0;

        if (
          basket.length > 0 &&
          basket[basket.length - 1] === basket[basket.length - 2]
        ) {
          breakCount += 2;
          basket.splice(-2, 2);
        }
        break;
      }
    }
  }

  return breakCount;
}
// 다른사람 코드
// const transpose = matrix =>
//   matrix.reduce((result, row) => {
//     return row.map((_, i) => {
//       let a = [...(result[i] || []), row[i]];
//       return a;
//     });
//   }, []);

// const solution = (board, moves) => {
//   const stacks = transpose(board).map(row =>
//     row.reverse().filter(el => el !== 0)
//   );

//   const basket = [];
//   let result = 0;

//   for (const move of moves) {
//     const pop = stacks[move - 1].pop();
//     if (!pop) continue;
//     if (pop === basket[basket.length - 1]) {
//       basket.pop();
//       result += 2;
//       continue;
//     }
//     basket.push(pop);
//   }

//   return result;
// };

let a = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

