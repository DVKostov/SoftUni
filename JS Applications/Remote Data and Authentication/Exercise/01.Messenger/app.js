let textArea = document.getElementById('messages');
let author = document.getElementsByName('author')[0];
let content = document.getElementsByName('content')[0];

function attachEvents() {
    refreshBtn = document.getElementById('refresh');
    submitBtn = document.getElementById('submit');

    refreshBtn.addEventListener('click', refresh);
    submitBtn.addEventListener('click', submit);
}

attachEvents();

async function refresh() {
    try {
        let messages = await fetch('http://localhost:3030/jsonstore/messenger');
        if (messages.ok == false) {
            throw new Error(`${messages.status} ${messages.statusText}`)
        }
        messages = await messages.json();
        textArea.value = '';
        for (const [key, value] of Object.entries(messages)) {
            textArea.value += `${value.author}: ${value.content}\n`
        }
    } catch (error) {
        alert(error);
    }
}

async function submit() {

    if (author.value && content.value) {
        try {

            let message = await fetch('http://localhost:3030/jsonstore/messenger', {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ 'author': author.value, 'content': content.value })
            });
            if (message.ok == false) {
                throw new Error(`${message.status} ${message.statusText}`);
            }
            author.value = '';
            content.value = '';
            refresh();

        } catch (error) {
            alert(error);
        }
    }
}