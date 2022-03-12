let tbody = document.getElementsByTagName('tbody')[0]
let h3 = document.getElementsByTagName('form')[0].children[0]
let formElement = document.getElementsByTagName('form')[0];
attachEvents();
load();
function attachEvents() {

    formElement.addEventListener('submit', submit);
    let loadBooksBtn = document.getElementById('loadBooks');
    loadBooksBtn.addEventListener('click', load);

}

async function load() {
    try {
        let books = await fetch('http://localhost:3030/jsonstore/collections/books');
        if (books.ok == false) {
            throw new Error(`${books.status} ${books.statusText}`)
        }
        books = await books.json();

        tbody.innerHTML = '';
        for (const [key, value] of Object.entries(books)) {
            let tr = document.createElement('tr');
            tr.id = key;

            for (const [key1, value1] of Object.entries(value)) {
                if (key1 != '_id') {
                    let td = document.createElement('td');
                    td.textContent = value1;
                    tr.appendChild(td);
                }
            }

            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', editBook)


            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteBook)

            let td = document.createElement('td');

            td.appendChild(editBtn);
            td.appendChild(deleteBtn);
            tr.appendChild(td);

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
        'title': formData.get('title'),
        'author': formData.get('author')
    }

    if (data.title && data.author) {
        try {
            let method = 'post';
            let url = 'http://localhost:3030/jsonstore/collections/books'
            if (h3.textContent == 'Edit FORM') {
                method = 'put';
                url = 'http://localhost:3030/jsonstore/collections/books/' + form.id
            }

            const post = await fetch(url, {
                method: method,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            form.reset();
            formElement.id = '';
            h3.textContent = 'FORM';
            load();

        } catch (error) {
            alert(error)
        }
    }
}


function editBook(event) {
    formElement.reset();
    formElement.id = event.target.parentElement.parentElement.id;
    h3.textContent = 'Edit FORM';
    formElement['title'].value = event.target.parentElement.parentElement.children[0].textContent
    formElement['author'].value = event.target.parentElement.parentElement.children[1].textContent

}
async function deleteBook(event) {

    const deleteBook = await fetch('http://localhost:3030/jsonstore/collections/books/' + event.target.parentElement.parentElement.id, {
        method: 'delete',
        headers: { 'Content-type': 'application/json' }
    });
    load();

}