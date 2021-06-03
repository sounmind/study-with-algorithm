function solution(phone_number) {
  const answer = phone_number
    .split("")
    .map((number, index) => {
      if (index < phone_number.length - 4) return "*";
      return number;
    })
    .join("");

  console.log(answer);
  return answer;
}

solution("01093342473");