//variables
const divLogin = document.getElementById('formulario');
const formulario = document.getElementById('login');
let user = document.getElementById('user');
let contrasenna = document.getElementById('password');

//function
formulario.addEventListener('click', function(event){
    event.preventDefault()

    if (user.value === 'user') {
        divLogin.innerHTML += 'usuario correcto <br>';
    }
    if (contrasenna.value === 'user') {
        divLogin.innerHTML += 'contraseña correcta';
    }
});