function solution(array, commands) {
  return commands.map((command) => {
      const [from, to, index] = command;
      const newArray = array
      .slice(from - 1, to)
      .sort((a, b) => a - b);
      return newArray[index - 1];
  });
}