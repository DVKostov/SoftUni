function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    btnLoadPosts.addEventListener('click', loadPosts);
    let btnViewPost = document.getElementById('btnViewPost');
    btnViewPost.addEventListener('click', viewPost);
}

attachEvents();

async function loadPosts() {
    let selectPosts = document.getElementById('posts');
    let posts = await asyncRequest('http://localhost:3030/jsonstore/blog/posts');
    selectPosts.innerHTML = ''
    for (const post in posts) {
        let option = document.createElement('option');
        option.value = posts[post].id;
        option.textContent = posts[post].title;
        selectPosts.appendChild(option);
    }
}

async function viewPost() {
    let selectPosts = document.getElementById('posts');
    let selectedPostId = selectPosts.children[selectPosts.selectedIndex].value;
    let post = await asyncRequest(`http://localhost:3030/jsonstore/blog/posts/${selectedPostId}`);
    let comments = await asyncRequest('http://localhost:3030/jsonstore/blog/comments');
    let filterComments = [];
    for (const comment in comments) {
        if (comments[comment].postId == selectedPostId) {
            filterComments.push(comments[comment]);
        }
    }
    let postTitle = document.getElementById('post-title');
    postTitle.textContent = post.title;
    let postBody = document.getElementById('post-body');
    postBody.textContent = post.body;

    let postComments = document.getElementById('post-comments');
    postComments.innerHTML = '';

    for (const comment of filterComments) {
        let commentLi = document.createElement('li');
        commentLi.id = comment.id;
        commentLi.textContent = comment.text;
        postComments.appendChild(commentLi);
    }
}

async function asyncRequest(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data
    }
    catch (error) {
        return error
    }
}