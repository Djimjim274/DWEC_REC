
let enviar=document.querySelector('[type="submit"]');
let boton=document.querySelector('button');




boton.addEventListener('click',()=>{
    let nombre=document.querySelector('#nombre').value;//obtengo el valor del imput
    let puntos=document.querySelector('#puntos').value; //obtengo el valor del imputç

let lc = localStorage.getItem("puntuaciones");
let array=[];

if(lc!==null){
//si ya hay algo dentro del localstorage lo traigo
  array=JSON.parse(lc);
}
    //?tengo que poner un id también para eliminar y un botón borrar
  let puntuacion= {nombre:nombre,puntos:puntos}; //creo un array de objetos literales
  array.push(puntuacion); //añado al array

  //? tendría que hacer el sort para ordenar
  localStorage.setItem('puntuaciones',JSON.stringify(array));
  //localStorage.setItem('puntos',JSON.stringify(array.puntos));
  console.log("Valor guardado en localStorage.");


  let div=document.createElement('div');
  boton.insertAdjacentElement('afterend',div);
  let tabla=document.createElement('table');

  div.insertAdjacentElement('beforeend',tabla); //
  tabla.style.border = '1px solid black';

 let tr=document.createElement('tr');
    tabla.appendChild(tr);

    let th=document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'DATOS'

    for (let i = 0; i < 1; i++) {
 
      let tr=document.createElement('tr');
      tabla.appendChild(tr);
    
      let td=document.createElement('td');
      tr.appendChild(td);
      td.textContent = `${lc}`
    
  
    }   
/* 
  let div=document.createElement('div');
  boton.insertAdjacentElement('afterend',div);
  let tabla=document.createElement('table');
  
  div.insertAdjacentElement('beforeend',tabla); //
  tabla.style.border = '1px solid black';

  let tr=document.createElement('tr');
    tabla.appendChild(tr);

    let th=document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'nombre'

    let th2=document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = 'puntos'

for (let i = 0; i < 1; i++) {
 
  let tr=document.createElement('tr');
  tabla.appendChild(tr);

  let td=document.createElement('td');
  tr.appendChild(td);
  td.textContent = `${nombre}`

  let td2=document.createElement('td');
  tr.appendChild(td2);
  td2.textContent = `${puntos}`
}   */
 
//? preguntar por qué solo me guarda 1 vez
   

 
})


