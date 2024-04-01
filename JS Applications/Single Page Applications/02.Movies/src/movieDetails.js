import * as requests from './requests.js'
import { pages, showPage } from './pages.js'
import { loadEditMovie } from './editMovie.js'
import { switchNavigation } from './navigation.js'
import { loadMovies } from './home.js'

const title = pages['movieDetailsPage'].getElementsByTagName('h1')[0];
const img = pages['movieDetailsPage'].getElementsByTagName('img')[0];
const description = pages['movieDetailsPage'].getElementsByTagName('p')[0];
const likes = pages['movieDetailsPage'].getElementsByClassName('enrolled-span')[0]

const deleteButton = pages['movieDetailsPage'].getElementsByClassName('btn btn-danger')[0];
const editButton = pages['movieDetailsPage'].getElementsByClassName('btn btn-warning')[0];
const likeButton = pages['movieDetailsPage'].getElementsByClassName('btn btn-primary')[0];

deleteButton.addEventListener('click', deleteMovie);
editButton.addEventListener('click', editMovie);
likeButton.addEventListener('click', likeMovie);

let id

export async function loadMovie(movieId) {
    try {
        let movie = await requests.getMovie(movieId);
        title.innerText = 'Movie title: ' + movie.title;
        img.src = movie.img;
        description.innerText = movie.description;
        id = movieId

        let userData = localStorage.userData
        if (userData) {
            if (movie._ownerId === JSON.parse(localStorage.userData).id) {
                deleteButton.style.display = '';
                editButton.style.display = '';
                likeButton.style.display = 'none';
            } else {
                deleteButton.style.display = 'none';
                editButton.style.display = 'none';
                likeButton.style.display = '';
            }
        } else {
            deleteButton.style.display = 'none';
            editButton.style.display = 'none';
            likeButton.style.display = 'none';
        }
    } catch (error) {
        switchNavigation();
        showPage('homePage');
        alert(error.message);
    }

    refreshCounter();
}

async function deleteMovie() {
    try {
        await requests.deleteMovie(id);
        switchNavigation();
        showPage('homePage');
        loadMovies();

    } catch (error) {
        alert(error.message)
    }
}
function editMovie() {
    showPage('editMoviePage');
    loadEditMovie(title.innerText, img.src, description.innerText, id);

}
async function likeMovie() {
    await requests.addLike({'movieId': id})
    refreshCounter()
}

async function refreshCounter() {
    let response = await requests.getNumberOfLikesMovie(id);
    likes.textContent = `Liked ${response.length}`
}