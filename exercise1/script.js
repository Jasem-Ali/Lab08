let form = document.querySelector("form");
let password = document.getElementById("password");
let repeat = document.getElementById("repeat");

function validate() {

    function minimum() {
        if (password.value.length < 8 || repeat.value.length < 8) {
            alert("The passwords are not at least 8 characters long.");
            return false;
        }
        else return true;
    }

    function match() {
        if (password.value != repeat.value) {
            alert("The passwords entered don't match.");
            return false;
        }
        else return true;
    }

    if (match() && minimum())
        alert("Password validated!")
}

form.addEventListener("submit", () => validate())