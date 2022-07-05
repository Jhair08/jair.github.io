let miImagen=document.querySelector('img');
miImagen.onclick=function(){
    let miSrc=miImagen.getAttribute('src');
    if (miSrc=='/images/firefox-icon.png'){
        miImagen.setAttribute('src','/images/firefox-icon2.png');
    } else {
        miImagen.setAttribute('src','/images/firefox-icon.png');
    }
}

let miBoton=document.querySelector('button');
let miTitulo=document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre=prompt('Ingresa tu nombre:');
    if(!miNombre){
        estableceNombreUsuario
    } else {
        localStorage.setItem('nombre',miNombre);
        miTitulo.innerHTML='Mozilla is cool, '+miNombre
    }
}
miBoton.onclick=function(){
    estableceNombreUsuario();
}