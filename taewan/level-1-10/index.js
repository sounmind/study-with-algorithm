function solution(num) {
  let callCount = 0;

  function makeCollatz(num) {
    if (num === 1) {
      return;
    }

    if (callCount >= 500) {
      return;
    }

    callCount++;

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    makeCollatz(num);
  }

  makeCollatz(num);

  return callCount >= 500 ? -1 : callCount;
}

solution(16);