// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes 참고
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}
