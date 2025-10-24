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


