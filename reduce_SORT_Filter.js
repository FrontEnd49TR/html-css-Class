// function ulSurround(strings) {
//     let res = strings.map(str => `<li>${str}</li>`)
//     res.unshift("<ul>");//res.splice(0, 0, "<ul>"); 
//     res.push("</ul>");//res.splice(strings.length, 0, "</ul>")
//     return res;
// }
// let ar = ["123", "abc", "lmn", "lmn"];
// console.log(`input: ${ar} output: ${ulSurround(ar)}`)
// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }
// let str = "abc"
// console.log(`input: ${ar}, counter of ${str} is ${count(ar, str)} `)
// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length); 
//     dst.splice(dstPos, 0, ...arForCopy);
//     //arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
//     return dst;
// }
// let ar1 = [1, 2, 3, 4, 5, 6];
// let ar2 = [10, 30, 40, 50];
// arrayCopy(ar1,2,ar2,1,3);

// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`)

// function move(array, index, offset) {
//     let movedElem = array.splice( index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
// }
function getEvenNumbers(numbers) {
    let res = numbers.filter((n) => i % 2 == 0);
    return res;
/**
 * function minMax
 * Takes array of numbers 
Returns array containing two numbers: first is minimal value , second is maximal value form input array 
Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5] 
Implementation Requirements 
Apply the reduce pattern for getting result array by one “reduce” method  
 */
}
function minMax(numbers) {
    return numbers.reduce((res, cur) => {
        if (res[0] > cur) {
            res[0] = cur;
        } else if (res[1] < cur) {
            res[1] = cur;
        }
        return res;
    }, [numbers[0], numbers[0]]);
}
let ar=[ 2,9, 3, 1999];
ar.sort((a, b)=>a - b);

console.log(ar);
ar = ["abc","a", "lmn", "y"];
ar.sort((a, b)=>a.length - b.length);
console.log(ar);




/**
 * test for minMax function
 */
console.log("*****************************")
console.log("test for minMax function");
[[1, 2, 3, 5, 100], [2, -10, 3, 1], [100, 38,7], [10000]]
.forEach(a => console.log(`inpute array: ${a}, min-max array is: ${minMax(a)}`))
console.log("*****************************")
/********************************************************************************** */

/**
 * function deleteWithPrefix(strings, prefix)
 * Takes array of strings and a prefix value 
Returns array containing the strings from the input array without strings
 starting with a given prefix 
Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”)
 returns array [“abc”, “lmn”, “123”] 
 */
 function deleteWithPrefix(strings, prefix) {
    return strings.filter(str => !str.startsWith(prefix))
 }
 /**
  * test
  */
  console.log("*****************************")
  console.log("test for deleteWithPrefix function");
 let prefixes = ["old_", "new_"];
 [["abc", "old_abc", "abc_old_"], ["abc", "new_abc", "abc_new_"]].forEach(
    (a, i) => console.log(`input array: [${a}]; prefix: ${prefixes[i]}; after deletion: [${deleteWithPrefix(a, prefixes[i])}]`)
 )
 console.log("*****************************");
 /**
  * function  getSortedEvenOdd(numbers)
  * takes array of numbers 
  * no source array is updated
  * returns arrasorted by following
  * first numbers are even ones in the ascending order
  * last numbers are odd ones in the descending order
  */
  function  getSortedEvenOdd(numbers) {
    const result = numbers.slice();
    return result.sort((a, b) => {
        let res = 1;                     //  res = -1
        if (a % 2 == 0 && b % 2 != 0) {  //  a % 2 !==  &&   b % 2 == 0
            res = -1;                   //  res =  1
        } else if (a % 2 == 0 && b % 2 == 0) {
            res = a - b;
        } else if (a % 2 == 1 && b % 2 == 1) {
            res = b - a;
        }
        // let res = a % 2 - b % 2;                      // instead of all above
        // if (res == 0) {res = a % 2 == 0 ? a-b : b-a;}   // whithout 0 reverse sorting
        return res;
    })
  }
  /**
   * test function getSortedEvenOdd
   */
  console.log("************************************");
  console.log("test for getSortedEvenOdd");
  [[1, 2, 3, 4, 5, 6], [123, 9, 26, 48, 35, 4]]. forEach(a => console
    .log(`after sorting [${getSortedEvenOdd(a)}]; before sorting [${a}]`))