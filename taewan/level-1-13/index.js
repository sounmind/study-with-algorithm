function solution(n) {
  console.log(Math.pow(Math.floor(Math.sqrt(n)), 2));
  console.log(Math.pow(Math.floor(Math.sqrt(n)) + 1, 2));
  if (n === Math.pow(Math.floor(Math.sqrt(n)), 2)) return Math.pow(Math.floor(Math.sqrt(n) + 1, 2));
  return -1;
}

solution(121);