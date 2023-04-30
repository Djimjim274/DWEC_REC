/* 4. Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
elementos desaparecidos (pero no los eliminados). */

let parrafos = document.querySelectorAll('p');

//bucle qie recorre todos los elementos
for (let element of parrafos) {
    //al hacer doble click se elimina el elemento
  element.addEventListener('dblclick', () => {
    element.remove();
  });
  
//al salir del elemento desaparece
  element.addEventListener('mouseout', () => {
    element.style.visibility  = "hidden";
  });
}

//Se asigna el boton con la funcionalidad de aparecer elementos ocultos
let button = document.querySelector("input");


button.addEventListener("click", () => {

  for (let element of parrafos) {
    element.style.visibility  = "visible";
  }

});
