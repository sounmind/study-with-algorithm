function solution(answers) {
  const answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const correctArray = answers.reduce(
    function (acc, cur, idx) {
      if (idx < one.length) {
        if (cur === one[idx]) acc[0]++;
      } else {
        if (cur === one[idx % one.length]) acc[0]++;
      }

      if (idx < two.length) {
        if (cur === two[idx]) acc[1]++;
      } else {
        if (cur === two[idx % two.length]) acc[1]++;
      }

      if (idx < thr.length) {
        if (cur === thr[idx]) acc[2]++;
      } else {
        if (cur === thr[idx % thr.length]) acc[2]++;
      }

      return acc;
    },
    [0, 0, 0]
  );

  const max = Math.max(...correctArray);

  if (max === correctArray[0]) answer.push(1);
  if (max === correctArray[1]) answer.push(2);
  if (max === correctArray[2]) answer.push(3);

  return answer;
}
