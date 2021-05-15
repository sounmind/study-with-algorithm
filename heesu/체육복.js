function solution(n, lost, reserve) {
  let studentCount = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    let find = reserve.indexOf(lost[i]);

    if (find !== -1) {
      studentCount++;
      lost[i] = null;
      reserve.splice(find, 1);
    }
  }

  for (let i = 0; i < lost.length; i++) {
    let findFront = reserve.indexOf(lost[i] - 1);
    let findEnd = reserve.indexOf(lost[i] + 1);

    if (findFront !== -1) {
      studentCount++;
      reserve.splice(findFront, 1);
      continue;
    } else if (findEnd !== -1) {
      studentCount++;
      reserve.splice(findEnd, 1);
    }
  }

  return studentCount;
}
