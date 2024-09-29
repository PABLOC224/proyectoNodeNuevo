
import '../css/componentes.css';
import '../global.css';
import imagen from  '../imagenes/dni.jpeg';

const saludar = function(nombre){

    let elementoImagent = document.createElement(`img`)
    elementoImagent.src = imagen

    document.body.appendChild(elementoImagent)


    let elemento = document.createElement(`h1`)
     document.body.appendChild(elemento)
  
    elemento.innerText = `hola ${nombre}`
  
  
  }

  export{saludar}