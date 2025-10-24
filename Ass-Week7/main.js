console.log('%%% Assignments Week 7 %%%');

// Assignments Website

/* 1)
let start = 10;
let end = 100;
let exclude = 40;

for (i = start; i <= end; i = i + start) {
    if(i === 40) {
        continue;
    }
    console.log(i);
}
*/

/* 2) 
let start = 10;
let end = 0;
let stop = 3;

for (i = start; i >= end; i--) {
    if(i <= start && i >= stop) {
        console.log(i < start ? end + "" + i : i);
    }
}
*/

/* 3) 
let start = 1;
let end = 6;
let breaker = 2;

for (start; start <= end; start++) {
    console.log(start);
    console.log(`-- ${breaker}`);
    console.log(`-- ${breaker * breaker}`);
}
*/

/* 4)
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    if((index - jump) > jump) {
        index -= jump;
    } else {
        break;
    }
}
*/

/* 5)
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +false;

for(let i = +false; i < friends.length; i++) {
    if(friends[i][+false] === letter.toUpperCase()) {
        continue;
    }
    console.log(`${++counter} => ${friends[i]}`);
}
*/

/* 6)
let start = 0;
let swappedName = "elZerO";
let swappedName2 = [];

for (start; start < swappedName.length; start++) {
    if(swappedName[start] === swappedName[start].toLowerCase()) {
        swappedName2.push(swappedName[start].toUpperCase());
        continue;
    }
    swappedName2.push(swappedName[start].toLowerCase());
    console.log(swappedName2.join(''));
}
*/

/* 7) 
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4, 5, 6];

for (start; start < mix.length; start++) {
    if (typeof mix[start] === 'number') {
        if (mix[start] > +true) {
            console.log(mix[start]);
        }
    }
}

*/

/* 8)
    let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
    let index = 0;
    let counter = 0;

    for(counter; counter < friends.length; counter++) {
        while (friends[counter][index] !== 'A' && typeof friends[counter] != 'number') {
            console.log(friends[counter]);
            break;
        }
    }
*/



// Task Vedio 
    let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
    let myEmployes = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];

    let counter = +false;
    let counterdo = +true
    let counIf = +true;

    for(let i = +false; i < myAdmin.length; i++) {
        if(myAdmin[i] === 'Stop'){
            document.writeln(`<div>We have ${i} Admins</div>\n<hr>`);
        }
    }

    while (counter < myAdmin.length && myAdmin[counter] !== 'Stop') {
        document.writeln(`
            <div>
            The Admin For Team ${counterdo++} is ${myAdmin[counter]}
            <h3>Team Members:</h3>`);
            for (let k = +false; k < myAdmin.length; k++) {
                for(let j = +false; j < myEmployes.length; j++) {
                    if (myAdmin[counter][+false] === myEmployes[j][+false]) {
                        document.writeln(`<p>${counIf++} - ${myEmployes[j]}</p>`);
                    }
                }
                counIf = +true;
                break;
            }
        document.writeln(`</div>\n<hr>`);
        counter++;
    }