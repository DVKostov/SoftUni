window.addEventListener('load', solve())

async function solve() {
    let url = `http://localhost:3030/jsonstore/cookbook/recipes`;
    let newMain = await asyncRequest(url);
    let main = document.querySelector('main');
    main.textContent = '';

    for (const article of newMain) {
        main.appendChild(article);
    }

}
async function asyncRequest(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        let newMain = [];
        for (const key in data) {
            const recipe = data[key];
            console.log(recipe);
            let divh2 = document.createElement('h2');
            divh2.textContent = recipe.name;

            let divTitle = document.createElement('div');
            divTitle.classList = "title";
            divTitle.appendChild(divh2);

            let divimg = document.createElement('img');
            divimg.src = recipe.img


            let divsmall = document.createElement('small');
            divsmall.classList = "small";
            divsmall.appendChild(divimg);

            let article = document.createElement('article');
            article.classList = "preview";
            article.id = recipe._id
            article.addEventListener('click', details)
            article.appendChild(divTitle);
            article.appendChild(divsmall);

            newMain.push(article);
        }
        return newMain
    }
    catch (error) {
        console.log(error.message)
    }
}

async function details (event) {
    let detailsUrl = `http://localhost:3030/jsonstore/cookbook/details/${event.target.id}`;
    let details = await asyncDetailsRequest(detailsUrl);
}

async function asyncDetailsRequest(detailsUrl) {
    try {
        const response = await fetch(detailsUrl);

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        
        return data
    }
    catch (error) {
        console.log(error.message)
    }
}