console.log(`%%% Ass Week 21 %%%`);

/* 1) 
    Create File Json
*/

/* 2)
fetch('./articles.json')
    .then(data => {
        if(!data) {
            throw new Error(`Http Error: ${data.status}`);
        }
        return data.json()
    })
    .then(arr => 
        arr.forEach(element => {
            console.log(element);
        }),
).catch(() => {
    console.error("error:", error);
}).finally(() => {
    console.log('Data Loaded')
});
*/

/* 3)
async function dataJson(params) {
    let data = await fetch('./articles.json');

    let mainData = await data.json();

    mainData.articles.forEach(article => {
        article.category = "All"
    });

    console.log(`MainData After Update`);
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);

    console.log(`Update data`);
    console.log(updatedData);

}

dataJson();
*/

async function dataJson() {
    let data = await fetch('./articles.json');

    let mainData = await data.json();

    let divElement = document.createElement('div');
    let divElementChild = document.createElement('div');
    let headerOne = document.createElement('h1')
    let paragElement = document.createElement('p')

    divElementChild.append(headerOne, paragElement)
    divElement.appendChild(divElementChild);
    document.body.appendChild(divElement);

    mainData.articles.forEach(article => {
        article.category = "All";
    });

    console.log(`MainData After Update`);
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);

    console.log(`Update data`);
    console.log(updatedData);

}

dataJson();



    



