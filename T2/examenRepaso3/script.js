/* 1. Al marcar el checkbox Colores, crea un select justo debajo con una primera opción llamada
“Selecciona color” y después 10 opciones con 10 colores de fondo diferentes y aleatorios.
[1,5 p]
Al desmarcar este checkbox el select se elimina, el fondo se pone de un color aleatorio y
se puede volver a marcar el checkbox Colores para volver a seleccionar un color. [1p]
Al seleccionar un color en el select el fondo de la página cambiará de color. [2,5p] */
let divFormulario = document.querySelector(".formulario");
let form=document.querySelector('form');

const listaColores=()=>{
    let check=document.querySelector('#colores');

check.addEventListener('click',()=>{

  let select=document.createElement('select');


    if(check.checked){  
    check.insertAdjacentElement('afterend',select)
     let option=document.createElement('option');
     select.appendChild(option);
     option.textContent='Selecciona un color'
     for (let i = 0; i < 10 ;i++) {
        let options=document.createElement('option');
         let  colores='rgb('+parseInt(Math.random()*255)+', '
                            +parseInt(Math.random()*255)+', '
                            +parseInt(Math.random()*255)+')'
        options.textContent=`${colores}`
               
    options.style.backgroundColor=`${colores}`                             
     select.appendChild(options)
  
     }
     select.addEventListener("change",cambiarColor); //para cambiar el color

    }else{
        let select2=document.querySelector('select');
        select2.remove();
        
    }

 })



}
listaColores();



//funcion pàra cambiar el color
function cambiarColor(){
  let seleccionado = this.options[this.selectedIndex];
  document.body.style.setProperty("background-color",seleccionado.textContent);
  
}



const verificaFormulario=()=>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    let usuario=document.querySelector('.campo_usuario').value;
  
    let mensaje=document.querySelector('.campo_mensaje').value; 
  

    if(usuario===''){
      let posicion=document.querySelector('.campo_usuario');
      error('El usuario no puede estar vacío',posicion);
    }else if(usuario.length>5){
      let posicion=document.querySelector('.campo_usuario');
      error('El usuario no puede contener más de 5 carácteres',posicion);
    }

   if(mensaje==='' || mensaje===' '){
    let posicion=document.querySelector('.campo_mensaje');
    error('El mensaje no puede estar vacío ni contener espacios',posicion)

   }else if(mensaje.includes('?') || mensaje.includes('!')){
    let posicion=document.querySelector('.campo_mensaje');
      error('El mensaje no puede contener ? ni !',posicion);
    }


  })
}
verificaFormulario();





const colores =()=>{

  form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let posicion=document.querySelector('.divColores');
    
  let colores=document.querySelector(".divColores");
  let cont=0
   for (const color of colores.children) {
      if(color.checked===true){
        cont++; 
      }

    }

    if(cont<=1){
      error('Debe de seleccionar al menos 2 colores',posicion)
    } 


})

}
colores();




function error(texto,posicion){
  
  let mensajeError=document.createElement('P');
  mensajeError.textContent=texto;
  mensajeError.style.color='red'
  let form=document.querySelector('.divFormulario')//cojo el div del usuario

posicion.insertAdjacentElement('afterend',mensajeError)
  setInterval(function(){mensajeError.remove();},3000);
}




form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  // Aquí irá la lógica de validación del formulario
});
