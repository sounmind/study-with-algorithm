function solution(a, b) {
  let resultNumber = 0;

  for(let i = 0; i < a.length; i++){
     resultNumber = resultNumber + a[i] * b[i];
  }

  return resultNumber;
}