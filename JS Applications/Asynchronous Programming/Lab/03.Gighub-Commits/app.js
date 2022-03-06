function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ul = document.getElementById('commits');
    ul.textContent = ''

    let url = `https://api.github.com/repos/${username}/${repo}/commits`
    request(url);
    async function request(url) {
        try {
            const response = await fetch(url);

            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            for (const commit of data) {
                let li = document.createElement('li');
                li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                ul.appendChild(li);
            }
        }
        catch (error) {
            let li = document.createElement('li');
            li.textContent = `Error: ${error.message}`;
            ul.appendChild(li);
        }
    }


}


