export async function loadPosts() {
    try {
        let topics = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        if (topics.ok == false) {
            throw new Error(`${topics.status} ${topics.statusText}`)
        }
        topics = await topics.json();

        let topicContainer = document.getElementsByClassName('topic-container')[0];
        topicContainer.innerHTML = '';
        for (const topic in topics) {
            topicContainer.innerHTML += createPost(topics[topic])
        }

    } catch (error) {
        alert(error);
    }
}

function createPost(topic) {
    return `<div class="topic-name" id="${topic._id}">
    <a href="#" class="normal">
        <h2>${topic.topicName}</h2>
    </a>
    <div class="columns">
        <div>
            <p>Date: <time>${topic.date}</time></p>
            <div class="nick-name">
                <p>Username: <span>${topic.username}</span></p>
            </div>
        </div>


    </div>
</div>`
}