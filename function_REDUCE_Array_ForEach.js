function arrayCopy(src, srcPos, dst, dstPos, length) {
    let arForCopy = src.slice(srcPos,srcPos + length);

    // arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
    dst.splice(dstPos, 0, ...arForCopy); // ... spred operator - open array - whithout [] - only elements
}
let ar1 = [1, 2, 3, 4, 5, 6];
let ar2 = [10, 30, 40, 50];
arrayCopy(ar1,2,ar2,1,3);
console.log(`\n ar1 : ${ar1}, ar2 : ${ar2} arrayCopy(ar1,2,ar2,1,3) : ${ar2} \n`);