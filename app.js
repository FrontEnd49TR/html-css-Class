//************************   CW-12  */
// let strNum1 = "123";
// let strNum2 = "9";

// console.log(strNum1 + strNum2); //=> 1239  concatenation 123 9
// console.log(strNum1 - strNum2); // => 114 operation "-"
// console.log(strNum1 * strNum2); // => 1107 operation "*"
// console.log(strNum1 / strNum2); // =>  13.666666666 operation "/"
// console.log(strNum1 > strNum2); // => false
// console.log(strNum1 < strNum2); // => true

// //confertions from streng to number

// let num1 = +strNum1;  // *** professional ***
// let num2 = +strNum2
// // console.log(+strNum1 + +strNum2); //=> 1239  concatenation 123 9  // *** not professional ***
//  let strNumStr = '123ab';
//  let num = parseInt(strNumStr); // => 123

//   strNumStr = '12.3ab';
//   num = parseFloat(strNumStr); // => 12.3

//   strNumStr = 'ab12.3';
//   num = parseFloat(strNumStr); // => 0

//   strNumStr = '12.3ab123';
//   num = parseFloat(strNumStr); // => 12.3

//   if(isNaN(strNumStr)) {
//     console.log( " number is NaN");
//   }

// let num10 = 123;
// let strNum10 ="" + num10;

// let strNum16 = num10.toString(16);  // => 16 system

//conversion from Morse code to number
// "."  => 0  / "-" => 1

// function sumDigits(number) {
//     // if(number < 0) {
//         // number = -number;
// let sum = 0;
// number = Math.abs(number) ; // modul chisla
// number = Math.trunc(number) ; // get rid of fractional part (ubiraet drobnuyu chast)
// do {
//     let digit = number % 10;
//     number = (number - digit) / 10;
//     sum += digit;
   

// } while (number != 0);
// return sum;
// } 

// console.log(sumDigits(-123.567));
// }

//**************************************************************************** */


// console.log("Hello world");
// for(var i = 0; i  <3; i++){
// setTimeout(function() {
//     console.log(i)
// });
// }
// for(let i = 0; i  <3; i++){
//     setTimeout(function() {
//         console.log(i)
//     });
//     }
//     function sum(op1,op2)
//     {
//         let res = op1+op2;
//         return res;
//     }
//     console.log (sum(10,20))
// **********************************************

function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    return digit < 10 ? digit : String.fromCharCode(codeA + digit - 10);

    // if(digit > 9) {
    //     digit = String.fromCharCode(codeA + digit - 10);   // only in JavaScript
    // }
    // return digit;  // in Java trouble with type data, than digit type int and type string
}
function fromNumberToString(number, base){
    number = Math.abs(number);
    let res ="";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);
    }while (number != 0);
    return res;
}
function getdigit(symbol) {
    let codeA ='a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
    function fromStringToNumber(string, base) {
        string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let digit = getdigit(string[i]);
        result = result * base + digit;
    }
    return result;
}
console.log(fromNumberToString(900550,36));
console.log(fromStringToNumber("a",16));