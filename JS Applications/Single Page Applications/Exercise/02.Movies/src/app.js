import {showHome} from "/src/home.js"
import {showSignUp} from "/src/signUp.js"
import {showEdit} from "/src/edit.js"
import {showDetiles} from "/src/details.js"
import {showAddMovie} from "/src/addMovie.js"
import {showLogin} from "/src/login.js"

const views = {
    'showHome': showHome,
    'showSignUp': showSignUp,
    'showEdit': showEdit,
    'showDetiles': showDetiles,
    'showAddMovie': showAddMovie,
    'showLogin': showLogin
}


showHome();