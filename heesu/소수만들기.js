function solution(arr) {
  let count = 0;

  arr.sort((a, b) => {
    return a - b;
  });

  function isPrime(num) {
  let result = false;
  if(num === 2)
  return true;

  for(let i = 2; i<=Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      result = false;
      break;
    }else result = true;
  }
  return result;
}

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let num = arr[i] + arr[j] + arr[k]
        if(isPrime(num)) {count++}
      }
    }
  }

  return count;
}