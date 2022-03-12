let ul = document.getElementById('phonebook');
let person = document.getElementById('person');
let phone = document.getElementById('phone');


function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    btnLoad.addEventListener('click', load);

    let btnCreate = document.getElementById('btnCreate');
    btnCreate.addEventListener('click', create);

}

attachEvents();

async function load() {
    try {
        let phonebook = await fetch('http://localhost:3030/jsonstore/phonebook');
        if (phonebook.ok == false) {
            throw new Error(`${phonebook.status} ${phonebook.statusText}`)
        }
        phonebook = await phonebook.json();
        ul.innerHTML = '';
        for (const [key, value] of Object.entries(phonebook)) {

            let li = document.createElement('li');
            li.textContent = `${value.person}: ${value.phone}`

            let deleteBtn = document.createElement('button');
            deleteBtn.id = key;
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteContact)

            li.appendChild(deleteBtn);
            ul.appendChild(li);
        }
    } catch (error) {
        alert(error);
    }
}

async function deleteContact(event) {

    try {
        let deleteContact = await fetch('http://localhost:3030/jsonstore/phonebook/' + event.target.id, { method: 'delete' });
        if (deleteContact.ok == false) {
            throw new Error(`${deleteContact.status} ${deleteContact.statusText}`)
        }
        load();
    } catch (error) {
        alert(error);
    }
}

async function create() {

    if (person.value && phone.value) {
        try {
            const data = {
                'person': person.value,
                'phone': phone.value
            }

            let deleteContact = await fetch('http://localhost:3030/jsonstore/phonebook/', { 
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (deleteContact.ok == false) {
                throw new Error(`${deleteContact.status} ${deleteContact.statusText}`)
            }
            person.value = '';
            phone.value = '';
            load();
        } catch (error) {
            alert(error);
        } 
    }

}