// ++a => Plus 1 and Print
// a++ => plus 1 on a and not print
// +b  => define b is number positive

    
    // First Assignments
    let a = 10;
    let b = "20";
    let c = 80;

    console.log(++a + +b++ + +c++ - +a++); // 100 Note (a = 12, b = 21, c = 81)
    /* Explain Why Equal 100
        [++a]
        - value: 11
        - Explain: Post-Increment

        [+]
        - value: 
        - Explain: Addition / Plus

        [+b]
        - Value: 20
        - Explain: Unary Plus

        [b++]
        - Value: 20
        - Explain: Pre-Increment

        [+]
        - value: 
        - Explain: Addition

        [+c]
        - Value: 80
        - Explain: Unary Plus

        [c++]
        - Value: 80
        - Explain: Pre-Increment

        [-]
        - Value: 
        - Explain: minus

        [+a]
        - Value: 11
        - Explain: Unary Plus

        [a++]
        - Value: 11
        - Explain: Pre-Increment
    */

    console.log(++a + -b + +c++ - -a++ + +a); // 100 Note (a = 14, b = 21, c = 82)
    /* Explain Why Equal 100
        [++a]
        - value: 13
        - Explain: Post-Increment

        [+]
        - Value:
        - Explain: Plus

        [-b]
        - value: -21
        - Explain: unary Minus

        [+]
        - Value:
        - Explain: Plus

        [+c]
        - Value: 81
        - Explain: Unary Plus

        [c++]
        - Value: 81
        - Explain: pre-Increment

        [-]
        - Value:
        - Explain: Minus

        [-a]
        - Value: -13
        - Explain: Unary Minus

        [a++]
        - Value: 13
        - Explain: pre-Increment

        [+]
        - Value:
        - Explain: Plus

        [+a]
        - Vlaue: 14
        - Explain: Unary Plus

    */

    console.log(--c + +b + --a * +b++ - +b * a + --a - +true);// 100 (a = 12, b = 22, c = 81)
    /* Explain Why Equal 100
        [--c]
        - Value: 81
        - Explain: Post-Decrement

        [+]
        - Value: 
        - Explain: Plus

        [+b]
        - Value: 21
        - Explain: Unary Plus

        [+]
        - Value: 
        - Explain: Plus

        [--a]
        - Value: 13
        - Explain: Post-Decrement

        [*]
        - Value:
        - Explain: Multiplication

        [+b]
        - Value: 21
        - Explain: Unary Plus

        [b++]
        - Value: 21
        - Explain: Pre-Increment

        [-]
        - Value:
        - Explain: Minus

        [+b]
        - Value: 22
        - Explain: Unary Plus

        [*]
        - Value:
        - Explain: Multiplication

        [a]
        - Value: 13
        - Explain: Value

        [+]
        - Value: 
        - Explain: Plus

        [--a]
        - Value: 12
        - Explain: Post-Decrement

        [-]
        - Value:
        - Explain: Minus

        [+true]
        - Value: 1
        - Explain: Unary Plus

    */


    ///////////////////////////////////////////
    // Second Assignmentsd
    let d = "-100";
    let e = "20";
    let f = 30;
    let g = true;

    //only use variables value
    //Do not use variable twice

    console.log(-d * +e)// 2000
    console.log(-d + ++e + ++f + true * +e)//173

    ///////////////////////////////////////////


// Task 1
    // Replace ? With Arithmetic Operators
    console.log("\nTask 1: \n");
    console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

    ///////////////////////////////////////////

    console.log("\nTask 2: \n");
    let num = 3;

    // Solution One
    console.log(num += num); // 6

    // Solution Two
    console.log(num + false); // 6

    // Soultion Three
    console.log(++num - true); // 6

    // Soultion Four
    console.log(num - true); // 6

    // Solution Five
    console.log(num -= true); // 6

    // Solution Six
    console.log(+num); // 6

    ///////////////////////////////////////

    console.log("\nTask 3: \n");
    let num1 = "10";

    // Solution One
    console.log(+num1 + +num1); // 20

    // Solution Two
    console.log(+num1 + +num1 - false); // 20
    
    // Solution Three
    console.log(num1++ + +num1 - true); // 20

    // Solution Four
    console.log(num1 - true + num1 - true); // 20

    ///////////////////////////////////////

    console.log("\nTask 4: \n");
    let points = 10;

    // Write Your Code Here
    console.log(++points + true + true); // 13

    // Write Your Code Here
    console.log(--points - true - true); // 8;