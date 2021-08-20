const strTest = "Hello world!";
const intN = 11;

function swap(s, n) {
    let arrayResult = [];
    let arrayOfString = s.split('');
    let arrayDec = (n >>> 0).toString(2);
    // console.log(arrayOfString);
    let j = 0;
    let i = 0;
    let a, b;
    let regexp = /[a-zA-Z]/;
    let regexpCase = /[A-Z]/;
    arrayDec = arrayDec.split('');
    // console.log(arrayDec);
    for (i = 0; i < arrayOfString.length; i++) {
        if (arrayDec[j] === undefined) {
            j = 0;
        }
        if (arrayOfString[i] != ' ' && regexp.test(arrayOfString[i])) {
            a = arrayDec[j];
            arrayResult.push([arrayOfString[i], a]);

        } else {
            arrayResult.push([arrayOfString[i], 'x']);
            j--;
        }
        j++;
    }
    //console.log(arrayResult);
    for (let k = 0; k < arrayResult.length; k++) {
        if (arrayResult[k][1] === '1') {
            b = arrayResult[k][0];
            if (regexpCase.test(b)) {
                arrayResult[k][0] = arrayResult[k][0].toLowerCase();
            } else { arrayResult[k][0] = arrayResult[k][0].toUpperCase(); }
        }
    }
    s = '';
    arrayResult.forEach(element => {
        s = s + element[0];
    });
    return s; //code me!
}
swap(strTest, intN);