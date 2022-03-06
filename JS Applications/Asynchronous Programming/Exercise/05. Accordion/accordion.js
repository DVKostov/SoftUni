window.onload = solution();

async function solution() {
    let main = document.getElementById('main');
    let articles = await asyncRequest(`http://localhost:3030/jsonstore/advanced/articles/list`);
    let mapped = articles.map(article => createArticle(article));
    main.innerHTML = '';
    for (const article of mapped) {
        main.appendChild(article)
    }
}

function createArticle(article) {

    let accordion = document.createElement('div');
    accordion.classList = "accordion";

    let head = document.createElement('div');
    head.classList = "head";
    accordion.appendChild(head)

    let extra = document.createElement('div');
    extra.classList = "extra";
    accordion.appendChild(extra)

    let span = document.createElement('span');
    span.textContent = article.title;
    head.appendChild(span);

    let button = document.createElement('button');
    button.classList = 'button';
    button.id = article._id;
    button.textContent = 'More';
    button.addEventListener('click', click)
    head.appendChild(button);

    return accordion
}

async function click(event) {
    let target = event.target;
    let extra = target.parentElement.parentElement.children[1];
    if (target.textContent == 'More') {
        target.textContent = 'Less'
        let details = await asyncRequest(`http://localhost:3030/jsonstore/advanced/articles/details/${target.id}`);
        extra.textContent = details.content;
        extra.className = '';
    } else {
        target.textContent = 'More'
        extra.textContent = '';
        extra.className = 'extra';
    }

}

async function asyncRequest(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data
    }
    catch (error) {
        return error
    }
}
