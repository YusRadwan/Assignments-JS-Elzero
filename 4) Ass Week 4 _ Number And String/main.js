// Video Assignment Number
console.log("\nStart Assignments Video 1) Number \n")

let a = 1_100, b = 2_00.5, c = 1e2, d = 2.4;

// 1)  Min number and Integer
    console.log(Math.round((Math.min(a, b, c, d))));

// 2) Result 10000 and if Used a or d Must be just once 
    console.log((Math.floor(b) * c) / Math.round(d))

// 3) Get integer 2 From d variable with 4 Methods
    console.log(Math.floor(d));
    console.log(Math.round(d));
    console.log(Math.trunc(d));
    console.log(parseInt(d));

// 4) use variable b + d to get this value
    console.log(parseInt(b) / (d + 0.6)) // 66.67 => String
    console.log(Math.ceil(parseInt(b) / (d + 0.6))) // 67 => Number

// Video Assignment String
    console.log("\nStart Assignments Video 2) String \n");

    let s = "elzero web school";

// 1) use Slice And charAt to Print "Elzero"
    console.log((s.charAt(0).toUpperCase() + s.slice(1, 6)));

// 2) repeat "H" 8 
    console.log(s.charAt(13).repeat(8).toUpperCase());

// 3) Return Array = [Elzero]
    console.log((s.charAt(0).toUpperCase() + s.slice(1, 6)).split());

// 4) use substr + Template literals to output "Elzero School"
    console.log(`${s.substr(0, 6)} ${s.substr(11, 16)}`);

// 5) 
    console.log(`${s.charAt(0).toLowerCase()}${s.slice(1).toUpperCase()}`);




// *** Assignments Number ***
console.log("\nStart Assignments Week 1) Numbers\n")
// 1) Print Number 13 by 13 diffirent Methods
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.round(100000)); // 100,000
console.log(parseInt(1e5));
console.log(Math.floor(1e5))
console.log(parseInt(+1e4 + "" + +0e2));
console.log(1e5); // 100,000
console.log(15e4 - 5e4); // 100,000
console.log(1e3 * 1e2); // 100,000
console.log(1_000_00); // 100000
console.log(1e2 ** 25e-1); // 100000
console.log(100000.0); // 100000
console.log(0b11000011010100000); // 100000
console.log(Number("100000")); // 100000
console.log(1e5 / 1); // 100000


/////////////////////////////////////////////

// 2) use MIN_SAFE_INEGER to Print number 9007199254740991 
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// 3) By One Line use MAX_SAFE_INTEGER to Output number 16
console.log(Number.MAX_SAFE_INTEGER.toFixed().length)

// 4) Print 100 and 100.57
    let myVar = "100.56789 Views";
    console.log(parseInt(myVar)); // 100
    console.log(Math.trunc(parseFloat(myVar))); // 10
    console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// 5) Use isInteger To Output 2
    let num = 10;
    console.log(Number.isInteger(num) + true);

// 6) Use Variable To Output 10 by 5 different Methods
    let flt = 10.4;
    console.log(Math.trunc(flt));
    console.log(Math.floor(flt));
    console.log(Math.round(flt));
    console.log(parseInt(flt));
    console.log(Number(flt.toFixed()))

// 7) Write Code Output Random Number between 0 and 4
    console.log(Math.floor(Math.random() * 5));

/////////////////////////////////////////////

// *** Assignments String ***
console.log("\nStart Assignments Week 1) String\n")

// 1) Output e by 6 Methods
    let userName = "Elzero".toLowerCase();
    console.log(userName.charAt(0));
    console.log(userName.split()[0][0]);
    console.log(userName.slice(0, 1));
    console.log(userName.substring(0, 1));
    console.log(userName.substr(0, 1));
    console.log(userName[0].repeat(3));

// 2) 
    let word = "Elzero";
    let letterZ = "z";
    let letterE = "e";
    let letterO = "O";

    console.log(word.includes(letterZ));
    console.log(word.toLowerCase().startsWith(letterE.toLowerCase()));
    console.log(word.toLowerCase().endsWith(letterO.toLowerCase()));