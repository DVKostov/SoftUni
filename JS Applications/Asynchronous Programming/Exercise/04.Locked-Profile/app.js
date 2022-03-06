function lockedProfile() {
    load()
}

async function load() {
    let main = document.getElementById('main')
    let profile = main.children[0].cloneNode(true);
    let profiles = await (asyncRequest(`http://localhost:3030/jsonstore/advanced/profiles`))
    if (profiles) {
        main.innerHTML = '';
    }

    for (const record in profiles) {
        let currentProfile = profile.cloneNode(true);
        currentProfile.children[2].setAttribute("name",record)
        currentProfile.children[4].setAttribute("name",record)
        currentProfile.children[8].value = profiles[record].username;
        currentProfile.children[9].children[2].value = profiles[record].email;
        currentProfile.children[9].children[4].value = profiles[record].age;
        currentProfile.children[10].addEventListener('click', showHide);
        main.appendChild(currentProfile);
    }
}

function showHide (event) {
    target = event.target;

    if (target.parentElement.children[4].checked) {
        if (target.textContent == 'Show more') {
            target.textContent = 'Hide it';
            target.parentElement.children[9].className = ''
        } else {
            target.textContent = 'Show more';
            target.parentElement.children[9].className = 'hiddenInfo'
        }
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











