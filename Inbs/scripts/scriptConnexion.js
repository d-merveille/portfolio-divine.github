// Code permettant d'afficher ou de masquer le mot de passe
const eye = document.querySelector('.eye');
const eyeOff = document.querySelector('.eye-off');
const password = document.querySelector('input[type=password]');

eye.addEventListener('click', function(){
    eye.style.display = "none";
    eyeOff.style.display = "block";
    password.type = "text";
    password.style.width = "100%";
    password.style.padding = "10px 30px 10px 10px";
    password.style.fontSize = "16px";
    password.style.margin = "10px 0";
    password.style.outline = "none";
});

eyeOff.addEventListener('click', function(){
    eye.style.display = "block";
    eyeOff.style.display = "none";
    password.type = "password";
})