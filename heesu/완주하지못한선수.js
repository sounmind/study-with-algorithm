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

