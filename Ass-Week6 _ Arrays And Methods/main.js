


///////////////////////////////////////////
// Task Video
/* 1)
    let zero = 0;
        counter = 3;

    let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Amer"];

    console.log(my.slice(zero, (++counter)).reverse()); // ['Osama', 'Elham', 'Mazero', 'Ahmed']

    console.log(my.slice(++zero, --counter).reverse()); // ['Elham', 'Mazero']

    // let my1 = my.splice(zero, zero, "Elzero");
    // console.log(my[zero]); // "Elzero"

    console.log(my[zero] = "Elzero") // "Elzero"

    console.log(my[zero][++counter].concat(my[zero][++counter].toUpperCase())); // "rO"

    // let ro = my[zero].substring(my[zero].length - ++zero).split("");
    // console.log(ro[0].concat(ro[1].toUpperCase()));

    ///////////////////////////////////////////

    let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
    let num = 3;
*/

/* 2)

    let z = 0, c = 3; 
    let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Amer"];

    console.log(my.slice(z, ++c).reverse()) // ['Osama', 'Elham', 'Mazero', 'Ahmed']

    console.log(my.slice(++z, --c).reverse());

    // console.log(my[--c].slice(--z, c) + my[--c].slice(++c)); // Elzero
    let my1 = my.splice(c, z, 'Elzero');
    console.log(my[c]); // Elzero

    console.log(my[c][++c] + my[--c][++c + z].toUpperCase())
    // console.log(my[--c][c + c + c + c] + my[c][my.length - c].toUpperCase());

*/

/////////////////////////////////////////////
// Assignments

/* 1)
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

/* 2)
    let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
    // Write Your Code Here
    friends.shift();
    friends.pop()
    console.log(friends); // ["Eman", "Osama"]
*/

/* 3)
    let arrOne = ["C", "D", "X"];
    let arrTwo = ["A", "B", "Z"];
    let finalArr = [];

    // Write One Single Line Of Code

    console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
*/

/* 4)
    let website = "Go";
    let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

    console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
*/

/* 5)
    let needle = "JS";
    let haystack = ["PHP", "JS", "Python"];

    // Write 3 Solutions
    console.log(haystack.includes(needle) ? "Found" : "Not Found");
    console.log(haystack.indexOf(needle) ? "Found" : "Not Found");
    console.log(haystack.lastIndexOf(needle) ? "Found" : "Not Found");
*/

/* 6)
    let arr1 = ["A", "C", "X"];
    let arr2 = ["D", "E", "F", "Y"];
    let allArrs = [];

    // Your Code Here

    console.log(allArrs.concat(arr1.pop(), arr2.slice(arr2.length - arr1.length)).sort().join('').toLowerCase()); // fxy
*/
