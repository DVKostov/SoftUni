let tbody = document.getElementsByTagName('tbody')[0]

function attachEvents() {
    load();
    let formElement = document.getElementById('form');
    formElement.addEventListener('submit', submit);

}

attachEvents();

async function load() {
    try {
        let students = await fetch('http://localhost:3030/jsonstore/collections/students');
        if (students.ok == false) {
            throw new Error(`${students.status} ${students.statusText}`)
        }
        students = await students.json();

        tbody.innerHTML = '';
        for (const [key, value] of Object.entries(students)) {
            let tr = document.createElement('tr');
            tr.id = key;

            for (const [key1, value1] of Object.entries(value)) {
                if (key1 != '_id') {
                    let td = document.createElement('td');
                    td.textContent = value1;
                    tr.appendChild(td);
                }
            }

            tbody.appendChild(tr);

        }
    } catch (error) {
        alert(error);
    }
}

async function submit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        'firstName': formData.get('firstName'),
        'lastName': formData.get('lastName'),
        'facultyNumber': formData.get('facultyNumber'),
        'grade': formData.get('grade')
    }

    if (data.firstName && data.lastName && data.facultyNumber && data.grade) {
        try {

            const post = await fetch('http://localhost:3030/jsonstore/collections/students', {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            form.reset();
            load();

        } catch (error) {
            alert(error)
        }
    }



}