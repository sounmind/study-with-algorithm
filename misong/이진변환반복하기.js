//https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    let repeatCnt = 0;
    let removeZeroCnt = 0;
    let binaryNum = s;
    
    function removeZero(n) {
        removeZeroCnt += n.length - n.replace(/0/gi,"").length;
        console.log(n.replace(/0/gi,"").length);
        return n.replace(/0/gi,"").length;
    }
    
    function transformBinary(n) {
        binaryNum = n.toString(2);
        return binaryNum;
    }
    
    while (binaryNum !== "1") {
        transformBinary(removeZero(binaryNum));
        repeatCnt++;
    };

    const answer = [repeatCnt, removeZeroCnt];
    
    return answer;
}