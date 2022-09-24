const modoBg = document.querySelector("#cambiar-modo");

modoBg.addEventListener('click', cambiarModo);

function cambiarModo(e) { 
    var cuerpoweb = document.body; 
    var letrasBlancas = document.querySelectorAll('.cambiar-tono')
    cuerpoweb.classList.toggle("oscuro"); 
    if (e.target.classList.contains("btn-light")){
        letrasBlancas.forEach((texto)=> {
            texto.style.color = '#ffb700';
            texto.classList.remove('text-white')
        });            
        e.target.classList.add("btn-dark");
        e.target.classList.remove("btn-light");
    }else{        
        letrasBlancas.forEach((texto)=> {
            texto.style.color = '#F9F5F0';
            texto.classList.add('text-white')
        });            
        e.target.classList.add("btn-light");
        e.target.classList.remove("btn-dark");
    }
}