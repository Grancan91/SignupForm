const button = document.querySelector('.submit');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstNameIcon = document.getElementById('firstName-icon');
const lastNameIcon = document.getElementById('lastName-icon');
const emailIcon = document.getElementById('email-icon');
const passwordIcon = document.getElementById('password-icon');
const msgFirstName= document.getElementById('msg-firstName');
const msgLastName = document.getElementById('msg-lastName');
const msgEmail = document.getElementById('msg-email');
const msgPassword = document.getElementById('msg-password');

button.addEventListener('click', function () {

    console.log(validateFirstName())
    console.log(validateLastName())
    console.log(validateEmail())
    console.log(validatePassword())
    console.log(user)
});

    const user = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

const validateFirstName = () => {
    if(firstName.value === ''){
        firstName.classList.add('error-input');
        firstNameIcon.classList.add('icon');
        msgFirstName.classList.remove('off')
        return false
    } else {
        user.firstName = firstName.value
        return true
    }
}

const validateLastName = () => {
    if (lastName.value === '') {
        lastName.classList.add('error-input');
        lastNameIcon.classList.add('icon');
        msgLastName.classList.remove('off')
        return false
    } else {
        user.lastName = lastName.value
        return true
    }
}

const validateEmail  = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email.value)){
        user.email = email.value
        return true
    } else {
        email.classList.add('error-input');
        emailIcon.classList.add('icon');
        msgEmail.classList.remove('off')
        return false
    }
}

const validatePassword = () => {
    if (password.value === '') {
        password.classList.add('error-input');
        passwordIcon.classList.add('icon');
        msgPassword.classList.remove('off')
        return false
    } else {
        user.password = password.value
        return true
    }
}

const validate = () => {
    if(validateFirstName){

    }
}