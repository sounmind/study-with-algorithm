function solution(s) {
  let answer = 0;
  let currentString = s;

  for (let i = 0; i < s.length; i++) {
    currentString = rotate(currentString);
    console.log(currentString);

    if (isValidBraceString(currentString)) {
      answer += 1;
    }
  }

  return answer;
}

function rotate(string) {
  const arrayedString = Array.from(string);

  arrayedString.push(arrayedString.shift());

  return arrayedString.join("");
}

function isValidBraceString(string) {
  while (true) {
    if (string.includes("()")) {
      string = string.split("()").join("");
    } else if (string.includes("{}")) {
      string = string.split("{}").join("");
    } else if (string.includes("[]")) {
      string = string.split("[]").join("");
    } else {
      break;
    }
  }

  if (string.length === 0) {
    return true;
  }

  return false;
}

console.log(solution("[](){}") === 3);
console.log(solution("}]()[{") === 2);
console.log(solution("[)(]") === 0);
console.log(solution("}}}") === 0);
