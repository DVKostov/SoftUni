function validPassword(password) {
    let isValide = true;
    let digits = 0;
    if (password.length < 6 || password.length > 10) {
        isValide = false;
        console.log('Password must be between 6 and 10 characters');
    }
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) < 48 || password.charCodeAt(index) > 122) {
            isValide = false;
            console.log('Password must consist only of letters and digits');
            break;
        }
        if (password.charCodeAt(index) > 57 && password.charCodeAt(index) < 65) {
            isValide = false;
            console.log('Password must consist only of letters and digits');
            break;
        }
        if (password.charCodeAt(index) > 90 && password.charCodeAt(index) < 97) {
            isValide = false;
            console.log('Password must consist only of letters and digits');
            break;
        }

    }
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) > 47 && password.charCodeAt(index) < 58) {
            digits++
        }
    }
    if (digits < 2) {
        isValide = false;
        console.log('Password must have at least 2 digits');
    }
    if (isValide) {
        console.log('Password is valid');
    }
}
validPassword('Pa$s$s')