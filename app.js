function sumDigits(number) {
    // if(number < 0) {
        // number = -number;
let sum = 0;
number = Math.abs(number) ; // modul chisla
number = Math.trunc(number) ; // get rid of fractional part (ubiraet drobnuyu chast)
do {
    let digit = number % 10;
    number = (number - digit) / 10;
    sum += digit;
   

} while (number != 0);
return sum;
} 

console.log(sumDigits(-123.567));
// }



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