class RomanNumerals {
    constructor(number) {
        this.number = number;
        this.codeRoman = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1
        }
    }
    toRoman(number) {

        let arrNumber = String(number).split('');
        let k = 0;
        let n = 0;
        let newArr = [];
        for (let i = arrNumber.length - 1; i > -1; i--) {
            n = (parseInt(arrNumber[i])) * Math.pow(10, k);
            newArr.push(n);
            k++;
        }
        console.log(newArr);
        let resultToRoman = [];
        let num1 = 0;
        let amount = newArr.length - 1;
        for (let j = amount; j > -1; j--) {
            //Object.keys(this.codeRoman).find(key => this.codeRoman[key] === newArr[j]);
            num1 = newArr[j];
            let k = 0
            if (num1 >= 1000) {
                k = num1 / 1000;
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('M');
                }
            }
            if (num1 === 900) {
                resultToRoman.push('CM');
            }
            if (num1 < 900 && num1 > 500) {
                resultToRoman.push('D');
                k = (num1 - 500) / 100;
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('C');
                }

            }
            if (num1 === 500) {
                resultToRoman.push('D');
            }
            if (num1 < 500 && num1 >= 100) {
                k = num1 / 100;
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('C');
                }
            }
            if (num1 === 90) {
                resultToRoman.push('XC');
            }
            if (num1 < 90 && num1 > 50) {
                resultToRoman.push('L');
                k = (num1 - 50) / 10;
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('X');
                }
            }
            if (num1 === 50) {
                resultToRoman.push('L');
            }
            if (num1 < 50 && num1 >= 10) {
                k = num1 / 10;
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('X');
                }
            }
            if (num1 === 9) {
                resultToRoman.push('IX');
            }
            if (num1 < 9 && num1 > 5) {
                resultToRoman.push('V');
                k = (num1 - 5);
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('I');
                }
            }
            if (num1 === 5) {
                resultToRoman.push('V');
            }
            if (num1 === 4) {
                resultToRoman.push('IV');
            }
            if (num1 < 4) {
                k = num1;
                for (let j = 0; k > j; j++) {
                    resultToRoman.push('I');
                }
            }
        }
        console.log(resultToRoman.join(''));
    }
    fromRoman(number) {
        const arrayRomanNumber = number.split('');
        let number1 = 0;
        let previousNumber = 0;
        let sum = 0;
        for (let i = 1; i <= arrayRomanNumber.length; i++) {
            number1 = this.codeRoman[arrayRomanNumber[i]];
            previousNumber = this.codeRoman[arrayRomanNumber[i - 1]];
            if (number1 > previousNumber) {
                sum = sum + number1 - previousNumber;
                i++;
            } else {
                sum = sum + previousNumber;

            }
        };
        console.log(sum);
    }

}
let n = 'MDCLXIX';
let n1 = 'M';
let n2 = 'IV';
let n3 = 'I';
let n4 = 'MMVI';
let n5 = 'MCMXCI';
let n6 = 'MMXX';
let newN = 2006;

let romanTraslator = new RomanNumerals();

//console.log(romanTraslator.codeRoman);
romanTraslator.fromRoman(n);
romanTraslator.toRoman(newN);