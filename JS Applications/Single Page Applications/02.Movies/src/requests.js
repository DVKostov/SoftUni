export {
    getMovie,
    postMovie,
    putMovie,
    deleteMovie,
    getNumberOfLikesMovie,
    getNumberOfLikesMovieUser,
    addLike,
    revokeLike
}

async function getMovie(id) {
    let url = 'http://localhost:3030/data/movies'
    if (id) {
        url += `/${id}`
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function postMovie(body) {
    const url = `http://localhost:3030/data/movies`

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(localStorage.userData).token
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function putMovie(id, body) {
    const url = `http://localhost:3030/data/movies/${id}`

    const response = await fetch(url, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(localStorage.userData).token
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function deleteMovie(id) {
    const url = `http://localhost:3030/data/movies/${id}`

    const response = await fetch(url, {
        method: 'delete',
        headers: {
            'X-Authorization': JSON.parse(localStorage.userData).token
        },
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

//Get number of likes for a movie

async function getNumberOfLikesMovie(id) {
    const url = `http://localhost:3030/data/like?where=movieId%3D%22${id}%22&distinct=_ownerId&coun`

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

//Get like for a movie from specific user

async function getNumberOfLikesMovieUser(id, userId) {
    const url = `http://localhost:3030/data/like?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%2`

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function addLike(body) {
    const url = `http://localhost:3030/data/like`

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(localStorage.userData).token
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}

async function revokeLike(id) {
    const url = `http://localhost:3030/data/likes/${id}`

    const response = await fetch(url, {
        method: 'delete',
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}