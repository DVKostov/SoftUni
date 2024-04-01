import { cats } from './catSeeder.js'
import { html, render } from '../node_modules/lit-html/lit-html.js'

var allCats = document.getElementById('allCats');
allCats.addEventListener('click', showBtn);

function showBtn(event) {
    if (event.target.className === 'showBtn') {
        if (event.target.textContent === 'Show status code') {
            event.target.parentElement.getElementsByClassName('status')[0].style.display = 'block';
            event.target.textContent = 'Hide status code';
        } else {
            event.target.parentElement.getElementsByClassName('status')[0].style.display = 'none';
            event.target.textContent = 'Show status code';
        }
    }
}

const allCatstemplate = (catstemplates) => html`
<ul>
    ${catstemplates}
</ul>`


function catTemplate(cat) {
    var src = `./images/${cat.imageLocation}.jpg`

    return html`
    <li>
        <img src=${src} width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`
}

onLoad();

function onLoad() {
    var catstemplates = [];

    for (const cat of cats) {
        catstemplates.push(catTemplate(cat))
    };

    render(allCatstemplate(catstemplates), allCats);
}


