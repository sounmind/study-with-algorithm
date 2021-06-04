function solution(n, lost, reserve) {
  let students = n;
  const realReserve = [];
  
  reserve.forEach((res) => {
      if (lost.indexOf(res) === -1) {
          realReserve.push(res);
      } else {
          lost.splice(lost.indexOf(res), 1);
      }
  });

  let noClothStudents = lost.length;
  
  for (let i = 0; i < lost.length; i++) {
      if (realReserve.indexOf(lost[i] - 1) !== -1) {
          realReserve.splice(realReserve.indexOf(lost[i] - 1), 1);
          noClothStudents--;
      } else if (realReserve.indexOf(lost[i] + 1) !== -1) {
          realReserve.splice(realReserve.indexOf(lost[i] + 1), 1);
          noClothStudents--;
      }
  }

  return students - noClothStudents;
}
