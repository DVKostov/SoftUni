function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submit);

    let userNameInput = document.getElementById('username');
    let userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    

    let emailInput = document.getElementById('email');
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    
    let passwordInput = document.getElementById('password');
    let passwordPattern = /^[\w]{5,15}$/;
    
    let confirmPasswordInput = document.getElementById('confirm-password');

    let companyCheckBox = document.getElementById('company');
    companyCheckBox.addEventListener('click', checkCompany);
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');

    let validDiv = document.getElementById('valid');

    
    


    function submit(event) {
        event.preventDefault();

        let valid = true;

        if (userNamePattern.test(userNameInput.value)) {
            userNameInput.style.border = '';
        } else {
            userNameInput.style.borderColor = 'red';
            valid = false;
        }

        if (emailPattern.test(emailInput.value)) {
            emailInput.style.border = '';
        } else {
            emailInput.style.borderColor = 'red';
            valid = false;
        }

        if (passwordPattern.test(passwordInput.value) && passwordInput.value === confirmPasswordInput.value) {
            passwordInput.style.border = '';
            confirmPasswordInput.style.border = '';
        } else {
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            valid = false;
        }


        if(companyCheckBox.checked) {
            if(companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = '';
            } else {
                companyNumber.style.borderColor = 'red';
                valid = false;
            }
        }

        if (valid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
        
    }

    function checkCompany(event) {
        //event.preventDefault();
        if (event.target.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

}
