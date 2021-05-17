const KEY_PAD = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  ["*",0,"#"],
];

function findNumberPosition(number) {
  const indexArray = [];

  for (let i = 0; i < KEY_PAD.length; i++) {
    for (let j = 0; j < KEY_PAD[i].length; j++) {
      if (KEY_PAD[i][j] === number) {
        indexArray.push(i);
        indexArray.push(j);

        return indexArray;
      }
    }
  }
}

function calculateDistance(handPosition, numberPosition) {
  let distance = 0;

  for (let i = 0; i < handPosition.length; i++) {
    distance += Math.abs(handPosition[i] - numberPosition[i]);
  }

  return distance;
}

function solution(numbers, hand) {
  let result = "";
  let leftHandPosition = [3, 0];
  let rightHandPosition = [3, 2];

  numbers.forEach(number => {
    const numberPosition = findNumberPosition(number);
    if (number === 1 || number === 4 || number === 7) {
      result += "L";
      leftHandPosition = numberPosition;
    } else if (number === 3 || number === 6 || number === 9) {
      result += "R";
      rightHandPosition = numberPosition;
    } else {
      const leftHandDistance = calculateDistance(leftHandPosition, numberPosition);
      const rightHandDistance = calculateDistance(rightHandPosition, numberPosition);

      if (leftHandDistance > rightHandDistance) {
        rightHandPosition = numberPosition;
        result += "R";
      } else if (leftHandDistance < rightHandDistance) {
        leftHandPosition = numberPosition;
        result += "L";
      } else {
        if (hand === "right") {
          rightHandPosition = numberPosition;
          result += "R";
        } else if (hand === "left") {
          leftHandPosition = numberPosition;
          result += "L";
        }
      }
    }
  })
  
  return result;
}

console.log(solution([1,3,8], "right"));
