console.log(`%%% Assignments Week 10 %%%`);


// Task Video

/* 1)
    let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

    let result = myString.split(',').filter((ele) => {
        return isNaN(parseInt(ele));
    }).map((ele) => {
        return ele[+false] !== '_' ? ele : ' ';
    }).reduce((aac, curr) => {
        return (aac + curr)
    })

    let one = +true;

    console.log(result.slice(one, -one));
*/

// Assignments Website

/* 1)
    let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

    let result = mix.map((ele) => {
        return isNaN(parseInt(ele)) ? ele : '';
    }).reduce((acc, cur) => {
        return acc + cur
    });

    console.log(result)

    // Elzero
*/

/* 2)
    let myString = "EElllzzzzzzzeroo";

    let result = myString.split('').filter((ele, index, array) => {
        return ele !== array[index - 1];
    }).join('');

    console.log(result)
    // Elzero
*/

/* 3)
    let myArray = ["E", "l", "z", ["e", "r"], "o"];

    let result = myArray.reduce((acc, curr, index, array) => {
        return acc.concat(curr)
    }, [])


    console.log(result)
    // Elzero
*/

/* 4)
    let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

    let result = numsAndStrings
        .map(ele => typeof ele === 'number' ? -ele : '')
        .filter(ele => ele)
    console.log(result);

    // [-1, -10, 10, 20, -5, -3]
*/

/* 5)
    let nums = [2, 12, 11, 5, 10, 1, 99];

    let result = nums.reduce((acc, curr) => {
        return (curr % 2 === 0) ? acc * curr : acc + curr;
    }, 1)

    console.log(result)

    // 500
*/

