function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for(let index in participant){
      if(participant[index] !== completion[index]){
          return participant[index];
      }
  }
}