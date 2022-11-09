let ar = [2, -10, 3, 1999];
ar.sort((a,b) => a-b);
console.log(ar);

ar = ["a","abc","a","abd","lmn","y"];
ar.sort((a, b) => a < b ? -1 : 1);
// ar.sort ((a,b) => a.length - b.length);
console.log(ar);