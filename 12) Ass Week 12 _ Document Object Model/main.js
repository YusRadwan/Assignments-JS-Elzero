console.log(`%%% ASS-Week 12 %%%`);

// Assignments Weebsite

/* 1)
console.log(document.body.children);
console.log(document.body.childNodes);
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));
console.log(document.getElementsByName('js'));
console.log(document.getElementById('elzero'));
console.log(document.querySelector('#elzero'));
console.log(document.querySelector('.element'));
console.log(document.querySelectorAll('#elzero'));
console.log(document.querySelector('div.element'));
console.log(document.querySelectorAll('.element'));
console.log(document.querySelectorAll('div.element'));
console.log(document.getElementsByClassName('element'));
console.log(document.body.getElementsByClassName('element'));
*/

/* 2)
let divElement = document.getElementsByTagName('div');

console.log(divElement)

for (let i = 0; i < divElement.length; i++) {
    divElement[i].childNodes[1].setAttribute('src', 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png')
    divElement[i].childNodes[1].setAttribute('alt', 'Elzero Logo')
}
*/

/* 3)
let divPrice = document.getElementsByClassName('result');
let inputPrice = document.getElementsByName('dollar');

inputPrice[0].addEventListener('keyup', (e) => {
    let egValue = e.target.value, 
        dollarValue = ((e.target.value) * 15.6).toFixed(2);
    divPrice[0].innerHTML = 
        `{${egValue}} USD Dollar = {${dollarValue}} Egyptian Pound`;
});
*/

/* 4)
let divOne = document.getElementsByClassName('one');
let divTwo = document.getElementsByClassName('two');
divOne.item('div.one').innerHTML = 'One';
divOne.item('div.one').setAttribute('title', 'one');
divTwo.item('div.two').innerHTML = 'Two 2';
divTwo.item('div.one').setAttribute('title', 'two');
*/

/* 5)
let imgElement = document.querySelectorAll('img');

for (let i = 0; i < imgElement.length; i++) {
    if(imgElement[i].hasAttribute('alt')) {
        imgElement[i].setAttribute('alt', 'Old');
    } else {
        imgElement[i].setAttribute('alt', 'Elzero New');
    }
}
*/

/* 6)
let formEle = document.getElementsByTagName('form');
let numberOfEle = document.getElementsByName('elements');
let numbertext = document.getElementsByName('texts');
let selectEle = document.getElementsByName('type');
let buttonSubmit = document.getElementsByName('create');
let divEle = document.querySelector('.results');
let divEleChild = document.querySelector('.box');


    buttonSubmit[0].onclick = (e) => {
        e.preventDefault();

        if (divEle.hasChildNodes()) {
            divEle.innerHTML = '';
        }

        for (let i = 1; i <= numberOfEle[0].value; i++) {
            // if (selectEle)
            let divCreate = document.createElement('div');
            // let divCreate = document.createElement('section');

            divCreate.className = "box";
            divCreate.title = "Element";
            divCreate.id = `id-${i}`;
            divCreate.textContent = numbertext[0].value;

            divEle.appendChild(divCreate);
        }
    }
*/

