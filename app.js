// const names1 = ["John", "Den", "Ivan"];
// const names2 = [];
// const names3 = ["Ann"];
// const names4 = ["John", "Den", "Ivan", "Masha", "Kristina"];
// // console.log(names1.length);

// function likes(names) {
//     // TODO
//     let strNames = '';
//     if (names.length === 0) {
//         strNames = 'no one likes this';
//     } else if (names.length === 1) {
//         strNames = names[0] + ' likes this';
//     } else if (names.length === 2) {
//         strNames = names[0] + ' and ' + names[1] + ' like this';
//     } else if (names.length === 3) {
//         strNames = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//     } else if (names.length > 3) {
//         strNames = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//     return strNames;
// }

// console.log(likes(names4));
// const numbersForSum = 16;

// function digital_root(n) {
//     // ...
//     let digital = n;
//     let newN;
//     let arrayOfNumbers;
//     let sum;
//     do {
//         sum = 0;
//         newN = String(digital);
//         arrayOfNumbers = newN.split('');
//         arrayOfNumbers.forEach(element => {
//             sum = sum + parseInt(element);
//         });
//         digital = sum;
//     } while (sum > 9);
//     return sum;
// }
// //digital_root(numbersForSum);

// function nbYear(p0, percent, aug, p) {
//     let inhabitants = p0;
//     let years = 0;
//     while (inhabitants < p) {
//         inhabitants = inhabitants + inhabitants * percent / 100 + aug;
//         years++;
//     }
//     return years;
// }
// const p01 = 1500;
// const persent1 = 5;
// const aug1 = 100;
// const p1 = 5000;

// // nbYear(p01, persent1, aug1, p1);

const strWeight1 = "103 123 4444 6 99 321 2000";
const strWeight2 = '2000 10003 1234000 44444444 9999 11 11 22 123';

function orderWeight(strng) {
    // your code
    let indexWeight;
    let arrayObjWeught = [];
    let objWeight;
    let strWeight = "";
    const arrayOfWeight = strng.split(" ");

    arrayOfWeight.forEach(element => {
        indexWeight = 0;
        let tempArray = element.split('');
        tempArray.forEach(elm => {
            indexWeight = indexWeight + parseInt(elm);
        });
        objWeight = {
            numberWeight: element,
            index: indexWeight,
        }
        arrayObjWeught.push(objWeight);
    });

    arrayObjWeught.sort(function(a, b) {
        return parseInt(a.index) - parseInt(b.index)
    });
    arrayObjWeught.sort(function(c, d) {
        if (parseInt(c.index) === parseInt(d.index)) {
            if (String(c.numberWeight) < String(d.numberWeight)) {
                return c.numberWeight - d.numberWeight;
            }
        }
    });

    for (let i = 0; i < arrayObjWeught.length; i++) {
        if (i === 0) {
            strWeight = arrayObjWeught[i].numberWeight;
        } else {
            strWeight = strWeight + ' ' + arrayObjWeught[i].numberWeight;
        }

    }
    console.log(strWeight);
    return strWeight;
}

orderWeight(strWeight2);
orderWeight(strWeight1);