function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer = answer + parseInt("+" + absolutes[i]);
    } else {
      answer = answer + parseInt("-" + absolutes[i]);
    }
  }

  return answer;
}