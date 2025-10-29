console.log(`%%% ASS-Week 13 %%%`);

/* 2) Not Complete
let inputAdd = document.querySelector('.classes-to-add'),
    inputRemove = document.querySelector('.classes-to-remove'),
    divElement = document.querySelector('.classes-list').children.item(1);

inputAdd.onblur = () => {
    let addBlur = inputAdd.value.toLowerCase();
    // console.log(addBlur !== '') 
    if (addBlur !== '') {
        if(addBlur.includes(' ')) {
            let divChildSpanOne = document.createElement('span');
            let divChildSpanTwo = document.createElement('span');
            divElement.appendChild(divChildSpanOne);
            divElement.appendChild(divChildSpanTwo);
            divChildSpanOne.textContent = addBlur.slice(0, addBlur.indexOf(' '));
            divChildSpanTwo.textContent = addBlur.slice(addBlur.indexOf(' ') + 1);
            for (let i = 0; i < divElement.children.length; i ++) {          
                
            }
        } else {
            let divChildSpanThree = document.createElement('span');
            divElement.appendChild(divChildSpanThree);
            divChildSpanThree.textContent = addBlur;
        }
    }
    inputAdd.value = ''
}

inputRemove.onblur = () => {
    let removeBlur = inputRemove.value.toLowerCase();
    if (removeBlur !== '') {
        if(divElement.children) {
            for (let i = 0; i < divElement.children.length; i++) {
                if(removeBlur.includes(' ')) {
                    if (divElement.children[i].textContent === removeBlur.slice(0, removeBlur.indexOf(' '))) {
                        divElement.removeChild(divElement.children[i])
                    }
                    if (divElement.children[i].textContent === removeBlur.slice(removeBlur.indexOf(' ') + 1, removeBlur.length)) {
                        divElement.removeChild(divElement.children[i])
                    }
                } else {
                    divElement.removeChild(divElement.children[i]);
                }
            }
        }
    }
    inputRemove.value = ''

}
*/

/* 3)
let ourElement = document.querySelector('.our-element');
ourElement.nextElementSibling.remove()

function newDiv(elementName, nameClass, title, dataValue, content) {
    let divBefore = document.createElement(elementName);
    divBefore.classList.add(nameClass);
    divBefore.setAttribute('title', title || null);
    divBefore.setAttribute('data-value', dataValue || null);
    divBefore.textContent = content;

    let divAfter = divBefore.cloneNode(true);

    return divBefore.classList.contains('start') ? ourElement.before(divBefore) : ourElement.after(divAfter);
}

newDiv('div', 'start', 'Start Element', 'Start', 'Start');
newDiv('div', 'end', 'End Element', 'End', 'End');
*/

/* 4)
let element = document.querySelector('div');

console.log(element.textContent.slice(element.textContent.indexOf('Elzero')).trim())
*/

/* 5)
for (let i = 0; i < document.body.children.length; i++) {
    document.body.children[i].addEventListener('click', (e) => {
        console.log(document.body.children[i].tagName);
    })
}
*/


