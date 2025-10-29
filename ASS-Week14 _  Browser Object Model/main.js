console.log(`%%% ASS-Week 14 %%%`);

/* 1)
let prompetValue = window.prompt(`Print Number From – To`);

let prompetOne = parseInt(prompetValue.split('-')[0]);
let prompetTwo = parseInt(prompetValue.split('-')[1]);

setTimeout(() => {
    if (prompetOne > prompetTwo) {
        for (i = prompetTwo; i <= prompetOne; i++) {
            console.log(i)
        }
    }

    if (prompetOne < prompetTwo) {
        for (i = prompetOne; i <= prompetTwo; i++) {
            console.log(i)
        }
    }
}, 1000)

*/

/* 2)
setTimeout(() => {
    let popUp = document.createElement('div'),
        spanElement = document.createElement('span'),
        headOne = document.createElement('h1'),
        parag = document.createElement('p');

    spanElement.textContent = 'xx';
    headOne.textContent = 'Welcome';
    parag.textContent = 'Welcome To Elzero Web School';

    popUp.append(spanElement, headOne, parag);
    document.body.appendChild(popUp);



    window.addEventListener('click', (e) => {
        if (e.target.textContent === spanElement.textContent) {
            popUp.remove();
            console.log('Popup is Hidden');
        }
        console.log(e.target)
    })
}, 1000)
*/

/* 3)
let divElement = document.createElement('div');

divElement.textContent = 10,

document.body.appendChild(divElement);

let count = parseInt(divElement.textContent);


let countDown = setInterval(() => {
        count--;    
        count !== 0 ? divElement.textContent = parseInt(count) : clearInterval(countDown);
        // console.log(count);
}, 1000);
*/

/* 4)
let divElement = document.createElement('div');
divElement.textContent = 10,
document.body.appendChild(divElement);
let count = parseInt(divElement.textContent);

let countDown = setInterval(() => {
        count--;    
        count !== 0 ? divElement.textContent = parseInt(count) : window.location.href = 'https://elzero.org/';
        // clearInterval(countDown);
        
    }, 1000);
*/

/* 5)
let divElement = document.createElement('div');
divElement.textContent = 10,
document.body.appendChild(divElement);
let count = parseInt(divElement.textContent);

let countDown = setInterval(() => {
        count--;
        count !== 5 ? divElement.textContent = parseInt(count) : window.open('https://elzero.org/', '_blank', 'width=600,height=400,left=200,top=200')
        count !== 0 ? divElement.textContent = parseInt(count) : clearInterval(countDown);
    }, 1000);
*/







