 let ar =["123","abc","lmn","lmn"];
function count(array, element) {
    return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
}
let str ="lmn";
console.log(`\nInput ${ar}, counter of ${str} is ${count(ar,str)}\n`)