reftersh();
const phonebook = document.getElementById('phonebook');
const tableBody = document.getElementById('results').querySelector('tbody');
const form = document.getElementById('form');
form.addEventListener('submit', submit);

async function submit(event) {
    event.preventDefault();
    let formData = new FormData (event.target);
    let data = {
        "firstName": formData.get('firstName'),
        "lastName": formData.get('lastName'),
        "facultyNumber": formData.get('facultyNumber'),
        "grade": formData.get('grade')
    }
    if (data.firstName !== '' && data.lastName !== '' && data.facultyNumber !== '' && data.grade !== '') {
        await post(data);
        reftersh();
        form.reset();
    }
}

async function reftersh(){
    let response = await get();
    tableBody.innerHTML = '';
    Object.entries(response).map(addItem);
}

function addItem(e) {
    let newElement = document.createElement("tr");
    newElement.innerHTML = `<td>${e[1].firstName}</td>
    <td>${e[1].lastName}</td>
    <td>${e[1].facultyNumber}</td>
    <td>${e[1].grade}</td>`
    tableBody.appendChild(newElement);
}

async function get() {
    const url = 'http://localhost:3030/jsonstore/collections/students'
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function post(body) {
    
    const url = 'http://localhost:3030/jsonstore/collections/students';

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