const usersUrl = 'http:localhost:3030/users/'

const registerView = document.getElementById('register-view');
const loginView = document.getElementById('login-view');
const homeView = document.getElementById('home-view');

registerView.style.display = 'none';
loginView.style.display = 'none';

const navigation = document.getElementsByTagName('nav')[0];
navigation.addEventListener('click', navigationClick)

function navigationClick(event) {
    switch (event.target.id) {
        case 'home':
            homeView.style.display = 'block';
            registerView.style.display = 'none';
            loginView.style.display = 'none';
            break;
        case 'register':
            homeView.style.display = 'none';
            registerView.style.display = 'flex';
            loginView.style.display = 'none';
            break;
        case 'logout':

            break;
        case 'login':
            homeView.style.display = 'none';
            registerView.style.display = 'none';
            loginView.style.display = 'flex';
            break;
        default:
            break;
    }
}

async function requestUsers(body, method, operation) {
    let requestUrl = usersUrl + operation
    let options = {};
    if (method) { options = { method: method } }
    if (body) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(body);
    }
    const response = await fetch(requestUrl, options);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data
}