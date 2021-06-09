function solution(x) {
    let valueString = String(x);
    let sumValue = 0;
    let rest = 0;

    for (let i = 0; i < valueString.length; i++) {
        sumValue += parseInt(valueString[i]);
    }

    rest = x % sumValue;

    if (rest) return false;
    else return true;
}