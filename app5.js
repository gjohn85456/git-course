const number1 = 10;

function solution(number) {
    let resultSum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            resultSum = resultSum + i;
            console.log(i);
        }
    }
    console.log(resultSum);
    return resultSum;
}

solution(number1);