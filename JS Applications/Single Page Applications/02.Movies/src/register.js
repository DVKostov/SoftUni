import { pages, showPage } from './pages.js'
import { navItems, switchNavigation } from './navigation.js'

const form = pages['registerPage'].querySelector('form');

form.addEventListener('submit', submit);

async function submit(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if (!email || !password || !repeatPassword) {
        alert('All fields are required!');
        return;
    }

    if (password !== repeatPassword) {
        alert('Password dosn`t mutch!');
        return;
    }
    try {

        const url = `http://localhost:3030/users/register`
        let request = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!request.ok) {
            let error = await request.json();
            throw new Error(error.message) 
        }

        let response = await request.json();

        localStorage.userData = JSON.stringify({
            email: response.email,
            id: response._id,
            token: response.accessToken
        })
        navItems['welcome'].innerHTML = `Welcome, ${email}`;
        switchNavigation();
        showPage('homePage');
        
    } catch (err){
        alert(err.message);
    }
    form.reset();
}