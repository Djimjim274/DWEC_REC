
/* 1. Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”,
añada un elemento con un número aleatorio a una lista desordenada (elemento UL). */

const button = document.getElementById('nuevo-numero');
const listaNumeros = document.getElementById('numeros');

button.addEventListener('click', function() {
  const nuevoNumero = document.createElement('li');
  nuevoNumero.textContent = Math.floor(Math.random() * 100);
  listaNumeros.appendChild(nuevoNumero);
});