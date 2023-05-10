/* 1. Al marcar el checkbox Colores, crea un select justo debajo con una primera opción llamada
“Selecciona color” y después 10 opciones con 10 colores de fondo diferentes y aleatorios.
[1,5 p]
Al desmarcar este checkbox el select se elimina, el fondo se pone de un color aleatorio y
se puede volver a marcar el checkbox Colores para volver a seleccionar un color. [1p]
Al seleccionar un color en el select el fondo de la página cambiará de color. [2,5p] */
 let check=document.querySelector('#colores');

 check.addEventListener('click', ()=>{
if(check.checked){

     let select=document.createElement('select');
    check.insertAdjacentElement('afterend',select)
    let option=document.createElement('option');
    select.appendChild(option);
    option.textContent='Selecciona un color'
    for (let i = 0; i < 10; i++) {
        let col='rgb'+'('+parseInt(Math.random()*255)+','+
        parseInt(Math.random()*255)+','+
        parseInt(Math.random()*255)+')';

        let options=document.createElement('option');
        select.appendChild(options)  
        options.textContent=`${col}`
        options.style.background=`${col}`    

     select.addEventListener("change",cambiarColor); 
      
    }

}else{

    let select2=document.querySelector('select');
    select2.remove();
}

   
 })

 function cambiarColor(){
    let seleccionado = this.options[this.selectedIndex];
    document.body.style.setProperty("background-color",seleccionado.textContent);
    
  }//?  



  let form=document.querySelector('[type="submit"]');


form.addEventListener("click",(e)=>{
    let usuario = document.querySelector('.campo_usuario').value;
    
    if(usuario===''){
        let posicion = document.querySelector('.campo_usuario');
        e.preventDefault();
        mensajeError('El usuario no puede quedarse en blanco',posicion);
    }else if(usuario.includes(' ')){
        let posicion = document.querySelector('.campo_usuario');
        e.preventDefault();
        mensajeError('El usuario no puede contener espacios en blanco',posicion);
        
    }else  if(usuario.length<5){
        let posicion = document.querySelector('.campo_usuario');
        e.preventDefault();
        mensajeError('El usuario no puede contener menos de 5 carácteres',posicion);
    }


 })
 
 form.addEventListener("click",(e)=>{
     
     let mensaje = document.querySelector('.campo_mensaje').value;
     if(mensaje===''){
         let posicion = document.querySelector('.campo_mensaje');
        e.preventDefault();
        mensajeError('El mensaje no puede estar en blanco',posicion);
     }else if(mensaje.includes('!') || mensaje.includes('?')){
        let posicion = document.querySelector('.campo_mensaje');
        e.preventDefault();
        mensajeError('El mensaje no puede contener ! ni ?',posicion);
     }
})




form.addEventListener('click',(e)=>{
    let colores=document.querySelector(".divColores");
    let cont=0;
    for (const color of colores.children) {
        if(color.checked===true){
            cont++;
        }

    }
    console.log(cont)
    if(cont<=1){
        let posicion = document.querySelector('.divColores');
        e.preventDefault();
        mensajeError('Debe de seleccionar almenos dos',posicion);
    }
})


function mensajeError(texto,posicion){

    let error=document.createElement('P');
    error.textContent=texto;
    error.style.color='red';
    posicion.insertAdjacentElement('afterend',error);
    setInterval(function(){error.remove();},3000)
}
  

