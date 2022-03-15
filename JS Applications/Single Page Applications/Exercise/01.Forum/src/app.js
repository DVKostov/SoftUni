import { submit } from './post.js'
import { loadPosts } from './load.js'

let postView = document.querySelector('main')[0];

let postForm = document.querySelector('form');
postForm.addEventListener('submit', submit);
loadPosts();

