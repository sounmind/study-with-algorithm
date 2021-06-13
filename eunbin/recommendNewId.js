function solution(new_id) {
  let newIdArray = [];

  // 1단계
  new_id = new_id.toLowerCase();

  newIdArray = [...new_id];

  // 2단계
  const alphabet = "abcdefghijklmnopqrstuvrwyz".split("");
  const number = "0123456789".split("");
  const specialCharacter =  "-_.".split("");
  const availableCharacters = specialCharacter.concat(alphabet, number);


  newIdArray = newIdArray.filter(word => availableCharacters.includes(word));

  // 3단계
  const newArray3 = [];

  for (let i = 0; i < newIdArray.length; i++) {
    if (newIdArray[i] === "." && newIdArray[i + 1] === ".") {
      continue;
    } else {
      newArray3.push(newIdArray[i]);
    }
  }

  newIdArray = newArray3;

  // 4단계
  if (newIdArray[0] === ".") {
    newIdArray.shift();
  }

  if (newIdArray[newIdArray.length - 1] === ".") {
    newIdArray.pop();
  }

  // 5단계
  if (newIdArray.length === 0) {
    newIdArray = ["a"];
  }

  // 6단계
  if (newIdArray.length >= 16) {
    newIdArray = newIdArray.slice(0, 15);
  }

  if (newIdArray[newIdArray.length - 1] === ".") {
    newIdArray.pop();
  }

  // 7단계
  const lastWord = newIdArray[newIdArray.length - 1];

  while (newIdArray.length < 3) {
    newIdArray.push(lastWord);
  }

  return newIdArray.join("");
}


// 다른 사람의 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2ㅕ
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}



