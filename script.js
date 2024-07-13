const form = document.querySelector('#form');
const firstname = document.querySelector('#Firstname');
const lastname = document.querySelector('#Lastname');
const email = document.querySelector('#email');
const address = document.querySelector('#Address');
const pinCode = document.querySelector('#PinCode');
const gender = document.querySelector('#Gender');
const choiceOfFood = document.querySelector('#ChoiceOfFood');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const addressVal = address.value.trim();
    const pinCodeVal = pinCode.value.trim();
    const genderVal = gender.value.trim();
    const choiceOfFoodVal = choiceOfFood.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    if (firstnameVal === '') {
        setError(firstname, 'Firstname is required');
    } else {
        setSuccess(firstname);
    }

    if (lastnameVal === '') {
        setError(lastname, 'Lastname is required');
    } else {
        setSuccess(lastname);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (addressVal === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if (pinCodeVal === '') {
        setError(pinCode, 'Pin Code is required');
    } else {
        setSuccess(pinCode);
    }

    if (genderVal === '') {
        setError(gender, 'Gender is required');
    } else {
        setSuccess(gender);
    }

    if (choiceOfFoodVal === '') {
        setError(choiceOfFood, 'Choice of Food is required');
    } else {
        setSuccess(choiceOfFood);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (confirmPasswordVal === '') {
        setError(confirmPassword, 'Confirm Password is required');
    } else if (confirmPasswordVal !== passwordVal) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
}
