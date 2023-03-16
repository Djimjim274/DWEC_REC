/* 8. Mostrar la tabla de multiplicar de un número introducido por pantalla. */

let num1 = parseInt(prompt('Introduce un número'));

for (let index = 1; index < 11; index++) {
   let op= num1 * index;
    console.log(`${index} x ${num1} = ${op}` );
}
