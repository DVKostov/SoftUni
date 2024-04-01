import { pages, showPage } from './pages.js'
import { navItems, switchNavigation } from './navigation.js'

const form = pages['loginPage'].querySelector('form');

form.addEventListener('submit', submit);


async function submit(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    if (!email || !password) {
        alert('All fields are required!');
        return;
    }

    try {

        const url = `http://localhost:3030/users/login`
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