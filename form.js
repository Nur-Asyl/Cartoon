
const form = document.querySelector("#login");
const errorName = document.getElementById("errorName");
const errorPassword = document.getElementById("errorPassword");
let errorNameArr = [];
let errorPasswordArr = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    errorNameArr.length = 0;
    errorPasswordArr.length = 0;

    let nameValid = hasValue(form.elements["name"]);
    let passwordValid = validatePassword(form.elements["password"]);

    if (nameValid && passwordValid) {
        window.location.href = '/home.html';
    } else {
        alert(errorNameArr.join(', ') + '\n' + errorPasswordArr.join(', '));
        errorName.innerText = errorNameArr.join(', ');
        errorPassword.innerText = errorPasswordArr.join(', ');
    }
});

function hasValue(input) {
    let validName = true; 
    if (input.value.trim() === "") {
        errorNameArr.push("Empty name");
        validName = false;
    }
    return validName;
}

function validatePassword(input) {
    let validPassword = true; 
    if (input.value.trim() === "") {
        errorPasswordArr.push("Empty Password");
        return false;
    }
    if (input.value.search(/[0-9]/) === -1) { 
        errorPasswordArr.push("Password must contain at least one number"); 
        validPassword = false;
    }
    if (input.value.search(/[A-Za-z]/) === -1) { 
        errorPasswordArr.push("Password must contain at least one character");
        validPassword = false;
    }
    if (input.value.length < 8) {
        errorPasswordArr.push("Password length must be 8 characters"); 
        validPassword = false;
    }
    return validPassword;
}


