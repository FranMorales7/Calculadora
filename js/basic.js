//variables
let operacion = document.getElementById('operaciones');
const btOperacion = document.getElementById('operacionAplicada');
const select = document.getElementById('select');

//functions
    //When you choose the math. operation 
btOperacion.addEventListener('click', ()=>{
    //Vanish the select's div
    select.style.display = 'none';
    //operar(operacion.value);
})

