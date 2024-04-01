import { pages, showPage } from './pages.js'
import { switchNavigation } from './navigation.js'
import * as requests from './requests.js'
import { loadMovies } from './home.js'

const form = pages['addMoviePage'].querySelector('form');
form.addEventListener('submit', submit);

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
        await requests.postMovie({title, description, img});
        switchNavigation();
        showPage('homePage');
        loadMovies();

    } catch (error) {
        alert(error.message);
    }
    form.reset();
}