var romanToInt = function (s) {
  const romanSymbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  const inputValues = Array.from(s).map(item => romanSymbols[item]);
  const valueConverted = [];

  for (let i = 0; i < inputValues.length; i++) {
    if (inputValues[i] < inputValues[i + 1]) {
      valueConverted.push(inputValues[i + 1] - inputValues[i]);
      i++;
    } else {
      valueConverted.push(inputValues[i]);
    }
  }

  return valueConverted.reduce((accumulator, current) => accumulator + current);
};
