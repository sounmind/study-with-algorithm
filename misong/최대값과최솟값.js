//https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = '';
  
  const arr = s.split(" ").sort((a,b) => a-b);
  answer = `${arr[0]} ${arr[arr.length - 1]}`;
  
  return answer;
}