function solution(arr) {
  let sum = arr.reduce((prev, curr) => prev + curr);
  let result = sum / arr.length;

  return result;
}

solution([1,2,3,4]);

