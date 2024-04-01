let url = `https://api.github.com/repos/${username}/${repo}/commits`

function request() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(handleResponse)
        .catch(handleError)

    function handleResponse(data) {
        console.log(data);
    }

    function handleError(error) {
        console.log(error.message);
    }
}

async function asyncRequest(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data
    }
    catch (error) {
        return error
    }
}

async function promiseAllRequest() {
    const [v1, v2, v3] = await Promise.all([
        fetch(v1),
        fetch(v2),
        fetch(v3)
    ])
}