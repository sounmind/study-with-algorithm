function solution(numbers, hand) {
  let leftThumSpot = "*";
  let rightThumSpot = "#";
  let userHand = hand;
  const answer = [];
  const center = {
          2 : [[1, 3, 5], [4, 6, 8], [0, 7, 9], ["*", "#"]],
          5 : [[2, 4, 6, 8], [1, 3, 7, 9, 0], ["*", "#"]],
          8 : [[5, 7, 9, 0], [2, 4, 6, "*", "#"], [1, 3]],
          0 : [[8, "*", "#"], [7, 9, 5], [2, 4, 6], [1, 3]]
  }

  for (const number of numbers) {
    let leftDistance = -1;
    let rightDistance = -1;

    if (number === 1 || number === 4 || number === 7) {
      leftThumSpot = number;
      answer.push("L");
    }

    if (number === 3 || number === 6 || number === 9) {
      rightThumSpot = number;
      answer.push("R");
    }

    if (number === 2 || number === 5 || number === 8 || number === 0) {
      for (let i = 0; i < center[number].length; i++) {
        if (center[number][i].indexOf(leftThumSpot) !== -1) {
            leftDistance = i;
        }

        if (center[number][i].indexOf(rightThumSpot) !== -1) {
            rightDistance = i;
        }
      }

      if (leftDistance < rightDistance) {
        leftThumSpot = number;
        answer.push("L");
      } else if (leftDistance > rightDistance) {
        rightThumSpot = number;
        answer.push("R");
      } else {
        if (userHand === "left") {
          leftThumSpot = number;
          answer.push("L");
        } else {
          rightThumSpot = number;
          answer.push("R");
        }
      }
    }
  }

return answer.join("");
}