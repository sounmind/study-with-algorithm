function solution(array, commands) {
  var answer = [];

  const findEl = function (command) {
    let sliceArray = array.slice(command[0] - 1, command[1]);
    sliceArray.sort(function (a, b) {
      return a - b;
    });
    answer.push(sliceArray[command[2] - 1]);
  };

  for (let i = 0; i < commands.length; i++) {
    findEl(commands[i]);
  }

  return answer;
}

// 예제코드
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  return commands.map(command => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
