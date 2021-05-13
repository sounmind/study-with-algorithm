function solution(participant, completion) {
  let newParticipant = participant;
  let newCompletion = completion;
  newParticipant.sort();
  newCompletion.sort();
  let answer;

  while (newParticipant.length > 0) {
    if (
      newParticipant[newParticipant.length - 1] ===
      newCompletion[newCompletion.length - 1]
    ) {
      newParticipant.pop();
      newCompletion.pop();
    } else {
      answer = newParticipant.pop();
    }
  }

  return answer;
}

var solution = (_, $) =>
  _.find(
    _ => !$[_]--,
    $.map(_ => ($[_] = ($[_] | 0) + 1))
  );

let 완주하지못한선수 = solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);

console.log(완주하지못한선수);
