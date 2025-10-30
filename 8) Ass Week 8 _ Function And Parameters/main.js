console.log(`%%% Assignments Week 8 %%%`);

/* Task Chatgpt
    function createCounter() {
        let count = 0;

        return {
            increment() {
                console.log(++count);
            },

            reset() {
                console.log(count = +false);
            }
        }

    }

    let counterFun = createCounter();

    counterFun.increment();
    counterFun.increment();
    counterFun.reset();
*/

/* Task Video
    function showDetails(a, b, c) {
        let name = '(un Nam)', age = '(un Age)', hire = '(un Hire)';
        for (let i = 0; i < arguments.length; i++) {
            typeof arguments[i] === 'string' ? name = arguments[i] : name;
            typeof arguments[i] === 'number' ? age = arguments[i] : age;
            hire = typeof arguments[i] === 'boolean' ? (arguments[i] ? 'Hire' : 'Not Hire') : hire;
        };
        document.writeln(`<div>`)
            document.writeln(`Hello ${name}, Your Age Is ${age}, You Are Available ${hire}<hr>`);
        document.writeln(`</div>`);
    }

    showDetails('Yusuf', 26, true);
    showDetails(26, false, 'Yusuf');
    showDetails(true, 'Yusuf');
    showDetails(26);
*/

/** Assignments Website **/

/* 1) 
    function sayHello(theName, theGender) {
        return (
            theGender === 'Male'
            ? console.log(`Hello Mr ${theName}`) 
            : theGender === undefined 
            ? console.log(`Hello ${theName}`) 
            : console.log(`Hello Miss ${theName}`)
        );
    }

    // Needed Output
    sayHello("Osama", "Male"); // "Hello Mr Osama"
    sayHello("Eman", "Female"); // "Hello Miss Eman"
    sayHello("Sameh"); // "Hello Sameh"
*/

/* 2)
function calculate(firstNum, secondNum, operation) {
    if (firstNum === undefined || secondNum === undefined) {
        document.writeln(`Second Number Not Found <hr>`)
    } else {
        if(operation === 'add') {
            return document.writeln(`Calculator = ${firstNum + secondNum}<hr>`);
        } else if (operation === 'subtract') {
            return document.writeln(`Calculator = ${firstNum - secondNum}<hr>`);
        } else if (operation === 'multiply') {
            return document.writeln(`Calculator = ${firstNum * secondNum}<hr>`);
        } else {
            return document.writeln(`Calculator = ${firstNum + secondNum}<hr>`);
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
*/

/* 3)
    function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 12 * 4 * 7} Days`);
        console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Mintes`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
    } else {
        console.log(`Age Out Of Range`);
    }
    }

    // Needed Output
    ageInTime(110); // Age Out Of Range
    console.log(`------------`);
    ageInTime(38); // Months Example => 456 Months
    console.log(`------------`);
    ageInTime(26); // Months Example => 312 Months
*/

/* 5)
    function createSelectBox(startYear, endYear) {
        let year = [];
        document.writeln(`<select>`)
            for (let i = startYear; i <= endYear; i++) {
                document.writeln(`<option value="${i}">${i}</option>`);
            }
        document.writeln(`</select>`)
    }
    createSelectBox(2000, 2021);
*/

/* 6)
    function multiply(...arg) {
        for (let i = 0; i < arg.length; i++) {
            if (typeof arg[i] === 'string') {continue;} 
            return document.writeln(`Equal => ${Math.floor(arg[i]) * arg[i + 1]}<hr>`);
        }
    }

    multiply(10, 20); // 200
    multiply("A", 10, 30); // 300
    multiply(100.5, 10, "B"); // 1000
*/


