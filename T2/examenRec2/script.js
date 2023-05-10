//entrada colores
let botonColores=document.querySelector('#colores_button')//boton colores



 const creaBotones=()=>{

  //creamos el boton

    botonColores.addEventListener('click',()=>{
     let colores=document.querySelector('#colores_input').value; //entrada de los colores
 let divColores=document.querySelector('.colores')

 let cont=0;
     for (let i = 0; i < colores; i++) {
      cont++;
        //color ramdom
        let r=parseInt(Math.random()*255);
        let g=parseInt(Math.random()*255);
        let b=parseInt(Math.random()*255);
        let col=`rgb(${r},${g},${b})`;
    let boton =document.createElement('input');
   
    let p = document.createElement('div');
   p.setAttribute('class', `botones`)
  
    boton.setAttribute('type', 'radio');
    p.textContent = `${cont}`
    boton.setAttribute('name', `opcion`);

    divColores.insertAdjacentElement('afterend', p);
    p.style.backgroundColor = `${col}`
    p.appendChild(boton);

      boton.addEventListener('change',()=>{
        document.body.style.background=`${col}`;
      });
 
    }

    if(colores<0){ 
      document.body.style.background='rgb('+parseInt(Math.random()*256)+', '
                                             +parseInt(Math.random()*256)+', '
                                             +parseInt(Math.random()*256)+')';
      let p2=document.querySelector(".botones"); console.log(p2)
      p2.remove();
    }
   

    })
}
creaBotones(); 





function cambiaColor(){
  let seleccionado=this.options[this.selectedIndex];
  document.body.style.setProperty('backgroundColor', seleccionado.textContent);
}

  /* 2. Valida al enviar el formulario (si las validaciones son correctas debe enviar el formulario):
Nota: Debes usar expresiones regulares para a y b. [0,25p al enviar los valores del
formulario correctamente]
a. El usuario no puede tener espacios ni estar vacío, ni tener más de 5 caracteres.
[1,25p]
b. El mensaje no puede tener los caracteres: “$”,”%”, ni las palabras “loco”,”casa”, ni
estar vacío. [1,25p]
c. Debe haber marcado, al menos, 2 colores. [1,25p]
Los mensajes de error se mostrarán debajo de cada elemento que lo haya producido,
durante 3 segundos de color rojo (mediante una clase CSS). El mensaje puede ser
genérico para cada elemento (por ejemplo, tienes que indicar que el elemento del error es
el usuario, pero no que es por no tener espacios o estar vacío). Deben mostrarse todos los
errores que se produzcan al enviar el formulario. [0,5p] */

let divUsuario = document.querySelector('.divUsuario')
let usuario = document.querySelector('.campo_usuario')
let mensaje = document.querySelector('.campo_mensaje')
let divMensaje = document.querySelector('.divMensaje')
let form= document.querySelector('[type="submit"]');

function mensajeError(texto,posicion){

  let error=document.createElement('P');
  error.textContent=texto
  error.style.color = 'red'

  posicion.insertAdjacentElement('afterend',error)
 setInterval(function(){error.remove();},3000) 
}


const validaUsuario=()=>{

/*   let expReg=/^(?!.*\bloco\b).*$/i */
form.addEventListener('click', (e)=>{

  let usuario = document.querySelector('.campo_usuario').value
  let expReg=/.{1,5}$/
   if (!expReg.test(usuario) || usuario===''){
   let posicion=document.querySelector('.campo_usuario')
   e.preventDefault(); 
    mensajeError('El usuario no debe de estar en blanco ni superar 5 carácteres',posicion)
         
  }
 

})
 
}

validaUsuario()


 const validaMensaje=()=>{

  form.addEventListener('click', (e)=>{
   

    let mensaje=document.querySelector('.campo_mensaje').value;
    
    let expReg2=/^(?!.*\bloco\b).*$/i;
    let expReg3=/^(?!.*\bcasa\b).*$/i;

  let posicion=document.querySelector('.campo_mensaje');
  
if(mensaje==='' ){
  e.preventDefault();
  mensajeError('El mensaje no puede estar vacío',posicion)
  }
   if(!expReg2.test(mensaje) ){
    e.preventDefault();
    mensajeError('El mensaje no puede contener la palabra loco',posicion)
    }
     if(!expReg3.test(mensaje) ){
      e.preventDefault();
      mensajeError('El mensaje no puede contener la palabra casa',posicion)
    }


  })

} 

validaMensaje();

/* const colores=()=>{

  form.addEventListener('click',(e)=>{
  e.preventDefault();
  let posicion=document.querySelector('.divColores');

  let colores=document.querySelector(".divColores");
let cont=0;
    for (const color of colores.children) {
      if(color.checked===true){
        cont++;
      }
    }
    if(cont<=1){
      
      error('Debe haber marcado al menos dos colores',posicion)
    }
  })
}
colores(); */
