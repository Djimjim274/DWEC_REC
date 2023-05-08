
let formulario=document.querySelector('.formulario');
let colores=document.querySelector('.divColores');
let check=document.querySelector('#colores');
let form=document.querySelector('form');

const cambiaColor=()=>{

check.addEventListener('click',()=>{
      if(check.checked){
        let select=document.createElement('select');
        check.insertAdjacentElement('afterend',select)
      
        for (let i = 0; i < 10; i++) {
            //creo valores ramdoms para el color
        let r=parseInt(Math.random()*255)
        let g=parseInt(Math.random()*255)
        let b=parseInt(Math.random()*255)
        let color=`rgb(${r},${g},${b})`;
        //meto en el option los colores
       
        let option=document.createElement('option');
        select.appendChild(option);
         option.textContent = `${color}`
         option.style.backgroundColor=`${color}`
        }

        select.addEventListener('change',bodyColor)
    }else{
        select.remove(); //?no se elimina
    }
})


}

cambiaColor() 

function bodyColor(){
     let seleccionado = this.options[this.selectedIndex];
        document.body.style.setProperty("background-color",seleccionado.textContent);
}


    
const validaForm=()=>{
form.addEventListener('submit', function(event){
    event.preventDefault(); //?por qué no se envía
    let usuario=document.querySelector('.campo_usuario').value;
    let mensaje=document.querySelector('.campo_mensaje').value;

    if(usuario===""){
        error('El usuario no puede estar vacío');
    }else if(usuario.length>5){
        error('El usuario no puede contener más de 5 carácteres');
    }

    if(mensaje===""){
        error('El mensaje no puede estar vacío');
    }else if(mensaje.includes('!') || mensaje.includes('?')){
        error('El mensaje no puede contener ! ni ?');
    }



    
})
}
validaForm();

//función para mostrar el error
 function error(texto){

    let mensajeError=document.createElement('P');//creo la etiqueta del mensaje de error
    mensajeError.textContent=texto;
    mensajeError.style.color='red';
    formulario.appendChild(mensajeError);
    setInterval(()=>{
        mensajeError.remove()
    },3000)

}
 



