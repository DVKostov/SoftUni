import { html, render } from '../node_modules/lit-html/lit-html.js'

var selectMenu = document.getElementById('menu');
var url = 'http://localhost:3030/jsonstore/advanced/dropdown'
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', addItem)
async function onLoad() {
    let result = await getOptions();
    let data = []
    for (const key in result) {
        data.push(result[key])
    }
    render(data.map(optionTemplate), selectMenu)
}

onLoad();

async function addItem(event) {
    event.preventDefault();
    var formData = new FormData(form);
    var itemText = formData.get('itemText');
    if (!itemText) {
        alert('All fields are required!');
        return
    }

    try {
        await postOption({"text": itemText});
        onLoad();
    } catch (error) {
        alert(error.message);
    }
    form.reset();
}

const optionTemplate = (option) => html`
<option value="${option._id}">${option.text}</option>
`

async function postOption(body) {

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function getOptions() {

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}