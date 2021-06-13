/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const paths = new Set();
  let [x, y] = [0, 0];

  paths.add(`${x}${y}`);

  for (const direction of path) {
    if (direction === "N") y++;
    if (direction === "S") y--;
    if (direction === "E") x++;
    if (direction === "W") x--;

    const newPosition = `${x}${y}`;

    if (paths.has(newPosition)) return true;

    paths.add(newPosition);
  }

  return false;
};
