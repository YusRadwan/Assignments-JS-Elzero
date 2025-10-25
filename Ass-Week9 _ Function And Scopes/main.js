console.log(`%%% Assignments Week 9 %%%`);


// Task Video
/* 1)
    // let names = function (...arg) {
    //     return `String [${arg.join('],[')}] => Done !`;
    // }

    const names = (...arg) => `String [${arg.join('], [')}] => Done !`;

    console.log(names("Osama", "Mohamed", "ALi", "Ebrahim")) // String [Osama], [Mohamed], [ALi], [Ebrahim] => Done !
*/

/* 2)
    let myNumbers = [20, 50, 10, 60];

    // let calc = (one, two, ...nums) => one + two + Number(...nums);

    let calc = function (one, two, ...nums) {return one + two + Number(...nums);}

    console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80
*/

// Assignments Website

/* 1) 
    function getDetails(zName, zAge, zCountry) {
        function namePattern(zName) {
            // Write Your Code Here
            if(typeof zName === 'string' && zName.includes(" ") || typeof zName === undefined) {
                let firstName = zName.includes(" ") ? zName.slice(0, zName.indexOf(" ")) : zName;
                let secondName = zName.includes(" ") ? zName.slice(zName.indexOf(" "), zName.indexOf(" ") + 2) : '';
                return `${firstName} ${secondName.toUpperCase()}.`;
            } else {
                return zName;
            }
            // Osama Mohamed => Osama M.
            // Ahmed ali => Ahmed A.
        }
        function ageWithMessage(zAge) {
            // Write Your Code Here
            // \d+ => One Or More From Chain Number
            // g => Search on all Not Only First Number
            return typeof zAge !== 'number' ? (/\d+/.test(zAge) === true && zAge.match(/\d+/g).map(Number) != Number(0) ? `,Your Age is ${zAge.match(/\d+/g).map(Number)}` : '') : `,Your Age is ${zAge}`;

            // 38 Is My Age => Your Age Is 38
            // 32 Is The Age => Your Age Is 32
        }
        function countryTwoLetters(zCountry) {
            // Write Your Code Here
            return typeof zCountry === 'string' ? `,You Live In ${zCountry.slice(0, 2).toUpperCase()}` : '';
            // Egypt => You Live In EG
            // Syria => You Live In SY
        }
        function fullDetails() {
            // Write Your Code Here
            return document.writeln(
                `<div>Hello ${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)} </div> <hr>`
            );
            

        }
        return fullDetails(); // Do Not Edit This
    }

    console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
    // Hello Osama M., Your Age Is 38, You Live In EG

    console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
    // Hello Ahmed A., Your Age Is 32, You Live In SY

    console.log(getDetails("Yusuf radwan", "My Age Is 26"));
    console.log(getDetails("Yusuf radwan", "My Age 000"));
    console.log(getDetails("Yusuf radwan"));
    console.log(getDetails("Yusuf"));
*/

/* 2)
    itsMe = () => `Iam A Normal Function`;

    console.log(itsMe()); // Iam A Normal Function

    urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

    console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

/* 3)
    const checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

    console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
    console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

/* 4)
    function specialMix(...data) {
        let datNum = 0;
        for (let i = 0; i < data.length; i++) {
            if (/\d+/.test(data[i])) {
                if (typeof data[i] === 'string') {
                    if (typeof Number(data[i].match(/\d+/g)) === 'number') {
                        datNum += Number(data[i].match(/\d+/g));
                    }
                } else {
                    datNum += data[i];
                } 
            }
        }
        return datNum !== 0 ? datNum : 'All Is String';
    }

    console.log(specialMix(10, 20, 30)); // 60
    console.log(specialMix("10Test", "Testing", "20Cool")); // 30
    console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
    console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/



