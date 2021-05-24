/**
 * @param {string} moves
 * @return {boolean}
 */

 var judgeCircle = function(moves) {
  const param = moves.split("");
  let a = 1;
  let b = 1;

  for (let i = 0; i < param.length; i++) {
    if (param[i] === 'U') {
      a++;
    } else if (param[i] === 'D') {
      a--;
    } else if (param[i] === 'L') {
      b--;
    } else if (param[i] === 'R') {
      b++;
    }
  }

  if (a === 1 && b === 1) {
    return true;
  } else {
    return false;
  }
};