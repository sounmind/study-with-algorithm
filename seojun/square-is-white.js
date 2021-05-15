/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const letters = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
  };

  const firstCordinate = letters[coordinates[0]];
  const secondCordinate = +coordinates[1];

  return firstCordinate % 2 !== secondCordinate % 2;
};
