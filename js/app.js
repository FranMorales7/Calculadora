//variables
const divLogin = document.getElementById('formulario');
const formulario = document.getElementById('login');
let user = document.getElementById('user');
let contrasenna = document.getElementById('password');

//functions
    //Ensure that the user and password are correct
formulario.addEventListener('click', function(event){
    event.preventDefault()

    if (user.value === 'user' && contrasenna.value === 'user') {
        //Open calculadoraBasica.html
        window.location.href = "../html/calculadoraBasica.html";
    }
    else if(user.value === 'user' || contrasenna.value === 'user'){
        //Error message
        divLogin.innerHTML += 'Datos incorrectos, vuelva a introducir sus credenciales';
    };
});