//--------------------------PARTE 1----------------------------------------
//FUNCIONES----------------------------------------------------------------

//funcion para crear una lista desplegable con 10 colores aleatorios-------
const crearListaColores = (posicion) =>{
    //creamos el select
    let select = document.createElement('select');
    select.id='select';
    //insertamos el select en el html
    posicion.insertAdjacentElement('beforeend', select)
    //creamos un option principal para que muestre un mensaje al cliente
    let optionP = document.createElement('option');
    optionP.textContent="Selecciona un color";
    select.appendChild(optionP)
    //hacemos un for que se recorra 10 veces para las options
    for ( let i = 0 ; i < 10 ; i++ ){
        //creamos el campo option
        let option = document.createElement('option');
        //creamos una variable con el contenido de un rgb aleatorio
        let colorAle = 'rgb('+parseInt(Math.random()*256)+', '
                             +parseInt(Math.random()*256)+', '
                             +parseInt(Math.random()*256)+')';
        //damos color al option y añadimos texto
        option.style.background=colorAle;
        option.textContent=colorAle;
        //añadimos el option al select
        select.appendChild(option)
    }
}


//funcion que recoje el contenido seleccionado del menu desplegable---------
const recogeContenido = (select) =>{
        //recoje el index del color
        let index = select.selectedIndex;
        //pasamos las opciones del select a un array
        let arrayColores = Array.from(select.options)
        //damos el color al cuerpo, segun lo que tengamos seleccionado
        document.body.style.background=(arrayColores[index].textContent);
}

//-------------------------------PARTE 2------------------------------------
//FUNCIONES----------------------------------------------------------------

//funcion que pinta error en el html----------------------------------------
const pintarError = (posicion, id) =>{
    let p = document.createElement('p');
    //damos color mediante una clase definida en el css
    p.className='red';
    //dependiendo del identificador del error que recibamos, mostrara un mensaje
    switch(id){
        case '0':p.textContent='El campo no puede estar vacio';break;
        case '1':p.textContent='El usuario no puede tener espacios, ni tener más de 5 caracteres';break;
        case '2':p.textContent='El mensaje no puede tener:  "¡ , ¿"';break;
        case '3':p.textContent='Debe marcar al menos 2';
    }
    //insertamos el texto al html
    posicion.insertAdjacentElement('afterend', p);

    //se eliminara a los 3 segundos
    setTimeout(()=>{
        p.remove();
    }, 3000);
}

//funcion para validar nombre----------------------------------------
const validarNombre = (nombre) =>{
    //hacemos una expresion para comprobar si el nombre introducido
    //es correcto o no
    let expNombre = /[A-Za-zÑñáéíóúÁÉÍÓÚ0-9]{1,5}/
    //hacemos la condicion, y si lo cumple decuelve true,
    //sino devuelve false
    if(nombre.length < 6){
        if(nombre.includes(' '))return false;
        if(expNombre.test(nombre))return true;
    }
    else return false;
}

//validamos que mensaje no tenga incluido los siguientes caracteres----
const validarMensaje = (mensaje) =>{
    if(mensaje.includes('¡'))return false
    else if(mensaje.includes('¿'))return false
    else return true;
}

//validar que se han seleccionado 2 checkBox---------------------------
const validarCheckBox = (checkBox) =>{
    let cont = 0;
    for (const elementos of checkBox.children) {
        if(elementos.checked===true){
            cont++;
        }
    }
    if(cont>1)return true;
    else return false;
}


//---------------------------------------------------------------------------
//---------------------------------PARTE 1----------------------------------

//recogemos el check del html
let check = document.getElementById('colores');
//si se pulsa el checkBox
check.addEventListener('click', function(){
    //comprueba si el check esta true o false
    if(check.checked===true){//en caso de ser true
        //recogemos el campo de colores para enivarle la posicion al metodo
        let campoColores = document.querySelector('.colores');
        crearListaColores(campoColores);
        //recogemos el select del html
        let select = document.getElementById('select');
        //si se cambia la opcion del select entra en la funcion
        select.addEventListener('change', function(){
            recogeContenido(select);
        });
    }else{//si se deselecciona, pondremos de fondo un color aleatorio
        document.body.style.background='rgb('+parseInt(Math.random()*256)+', '
                                             +parseInt(Math.random()*256)+', '
                                             +parseInt(Math.random()*256)+')';
        //ademas eliminaremos el select creado                                             
        select.remove();
    }
})

//---------------------------------PARTE 2----------------------------------

//recogemos el boton del html
let botonEnviar = document.querySelector('[type="submit"]');

botonEnviar.addEventListener('click', function(e){

    //recogemos el valor del campo usuario------------------------------
    let campoUsuario = document.querySelector('.campo_usuario');
    if (campoUsuario.value===''){
        e.preventDefault();
        pintarError(campoUsuario, '0')
    }
    else if(!validarNombre(campoUsuario.value)){
        e.preventDefault();
        pintarError(campoUsuario, '1')
    }

    //recogemos el campo mensaje----------------------------------------
    let campoMensaje = document.querySelector('.campo_mensaje');
    if(campoMensaje.value===''){
        e.preventDefault();
        pintarError(campoMensaje, '0')
    }
    else if(!validarMensaje(campoMensaje.value)){
        e.preventDefault();
        pintarError(campoMensaje, '2')
    }

    //recogemos el campo donde estan los checkBox-----------------------
    let campoCheck = document.querySelector('.divColores');
    if(!validarCheckBox(campoCheck)){
        e.preventDefault();
        pintarError(campoCheck, '3');
    }
})





