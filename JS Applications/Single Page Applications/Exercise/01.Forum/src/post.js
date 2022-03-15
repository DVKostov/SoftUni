import { loadPosts } from './load.js'

export async function submit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        'topicName': formData.get('topicName'),
        'username': formData.get('username'),
        'postText': formData.get('postText'),
        'date': new Date()
    }
    if (event.submitter.textContent == 'Post') {
        if (data.topicName && data.username && data.postText) {
            try {

                const post = await fetch('http://localhost:3030/sonstore/collections/myboard/posts', {
                    method: 'post',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (post.ok != true) {
                    const error = post.json();
                    throw new Error(error.message);
                }
                form.reset();
                loadPosts();
                
            } catch (error) {
                alert(error)
            }
        }
    } else {
        form.reset();
    }
}