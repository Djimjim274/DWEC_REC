/* <input type="checkbox" name="colores" id="colores" /> */
/* 1. Al marcar el checkbox Colores, crea un select justo debajo con una primera opción llamada
“Selecciona color” y después 10 opciones con 10 colores de fondo diferentes y aleatorios.
[1,5 p]

Al desmarcar este checkbox el select se elimina, el fondo se pone de un color aleatorio y
se puede volver a marcar el checkbox Colores para volver a seleccionar un color. [1p]
Al seleccionar un color en el select el fondo de la página cambiará de color. [2,5p] */

let checkbox=document.getElementById('colores');
let enviar=document.querySelector('input');
let divFormulario = document.querySelector(".formulario");
let form=document.querySelector('form');


const check =()=>{
checkbox.addEventListener('click',()=>{

if(checkbox.checked){
let label=document.createElement('label');
/* checkbox.appendChild(label)  */
checkbox.insertAdjacentElement('beforebegin',label)
label.textContent ='Elige un color'
let select=document.createElement('select');
 label.appendChild(select);

    for (let i = 0; i < 10; i++) {

    let r=parseInt(Math.random()*255); 
    let g=parseInt(Math.random()*255); 
    let b=parseInt(Math.random()*255); 

    let option=document.createElement('option');
    
    option.textContent = `rgb(${r},${g},${b})`; 
    option.style.backgroundColor=`rgb(${r},${g},${b})`;
    select.appendChild(option);
    }
    select.addEventListener("change",cambiarColor);

}else{
    label.remove();
   //no sé como quitarlo
}

})
}

check();

function cambiarColor(){
    let seleccionado = this.options[this.selectedIndex];
    document.body.style.setProperty("background-color",seleccionado.textContent);
    
}

/*  2. Valida al enviar el formulario (si las validaciones son correctas debe enviar el formulario):
[3,5p]
a. El usuario no puede tener espacios ni estar vacío, ni tener más de 5 caracteres.
[1p]
b. El mensaje no puede tener los caracteres: “¡,¿”, ni estar vacío. [1p]
c. Debe haber marcado, al menos, 2 colores. [1,5p]
Los mensajes de error se mostrarán debajo de cada elemento que lo haya producido,
durante 3 segundos de color rojo (mediante una clase CSS). El mensaje puede ser
genérico para cada elemento (por ejemplo, tienes que indicar que el elemento del error es
el usuario, pero no que es por no tener espacios o estar vacío). Deben mostrarse todos los
errores que se produzcan al enviar al formulario. [1,5p]*/

const validaForm=()=>{

form.addEventListener('submit', function(event) {
event.preventDefault();
    let usuario=document.querySelector('.campo_usuario').value;
    let mensaje=document.querySelector('.campo_mensaje').value;

    if(usuario===""){
        error('el usuario no puede estar vacío')
    
        }else if(usuario.length>5){
            error('el usuario no puede contener más de 5 carácteres')
        }
    if(mensaje===""){
        error('el mensaje no puede estar vacío')
    }else if(mensaje.includes('?') ||mensaje.includes('!')){
        error('el mensaje no puede contener ! ni ?')
    }
//?preguntar cómo poner el mensaje debajo de cada campo
  }); 
}
validaForm();



 // función que agrega un mensaje si no se ha echo
function error(texto){
    let mensajeError=document.createElement('P');
    mensajeError.textContent=texto;
    mensajeError.style.color='red'
    divFormulario.appendChild(mensajeError);

    setInterval(function(){mensajeError.remove();},3000);
}





//cuando le dé al botón de enviar que no se envíe
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  // Aquí irá la lógica de validación del formulario
});
