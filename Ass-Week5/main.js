

////////////////////////////////////
// 1) Tasks Video
////////////////////////////////////

////////////////////////////////////
    // Comparison && Logical Operator
////////////////////////////////////

/* 1)
    console.log(100 == "100"); 
    console.log(100 < 1000); 
    console.log(110 > 100 && 10 < 20); 
    console.log(-10 !== "-10"); 
    console.log(!-50 != +"-40"); 
    console.log(!10 <= -"-40"); 
    console.log(!"10" < 10); 
    console.log(!20 === false);
*/

/* 2)
    let num1 = 10;
    let num2 = 20;

    console.log(num1 < num2); // true
    console.log(num1 <= num2); // true
    console.log(num2 > num1); // true
    console.log(num2 >= num1); // true
    console.log(num1 != num2); // true
    console.log(num1 !== num2); // true
    console.log(! (num1 == num2)); // true
    console.log(!(num1 === num2)); // true
    console.log(!(num1 > num2)); // true
*/

/* 3)
    let a = 20;
    let b = 30;
    let c = 10;

    console.log(a < b && a > c || a <= b); // true
    console.log(a != b && a !== c); // true
    console.log(!(a > b) && !(a === b) && !(a < c) && !(a == c)); // true
*/

////////////////////////////////////
 // if Condition //
////////////////////////////////////

/* 1)
    let a = 40.5;

    console.log(
        a > 10 && a <= 40 ? 10
        : a >= 10 && a <= 20 ? "10 To 20"
        : a > 40 ? "> 40"
        : "Unknown"
    );
*/

/* 2)
    let st = "Elzero Web School";

    console.log((st.length * 2).toString() === "34" ? "Good 34" : "Failer");
*/

/* 3)
    console.log(
        st[st.toLowerCase().indexOf('w')].toLowerCase() === "w" 
        ? "Good W" 
        : undefined
    );
*/

/* 4)

console.log(typeof(st.length) !== 'string' ? "good" : "Failer");

*/

/* 5)

console.log(typeof(st.length) === 'number' ? "good" : "Failer");

*/

/* 6)

console.log(st.slice(0, 6).repeat(2) === 'ElzeroElzero' ? "Good" : "Failer");

*/


////////////////////////////////////
// 2) Assignments Website
////////////////////////////////////

////////////////////////////////////
 // if Condition //
////////////////////////////////////

/* 1)
    let num = 101;

    console.log(
        num < 10  
            ? '00' + num
        : num > 10 && num < 100
            ? '0' + num
        : num >= 100
            ? num
        : "failer"
    );
*/

/* 2)
let num1 = 9;
let str = "9";
let str2 = "20";

console.log(num1 == str ? "{num1} Is The Same Value As {str}" : "Failer")
console.log(
    num1 !== str 
    ? "{num1} Is The Same Value As {str} But Not The Same Type" 
    : "Failer"
)
console.log(
    !(num1 === str2) 
    ? "{num1} Is Not The Same Value Or The Same Type As {str2}" 
    : "Failer"
)
console.log(
    typeof(str) == typeof(str2) && str != str2 
    ? "{str} Is The Same Type As {str2} But Not The Same Value" 
    : "Failer"
)
*/

/* 3)
let num1 = 10;
let num2 = 30;
let num3 = "30";

if ((num3 > num1) && (num1 !== num3) && (num3 > num1) && (num3 == num2) && (num3 !== num2) && (num3 !== num1)) {
    console.log(
`30 Is Larger Than 10 And Type string Not The Same Type As number
30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number
{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`
    )
}
*/

/* 4)
// Edit What You Want Here

let num1 = 10;
let num2 = 0 ?? 10;
let num3 = +"10";
let num4 = 20 + 21;


//Do Not Edit Below This Line
//Needed Output
//True 7 Times


// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");  
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}
*/

////////////////////////////////////
    // Switch Statement
////////////////////////////////////

/* 1)
let job = "Support", salary = 0;

switch(job){
    case "Manager":
        salary = 8000;
        console.log(`${job} Salary is ${salary}`);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`${job} Salary is ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(`${job} and Designer Salary is ${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`${job} Salary is ${salary}`);
        break;
}
*/

/* 2)
let holiday = 5, money = 0;

console.log(
    holiday == 0 
        ? money = 5000
    : holiday == 1 || holiday == 2
        ? money = 3000
    : holiday == 3
        ? money = 2000
    : holiday == 4
        ? money = 1000
    : holiday == 5
        ? money = 0
    : money = 0
);
*/

/* 3)
let day = "   Tuesday  ".trim();
// You Need To Remove Spaces And Make First Letter Capital => Friday

day = day.slice(0,1).toUpperCase() + day.slice(1).toLowerCase()

console.log(day.trim())

switch(day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
}
*/

