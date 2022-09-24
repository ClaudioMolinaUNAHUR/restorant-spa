// variables
const detallaPedido = document.querySelector('#detallaPedido');
const nombrePedido = document.querySelector('#nombrePedido');
const dirPedido = document.querySelector('#dirPedido');
const telPedido = document.querySelector('#telPedido');
const email = document.querySelector('#email');
const btn = document.querySelector('#enviar-mail');
const mensajeForm = document.querySelector('#mensajeForm');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarForm)
    detallaPedido.addEventListener('blur', validarFormulario);
    nombrePedido.addEventListener('blur', validarFormulario);
    dirPedido.addEventListener('blur', validarFormulario);
    telPedido.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    btn.addEventListener('click', enviarEmail);
}
function iniciarForm(){
    btn.disabled = true;
}
function validarFormulario(){
    if(validarEmail(email) && detallaPedido.value != '' && nombrePedido.value != '' && dirPedido.value != '' && telPedido.value != ''  ) {
        btn.disabled = false;
     }else{
        
     }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    /*uso Expresion Regular*/ 
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 

    return re.test(mensaje)
}

function enviarEmail(e) {

    e.preventDefault();

    const enviado = document.createElement('p');
    enviado.innerHTML = 'Tu Pedido Esta Siendo Procesado';
    enviado.classList.add('mensajeEnviado')
    mensajeForm.appendChild( enviado );
    document.querySelector('.form').reset();
    btn.disabled = true
    setTimeout(() =>  {
        enviado.remove();
        
    }, 5000);
}
