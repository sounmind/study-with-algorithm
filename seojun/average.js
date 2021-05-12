/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const maxSalary = Math.max(...salary);
  const minSalary = Math.min(...salary);

  const excluded = salary.filter(s => !(s === maxSalary || s === minSalary));

  return excluded.reduce((a, b) => a + b) / excluded.length;
};
