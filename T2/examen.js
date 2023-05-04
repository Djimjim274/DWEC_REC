/* <input type="checkbox" name="colores" id="colores" /> */
/* 1. Al marcar el checkbox Colores, crea un select justo debajo con una primera opción llamada
“Selecciona color” y después 10 opciones con 10 colores de fondo diferentes y aleatorios.
[1,5 p]

Al desmarcar este checkbox el select se elimina, el fondo se pone de un color aleatorio y
se puede volver a marcar el checkbox Colores para volver a seleccionar un color. [1p]
Al seleccionar un color en el select el fondo de la página cambiará de color. [2,5p] */

let checkbox=document.getElementById('colores');

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
    /* option.addEventListener('click', ()=>{   
        console.log('hola')
    //let body=document.querySelector('body');
    //body.style.backgroundColor=`rgb(${r},${g},${b})`
    
    }) */
    select.appendChild(option);


    
    }
    select.addEventListener("change", (e)=>{console.log(e.target)});



}else{
    select.remove();
   
}



})


