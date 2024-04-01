import { html, render } from '../node_modules/lit-html/lit-html.js'

var loadBtn = document.getElementById('btnLoadTowns');
loadBtn.addEventListener('click', onLoad);
var townsInput = document.getElementById('towns');
var root = document.getElementById('root');

function onLoad(event) {
    event.preventDefault();
    var towns = townsInput.value.split(', ');
    var result = template(towns);

    render(result, root);
}

const template = (towns) => html`
    <ul>${towns.map(t => html`<li>${t}</li>`)}</ul>`;