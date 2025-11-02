import calc from "./mod-one.js";
import { modOne } from "./mod-two.js";


console.log(`%%% ASS Week 20 %%%`);

/* 1) 
const today = new Date('1999-03-23');
const newYear = new Date('2025-01-01');

const diff = newYear - today;


console.log(today);
console.log(newYear);
console.log(diff)
console.log('################################')
console.log(`${Math.floor(diff)} Milliseconds`)
console.log(`${Math.floor(diff / 1000 )} Seconds`)
console.log(`${Math.floor(diff / (1000 * 60) )} Minutes`)
console.log(`${Math.floor(diff / (1000 * 60 * 60))} Hours`)
console.log(`${Math.floor(diff / (1000 * 60 * 60 * 24))} Days`)
console.log(`${Math.floor(diff / (1000 * 60 * 60 * 24 * 30))} Monthes`)
console.log(`${Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))} Years`)
*/

/* 2)
let d = new Date()

let editOnDate = new Date();
    d.setFullYear('2035');
    d.setHours("00");
    d.setMinutes('00');
    d.setSeconds('01');

console.log(d)


*/

/* 3)
let d = new Date(2025, 10, 0);

let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(d)
console.log(`Previous Month Is ${monthName[d.getMonth()]} And Last Day Is ${d.getDate()}`)

*/

/* 4)
let dateOne = new Date("2025-10-02T00:00:00"); // Date String
let dateTwo = new Date(dateOne.getTime()); // Timestamp
let dateThree = new Date(2025, 9, 2, 0, 0, 0); // numeric Value

console.log(dateOne);
console.log(dateTwo);
console.log(dateThree);


// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"


*/

/* 5)
let start = performance.now();
for (let i = 1; i < 1e5; i++) {
    console.log(i)
}
let end = performance.now();

let time = end - start;

document.body.textContent = `Loop Took ${time.toFixed()} Milliseconds`;

// Needed Output

// "Loop Took 1921 Milliseconds."
*/

/* 6)
// Write Your Generator Function Here

function* gen() {
    let current = 14;
    let diff = 140;

    while(true) {
        yield current;
        current += diff;
        diff += 200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

*/

/* 7)
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    yield* [...new Set(genNumbers())];
    yield* [...new Set(genLetters())];
}


let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

*/

/* 8)

*/

// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60



