// Start Assignments Video 17
let pageTitle = "Elzero", Desc = "Elzero Web School", Time = "25/10";

const contain = `
    <div>
        <h3>Hello ${pageTitle}</h3>
        <p>${Desc}</p>
        <span>${Time}</span>
    </div>
`;

document.writeln(contain.repeat(4));

// End Assignments Video 17


//  ###  Assignments ###

// Task 1
    let numberOne = 10, numberTwo = 20;

    console.log(numberOne + "" + numberTwo);
    console.log(typeof(numberOne + "" + numberTwo));
    console.log(`${numberOne}${numberTwo}`);
    console.log(typeof(`${numberOne}${numberTwo}`));
    //   Normal Concatenate
    console.log(numberTwo + "\n" + numberOne);
    //   Template Literals Way
    console.log(`${numberTwo}
${numberOne}`);

// Task 2
// 1) Create h1 in HTML file by id elzero
// 2) Write in h1 "object" to use innerHTML
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Task 3

console.log('I\'m In\n\\\\ \nLove \\\\ """ \'\'\'\n\++ With \++\n\\"""\\"""\n""JavaScript""``');

// Task 4



let a = 21, b = 20;

console.log('_' + a + '_' + (b + '' + a) + '_' + (b + '' + a) + '_' + (b + '' + a) + '_'  + b + '_'); // _21_2021_2021_2021_20_
