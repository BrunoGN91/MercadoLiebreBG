const $ = (element) => {
    return document.querySelector(element)
}
// esto iria en index.js


let ojito = document.querySelector(".fa-eye");
let passwordInput = document.querySelector(".password")

ojito.addEventListener("click", function() {
    if(passwordInput.type == "password"){
        passwordInput.type = "text";
        ojito.classList.remove("fa-eye");
        ojito.classList.add("fa-eye-slash")
    } else {
        ojito.classList.remove("fa-eye-slash");
        ojito.classList.add("fa-eye")
        passwordInput.type = "password";
    }
})