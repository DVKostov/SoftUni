export function createMovieCard(movie) {
    let newElement = document.createElement('div');
    newElement.className = 'card mb-4';
    newElement.dataset._id = movie._id
    newElement.dataset._ownerId = movie._ownerId

    newElement.innerHTML = `<img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
<div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
    <a href="#/details/6lOxMFSMkML09wux6sAF">
        <button type="button" class="btn btn-info">Details</button>
    </a>
</div>`

    return newElement
}