function solution(n, lost, reserve) {
  let enrollStudent = n - lost.length;
  let lostStudents = [];

  lostStudents = lost.filter(lostStudent => {
    let reserveIdx = reserve.findIndex(reserveStudent => reserveStudent === lostStudent);
    if (reserveIdx === -1) return lostStudent;

    let lostStudentIdx = lost.findIndex(item => item === lostStudent);
    delete reserve[reserveIdx];
    delete lost[lostStudentIdx];
    enrollStudent++;
  });

  lost.forEach(lostStudent => {
    let reserveIdx = reserve.findIndex(reverseStudent => lostStudent - reverseStudent === 1 || lostStudent - reverseStudent === -1);
    if(reserveIdx !== -1) {
      let lostStudentIdx = lost.findIndex(item => item === lostStudent);

      delete reserve[reserveIdx];
      delete lost[lostStudentIdx];
      
      enrollStudent++;
    }
  });

  return enrollStudent;
}

solution(5, [2,4], [1,3,5]);
