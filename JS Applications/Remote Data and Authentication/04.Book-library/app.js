document.getElementById('loadBooks').addEventListener('click', getBooks);
const url = 'http://localhost:3030/jsonstore/collections/books'
const tableBody = document.querySelector('tbody');
const form = document.querySelector('form');
form.addEventListener('submit', submit)

async function submit() {
    event.preventDefault();
    let formData = new FormData (event.target);
    let data = {
        'author': formData.get('author'),
        'title': formData.get('title')
    }
    if (data.author !== '' && data.title !== '') {
        await post(data);
        getBooks();
        form.reset();
    }
}

async function getBooks() {
    let books = await get();
    tableBody.innerHTML = '';
    Object.entries(books).map(addBook)
}

function addBook(book) {

    let newElement = document.createElement("tr");
    newElement.innerHTML = `<tr>
    <td>${book[1].title}</td>
    <td>${book[1].author}</td>
    <td>
        <button id=${book[0]} onclick="editBook(event)">Edit</button>
        <button id=${book[0]} onclick="deleteBook(event)">Delete</button>
    </td>
</tr>`

    tableBody.appendChild(newElement);

}

async function editBook(event) {
    form.reset();
    form.id = event.target.id;
    let data = await get(event.target.id)

    document.getElementsByName('title')[0].value = data.title
    document.getElementsByName('author')[0].value = data.author
}

async function deleteBook(event) {
    await deleteRecord(event.target.id);
    getBooks();
}

async function post(body) {

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


async function get(id) {
    let getUrl = url
    if (id) {
        getUrl += `/${id}`
    }
    const response = await fetch(getUrl);
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