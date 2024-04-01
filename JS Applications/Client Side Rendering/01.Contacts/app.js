import { html, render } from './node_modules/lit-html/lit-html.js'
import { contacts } from './contacts.js'

var page = document.getElementById('contacts');
page.addEventListener('click', details)

const template = (data) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${data.name}</h2>
            <button class="detailsBtn">Details</button>
            <div class="details" id="${data.id}">
                <p>Phone number: ${data.phoneNumber}</p>
                <p>Email: email</p>
            </div>
        </div>
    </div>
    `;

start();

function start() {
    var result = contacts.map(template);
    render(result, page);
}

function details(event) {
    event.preventDefault();
    if (event.target.className === 'detailsBtn') {
        var details = event.target.parentElement.getElementsByClassName('details')[0];
        if (details.style.display === '') {
            details.style.display = 'block'
        } else {
            details.style.display = ''
        }
        
    }
}