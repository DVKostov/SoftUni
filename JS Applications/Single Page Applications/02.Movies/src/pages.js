export const pages = {
    'homePage': document.getElementById('home-page'),
    'addMoviePage': document.getElementById('add-movie'),
    'movieDetailsPage': document.getElementById('movie-details'),
    'editMoviePage': document.getElementById('edit-movie'),
    'loginPage': document.getElementById('form-login'),
    'registerPage': document.getElementById('form-sign-up')
}

export function showPage(page) {
    Object.values(pages).forEach(e => e.style.display = 'none')
    pages[page].style.display = 'block'
}