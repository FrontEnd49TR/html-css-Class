function getAddressKey() {
    return "apt";
}
const person = {id: 123, first_name: 'Vasya', last_name: 'Ivanov',
 year: 2000, address: {city: 'Lod', street: 'Sokolov', apt: 100}};
 const yearExp = "ye" + "ar";

 console.log(person.year);   // 2000
 console.log(person[yearExp]);  // 2000
 console.log(person.yearExp);   // undefined

 const personArr = [123, 'Vasya', 'Ivanov', 2000, ['Lod', 'Sokolov', 100]];

 console.log(personArr[3]);  //  2000

 const name1 = "first_name";
 console.log(person[name1]);  // Vasya

 console.log(person["first_name"]);  // Vasya

 const name2 = getAddressKey();

 console.log(person.address[name2]); //  100

 console.log(person.address);  // { city: 'Lod', street: 'Sokolov', apt: 100 }

const x = {};
const string = "abc";
x[string] = 1;
console.log(x);   //  {abc: 1}


console.log("\n");

function displayOccurrences(strings) {
    const occurrences = {};
    strings.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
console.log(Object.entries(occurrences));  //  [ [ 'a', 2 ], [ 'opr', 1 ], [ 'lmn', 4 ], [ 'abc', 3 ] ]

    console.log(occurrences);  //  { a: 2, opr: 1, lmn: 4, abc: 3 }

    const occurrencesAr = Object.entries(occurrences);
    occurrencesAr.sort((e1, e2) => e2[1] - e1[1]);
    console.log(occurrencesAr);  // [ [ 'lmn', 4 ], [ 'abc', 3 ], [ 'a', 2 ], [ 'opr', 1 ] ]
 }
 const strings = ["a", "opr", "lmn", "abc", "lmn", "abc", "lmn", "lmn", "abc", "a"];
 displayOccurrences(strings);  