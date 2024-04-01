import { showPage } from './pages.js'
import { addMovieButton } from './home.js'

const navigation = document.getElementsByTagName('nav')[0];

navigation.addEventListener('click', navigate);

function navigate(event) {

    if (event.target.id) {
        event.preventDefault();
        if (event.target.id === 'logout') {
            logout();
        } else {
            showPage(event.target.id);
        }
    }
}


async function logout() {
    const url = `http://localhost:3030/users/logout`
    await fetch(url, {
        headers: {
            'X-Authorization': JSON.parse(localStorage.userData).token
        }
    });
    delete localStorage.userData;
    showPage('loginPage');
    switchNavigation();
}

export const navItems = {
    'welcome': document.getElementById('welcome'),
    'logout': document.getElementById('logout'),
    'loginPage': document.getElementById('loginPage'),
    'registerPage': document.getElementById('registerPage')
}



export function switchNavigation() {
    let userData = localStorage.userData
    if (userData) {
        navItems['welcome'].style.display = 'block';
        navItems['logout'].style.display = 'block';
        navItems['loginPage'].style.display = 'none';
        navItems['registerPage'].style.display = 'none';
        addMovieButton.style.display = 'block';
    } else {
        navItems['welcome'].style.display = 'none';
        navItems['logout'].style.display = 'none';
        navItems['loginPage'].style.display = 'block';
        navItems['registerPage'].style.display = 'block';
        addMovieButton.style.display = 'none';
    }
}