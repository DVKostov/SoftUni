function attachEvents() {
    document.getElementById('refresh').addEventListener('click', refresh);
    document.getElementById('submit').addEventListener('click', submit);
}

const url = 'http://localhost:3030/jsonstore/messenger'
const messagesTextAreaElement = document.getElementById('messages');
const authorElement = document.getElementsByName('author')[0];
const messagesElement = document.getElementsByName('content')[0];

attachEvents();

async function submit() {
    author = authorElement.value;
    content = messagesElement.value
    if (author !== '' && content !== '') {
        await post(author, content);
        authorElement.value = '';
        messagesElement.value = '';
        refresh();
    }
}

async function refresh() {
    let result = await get();
    messagesTextAreaElement.textContent = '';
    Object.entries(result).map(addToMessagesTextArea);
}

function addToMessagesTextArea(e) {
    messagesTextAreaElement.textContent += `\n ${e[1].author}: ${e[1].content}`;
}

async function get() {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data

}

async function post(author, content) {

    let body = {
        author: author,
        content: content,
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