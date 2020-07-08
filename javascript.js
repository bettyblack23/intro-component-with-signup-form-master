const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const emailAddress = document.getElementById('email_address');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	 checkInputs();
});

checkInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailAddressValue = emailAddress.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    if (emailAddressValue === '') {
        setErrorFor(emailAddress, 'Email address cannot be empty');
    } else if (!isEmail(emailAddressValue)) {
        setErrorFor(emailAddress, 'Looks like this is not an email');
    } else {
        setSuccessFor(emailAddress);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password address cannot be empty');
    } else if(passwordValue.length < 4){
        setErrorFor(password, 'Password has to be at least 4 characters');
    } else {
        setSuccessFor(password)
    }

}

setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.ror');
    formControl.className = 'form-control error';
    error.innerText = message;
}


isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}