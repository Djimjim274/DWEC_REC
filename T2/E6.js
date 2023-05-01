/* 
*6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
*click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
*“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia.
*/
let Esaludos=document.querySelector('#Esaludos')
let Psaludos=document.querySelector('#Psaludos')

let intervalo;
//? creamos una función para empezar los saludos
const comenzarSaludos=()=>{
   intervalo=setInterval(function() {
    console.log("Hola");
  }, 2000) 
}

const pararSaludos=()=>{
   clearInterval(intervalo)
 }
 
                        //~evento      funcion
Esaludos.addEventListener('click',comenzarSaludos)

Psaludos.addEventListener('click',pararSaludos)

