let ar = [];
ar[10000] = 100;
ar[1] = [1, 2, 3];
console.log("length of array = ", ar.length);
ar[0] ="Hello";
console.log("10000-th element = ", ar[10000]);
console.log("0-th element = ", ar[0]);
console.log("1-th element = ", ar[1]);
console.log("2-th element = ", ar[2]);

let str = "Hello";
let arStr = Array.from(str);  // getting array of the string's synbol
console.log("String 'Hello' -> array is ", arStr);

// proffesional use method FOR ECH , not For
for (let i = 0; i < arStr.length; i++) {
    console.log("element at index ", i, arStr[i]);
}

// forEch
function printLn(element, index, array) {
    console.log("element at index ", index, element);

}
arStr.forEach(printLn);

let arCodeAscii = arStr.map(function(symbol) {
    return symbol.charCodeAt();
    // return index % 2 == 0 ? symbol.charCodeAt() : symbol;
});
console.log(arStr, arCodeAscii);

let sumAscii = arStr.reduce(function(res,cur) {
    return res + cur.charCodeAt();
}, 0);
console.log("sum of ascii ", sumAscii);
console.log(arStr.reduce(function(res, cur) {
    return res + cur;
}, ""));


 
