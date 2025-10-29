console.log(`%%% ASS-Week 15 %%%`);

/* 1)
const textInput = document.querySelector('#text');
let selectElement = document.querySelector('select');

window.onload = () => {
    // Select Font
    for (i = 0; i < document.body.children[0].children.length; i++) {
        console.log(document.body.children[0].children[i].textContent)
        if (document.body.children[0].children[i].textContent === window.localStorage.font) {
            document.body.children[0].children[i].setAttribute('selected', '');
            textInput.style.fontFamily = window.localStorage.font;
        }
    }

    // Select Color
    for (j = 0; j < document.body.children[1].children.length; j++) {
        console.log(document.body.children[1].children[j].textContent)
        if (document.body.children[1].children[j].textContent === window.localStorage.color) {
            document.body.children[1].children[j].setAttribute('selected', '');
            textInput.style.color = window.localStorage.color;
        }
    }

    // Select Size
    for (k = 0; k < document.body.children[2].children.length; k++) {
        if (document.body.children[2].children[k].textContent === window.localStorage.fontSize) {
            document.body.children[2].children[k].setAttribute('selected', '');
            textInput.style.fontSize = window.localStorage.fontSize + 'px';
        }
    }
}

for (let i = 0; i < document.body.children.length; i++) {
    if (document.body.children[i].nodeName === 'SELECT') {
        document.body.children[i].addEventListener('change', () => {        
            if (document.body.children[i].classList.contains('font')) {
                window.localStorage.font = document.body.children[i].value;
                textInput.style.fontFamily = window.localStorage.font;
            } else if (document.body.children[i].classList.contains('color')) {
                window.localStorage.color = document.body.children[i].value;
                textInput.style.fontFamily = window.localStorage.color;
            } else {
                window.localStorage.fontSize = document.body.children[i].value;
                textInput.style.fontSize = window.localStorage.fontSize + 'px';
            }
        })
    }
}
*/
