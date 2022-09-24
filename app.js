const modoBg = document.querySelector("#cambiar-modo");
const inicio = document.querySelector("#logo");

eventListeners();
function eventListeners(){
    modoBg.addEventListener('click', cambiarModo);
    inicio.addEventListener('click',volverAInicio);
}

function  volverAInicio(){
    document.location.href="index.html";
}

function cambiarModo(e) { 
    var cuerpoweb = document.body; 
    var letrasBlancas = document.querySelectorAll('.cambiar-tono')
    cuerpoweb.classList.toggle("oscuro"); 
    if (e.target.classList.contains("btn-light")){
        letrasBlancas.forEach((texto)=> {
            texto.style.color = '#ffb700';
            texto.classList.remove('colorprimario')
        });            
        e.target.classList.add("btn-dark");
        e.target.classList.remove("btn-light");
    }else{        
        letrasBlancas.forEach((texto)=> {
            texto.style.color = '#F9F5F0';
            texto.classList.add('colorprimario')
        });            
        e.target.classList.add("btn-light");
        e.target.classList.remove("btn-dark");
    }
}