
// Task 2
    document.getElementById("h1").style.color = "blue";
    document.getElementById("h1").style.fontSize = "80px";
    document.getElementById("h1").style.fontWeight = "bold";
    document.getElementById("h1").style.textAlign = "center";
    document.getElementById("h1").style.fontFamily = "arial";

// Task 3
    var w1 = "Elzero";
        w2 = "Web";
        w3 = "School";

    console.log(
        "%cElzero %cWeb %cSchool",
        "color: red; font-size: 40px",
        "color: green; font-size: 40px; font-weight: bold",
        "background-color: blue; font-size: 40px"
    );

// Task 4
console.group("Group 1");
    console.log("Message one");
    console.log("Message Two");
    console.group("Child Group");
        console.log("Message one");
        console.log("Message Two");
        console.group("Grand Child Group");
            console.log("Message one");
            console.log("Message Two");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("Group 2");
    console.log("Message one");
    console.log("Message Two");
console.groupEnd();

// Task 5
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"])

// Task 6
/* Multi line Comment
    console.log("Iam In Console");
    document.write("Iam In Page");
*/
