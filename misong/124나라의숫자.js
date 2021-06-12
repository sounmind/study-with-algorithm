//https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = '';

  while (n) {
    if (n % 3) {
      answer = n % 3 + answer;
      n = Math.floor(n / 3);
    } else {
      answer = "4" + answer;
      n = n / 3 - 1;
    };
  }

  return answer;
}