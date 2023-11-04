const btn = document.getElementById("register-btn");
const email = document.getElementById("register-email");
email.style.display = `none`;

btn.addEventListener('click', () => {
    if(email.style.display === "none") {
        email.style.display = `flex`;
    } else {
        email.style.display = `none`;
    }
})