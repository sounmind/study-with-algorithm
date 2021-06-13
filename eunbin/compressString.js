
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
function solution(s) {
    const sLength = s.length;
    if (sLength === 1) return 1; 
    // s = aabbaccc

    // 1개 단위로 압축
    let inArray = [];
    const newArray = [];
    for (let j = 1; j < sLength; j++) {
        inArray = [];
        for (let i = 0; i < sLength / j; i++) {
            inArray.push(s.slice(i * j, (i + 1) * j)); // [a]
        }
        newArray.push(inArray);   
    }

    const answerList = newArray.map((array) => {
        const answerArray = [];
        let sameCount = 1;

        array.reduce((accumulator, currentValue, index) => {
            if (index === array.length - 1) {
                if (accumulator === currentValue) {
                    sameCount++;
                    answerArray.push(sameCount + accumulator);
                } else {
                    if (sameCount === 1) {
                        answerArray.push(accumulator + currentValue);
                    } else {
                        answerArray.push(sameCount + accumulator + currentValue);
                    }

                }
            } else {
                if (accumulator === currentValue) { 
                    sameCount++;
                } else {
                    if (sameCount > 1) {
                        answerArray.push(sameCount + accumulator);
                        sameCount = 1;
                    } else {
                        answerArray.push(accumulator);
                    }
                }
            return currentValue;
            }  
        });
        return answerArray.join('').length; 
    });


    return Math.min(...answerList);
}
