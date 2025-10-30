console.log(`%%% Ass - Week 17 %%%`);

/* Video Challenge

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10]

// let [a,b,c] = [...new Set([...n1, ...n2])] // [10, 30, 20]
// console.log([...n1, ...n2].length * b) // 210

console.log((n1.concat(n2)).length * new Set([...n2]).values().next().value)

*/

// Ass Website

/* 1)
// Needed Output
let setOfNumbers = new Set().add(10);

setOfNumbers.add(20).add(setOfNumbers.size)

console.log(setOfNumbers);
console.log([...setOfNumbers][2]);

*/

/* 2)
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort())

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

*/

/* 3)
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let output = new Map([
    ["username", "osama"],
    ["role", "admin"],
    ["country", "Egypt"]
]);

console.log(output)
console.log(output.size)
console.log(output.has('role'))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

*/

/* 4)
let theNumber = 100020003000;

console.log(parseInt([...new Set(theNumber.toString())].filter(e => e !== '0').join('')));
// Needed Output
// 123

*/

/* 5)
let theName = "Elzero";

console.log([...theName]);
console.log([...new Set(theName)]);
console.log([...theName.toString()]);
console.log(Array.from(theName));
console.log(Array.call(0,...theName));


// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
*/

/* 6)
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Solution
let countNumber = chars.filter(el => typeof el === 'number').length;
let arrayWithoutNumber = chars.filter(el => typeof el === 'string');
let replaceNumber = arrayWithoutNumber.slice(0, countNumber);

console.log([...replaceNumber, ...arrayWithoutNumber]);  

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// ["Z", "Y", "Z", "Y", "A", "D", "E"]
*/

/* 7)
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log([...new Set([...numsOne, ...numsTwo])]);
console.log(numsOne.concat(numsTwo));

// Needed Output
// [1, 2, 3, 4, 5, 6]
*/

/* 8) Same Challenge Video
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log((n1.concat(n2)).length * new Set([...n2]).values().next().value)

// Needed Output
// 210
*/



