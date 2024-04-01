function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', refresh);
    document.getElementById('btnCreate').addEventListener('click', create);
}

attachEvents();
const url = 'http://localhost:3030/jsonstore/phonebook';
const phonebook = document.getElementById('phonebook');
const personElement = document.getElementById('person');
const phoneElement = document.getElementById('phone');

async function create() {
    let person = personElement.value
    let phone = phoneElement.value
    if (person !== '' && phone !== '') {
        personElement.value = '';
        phoneElement.value = '';
        await post(person, phone);
        refresh();
    }
}

async function refresh() {
    let response = await get();
    phonebook.innerHTML = '';
    Object.entries(response).map(addItem);

}

function addItem(e) {
    let newElement = document.createElement("li");
    newElement.innerText = `${e[1].person}: ${e[1].phone}`;
    
    let button = document.createElement("button");
    button.textContent = 'Delete'
    button.id = e[0];
    button.addEventListener('click', deleteRow)

    newElement.appendChild(button);
    phonebook.appendChild(newElement);
}

async function deleteRow(event) {
    await deleteRecord(event.target.id);
    refresh();
}


async function get() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function post(person, phone) {
    let body = {
        person: person,
        phone: phone,
    }
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

async function deleteRecord(id) {
    let deleteUrl = url + '/' + id
    const response = await fetch(deleteUrl, {
        method: 'delete',
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}