function solution(n, m) {
  const greatest = greatestCommonFactor(n, m);
  // return answer;
}

function greatestCommonFactor(n, m) {
  if (n - m > 0) {

  } else {
    let rest = m % n;

    if (rest === 0) {
      return n;
    }
  }
}

solution(3, 12);