//не решил
const testNumber = 100000000;

function removeNb(n) {

    let sum1 = 0;
    let sum2 = 0;
    let a = 0;
    let b = 0;
    let arrayResult = [];
    for (let k = 0; k <= n; k++) {
        sum1 = sum1 + k;
    }
    // sum2 = n * (n + 1) / 2;
    console.log(sum1);
    // console.log(sum2);
    // for (a = 1; a <= n; a++) {
    //     for (b = 2; b <= n; b++) {
    //         if ((sum1 - a - b) === a * b) {
    //             console.log(a);
    //             console.log(b);
    //             arrayResult = [
    //                 [a, b],
    //                 [b, a]
    //             ];
    //             console.log(arrayResult);
    //             return arrayResult;
    //         }
    //     }
    // }
    // console.log(arrayResult);
    // return arrayResult;

}


removeNb(testNumber);