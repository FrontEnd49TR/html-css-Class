function ulSurround(strings) {
    // let res = strings.map(function(str) {
    //     return `<li> + ${str} + <li>`;  // return "<li>" + str + "<li>"
    // })
    let res = strings.map(str => `<li>${str}<li>`);  //  (str => { return <li>...})

    res.unshift("<ul>"); // res.splice(0,0,"<ul>");
    res.push("<ul>");  // res.splice(strings.length,0,"<ul>");
    return res;
   
} 
let ar =["123","abc","lmn"];
console.log(`\n input : ${ar} output : ${ulSurround(ar)}\n`);

// function count(array, element) {

// }