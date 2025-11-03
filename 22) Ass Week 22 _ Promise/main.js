console.log(`%%% ASS Week 22 %%%`);

// 1)
// let myPromis = new Promise((res, rej) => {
//     let data = fetch('./articales.json');
//     let myData = data.then(data => {
//         if(data) {
//             res(data.json().then((value) => {
//                 for (i = 0; i < 5; i++) {
//                     let divElem = document.createElement('div');
//                     let headElem = document.createElement('h3');
//                     let paragElem = document.createElement('p');
//                     divElem.append(headElem, paragElem);
//                     document.body.appendChild(divElem);
//                     headElem.textContent = value[i].title;
//                     paragElem.textContent = value[i].description;
//                 }
//             }))
//         } else {
//             rej(Error('Error When Call Data'));
//         }
//     });
// })

// 2)
fetch('./articales.json').then(data => data.json()).then(dataJson => {
    for (i = 0; i < 5; i++) {
        let divElem = document.createElement('div');
        let headElem = document.createElement('h3');
        let paragElem = document.createElement('p');
        divElem.append(headElem, paragElem);
        document.body.appendChild(divElem);
        headElem.textContent = dataJson[i].title;
        paragElem.textContent = dataJson[i].description;
    }
});