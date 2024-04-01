import { pages, showPage } from './pages.js'
import { navItems, switchNavigation } from './navigation.js'
import * as requests from './requests.js'
import {loadMovie} from './movieDetails.js'
import {loadMovies} from './home.js'

const form = pages['editMoviePage'].querySelector('form');
const titleInput = form.getElementsByTagName('input')[0];
const descriptionInput = pages['editMoviePage'].querySelector('textarea');
const imageUrlInput = form.getElementsByTagName('input')[1];

let id

form.addEventListener('submit', submit);

export function loadEditMovie(title, img, description, movieId) {
    titleInput.value = title;
    descriptionInput.value = description;
    imageUrlInput.value = img;
    id = movieId
}

async function submit(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageUrl');

    if (!title || !description || !img) {
        alert('All fields are required!');
        return;
    }

    try {
        await requests.putMovie(id, {title, description, img});
        switchNavigation();
        showPage('movieDetailsPage');
        loadMovie(id);
        loadMovies();

    } catch (error) {
        alert(error.message);
    }
    form.reset();
}