const modoBg = document.querySelector("#cambiar-modo");
const inicio = document.querySelector("#logo");
const menu = document.querySelector("#navMenu");
const detalle = document.querySelector("#navDetalle");
const contacto = document.querySelector("#navContacto");

eventListeners();
function eventListeners(){
    modoBg.addEventListener('click', cambiarModo);
    inicio.addEventListener('click',volverAInicio);
    menu.addEventListener('click',volverAMenu);
    detalle.addEventListener('click',volverADetalle);
    contacto.addEventListener('click',volverAContacto);
}

/*NAVEGACION*/
function  volverAInicio(){
    document.location.href="index.html";
}
function  volverAMenu(){
    document.location.href="menu.html";
}
function  volverADetalle(){
    document.location.href="detalles.html";
}
function  volverAContacto(){
    document.location.href="contacto.html";
}

/*CAMBIO MODO CLARO/OSCURO*/
function cambiarModo(e) { 
    const cuerpoweb = document.body; 
    const letrasBlancas = document.querySelectorAll('.cambiar-tono')    
    const contenido = document.querySelectorAll('.list-food-tono');
    cuerpoweb.classList.toggle("oscuro"); 
    if (e.target.classList.contains("btn-light")){
        letrasBlancas.forEach((texto)=> {           
            texto.style.color = '#ffb700';
            texto.classList.remove('colorprimario')
        });
        contenido.forEach((cont)=> {
            cont.style.color = '#ffb700';
        });                        
        e.target.classList.add("btn-dark");
        e.target.classList.remove("btn-light");
    }else{        
        letrasBlancas.forEach((texto)=> {
            texto.style.color = '#F9F5F0';
            texto.classList.add('colorprimario')
        });
        contenido.forEach((cont)=> {
            cont.style.color = '#321313';
        });               
        e.target.classList.add("btn-light");
        e.target.classList.remove("btn-dark");
    }
}