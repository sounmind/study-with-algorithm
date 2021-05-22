function solution(N, stages) {
  let stageLength = stages.length;
  let failureRatioArr = [];

  for (let i = 1; i <= N; i++) {
    let stayOnStage = stages.filter(item => item === i).length;
    let failureRatio = 0;

    if (stayOnStage === 0) {
      failureRatio = 0;
    } else {
      failureRatio = stayOnStage / stageLength;
    }
    stageLength -= stayOnStage;
    failureRatioArr.push({stage: i, failureRatio: failureRatio});
  }

  failureRatioArr.sort((a, b) => {
    if (a.failureRatio > b.failureRatio) {
      return -1;
    } else if (a.failureRatio === b.failureRatio) {
      if (a.stage > b.stage) {
        return 1;
      }
    }
  });

  return failureRatioArr.map(item => item.stage);
}
