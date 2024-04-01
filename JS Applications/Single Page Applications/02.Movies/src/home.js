import * as requests from './requests.js'
import {createMovieCard} from './dom.js'
import { showPage } from './pages.js'
import { loadMovie } from './movieDetails.js'

const movieContainer = document.getElementsByClassName('card-deck d-flex justify-content-center')[0];
export const addMovieButton = document.getElementById('add-movie-button');
addMovieButton.addEventListener('click', addMovie);
movieContainer.addEventListener('click', details);

loadMovies();

export async function loadMovies() {
    let movies = await requests.getMovie();
    movieContainer.replaceChildren(...Object.values(movies).map(createMovieCard))
}

function addMovie() {
    showPage('addMoviePage')
}

function details(event) {
    if (event.target.classList.value === 'btn btn-info') {
        let movieId = event.target.parentElement.parentElement.parentElement.dataset._id;
        showPage('movieDetailsPage');
        loadMovie(movieId);
    }
}